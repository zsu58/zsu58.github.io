---
title: "[ALGORITHM] 최단 경로 알고리즘(플로이드 와샬 & 다익스트라)"
layout: single
date: '18/3/2022'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - STUDY_ALGORITHM
tags:
  - ALGORITHM
---
---
### ALGORITHM
* 알고리즘 스터디(8)
* 최단 경로 알고리즘
    
---

### 최단 경로 알고리즘
* 다양한 알고리즘이 존재
* 대표적으로는 플로이드 와샬 알고리즘, 다익스트라 알고리즘 등이 존재


#### 플로이드 와샬 알고리즘
* 플로이드 와샬 알고리즘: 모든 노드를 방문하는 최단 경로


```python
# 방법1
# n = 노드의 수

# 비용 배열
values = [float("Inf")] * n
# 거리 배열
visited = [False] * n
# 노드 시작점
start = 0
visited[start] = True
values[start] = 0

# 모든 노드 방문할 때까지 loop
while False in visited:
    # 노드 완전탐색으로 비용배열의 거리 값 최소화
    for i in costs:
        if (visited[i[1]] == False and i[0] == start):
            values[i[1]] = min(values[i[1]], i[2])
        if (visited[i[0]] == False and i[1] == start):
            values[i[0]] = min(values[i[0]], i[2])
    refer = 2**31-1

    # 방문하지 않은 노드 중 최소 비용 노드 위치 탐색
    for i in range(n):
        if (visited[i] == False and values[i] != 0):
            refer = min(refer, values[i])
    answer += refer
    
    # 해당 노드 방문 여부 체크
    for i in range(n):
        if (visited[i] == False and values[i] == refer):
            visited[i] = True
            start = i
            break


# 방법2 
# i를 출발해 k를 거쳐 j로 가는 게 값이 작을 경우, 해당 값 갱신
# 경유지
for k in range(1, v+1):
    # 출발지    
    for i in range(1, v+1):
        # 목적지
        for j in range(1, v+1):
            dp[i][j] = min(dp[i][j], dp[i][k] + dp[k][j])
```

#### 다익스트라 알고리즘
* 다익스트라 알고리즘: 특정 노드에서 다른 노드까지의 최단 경로
    * 다이나믹 프로그래밍을 활용한 대표적인 최단 경로 탐색 알고리즘
    * 특정한 하나의 정점에서 다른 모든 정점으로 가는 최단 경를 알려줌


```python
# 비용 배열
visited = [False for _ in range(n)]
# 거리 배열
cost = [sys.maxsize for _ in range(n)]
# 0번 노드에서 시작
visited[0] = True
cost[0] = 0

length = len(visited)

while False in visited:
    checkLoc = -1
    for i in range(length):
        if visited[i] == False and cost[i] < checkValue:
            checkLoc = i
            checkValue = cost[i]
    if checkLoc == -1:
        break
    visited[checkLoc] = True
    
    for v1, v2 in costs:
        if v1 == checkLoc and visited[v2] == False:
            cost[v2] = min(cost[v2], cost[v1]+c)
        if v2 == checkLoc and visited[v1] == False:
            cost[v1] = min(cost[v1], cost[v2]+c)

```
---

### 관련 알고리즘 풀이
* [🔗 링크1]()
* [🔗 링크2]()
* [🔗 링크3]()
* [🔗 링크4]()