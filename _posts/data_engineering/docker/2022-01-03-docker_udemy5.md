---
title: "[Docker] Docker Image1"
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
### Docker Image1
* Docker Image & Layers
* Docker Image Tagging & Pushing to Docker Hub

---


### Docker Image & Layers
```bash
# show history of image layers (docker image history [image_name])
docker image history nginx:latest

# returns JSON metadata about the image (docker image inspect [image_name])
docker image inspect nginx
```
---

### Docker Image Tagging & Pushing to Docker Hub
```bash
# assigns one or more tags to an image (docker image tag [source_image[:tag]] [target_image[:tag]]
docker image tag nginx zsu/nginx

# login to docker hub
docker login

# can check docker profile
cat .docker/config.json

# push to dockerhub (docker image push [user]/[image_name]:[tag])
docker image push zsu/nginx:testing

# login to docker hub stores authentication key, so don't forget to logout to protect your account
docker logout
```
---


