---
title: "[ALGORITHM] Programmers ALGORITHM 연습문제 (4)"
layout: single
date: '30/10/2021'
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

### 문제 31
* 30/10/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test31.png" align="center">
</p>
```python
def solution(price, money, count):
    return max(sum([price*i for i in range(1,count+1)])-money,0)
```

---

### 문제 32
* 31/10/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test32.png" align="center">
</p>
```python
def solution(n):
    for i in range(1,n):
        if n%i == 1:
            return i
```

---

### 문제 33
* 1/11/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test33.png" align="center">
</p>
```python
def solution(sizes):
    max_size = max(sizes[0])
    min_size = min(sizes[0])
    
    for size in sizes:
        max_size = max(max_size, max(size))
        min_size = max(min_size, min(size))
        
    return max_size * min_size
```

---