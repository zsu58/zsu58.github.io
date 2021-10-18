---
title: "[ALGORITHM] Programmers ALGORITHM 연습문제 (1)"
layout: single
date: '18/10/2021'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - ALGORITHM
tags:
  - BACKEND
  - ALGORITHM
---

---
### ALGORITHM Übung - Programmers
* 알고리즘 문제 풀이를 통한 코딩 테스트 연습

---

### 문제 1
* 18/10/2021
<p align="center">
    <img src="/img/coding_test/coding_test1.png" align="center">
</p>
```python
def solution(x, n):
    return [x + x*i for i in range(n)]
```

---

### 문제 2
* 18/10/2021
<p align="center">
    <img src="/img/coding_test/coding_test2.png" align="center">
</p>
```python
def solution(arr1, arr2):
    return [[sum(j) for j in zip(*i)] for i in zip(arr1, arr2)]
```

---

### 문제 3
* 18/10/2021
<p align="center">
    <img src="/img/coding_test/coding_test3.png" align="center">
</p>
```python
a, b = map(int, input().strip().split(' '))
for _ in range(b):
    print("*" * a)
```

---




