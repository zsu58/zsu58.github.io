---
title: "[Error] Postgres DB not showing in Dbeaver"
layout: single
date: '13/1/2022'
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
### Postgres DB not showing
* 상황
    * Dbeaver에서 Postgres 연결 후 DB 만들고 refresh 했는데 DB가 보이지 않음
    * DB가 정상적으로 생성되긴 함
* 해결
    * 아래와 같이 해결
    * 1) Edit connection(우클릭)
    * 2) Connection settings
    * 3) panel 중에 2번쨰 PostgreSQL 클릭
    * 4) Show all databases 클릭

---

### ref 
* [🔗 참고](https://stackoverflow.com/questions/54235029/dbeaver-can-only-see-default-postgresql-database-in-connection)