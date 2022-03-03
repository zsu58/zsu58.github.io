---
title: "[ALGORITHM] Programmers ALGORITHM 연습문제 Lv2 (2)"
layout: single
date: '29/11/2021'
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

### [3차] 파일명 정렬
* 29/11/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test65_1.png" align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test65_2.png" align="center">
</p>
```python
import re

def solution(files):
    files = sorted(files, key=lambda x:
                                (re.findall(r"[a-zA-Z-.\s]+", x.lower())[0],
                                int(re.findall(r"[0-9]+", x)[0]))
                   )
    return files
```
---

### [3차] 압축
* 30/11/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test66_1.png" align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test66_2.png" align="center">
</p>
```python
def solution(msg):
    wordDict = dict(zip("ABCDEFGHIJKLMNOPQRSTUVWXYZ", range(1,27)))

    number = 27
    answer = []
    while msg not in wordDict.keys():
        i = 1
        while msg[:i] in wordDict.keys():
            i += 1
        answer.append(wordDict[msg[:i-1]])
        wordDict[msg[:i]] = number
        number += 1
        msg = msg[i-1:]

    answer.append(wordDict[msg])

    return answer
```
---

### 주식가격
* 1/12/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test67.png" align="center">
</p>
```python
def solution(prices):
    
    ans = []
    # loop for every price
    for i in range(len(prices)):
        times = 0
        # loop for every price after the current price
        for j in range(len(prices)-i-1):
            # plus 1 second
            times += 1
            # if the price is bigger than the current price, stop
            if prices[i] > prices[i+j+1]:
                    break

        ans.append(times)
        
    return ans

# 다른 사람의 좋은 풀이
from collections import deque
def solution(prices):
    answer = []
    prices = deque(prices)
    while prices:
        c = prices.popleft()

        cnt = 0
        for i in prices:
            if c > i:
                cnt += 1
                break
            cnt += 1

        answer.append(cnt)

    return answer
```
---

### 기능개발
* 2/12/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test68.png" align="center">
</p>
```python
from collections import deque


def solution(progresses, speeds):
    # used deque for leftpop
    progresses,speeds = deque(progresses),deque(speeds)
    
    ans = []
    # loop until progresses is empty
    while len(progresses):
        # for every loop add each speed to progress
        for i in range(len(progresses)):
            progresses[i] += speeds[i]
        # initalize number counting numbers of progress above 100
        num = 0
        # loop until the progresses[0] is below 100
        while len(progresses) and progresses[0] >= 100:
            progresses.popleft()
            speeds.popleft()
            # add num for every progresses[0] above 100
            num += 1
        # add num to ans if num is bigger than 0
        if num:
            ans.append(num)
    return ans

# 다른 사람의 좋은 풀이
ef solution(progresses, speeds):
    print(progresses)
    print(speeds)
    answer = []
    time = 0
    count = 0
    while len(progresses)> 0:
        if (progresses[0] + time*speeds[0]) >= 100:
            progresses.pop(0)
            speeds.pop(0)
            count += 1
        else:
            if count > 0:
                answer.append(count)
                count = 0
            time += 1
    answer.append(count)
    return answer
```
---

### 다리를 지나는 트럭
* 8/12/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test69.png" align="center">
</p>
```python
def solution(bridge_length, weight, truck_weights):
    
    # initialize bridge
    bridge = [0 for _ in range(0,bridge_length)]

    # variables
    truck_weights.reverse() # reversed to pop
    total_weight = sum(truck_weights) # to loop until total_weight is 0
    sec = 0 # total seconds
    sum_bridge = 0 # total truck weight on bridge
    
    while total_weight:
        # subtract first element of bridge from total_weight & sum_bridge
        total_weight -= bridge[0]
        sum_bridge -= bridge[0]
        # slice to delete first element of bridge
        bridge = bridge[1:] 
        
        # add new truck to bridge when there is a truck left & sum_bridge+new truck <= weight
        if len(truck_weights) > 0 and sum_bridge+truck_weights[-1] <= weight:
            sum_bridge += truck_weights[-1]
            bridge.append(truck_weights[-1])
            truck_weights.pop()

        # if not add 0(blank space) to bridge
        else:
            bridge.append(0)
        
        # add 1 second
        sec += 1
        
    return sec

# deque를 이용하면 더 빠르게 구현 가능
from collections import deque


def solution(bridge_length, weight, truck_weights):
    bridge = deque([0] * bridge_length)
    truck_weights = deque(truck_weights)
    total_weight = sum(truck_weights)
    sec = 0
    sum_bridge = 0
    
    while total_weight:
        total_weight -= bridge[0]
        sum_bridge -= bridge[0]
        bridge.popleft()
        
        if truck_weights and (sum_bridge + truck_weights[0] <= weight):
            sum_bridge += truck_weights[0]
            bridge.append(truck_weights.popleft())
        else:
            bridge.append(0)
        
        sec += 1
        
    return sec
```
---

