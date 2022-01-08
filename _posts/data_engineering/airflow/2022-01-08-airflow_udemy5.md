---
title: "[Apache Airflow] Processing Users Using Python Operator"
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
### Processing Users Using Python Operator"
* Action Operator

---

### Action Operator
* path - AIRFLOW_HOME/dag/user_processing.py

```python
# user_processing.py
...
from airflow.operators.python import PythonOperator
from pandas import json_normalize
import json

# user process method
def _processing_user(task_instance):
    # get data from extracting user
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
  
    # .to_csv function from pandas throw error if directory doesn't exist
    path = "/Users/jisu/Dropbox_Carl/Dropbox/JISU/DE/airflow/tmp/processed_user.csv"
    processed_user.to_csv(path, index=None, header=False)

with DAG(
  ...
) as dag:
    # Action Operator
    processing_user = PythonOperator(
        task_id="processing_user",
        python_callable=_processing_user
    )
```
---

### Test Airflow Task
* allows to test a specific task
  * 1) without checking for dependencies
  * 2) neither storing any medata related to the task

```bash
# test my task (airflow tasks test [py_file] [dag_name] [execution_date])
airflow tasks test user_processing processing_user 2022-01-07
```


