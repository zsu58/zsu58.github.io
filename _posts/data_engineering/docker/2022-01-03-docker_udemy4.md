---
title: "[Docker] Docker Network2"
layout: single
date: '03/01/2022'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - DOCKER
tags:
  - DOCKER
---

---
### Docker Network2
* Docker CLI Testing
* Docker DNS Round Robin Test

---

### Docker CLI Testing
```bash
# centos7
# --rm option을 통해 해당 container 종료 시 자동 삭제
docker container run --rm -it centos:7 bash

# root
yum update curl

curl --version

# ubuntu14.04
docker container run --rm -it ubuntu:14.04 bash

# root
apt-get update && apt-get install -y curl

curl--version
```
---

### Docker DNS Round Robin Test
```bash
# create network 
docker network create dns_test

# create 2 elasticsearch:2 container in dns_test network
docker container run -d --net dns_test --net-alias search elasticsearch:2
docker container run -d --net dns_test --net-alias search elasticsearch:2

# use the code below to test DNS Round Robin 1
docker container run --rm --net dns_test alpine:3.10 nslookup search

# use the code below to test DNS Round Robin 2
docker container run --rm --net dns_test centos curl -s search:9200
```
---