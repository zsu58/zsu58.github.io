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

### 주차 요금 계산
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
