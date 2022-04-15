---
title: "[Error] java.lang.UnsatisfiedLinkError:no leveldbjni64-1.8 in java.library.path"
layout: single
date: '14/4/2022'
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
### java.lang.UnsatisfiedLinkError: no leveldbjni64-1.8 in java.library.path
* 상황
    * aarch64에서 Historyserver Container가 정상적으로 올려지지 않음
    * log 확인해보니 leveldbjni관련해서 aarch64 호환 이슈 존재
* 해결
    * arm64에 맞는 jar파일로 대체
    

---

### Solution
* [🔗 Dockerfile 링크](https://github.com/carl020958/docker/tree/main/hadoop_spark/base)

---

### ref 
* [🔗 참고1](https://github.com/fusesource/leveldbjni/issues/102)