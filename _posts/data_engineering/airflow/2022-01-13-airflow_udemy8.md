---
title: "[Apache Airflow] Airflow Config"
layout: single
date: '13/01/2022'
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
### Airflow Config
* 기본 Airflow Config
* Square Brackets to Combine Task

---

### 기본 Airflow Config

* Sqlite3는 동시에 multiple port를 허락하지 않음
    * 따라서, task를 순차적으로 진행할 수 밖에 없음
* Executor
    * SequentialExecutor - Allows one task after another

```bash
# venv에서 진행
# where airflow metadata is stored
airflow config get-value core sql_alchemy_conn

# what my executor currently is
airflow config get-value core executor
```
---

### Square Brackets to Combine Task
* `[]`를 통해 task을 묶을 수 있음
* 단, 현재 Airflow DB가 Sqlite3인 경우 task는 순차적으로 진행됨
* 병렬적으로 진행되기 위해서는 airflow의 db를 postgres로 설정해야함

```python
from airflow.models import DAG
from airflow.operators.bash import BashOperator

from datetime import datetime

default_args = {
    "start_date": datetime(2022,1,12)
}

with DAG (
    "parallel_dag",
    schedule_interval='@daily',
    default_args=default_args,
    catchup=False
) as dag:

    task_1 = BashOperator(
        task_id="task_1",
        bash_command="sleep 3"
    )
    task_2 = BashOperator(
        task_id="task_2",
        bash_command="sleep 3"
    )

    task_3 = BashOperator(
        task_id="task_3",
        bash_command="sleep 3"
    )

    task_4 = BashOperator(
        task_id="task_4",
        bash_command="sleep 3"
    )

task_1 >> [task_2, task_3] >> task_4

```
