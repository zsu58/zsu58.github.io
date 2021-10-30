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