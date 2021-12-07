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
* 30/11/2021
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
```

---

### 기능개발
* 30/11/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test67.png" align="center">
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