---
title: "[ALGORITHM] Programmers ALGORITHM 연습문제 (3)"
layout: single
date: '24/10/2021'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - ALGORITHM
tags:
  - BACKEND
  - ALGORITHM
---

---
### ALGORITHM Übung - Programmers
* 알고리즘 문제 풀이를 통한 코딩 테 스트 연습

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