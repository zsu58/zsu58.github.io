---
title: "[ALGORITHM] Programmers ALGORITHM 연습문제 Lv1 (5)"
layout: single
date: '7/11/2021'
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

### 문제 41
* 7/11/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test41.png" align="center">
</p>
```python
def solution(array, commands):
    return [sorted(array[c[0]-1:c[1]])[c[2]-1] for c in commands]
```

---

### 문제 42
* 7/11/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test42.png" align="center">
</p>
```python
def solution(participant, completion):
    participant.sort()
    completion.sort()

    for i in range(len(participant) - 1):
        if participant[i] != completion[i]:
            return participant[i]
    return participant[-1]

# 다른 사람의 좋은 풀이
import collections


def solution(participant, completion):
    answer = collections.Counter(participant) - collections.Counter(completion)
    return list(answer.keys())[0]
```

---

### 문제 43
* 7/11/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test43.png" align="center">
</p>
```python
from itertools import combinations


def solution(nums):
    max_n = len(nums)*1000
    prime_num = set(range(2, max_n))
    for i in range(2, max_n+1):
        if i in prime_num:
            prime_num -= set(range(2*i, max_n+1, i))

    res = 0
    for combination in list(combinations(nums,3)):
        if sum(combination) in prime_num:
            res += 1

    return res
```

---

