---
title: "[ALGORITHM] Programmers ALGORITHM 연습문제 Lv1 (6)"
layout: single
date: '16/11/2021'
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

### 신규 아이디 추천
* 16/11/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test51_1.png" align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test51_2.png" align="center">
</p>
```python
import re


def solution(new_id):
    new_id = new_id.lower()
    new_id = "".join(re.findall("[\w\_\-\.]", new_id))
    while ".." in new_id:
        new_id = new_id.replace("..", ".")
    if len(new_id) > 0 and new_id[-1] == ".":
        new_id = new_id[:-1]
    if len(new_id) > 0 and new_id[0] == ".":
        new_id = new_id[1:]
    if len(new_id) == 0: new_id = "a"
    if len(new_id) >= 16:
        new_id = new_id[:15]
        if new_id[-1] == ".":
            new_id = new_id[:-1]
    if len(new_id) <= 1:
        return new_id[0] * 3
    elif len(new_id) <= 2:
        return new_id + new_id[1]

    return new_id

# 다른 사람의 좋은 풀이
import re

def solution(new_id):
    st = new_id
    st = st.lower()
    st = re.sub('[^a-z0-9\-_.]', '', st)
    st = re.sub('\.+', '.', st)
    st = re.sub('^[.]|[.]$', '', st)
    st = 'a' if len(st) == 0 else st[:15]
    st = re.sub('^[.]|[.]$', '', st)
    st = st if len(st) > 2 else st + "".join([st[-1] for i in range(3-len(st))])
    return st
```

---

### 로또의 최고 순위와 최저 순위
* 17/11/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test52_1.png" align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test52_2.png" align="center">
</p>
```python
def solution(lottos, win_nums):
    prizeDict = {6: 1, 5: 2, 4: 3, 3: 4, 2: 5, 1: 6, 0: 6}

    wins = 0
    zeros = 0
    # zeros = lottos.count(0)
    for num in lottos:
        if num in win_nums:
            wins += 1
        if num == 0:
            zeros += 1

    return [prizeDict[wins + zeros], prizeDict[wins]]
```

---

### 체육복
* 18/11/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test53.png" align="center">
</p>
```python
def solution(n, lost, reserve):

    lost, reserve = set(lost).difference(reserve), set(reserve).difference(lost)

    reserve_dict = {i: True for i in reserve}

    total_lost = len(lost)
    for i in lost:
        if i-1 in reserve_dict.keys():
            total_lost -= 1
            del (reserve_dict[i-1])
        elif i in reserve_dict.keys():
            total_lost -= 1
            del (reserve_dict[i])
        elif i+1 in reserve_dict.keys():
            total_lost -= 1
            del (reserve_dict[i+1])

    return n - total_lost
```

---