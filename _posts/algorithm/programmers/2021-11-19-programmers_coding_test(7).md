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
    def gcd(x, y):
        while(x):
            x, y =  y%x, x 
        return y
    
    res = 1
    for i in arr:
        res *=  i // gcd(res, i)
    return res
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

### 행렬의 곱셈
* 20/11/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test57.png" align="center">
</p>
```python
def solution(arr1, arr2):
    return [[sum(a * b for a, b in zip(row_a, column_b)) for column_b in zip(*arr2)] for row_a in arr1]
```

---

### 피보나치 수
* 21/11/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test58.png" align="center">
</p>
```python
def solution(n):
    fiboList=[0,1]
    for i in range(n-1):
        fiboList.append(fiboList[i+1] + fiboList[i])

    return fiboList[n]%1234567

# 다른 사람의 좋은 풀이
def solution(n):
    a,b=0,1
    for i in range(n-1):
        a,b=b,a+b
    
    return b%1234567
```

---
