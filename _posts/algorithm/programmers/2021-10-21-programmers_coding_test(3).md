---
title: "[ALGORITHM] Programmers ALGORITHM 연습문제 (3)"
layout: single
date: '24/10/2021'
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

### 문제 21
* 24/10/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test21.png" align="center">
</p>
```python
def solution(seoul):
    for i in range(len(seoul)):
        if seoul[i] == "Kim":
            return "김서방은 "+ str(i)+"에 있다"

# 다른 사람의 좋은 풀이
def solution(seoul):
    return "김서방은 {}에 있다".format(seoul.index("Kim"))
```

---

### 문제 22
* 24/10/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test22.png" align="center">
</p>
```python
    if len(s) == 4 or len(s) == 6:
        if s.isnumeric():
            return True
    return False

# 다른 사람의 좋은 풀이
def solution(s):
    return s.isdigit() and len(s) in (4, 6)
```

---

### 문제 23
* 24/10/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test23.png" align="center">
</p>
```python
def solution(s):
    return ''.join(sorted(s, reverse=True))
```

---

### 문제 24
* 25/10/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test24.png" align="center">
</p>
```python
def solution(s):
    num_p = 0
    num_y = 0

    for i in s.lower():
        if i == 'p':
            num_p += 1
        elif i == 'y':
            num_y += 1

    if num_p == num_y:
        return True
    return False
# 다른 사람의 좋은 풀이
def solution(s):
    return s.lower().count('p') == s.lower().count('y')
```

---

### 문제 25
* 26/10/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test25.png" align="center">
</p>
```python
def solution(strings, n):
    return sorted(strings, key=lambda x:(x[n],x))
```

---

---

### 문제 26
* 26/10/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test26.png" align="center">
</p>
```python
def solution(a, b):
    return sum([i for i in range(min(a,b),max(a,b)+1)])

# 다른 사람의 좋은 풀이
def solution(a, b):
    return sum(range(min(a,b),max(a,b)+1))
```

---

### 문제 27
* 27/10/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test27.png" align="center">
</p>
```python
def solution(arr, divisor):
    res = sorted([i for i in arr if i % divisor == 0])
    return res if len(res) > 0 else [-1]
```

---

### 문제 28
* 27/10/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test28.png" align="center">
</p>
```python
def solution(arr):
    res = [arr[0]]
    for i in range(len(arr)):
        if arr[i] != res[-1]:
            res.append(arr[i])
    return res
```

---