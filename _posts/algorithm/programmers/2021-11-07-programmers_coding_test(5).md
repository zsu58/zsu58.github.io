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

### K번째수
* 7/11/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test41.png" align="center">
</p>
```python
def solution(array, commands):
    return [sorted(array[c[0]-1:c[1]])[c[2]-1] for c in commands]
```

---

### 완주하지 못한 선수
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

### 소수 만들기
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

### 내적
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

### 음양 더하기
* 8/11/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test45.png" align="center">
</p>
```python
solution = lambda x, y: sum(a if b else -1 * a for a, b in zip(x,y))
```

---

### 없는 숫자 더하기
* 8/11/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test46.png" align="center">
</p>
```python
def solution(numbers):
    return 45 - sum(numbers)
```

---

### [1차] 비밀지도
* 8/11/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test47_1.png" align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test47_2.png" align="center">
</p>
```python
def solution(n, arr1, arr2):
    res = []
    for i in range(n):
        t = bin(arr1[i]|arr2[i])[2:].zfill(n)
        t = t.replace("1", "#")
        t = t.replace("0", " ")
        res.append(t)
    return res
```

---

### 크레인 인형뽑기 게임
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

### 키패드 누르기
* 13/11/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test49_1.png" align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test49_2.png" align="center">
</p>
```python
def solution(numbers, hand):
    
    ref = {1:(0,0), 2:(1,0), 3:(2,0),
           4:(0,1), 5:(1,1), 6:(2,1),
           7:(0,2), 8:(1,2), 9:(2,2),
           "*":(0,3), 0:(1,3), "#":(2,3)}
    
    l_hand = "*"
    r_hand = "#"

    all_hand = ''
    for num in numbers:
        if num in [3,6,9]:
            all_hand += 'R'
            r_hand = num
        elif num in [1,4,7]:
            all_hand += 'L'
            l_hand = num
        else:
            left_move = abs(ref[l_hand][0] - ref[num][0]) + abs(ref[l_hand][1] - ref[num][1])
            right_move = abs(ref[r_hand][0] - ref[num][0]) + abs(ref[r_hand][1] - ref[num][1])
            
            if left_move < right_move:
                all_hand += 'L'
                l_hand = num
            elif left_move > right_move:
                all_hand += 'R'
                r_hand = num
            else:
                if hand == "right":
                    all_hand += 'R'
                    r_hand = num
                else:
                    all_hand += 'L'
                    l_hand = num
    
    return all_hand
```

---

### 숫자 문자열과 영단어
* 15/11/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test50_1.png" align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test50_2.png" align="center">
</p>
```python
def solution(s):
    string_to_number = {"zero":"0", "one":"1", "two":"2", "three":"3", "four":"4",
                        "five":"5", "six":"6", "seven":"7", "eight":"8", "nine":"9"}

    for key,value in string_to_number.keys():
        s = s.replace(key, value)

    return int(s)
```

---