---
title: "[Apache Airflow] Extracting Users Using API"
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
### Extracting Users Using API
* Action Operator
* Test Airflow Task

---

### Action Operator
* path - AIRFLOW_HOME/dag/user_processing.py

```python
# user_processing.py
...
from airflow.providers.http.operators.http import SimpleHttpOperator
import json

with DAG(
  ...
) as dag:
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
```
---

### Test Airflow Task
* allows to test a specific task
  * 1) without checking for dependencies
  * 2) neither storing any medata related to the task

```bash
# cf. Http Connection is already established in Airflow Webserver
# test my task (airflow tasks test [py_file] [dag_name] [execution_date])
airflow tasks test user_processing extracting_user 2022-01-07
```