### 가장 큰 정사각형 찾기
* 15/12/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test70.png" align="center">
</p>
```python
def solution(board):
    if len(board) < 2:
        return max(board[0])

    if len(board[0]) < 2:
        return max(zip(*board))

    max_num = 0
    num_one = 0
    for i in range(1,len(board)):
        for j in range(1,len(board[0])):
            if board[i][j]:
                board[i][j] = min(board[i-1][j-1], board[i-1][j], board[i][j-1]) + 1
                if board[i][j] > max_num: 
                    max_num = board[i][j]
            if board[i][j] == 1:
                num_one = 1

    return max_num ** 2

# 조금 더 깔끔한 풀이
def solution(board):
    for i in range(1,len(board)):
        for j in range(1,len(board[0])):
            if board[i][j]:
                board[i][j] = min(board[i-1][j-1], board[i-1][j], board[i][j-1]) + 1

    max_num = 0
    for i in range(len(board)):
        max_num = max(max_num, max(board[i]))

    return max_num ** 2
```
---

### 방문 길이
* 16/12/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test71.png" align="center">
</p>
```python
def solution(dirs):
    move = {"U": (0, 1), "D": (0, -1), "L": (-1, 0), "R": (1, 0)}
    moved = set()

    current, after = [0, 0], [0, 0]
    moves = 0
    for d in dirs:
        if (-5 <= current[0] + move[d][0] <= 5) and (-5 <= current[1] + move[d][1] <= 5):
            after[0] = current[0] + move[d][0]
            after[1] = current[1] + move[d][1]
            if str(current + after) not in moved:
                moved.add(str(current + after))
                moved.add(str(after + current))
                moves += 1
        current[0],current[1] = after[0],after[1]

    return moves

# 다른 사람의 좋은 풀이
def solution(dirs):
    s = set()
    d = {'U': (0,1), 'D': (0, -1), 'R': (1, 0), 'L': (-1, 0)}
    x, y = 0, 0
    for i in dirs:
        nx, ny = x + d[i][0], y + d[i][1]
        if -5 <= nx <= 5 and -5 <= ny <= 5:
            s.add((x,y,nx,ny))
            s.add((nx,ny,x,y))
            x, y = nx, ny
    return len(s)/2
```
---

### 타켓 넘버
* 12/1/2022
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test72.png" align="center">
</p>
```python
def solution(numbers, target):
    ans = [0]
    for number in numbers:
        # add positive and negative number for every possible answer
        a,b = list(map(lambda x: x+number, ans)),list(map(lambda x: x+number*-1, ans))
        ans = a + b
    return ans.count(target)

# 다른 사람의 좋은 풀이
def solution(numbers, target):
    if not numbers and target == 0 :
        return 1
    elif not numbers:
        return 0
    else:
        return solution(numbers[1:], target-numbers[0]) + solution(numbers[1:], target+numbers[0])
```
---

### 전화번호 목록
* 21/1/2022
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test73.png" align="center">
</p>
```python
def solution(phone_book):
    # sort to compare between adjacent phone numbers
    phone_book.sort()

    # compare adjacent numbers and return false if the second number's prefix equals to the first number
    for i in range(len(phone_book)-1):
        if phone_book[i] == phone_book[i+1][:len(phone_book[i])]:
            return False
    return True

# 다른 사람의 좋은 풀이
def solution(phoneBook):
    phoneBook = sorted(phoneBook)

    for p1, p2 in zip(phoneBook, phoneBook[1:]):
        if p2.startswith(p1):
            return False
    return True
```
---

### 괄호 변환

* 3/3/2022
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test74_1.png" align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test74_2.png" align="center">
</p>
```python
# function to divide input string as "balanced parenthesis" and the rest
def splitParenthesis(s):
    leftP, rightP = 0, 0
    for i in range(len(s)):
        if s[i] == "(":
            leftP += 1
        else:
            rightP += 1
        if leftP == rightP:
            return s[:i+1], s[i+1:]

# function to check whether input string is a "correct parenthesis"
def isCorrect(s):
    leftP = 0
    for i in range(len(s)):
        if s[i] == "(":
            leftP += 1
        else:
            leftP -= 1
        if leftP < 0:
            return False
    return leftP == 0


def solution(p):
    # step1 
    if not p:
        return ''
    # step2
    u, v = splitParenthesis(p)

    # step3
    if isCorrect(u):
        u += solution(v)
        return u
    # step4
    else:
        t = "(" + solution(v) + ")"
        t += "".join([")" if i == "(" else "(" for i in u[1:len(u)-1]])
        return t
```
---