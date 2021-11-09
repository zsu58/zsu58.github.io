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

### 문제 44
* 8/11/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test44.png" align="center">
</p>
```python
def solution(a, b):
    res,idx = 0,0
    for _ in range(len(a)):
        res += a[idx]*b[idx]
        idx += 1
    return res

# 다른 사람의 좋은 풀이
solution = lambda x, y: sum(a*b for a, b in zip(x, y))
```

---

### 문제 45
* 8/11/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test45.png" align="center">
</p>
```python
solution = lambda x, y: sum(a if b else -1 * a for a, b in zip(x,y))
```

---

### 문제 46
* 8/11/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test46.png" align="center">
</p>
```python
def solution(numbers):
    return 45 - sum(numbers)
```

---

### 문제 47
* 8/11/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test47_1.png" align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test47_2.png" align="center">
</p>
```python
def to_binary(n, arr):
    binary_list = [(2 ** (n - 1)) / (2 ** i) for i in range(n)]

    res = []
    for num in arr:
        s = ''
        for b in binary_list:
            if num >= b:
                s += '1'
                num -= b
            else:
                s += '0'
        res.append(s)

    return res

def solution(n, arr1, arr2):

    con_arr1 = to_binary(n, arr1)
    con_arr2 = to_binary(n, arr2)

    res = []
    for a,b in zip(con_arr1,con_arr2):
        s = ''
        for i in range(len(a)):
            if a[i] == '0' and b[i] == '0':
                s += ' '
            else:
                s += '#'
        res.append(s)

    return res

# 다른 사람의 좋은 풀이
def solution(n, arr1, arr2):
    answer = []
    for i,j in zip(arr1,arr2):
        a12 = str(bin(i|j)[2:])
        a12=a12.rjust(n,'0')
        a12=a12.replace('1','#')
        a12=a12.replace('0',' ')
        answer.append(a12)
    return answer
```

---

### 문제 48
* 9/11/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test48_1.png" align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test48_2.png" align="center">
</p>
```python
def pick(n, arr):
    for i in range(5):
        if arr[n-1][i] != 0:
            val = arr[n-1][i]
            arr[n-1][i] = 0
            return val

def check(n, arr):
    for i in range(5):
        if arr[n-1][i] != 0:
            return arr[n-1][i]

def solution(board, moves):
    flip_board = [[*args] for args in zip(*board)]

    res = 0
    basket = []
    for i in range(len(moves)):
        if check(moves[i], flip_board) is None:
            pass
        elif len(basket) == 0:
            basket.append(pick(moves[i], flip_board))
        else:
            if check(moves[i], flip_board) == basket[-1]:
                pick(moves[i], flip_board)
                del(basket[-1])
                res += 2
            else:
                basket.append(pick(moves[i], flip_board))

    return res

# 다른 사람의 좋은 풀이
def solution(board, moves):
    stacklist = []
    answer = 0

    for i in moves:
        for j in range(len(board)):
            if board[j][i-1] != 0:
                stacklist.append(board[j][i-1])
                board[j][i-1] = 0

                if len(stacklist) > 1:
                    if stacklist[-1] == stacklist[-2]:
                        stacklist.pop(-1)
                        stacklist.pop(-1)
                        answer += 2     
                break

    return answer
```

---