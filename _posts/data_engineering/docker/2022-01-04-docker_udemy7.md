---
title: "[Docker] Docker Prune"
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
### Docker Cleaning Up
* prune command to clean up images, volumes, build cache, and containers

---


### Docker clean up
```bash
# displays information regarding the amount of disk space used by the docker daemon
docker system df

# Remove all unused containers, networks, images (both dangling and unreferenced), and optionally, volumes
docker system prune

docker image prune
docker container prune
```
---

### ref
* [🔗 공식 문서](https://docs.docker.com/engine/reference/commandline/system_prune/)
* [🔗 참고 블로그](https://www.lainyzine.com/ko/article/docker-prune-usage-remove-unused-docker-objects/)