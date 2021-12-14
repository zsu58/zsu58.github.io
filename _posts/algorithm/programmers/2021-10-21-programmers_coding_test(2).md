---
title: "[ALGORITHM] Programmers ALGORITHM 연습문제 Lv1 (2)"
layout: single
date: '21/10/2021'
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

### 정수 제곱근 판별
* 21/10/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test11.png" align="center">
</p>
```python
from math import sqrt

def solution(n):
    return int((sqrt(n)+1)**2) if sqrt(n) == int(sqrt(n)) else -1

# 다른 사람의 좋은 풀이
def solution(n):
    sqrt = n ** (1/2)

    if sqrt % 1 == 0:
        return (sqrt + 1) ** 2
    return -1
```

---

### 정수 내림차순으로 배치하기
* 21/10/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test12.png" align="center">
</p>
```python
def solution(n):
    num_list = sorted([i for i in str(n)], reverse=True)
    result = ''
    for i in num_list:
        result += i

    return int(result)

# 다른 사람의 좋은 풀이
def solution(n):
    ls = list(str(n))
    ls.sort(reverse = True)
    return int("".join(ls))
```

---

### 자연수 뒤집어 배열로 만들기
* 21/10/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test13.png" align="center">
</p>
```python
def solution(n):
    result = ''
    for i in str(n):
        result = i + result

    return [int(i) for i in result]

# 다른 사람의 좋은 풀이
def solution(n):s
    return [int(i) for i in str(n)][::-1]
```

---

### 자릿수 더하기
* 21/10/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test14.png" align="center">
</p>
```python
def solution(n):
    return [int(i) for i in result]

# 다른 사람의 좋은 풀이
def solution(n):
    if n < 10:
        return n
    return (n % 10) + solution(n // 10)
```

---

### 이상한 문자 만들기
* 21/10/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test15.png" align="center">
</p>
```python
def solution(s):
    str_list = s.split(" ")
    result = []

    for str in str_list:
        word = ""
        for i,v in enumerate(str):
            if (i+1) % 2 == 1:
                word += v.upper()
            else:
                word += v.lower()
        result.append(word)

    return " ".join(result)
```

---

### 약수의 합
* 21/10/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test16.png" align="center">
</p>
```python
def solution(n):
    return sum([i for i in range(1,n+1) if n % i == 0])

# 다른 사람의 좋은 풀이
def solution(n):
    return n + sum([i for i in range(1, (n // 2) + 1) if n % i == 0])
```

---

### 시저 암호
* 21/10/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test17.png" align="center">
</p>
```python
def solution(s, n):
    lower_list = 'abcdefghijklmnopqrstuvwxyz'
    upper_list = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    result = []

    for i in s:
        if i == ' ':
            result.append(' ')
        elif i.islower():
            new = lower_list.find(i) + n
            result.append(lower_list[new%26])
        else:
            new = upper_list.find(i) + n
            result.append(upper_list[new % 26])

    return ''.join(result)
```

---

### 문자열을 정수로 바꾸기
* 22/10/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test18.png" align="center">
</p>
```python
def solution(s):
    if s[0] == '+':
        return int(s)
    elif s[0] == '-':
        return int(s)
    else:
        return int(s)

# 다른 사람의 좋은 풀이
def solution(s):
    return int(s)
```

---

### 수박수박수박수박수박수?
* 22/10/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test19.png" align="center">
</p>
```python
def solution(n):
    return '수박'*(n//2) if n % 2 == 0 else '수박'*(n//2) + '수'

# 다른 사람의 좋은 풀이
def solution(n):
    return "수박"*(n//2) + "수"*(n%2)
```

---

### 소수 찾기
* 23/10/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test20.png" align="center">
</p>
```python
# 다른 사람의 좋은 풀이
def solution(n):
    # all possible answer
    num=set(range(2,n+1))

    # Sieve of Eratosthenes, delete number and its multiple(starting from 2*number) 
    for i in range(2,n+1):
        if i in num:
            num-=set(range(2*i,n+1,i))
    return len(num)
```

---