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

### 문제 35
* 3/11/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test35.png" align="center">
</p>
```python
def solution(numbers):
    sum_list = []
    for i in range(len(numbers)-1):
        for j in range(i+1, len(numbers)):
            sum_list.append(numbers[i]+numbers[j])
    return sorted(list(set(sum_list)))
```

---

### 문제 36
* 3/11/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test36.png" align="center">
</p>
```python
def solution(d, budget):
    res = 0
    for mon in sorted(d):
        if budget >= mon:
            budget -= mon
            res += 1
        else:
            break
    
    return res
```

---

### 문제 37
* 4/11/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test37.png" align="center">
</p>
```python
def solution(n):
    ternary = ''
    while n > 2:
        ternary = str(n % 3) + ternary
        n //= 3
    ternary = str(n) + ternary

    result = 0
    for i in range(len(ternary)):
        result += 3**i * int(ternary[i])

    return result

# 다른 사람의 좋은 풀이
def solution(n):
    tmp = ''
    while n:
        tmp += str(n % 3)
        n = n // 3

    answer = int(tmp, 3)
    return answer
```

---

### 문제 38
* 4/11/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test38.png" align="center">
</p>
```python
from math import sqrt
def solution(left, right):
    res = 0
    for num in range(left, right + 1):
        if num % sqrt(num) == 0:
        # if int(num ** 0.5) == num ** 0.5: #위와 같음
                res -= num
            else:
                res += num

    return res
```

---