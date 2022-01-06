---
title: "[ALGORITHM] 깊이우선탐색(Depth First Search) & 너비우선탐색(Breadth First Search)"
layout: single
date: '24/12/2021'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - STUDY_ALGORITHM
tags:
  - ALGORITHM
  - PROGRAMMERS
---

---
### ALGORITHM
* 알고리즘 스터디(3)
* 탐색
    * 완전탐색(Brute-Force)
    * 이분탐색(Binary Search)
    * **깊이우선탐색(Depth First Search)**
    * **너비우선탐색(Breadth First Search)**
    * 문자열탐색
    * KMP(Knuth-Morris-Pratt)
    * BM(Boyer-Moore)
---

### 깊이우선탐색(Depth First Search)
* 하나의 경우의 수에 대하여 모든 경우의 수를 조사하면서 해를 찾는 과정
* 이때 스텍을 활용할 수 있음


```python
# 미로찾기
while len(stack) > 0:
    now = stack.pop()
    if now == dest:
        return True
    x = now[1]
    y = now[0]
    
    if x-1 > -1:
        if maps[y][x-1] == 0:
            stack.append([y,x-1])
            maps[y][x-1]=2
    if x+1 < hori:
        if maps[y][x+1] == 1:
            stack.append([y,x+1])
            maps[y][x+1]=2
    if y-1 > -1:
        if maps[y-1][x] == 1:
            stack.append([y-1,x])
            maps[y-1][x]=2
    if y+1 < verti:
        if maps[y+1][x] == 1:
            stack.append([y+1,x])
            maps[y+1][x]=2
return False
```

---

### 너비우선탐색(Breadth First Search)
* 레벨에 따라 경우의 수를 조사하면서 해를 찾는 과정
* 이때 큐를 활용할 수 있음


```python
# 최단경로찾기
while len(queue) > 0:
    count = len(queue)
    
    for time in range(count):
        now = queue.pop(0)
        if now == dest:
            return answer

        for i in data:
            if i[0] == now and visited[i[1]-1] == False:
                queue.append(i[1])
                visited[i[1]-1] = True
            elif i[1] == now and visited[i[0]-1] == False:
                aueue.append(i[0])
                visited[i[0]-1] = True
        answer += 1
        
return answer
```

### 관련 알고리즘 풀이
* [🔗 링크1](https://carl020958.github.io/boj/boj(2)/)
* [🔗 링크2]()
* [🔗 링크2]()