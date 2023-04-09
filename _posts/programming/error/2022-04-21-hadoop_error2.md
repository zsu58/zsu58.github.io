---
title: "[Error] HADOOP_CONF_DIR or YARN_CONF_DIR must be set in the environment"
layout: single
date: '21/04/2022'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - ERROR
tags:
  - DOCKER
  - PYTHON
---

---
### HADOOP_CONF_DIR or YARN_CONF_DIR must be set in the environment
* 상황
    * airflow에서 master을 yarn으로 spark-submit job 실행
* 해결
  * spark-env.sh에 HADOOP_CONF_DIR 명시
  * [🔗 Dockerfile을 통한 해결](https://github.com/zsu58/docker/blob/main/hadoop_spark/spark/Dockerfile)

---

### Solution
```bash
# spark-env.sh
HADOOP_CONF_DIR=/etc/hadoop
```

---
