---
title: "[Web Crawling] Web Crawler Container(Docker)"
layout: single
date: '18/04/2022'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - WEB_CRAWLING
tags:
  - SCRAPY
  - PYTHON
  - DOCKER
---

---
### Web Crawling Container(Docker)
* Run Container
* Start Scrapy Project

---

### Run Container
* scrapy-kidnews image를 활용하여 scrapy container 생성
* 생성 후 scrapy 정상 실행을 위해, lzma 오류 해결해야함 * [🔗 lzma 해결](https://carl020958.github.io/error/docker_error1/)


```bash
docker container run -it -d --network airflownet -v $(pwd):/home/scrapy/scrapy -e LC_ALL=C.UTF-8 --name scrapy scrapy-kidnews:latest
```

---

### Start Scrapy Project
```bash
su - scrapy
source ./.venv/bin/activate

pip3 install scrapy
pip3 install pymongo

cd scrapy
scrapy startproject kidnewscrawling
```

