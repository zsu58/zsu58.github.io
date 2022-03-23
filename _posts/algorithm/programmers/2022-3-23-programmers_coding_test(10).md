---
title: "[ALGORITHM] Programmers ALGORITHM 연습문제 Lv3 (1)"
layout: single
date: '23/3/2022'
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

### N으로 표현
* 23/3/2022
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test77.png" align="center">
</p>
```python
# 나의 풀이
from itertools import product

def solution(N, number):
    # N_dict containing possible results for each key
    N_dict = {1: set([N])}

    # return 1 if N == number
    if N == number:
        return 1
    
    # loop until max number is 8, each number becomes a key for N_dict
    for i in range(2, 9):
        # initialize set for each key
        tmp_set = set()
        # add sequential number of N to set
        tmp_set.add(int(str(N)*i))
        # for every combination do arithmetic operations
        for j in range(1, i):
            for a,b in list(product(N_dict[j], N_dict[i-j])):
                tmp_set.add(a+b)
                tmp_set.add(a-b)
                tmp_set.add(b-a)
                tmp_set.add(a*b)
                if a != 0:
                    tmp_set.add(b//a)
                if b != 0:
                    tmp_set.add(a//b)
        N_dict[i] = tmp_set
        if number in tmp_set:
            return i

    # if number doesn't exist until 8 return -1
    return -1
```
---
