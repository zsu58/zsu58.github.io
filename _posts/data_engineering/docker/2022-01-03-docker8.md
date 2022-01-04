---
title: "[Docker] Docker Image2 - Building Images"
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
### Docker Image2 - Building Images
* Dockerfile Build
* Dockerfile Build Example

---


### Dockerfile Build
```bash
# Dockerfile이 있는 repository에서 진행 (docker image build -t [image_name] .)
docker image build -t custom_nginx .

# dockerfile에 적혀 있는 순서대로 build하며, 변경이 없는 부분은 cache를 이용하고 변경된 부분만 새롭게 build하므로
# 변경이 없는 부분을 위에, 변경이 많은 부분은 아래에 적는 것이 좋음
```
---

### Dockerfile Build Example
* Dockerfile

```bash
# - you should use the 'node' official image, with the alpine 6.x branch (node:6-alpine)
FROM node:6-alpine
# - this app listens on port 3000, but the container should launch on port 80
EXPOSE 3000
# - then it should use alpine package manager to install tini: 'apk add --update tini'
RUN apk add --update tini
# - then it should create directory /usr/src/app for app files with 'mkdir -p /usr/src/app'
RUN mkdir -p /usr/src/app
# - Node uses a "package manager", so it needs to copy in package.json file
WORKDIR /usr/src/app
COPY package.json package.json 
# - then it needs to run 'npm install' to install dependencies from that file
# - to keep it clean and small, run 'npm cache clean --force' after above
RUN npm install && npm cache clean --force
# - then it needs to copy in all files from current directory
COPY . .
# - then it needs to start container with command '/sbin/tini -- node ./bin/www'
CMD ["tini", "--", "node", "./bin/www"]
```
* local에서 확인

```bash
# build
docker build -t testnode .

# run container
docker container run --rm -p 80:3000 testnode

# check
localhost:80

# docker hub에 올리고 download
```

* docker hub에 올린 뒤, pull해서 확인
  
```bash
# docker image tagging
docker tag testnode:latest carl020958/testing_node:latest

# pushing to docker hub
docker push carl020958/testing_node:latest

# remove docker image
docker image rm -f 3b6

# run container
docker container run --rm -p 80:3000 carl020958/testing_node

# check
localhost:80
```
---


