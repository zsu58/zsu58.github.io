---
title: "[Docker] Docker Persistent Data"
layout: single
date: '04/01/2022'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - DOCKER
tags:
  - DOCKER
---

---
### Docker Persistent Data
* containers are usually immutable(unchangeable) & ephemeral(temporary)
* which means that containers should never change when containers are re-deployed
* then the problem arises for unique data like databases
* these unique data are called persistent data
* **Data Volumes** & **Bind Mounts** is used to solve the problem
* **Data Volumes** - configuration option that creates a special locations outside the container's union file system to store unique data
* **Bind Mounts** - sharing or mounting a host directory or file into a container

---

### Data Volumes
```bash
# pull mysql image 
docker image pull mysql:latest

# run container
docker container run -d --name mysql_test -e MYSQL_ALLOW_EMPTY_PASSWORD=true mysql:latest

# mysql_test container의 설정 부분, 설정 중 volume을 확인
docker container inspect mysql_test
# destination - container가 데이터를 적재한다고 생각하는 곳
# source - 실제 데이터가 적대되어 있는 곳

# docker container를 통해 만든 모든 데이터를 확인할 수 있음, 이 volume은 container가 삭제되어도 남아 있음
docker volume ls

# 하지만 volume이 어떤 volume인지 분간하기가 어렵기에 container을 run할 때 volume에 name을 주는 것이 좋음
docker container run -d --name mysql_test1 -e MYSQL_ALLOW_EMPTY_PASSWORD=true -v mysql-db:/var/lib/mysql mysql:latest

# mysql_test2도 mysql_test1과 같은 db를 사용
docker container run -d --name mysql_test2 -e MYSQL_ALLOW_EMPTY_PASSWORD=true -v mysql-db:/var/lib/mysql mysql:latest
```
---

### Database Upgrade Practice Using Named Volumes
* Upgrading Database with Named Volumes

```bash
# create a postgres container with named volume psql-data using version 9.6.1
docker container run -d --name postgres_test1 -v psql-data:/var/lib/postgresql/data postgres:9.6.1

# check log & stop container
docker container logs postgres_test1
docker container stop postgres_test1

# create a new postgres container with same named volume psql-data using version 9.6.2
docker container run -d --name postgres_test2 -v psql-data:/var/lib/postgresql/data postgres:9.6.2

# check log & stop container
docker container logs postgres_test2
docker container stop postgres_test2
```
---

### Bind Mounts
```bash
# (terminal1) pwd에 index.html 존재 ($(pwd)는 현재 pwd, 즉 현재 wd와 colon 뒤 container의 wd를 일치시킬 것임)
docker container run -d --name nginx -p 80:80 -v $(pwd):/usr/share/nginx/html nginx

# (terminal2) open a new terminal (command+shift+d)
# (terminal2) get a shell inside nginx container
docker container exec -it nginx bash

# (terminal2) cd
cd usr/share/nginx/html
ls -al
# - you can see Dockerfile & index.html

# (terminal1) make a new file in the original wd
touch test.txt

# (terminal2)
ls -al
# - you can see the test.txt file!
```
---