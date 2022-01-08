---
title: "[Apache Airflow] Using API"
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
### Using API
* Sensor Operator
* Add Connection in Airflow Webserver
* Test Airflow Task

---

### Sensor Operator
* path - AIRFLOW_HOME/dag/user_processing.py

```python
# user_processing.py
...
from airflow.providers.http.sensors.http import HttpSensor

with DAG(
  ...
) as dag:
    # Sensor Operator
    is_api_available = HttpSensor(
        task_id="is_api_available",
        http_conn_id="user_api",
        # the endpoint of the url
        endpoint="api/"
    )

```
---

### Add Connection in Airflow Webserver

```bash
# http provider was pre-installed when installing airflow
# pip3 install 'apache-airflow-providers-http'

# airflow webserver - Admin - Connections - + (추가)
# 1) Conn Id: python dag파일의 sqlite_conn_id 이름
is_api_available
# 2) Conn Type: 해당하는 connection
HTTP
# 3) description: 자유롭게 작성
API for getting users
# 4) Host: API URL address (endpoint는 dag file에 존재(api/))
https://randomuser.me/
# 확인
```
---

### Test Airflow Task
* allows to test a specific task
  * 1) without checking for dependencies
  * 2) neither storing any medata related to the task

```bash
# test my task (airflow tasks test [py_file] [dag_name] [execution_date])
airflow tasks test user_processing is_api_available 2022-01-07
```