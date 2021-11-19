---
title: "[ALGORITHM] Programmers ALGORITHM 연습문제 Lv2 (1)"
layout: single
date: '19/11/2021'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - PROGRAMMERS
tags:
  - ALGORITHM
  - PROGRAMMERS
---

---
### ALGORITHM Übung - Programmers
* 알고리즘 문제 풀이를 통한 코딩 테스트 연습

---

### N개의 최소공배수
* 19/11/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test55.png" align="center">
</p>
```python
def solution(arr):
    answer = 1
    def gcd(n,m):
        while m:
            n , m = m, n%m
        return n

    for i in arr:
        answer *= i//gcd(answer,i)

    return answer
```

---

### JadenCase 문자열 만들기
* 19/11/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test56.png" align="center">
</p>
```python
def solution(s):
    return " ".join([word.capitalize() for word in s.split(" ")])
```

---

