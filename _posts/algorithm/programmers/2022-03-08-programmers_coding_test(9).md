---
title: "[ALGORITHM] Programmers ALGORITHM 연습문제 Lv2 (3)"
layout: single
date: '08/03/2022'
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

### 주차 요금 계산
* 3/4/2022

<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test78_1.png" align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test78_2.png" align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test78_3.png" align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test78_4.png" align="center">
</p>

```python
# 나의 풀이
from datetime import datetime, timedelta
from math import ceil


def solution(fees, records):
    parking_dict = {}
    for record in records:
        time, car, state =  record.split()
        time = datetime.strptime(time, "%H:%M")
        if parking_dict.get(car):
            if state == "IN":
                parking_dict[car]["IN"].append(time)
            else:
                parking_dict[car]["OUT"].append(time)
            parking_dict[car]["STATE"] = state
        else:
            parking_dict[car] = {"IN": [time], "OUT": [], "STATE": "IN"}
            
    for k in parking_dict.keys():
        if parking_dict[k]["STATE"] == "IN":
            parking_dict[k]["OUT"].append(datetime.strptime("23:59", "%H:%M"))
        
        parking_dict[k]["RESULT"] = sum([time_out-time_in for time_in, time_out in zip(parking_dict[k]["IN"], parking_dict[k]["OUT"])], timedelta())
        
    times = [parking_dict[k]["RESULT"] for k in sorted(parking_dict.keys())]
    
    result = []
    for time in times:
        minutes = time.total_seconds() // 60
        if minutes < fees[0]:
            result.append(fees[1])
        else:
            result.append(int(fees[1] + ceil((minutes - fees[0]) / fees[2])*fees[3]))
    return result
```
---

### k진수에서 소수 개수 구하기
* 3/4/2022

<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test79.png" align="center">
</p>

```python
# 나의 풀이
def transform(n, k):
    res = ""
    while n > k:
        res = str((n % k)) + res
        n //= k
    return str(n) + res

def is_prime(n):
    n = int(n)
    if n == 1:
        return False
    if n in [2, 3]:
        return True
    for i in range(2, int(n**(1/2)+1)):
        if n % i == 0:
            return False
    return True

def solution(n, k):
    transformed = transform(n, k)
    return sum(is_prime(num) for num in transformed.split("0") if num)
```
---

### 구명보트
* 12/4/2022

<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test83.png" align="center">
</p>

```python
# 나의 풀이
def solution(people, limit):
    people.sort(reverse=True)
    res = 0
    l, r = 0, len(people)-1
    while l <= r:
        if people[l] + people[r] <= limit:
            l += 1
            r -= 1
        else:
            l += 1
        res += 1
    
    return res
```
---

### 양궁대회

* 13/5/2022
* [🔗 문제 링크](https://programmers.co.kr/learn/courses/30/lessons/92342)

```python
# 나의 풀이
from itertools import combinations_with_replacement
from collections import Counter


def solution(n, info):
    cases = []
    for combination in combinations_with_replacement(range(11), n):
        ryan = Counter(combination)
        ryan_score, apeach_score = 0, 0
        for i in range(11):
            if info[10-i] < ryan[i]:
                ryan_score += i
            elif info[10-i] > 0:
                apeach_score += i
                
        if ryan_score > apeach_score:
            cases.append((ryan, ryan_score-apeach_score))
    
    if not cases:
        return [-1]

    cases2 = []
    max_score = max(case[1] for case in cases)
    for case in cases:
        if case[1] == max_score:
            tmp = [0] * 11
            for k,v in case[0].items():
                tmp[10-k] = v
            cases2.append(tmp)
    
    return sorted(cases2, 
                  key=lambda x: (-x[10], -x[9], -x[8], -x[7], -x[6], -x[5], -x[4], -x[3], -x[2], -x[1], -x[0]))[0]
```
---


### [3차] 방금그곡

* 14/5/2022
* [🔗 문제 링크](https://programmers.co.kr/learn/courses/30/lessons/17683)

```python
# 나의 풀이
import re
from datetime import datetime


def replace(m):
    change_list = [("C#", "c"), ("D#", "d"), ("F#", "f"), ("G#", "g"), ("A#", "a")]
    for change in change_list:
        m = re.sub(change[0], change[1], m)
    return m


def solution(m, musicinfos):
    music_list = []
    for idx, musicinfo in enumerate(musicinfos):
        start, end, title, notes = musicinfo.split(",")
        time = (datetime.strptime(end, "%H:%M") - datetime.strptime(start, "%H:%M")).total_seconds()/60
        notes = replace(notes)
        
        notes_len = len(notes)
        if time <= notes_len:
            total_notes = notes[:int(time)]
        else:
            total_notes = (notes * int(time//notes_len)) + notes[:int(time%notes_len)]
        
        m = replace(m)
        m_len = len(m)
        
        for i, note in enumerate(total_notes):
            if len(total_notes) < i+m_len:
                break
            if note == m[0]:
                check = total_notes[i:i+m_len]
                if check == m:
                    music_list.append((time, idx, title))
                    break

    res = sorted(music_list, key=lambda x: (-x[0], x[1]))

    if res:
        return res[0][2]
    else:
        return "(None)"
```
---



