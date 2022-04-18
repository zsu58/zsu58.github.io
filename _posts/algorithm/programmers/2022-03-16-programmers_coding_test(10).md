---
title: "[ALGORITHM] Programmers ALGORITHM 연습문제 Lv3 (1)"
layout: single
date: '16/03/2022'
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

### 정수 삼각형
* 16/3/2022
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test76.png" align="center">
</p>

```python
# 나의 풀이
def solution(triangle):
    # update every row in triangle
    for i in range(1, len(triangle)):
        # add the first, last number of the previous row to the first, last number of the current row each
        triangle[i][0] += triangle[i-1][0]
        triangle[i][-1] += triangle[i-1][-1]
        # add the maximum number of the previous row's neighboring two numbers to the current row
        for j in range(1, len(triangle[i])-1):
            triangle[i][j] += max(triangle[i-1][j-1], triangle[i-1][j])
    
    return max(triangle[-1])
```
---

### N으로 표현
* 23/3/2022

<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test77.png" align="center">
</p>

```python
# 나의 풀이
from itertools import product

def solution(N, number):
    # N_dict containing possible results for each key
    N_dict = {1: set([N])}

    # return 1 if N == number
    if N == number:
        return 1
    
    # loop until max number is 8, each number becomes a key for N_dict
    for i in range(2, 9):
        # initialize set for each key
        tmp_set = set()
        # add sequential number of N to set
        tmp_set.add(int(str(N)*i))
        # for every combination do arithmetic operations
        for j in range(1, i):
            for a,b in list(product(N_dict[j], N_dict[i-j])):
                tmp_set.add(a+b)
                tmp_set.add(a-b)
                tmp_set.add(b-a)
                tmp_set.add(a*b)
                if a != 0:
                    tmp_set.add(b//a)
                if b != 0:
                    tmp_set.add(a//b)
        N_dict[i] = tmp_set
        if number in tmp_set:
            return i

    # if number doesn't exist until 8 return -1
    return -1
```
---

### 배달
* 9/4/2022

<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test80_1.png" align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test80_2.png" align="center">
</p>

```python
# 나의 풀이
import heapq

def dijkstra(start, distances, graph):
    q = []
    # info about going to the startnode 
    heapq.heappush(q, (start, 0))
    distances[start] = 0
    
    while q:
        # get info of the current node
        now, dist = heapq.heappop(q)
        
        # if already updated continue
        if distances[now] < dist:
            continue
        
        # check adjacent nodes
        for node_info in graph[now]:
            cost = dist + node_info[1]
        
            if cost < distances[node_info[0]]:
                distances[node_info[0]] = cost
                heapq.heappush(q, (node_info[0], cost))
    
    return distances

def solution(N, road, K):
    # information of node connection
    graph = [[] for _ in range(N+1)]
    for r in road:
        graph[r[0]].append((r[1], r[2]))
        graph[r[1]].append((r[0], r[2]))
    
    distances = dijkstra(1, [float("inf")] * (N+1), graph)
    
    return sum(1 for distance in distances if distance <= K)
```
---

### 가장 먼 노드
* 9/4/2022

<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test81.png" align="center">
</p>

```python
# 나의 풀이
# bfs(nonlocal 활용)
from collections import deque


def solution(n, edge):
    graph = [[] for _ in range(n+1)]
    for conn in edge:
        graph[conn[0]].append(conn[1])
        graph[conn[1]].append(conn[0])
    
    visited = [False] * (n+1)
    dists, dist = [-1] * (n+1), 0
    
    def bfs(start, graph):
        nonlocal visited, dists, dist
        
        dq = deque([start])
        visited[start] = True
        dists[start] = 0
        
        res = []
        while dq:
            now = dq.popleft()
            for node in graph[now]:
                if not visited[node]:
                    dq.append(node)
                    visited[node] = True
                    dists[node] = dists[now] + 1
    
    bfs(1, graph)
    
    return sum(1 for dist in dists if dist == max(dists))

n = 6
edge = [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]
solution(n, edge)


# bfs2(bfs를 main(solution)함수 밖으로)
from collections import deque

def bfs(start, graph, visited, dists, dist):
    
    dq = deque([start])
    visited[start] = True
    dists[start] = 0
    
    res = []
    while dq:
        now = dq.popleft()
        for node in graph[now]:
            if not visited[node]:
                dq.append(node)
                visited[node] = True
                dists[node] = dists[now] + 1
    
    return dists


def solution(n, edge):
    graph = [[] for _ in range(n+1)]
    for conn in edge:
        graph[conn[0]].append(conn[1])
        graph[conn[1]].append(conn[0])
    
    visited = [False] * (n+1)
    dists = [-1] * (n+1)
    dist = 0
    dists = bfs(1, graph, visited, dists, 0)
    
    return sum(1 for dist in dists if dist == max(dists))

n = 6
edge = [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]
solution(n, edge)

# 다익스트라
import heapq


def dijkstra(start, graph, dists):
    q = []
    
    heapq.heappush(q, (start, 0))
    dists[start] = 0
    
    while q:
        now, dist = heapq.heappop(q)
        
        if dists[now] < dist:
            continue

        for node_info in graph[now]:
            cost = dist + node_info[1]
            
            if cost < dists[node_info[0]]:
                dists[node_info[0]] = cost
                heapq.heappush(q, (node_info[0], cost))

    return dists
    
def solution(n, edge):
    graph = [[] for _ in range(n+1)]
    for conn in edge:
        graph[conn[0]].append((conn[1], 1))
        graph[conn[1]].append((conn[0], 1))
        
    dists = [float("inf")] * (n+1)
    dists = dijkstra(1, graph, dists)

    return sum(1 for dist in dists if dist == max(dists[1:]))
```
---

### 네트워크
* 10/4/2022
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test82.png" align="center">
</p>

```python
# 나의 풀이
def solution(n, computers):
    
    graph = [[] for _ in range(n)]
    for i in range(len(computers)):
        for j in range(len(computers[i])):
            if computers[i][j] == 1:
                graph[i].append(j)
    
    def dfs(n):
        nonlocal visited, conn
        conn.append(n)
        visited[n] = True
        for node in graph[n]:
            if not visited[node]:
                dfs(node)
    
    conns = []
    for i in range(n):
        visited = [False] * (n+1)
        conn = []
        dfs(i)
        conns.append(conn)
    
    res = set()
    for conn in conns:
        res.add("".join(map(str, sorted(conn))))
    
    return len(res)
```
---