---
title: "[Error] ModuleNotFoundError: No module named '_lzma'"
layout: single
date: '22/03/2022'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - ERROR
tags:
  - DOCKER
  - PYTHON
---

---
### ParserError: Error tokenizing data. C error
* 상황
    * Docker Ubuntu18.04에서 Scrapy crawl 돌릴 때 module을 못 찾음
* 해결
    * 해당 모듈 설치 및 lzma.py 수정

---

### Solution
```bash
# ubuntu 해결법
apt-get update
apt-get install xz-devel
apt-get install liblzma-dev

# centos의 경우
yum install xz-devel
yum install python-backports-lzma

# 해당 프로젝트의 가상환경에서
pip3 install backports.lzma

# lzma.py 수정
cd /usr/local/lib/python3.8
vi lzma.py 
```

```python
# lzma.py
try:
    from _lzma import *
    from _lzma import _encode_filter_properties, _decode_filter_properties
except ImportError:
    from backports.lzma import *
    from backports.lzma import _encode_filter_properties, _decode_filter_properties
```
---

### ref 
* [🔗 참고1](https://mskim8717.tistory.com/82)
* [🔗 참고2](https://stackoverflow.com/questions/18039057/python-pandas-error-tokenizing-data)