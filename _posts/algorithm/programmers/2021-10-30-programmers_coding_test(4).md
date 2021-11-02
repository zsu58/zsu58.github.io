---
title: "[ALGORITHM] Programmers ALGORITHM 연습문제 Lv1 (4)"
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

### 문제 34
* 2/11/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test34.png" align="center">
</p>
```python
def solution(a, b):
    days = []
    accum_days = 0
    for i in [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30]:
        accum_days += i
        days.append(accum_days)

    mon_dict = {i:days[i-1] for i in range(1, 13)}

    day_dict = {0: 'THU', 1: 'FRI', 2: 'SAT', 3: 'SUN', 4: 'MON', 5: 'TUE', 6: 'WED'}

    return day_dict[(mon_dict[a] + b) % 7]

# 다른 사람의 좋은 풀이
def getDayName(a,b):
    months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    days = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU']
    return days[(sum(months[:a-1])+b-1)%7]
```

---