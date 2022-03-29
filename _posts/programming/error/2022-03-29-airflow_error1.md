---
title: "[Error] JAVA_HOME is not set"
layout: single
date: '29/3/2022'
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
### ParserError: Error tokenizing data. C error
* 상황
    * Docker Airflow-Ubuntu18.04에서 Spark Cluster로 Batch Job 처리시 해당 오류 발생
* 해결
    * spark-env.sh에 JAVA_HOME 추가

---

### Solution
```bash
docker container exec -it spark-master bash
cd conf
mv spark-env.sh.template spark-env.sh
echo "JAVA_HOME=/usr/local/openjdk-8" >> /usr/bin/spark-3.1.2-bin-hadoop3.2/conf/spark-env.sh
```
---

### ref 
* [🔗 참고1](https://stackoverflow.com/questions/38747713/running-spark-on-linux-java-home-not-set-error)