---
title: "[ALGORITHM] Programmers ALGORITHM 연습문제 Lv2 (3)"
layout: single
date: '8/3/2022'
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

### 소수 찾기
* 8/3/2022
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test75.png" align="center">
</p>
```python
# 나의 풀이
from itertools import permutations

# check whether number is a prime number
def isPrime(num):
    if num <= 1:
        return False
    for i in range(2, int(num**0.5) + 1):
        if num % i == 0:
            return False
    return True

def solution(numbers):
    ps = set()
    # loop for all possible combination numbers
    for i in range(1, len(numbers)+1):
        # loop over all possible permutations
        for permutation in permutations(numbers, i):
            tmp = int("".join(permutation))
            # if prime number add to set
            if isPrime(tmp):
                ps.add(tmp)
    return len(ps)
```
---

### 정수 삼각형
* 16/3/2022
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test76.png" align="center">
</p>
```python
# 나의 풀이
def solution(triangle):
    # update every row in triangle
    for i in range(1, len(triangle)):
        # add the first, last number of the previous row to the first, last number of the current row each
        triangle[i][0] += triangle[i-1][0]
        triangle[i][-1] += triangle[i-1][-1]
        # add the maximum number of the previous row's neighboring two numbers to the current row
        for j in range(1, len(triangle[i])-1):
            triangle[i][j] += max(triangle[i-1][j-1], triangle[i-1][j])
    
    return max(triangle[-1])
```
---