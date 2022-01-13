---
title: "[Error] OSError: mysql_config not found"
layout: single
date: '9/1/2022'
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
### OSError: mysql_config not found
* 상황
    * Python 가상환경에서 mysqlclient를 설치하고자 함
    * HomeBrew에서 mysql은 최신버전(8.x)으로 설치했음
    * .zshrc에 mysql 환경설정도 함
    * 설치 과정에서 OSError: mysql_config not found
* 해결
    * mysql을 (5.7)으로 설치

---

### Solution
```bash
brew remove mysql
brew install mysql@5.7
brew link --force mysql@5.7
echo 'export PATH="/usr/local/opt/mysql@5.7/bin:$PATH"' >> ~/.zshrc
```
---

### Solution2
* 애초에 무거운 mysql 그 자체가 필요한 것이 아니므로, mysql-client만 설치 후 환경설정

```bash
# install mysql-client with homebrew
brew install mysql-client

# mysql_config setting
echo 'export PATH="/usr/local/Cellar/mysql-client/8.0.27/bin:$PATH"' >> ~./zshrc
```
---

### ref 
* [🔗 참고](https://stackoverflow.com/questions/50864438/mac-pip-install-mysql-python-unsuccessful)