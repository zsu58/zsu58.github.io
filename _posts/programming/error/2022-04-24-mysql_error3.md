---
title: "[Error] sh: mysql_config: not found"
layout: single
date: '24/04/2022'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - ERROR
tags:
  - MYSQL
  - PYTHON
---

---
### ERROR sh: mysql_config: not found
* 상황
    * Docker Ubuntu 18.04에서 mysql library 설치 시(pip3 install mysql) mysql config 못 찾는 문제 발생
* 해결
    * ubuntu에 관련 라이브러리 설치

---

### Solution
```bash
apt-get update -y
apt-get install libmysqlclient-dev
```
---

### ref 
* [🔗 참고](https://stackoverflow.com/questions/5178292/pip-install-mysql-python-fails-with-environmenterror-mysql-config-not-found)