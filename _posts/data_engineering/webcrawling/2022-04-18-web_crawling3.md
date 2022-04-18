---
title: "[Web Crawling] Scrapy to S3"
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
  - S3
---

---
### Scrapy to S3
* Install Packages
* settings.py

---


### Install Packages

```bash
pip3 install boto3
pip3 install scrapy-s3pipeline[s3]
```

---

### settings.py
* settings.py에 아래 항목 추가
* AWS Key


```python
AWS_ACCESS_KEY_ID = "AWS_ACCESS_KEY_ID"
AWS_SECRET_ACCESS_KEY = "AWS_SECRET_ACCESS_KEY"

ITEM_PIPELINES = {'s3pipeline.S3Pipeline': 100,  # Add this line.}

S3PIPELINE_URL = 's3://my-bucket/{name}/{time}/items.{chunk:07d}.jl.gz'
```

---

### ref
* [🔗 S3 Pipeline 공식문서](https://github.com/orangain/scrapy-s3pipeline)