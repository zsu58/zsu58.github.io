---
title: "[Apache Airflow] Putting Order & Catch Up"
layout: single
date: '08/01/2022'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - AIRFLOW
tags:
  - AIRFLOW
  - DOCKER
---

---
### Putting Order & Catch Up
* Putting Order
* Catch Up

---

### Putting Order
* `>>` between dags to give order
* path - AIRFLOW_HOME/dag/user_processing.py

```python
# user_processing.py
from airflow.models import DAG
from airflow.providers.sqlite.operators.sqlite import SqliteOperator
from airflow.providers.http.sensors.http import HttpSensor
from airflow.providers.http.operators.http import SimpleHttpOperator
from airflow.operators.python import PythonOperator
from airflow.operators.bash import BashOperator

from datetime import datetime
from pandas import json_normalize
import json

def _processing_user(task_instance):
    users = task_instance.xcom_pull(task_ids=["extracting_user"])
    # check error
    if not len(users) or "results" not in users[0]:
        raise ValueError("User is empty")
    
    # store the data in user
    user = users[0]["results"][0]

    # get user data of interest
    processed_user = json_normalize({
        "firstname": user["name"]["first"],
        "lastname": user["name"]["last"],
        "country": user["location"]["country"],
        "username": user["login"]["username"],
        "password": user["login"]["password"],
        "email": user["email"]
    })

    path = "/Users/jisu/Dropbox_Carl/Dropbox/JISU/Data/DE/airflow1/tmp/processed_user.csv"
    processed_user.to_csv(path, index=None, header=False)

default_args = {
    "start_date": datetime(2022, 1, 7),
}

with DAG(
    'user_processing',
    schedule_interval='@daily',
    default_args=default_args,
    catchup=True
) as dag:
    # Transfer Operator
    creating_table = SqliteOperator(
        task_id="creating_table",
        sqlite_conn_id="db_sqlite",
        sql="""
            CREATE TABLE IF NOT EXISTS users (
                firstname TEXT NOT NULL,
                lastname TEXT NOT NULL,
                country TEXT NOT NULL,
                username TEXT NOT NULL,
                password TEXT NOT NULL,
                email TEXT NOT NULL PRIMARY KEY
            );
            """
    )

    # Sensor Operator
    is_api_available = HttpSensor(
        task_id="is_api_available",
        http_conn_id="user_api",
        endpoint="api/"
    )

    # Action Operator
    extracting_user = SimpleHttpOperator(
        task_id="extracting_user",
        http_conn_id="user_api",
        endpoint="api/",
        # used GET cuz there's no need to send any data
        method="GET",
        # get the text and bring it in json form
        response_filter=lambda response: json.loads(response.text),
        # print the response
        log_response=True
    )

    # Action Operator
    processing_user = PythonOperator(
        task_id="processing_user",
        python_callable=_processing_user
    )
    
    # Transfer Operator
    storing_user = BashOperator(
        task_id="storing_user",
        bash_command='echo -e ".separator ","\n.import /Users/jisu/Dropbox_Carl/Dropbox/JISU/Data/DE/airflow1/tmp/processed_user.csv users" | sqlite3 /Users/jisu/Dropbox_Carl/Dropbox/JISU/Data/DE/airflow1/airflow.db'
    )

creating_table >> is_api_available >> extracting_user >> processing_user >> storing_user
```
---

### Catch Up
* 기본적으로 Airflow의 Catch Up은 True임
* Catch Up이 True인 경우, 마지막 execution date 이후로 catch up을 함