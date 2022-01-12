---
title: "[Error] ERROR 1366 (HY000): Incorrect string value: \\xEC\\x9D\\xB4\\xEB\\xAF\\xB8"
layout: single
date: '10/1/2022'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - ERROR
tags:
  - MYSQL
  - PYTHON
---

---
### ERROR 1366 (HY000): Incorrect string value: '\xEC\x9D\xB4\xEB\xAF\xB8
* 상황
    * MySQL에서 테이블에 INSERT 시 에러 발생
    * 원인 - 한글로 된 데이터를 입력
* 해결
    * Table의 Charset 지정

---

### Solution
```bash
ALTER TABLE member CONVERT TO CHARSET UTF8;
```
---

### ref 
* [🔗 참고](https://mitny.tistory.com/208)