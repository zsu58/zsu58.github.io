---
title: "[Apache Airflow] Storing Users Using Bash Operator"
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
### Storing Users Using Bash Operator
* Transfer(Bash) Operator

---

### Transfer(Bash) Operator
* path - AIRFLOW_HOME/dag/user_processing.py

```python
# user_processing.py
...
from airflow.operators.bash import BashOperator

with DAG(
  ...
) as dag:
    # Transfer Operator
    storing_user = BashOperator(
        task_id="storing_user",
        bash_command='echo -e ".separator ","\n.import /Users/jisu/Dropbox_Carl/Dropbox/JISU/Data/DE/airflow1/tmp/processed_user.csv users" | sqlite3 /Users/jisu/Dropbox_Carl/Dropbox/JISU/Data/DE/airflow1/airflow.db'
    )
```
---

### Test Airflow Task
* allows to test a specific task
  * 1) without checking for dependencies
  * 2) neither storing any medata related to the task

```bash
# check before task
sqlite3 airflow.db
SELECT * FROM users;

# test my task (airflow tasks test [py_file] [dag_name] [execution_date])
airflow tasks test user_processing storing_user 2022-01-07

# check after task
sqlite3 airflow.db
SELECT * FROM users;
```