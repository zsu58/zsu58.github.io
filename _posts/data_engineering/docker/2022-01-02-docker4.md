---
title: "[Docker] Docker Shell Inside Containers"
layout: single
date: '02/01/2022'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - DOCKER
tags:
  - DOCKER
---

### Getting a Shell Inside Containers
```bash
# start new container interactively (docker container run -it)
docker container run -it --name proxy nginx

# run additional command in existing container (docker container exec -it)
docker container exec -it proxy bash


# ------
# Ubuntu
# ------
# exec의 경우에는 additional command, start의 경우에는 해당 container를 시작, 또한 ubuntu는 argument로 bash 줄 필요 없음
# ubuntu container는 이미 설치되어 있음
docker container start -ai ubuntu

# container 안의 ubuntu는 일반적인 ubuntu와 다르게 minimal함, 따라서 아래처럼 필요한 부분들은 따로 설치가 필요
apt-get update
apt-get install -y curl


# -----
# Mysql
# -----
# mysql shell에서 ps 실행하고 싶은 경우
apt-get update && apt-get install -y procps
ps


# ------
# Alpine
# ------
# alpine은 기본적으로 bash가 없기에 sh로 접속
docker container run -it alpine sh
```

---
