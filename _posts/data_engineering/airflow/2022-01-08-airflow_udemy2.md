---
title: "[Apache Airflow] Airflow Dag"
layout: single
date: '08/01/2022'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - AIRFLOW
tags:
  - AIRFLOW
---

---
### Airflow Dag
* Airflow Dag
  * Create Airflow Dag File
  * Add Connection in Airflow Webserver
  * Test Airflow Task

---

### Create Airflow Dag File
* path - AIRFLOW_HOME/dag/user_processing.py

```python
# user_processing.py
from airflow.models import DAG
from airflow.providers.sqlite.operators.sqlite import SqliteOperator

from datetime import datetime

default_args = {
    "start_date": datetime(2022, 1, 7),
}

with DAG(
    'user_processing',
    schedule_interval='@daily',
    default_args=default_args,
    catchup=False
) as dag:
    # Transfer Operator
    creating_table = SqliteOperator(
        task_id="creating_table",
        sqlite_conn_id="db_sqlite",
        sql="""
            CREATE TABLE users (
                firstname TEXT NOT NULL,
                lastname TEXT NOT NULL,
                country TEXT NOT NULL,
                username TEXT NOT NULL,
                password TEXT NOT NULL,
                email TEXT NOT NULL PRIMARY KEY
            );
            """
    )
```
--- 

### Add Connection(Provider) in Airflow Webserver
* Sqlite Connection을 위한 provider(python package) 설치
  * A provider is an an independent python package that brings everything your need to interact with a service or a tool such as Spark or AWS
  * A provider contains types, operators, hooks and so on
  * Can check installed provider with `airflow providers list`

```bash
pip3 install 'apache-airflow-providers-sqlite'

# airflow webserver - Admin - Connections - + (추가)
# 1) Conn Id: python dag파일의 sqlite_conn_id 이름
db_sqlite 
# 2) Conn Type: 해당하는 connection
Sqlite
# 3) description: 자유롭게 작성
sqlite connection to the db
# 4) Host: airflow.db의 path
/Users/jisu/Dropbox_Carl/Dropbox/JISU/Data/DE/airflow1/airflow.db
# 확인
```
---

### Test Airflow Task
* allows to test a specific task
  * 1) without checking for dependencies
  * 2) neither storing any medata related to the task

```bash
# test my task (airflow tasks test [py_file] [dag_name] [execution_date])
airflow tasks test user_processing creating_table 2022-01-07

# sqlite3 shell
sqlite3 airflow.db

# list all tables to check whether the table is successfully added
.tables

# execute a sql command to check data
SELECT * FROM users;
```
---

### ref 
* [🔗 Airflow-Provider 공식문서](https://airflow.apache.org/docs/apache-airflow-providers/packages-ref.html)