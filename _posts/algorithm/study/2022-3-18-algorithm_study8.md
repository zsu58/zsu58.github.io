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
# 노드(마을)의 개수, 간선(도로) 개수, 시작점
n, m = map(int, sys.stdin.readline().split())

# 노드 연결정보
graph = [[] for _ in range(m+1)]
for _ in range(m):
    a,b,c = map(int, sys.stdin.readline().split())
    graph[a].append((b,c))

# 자기 자신에서 자기 자신으로 가는 비용은 0으로 초기화
for i in range(1, n+1):
    for j in range(1, n+1):
        if i == j:
            graph[i][j] = 0

# i를 출발해 k를 거쳐 j로 가는 게 값이 작을 경우, 해당 값 갱신
# 경유지
for k in range(1, n+1):
    # 출발지    
    for i in range(1, n+1):
        # 목적지
        for j in range(1, n+1):
            graph[i][j] = min(graph[i][j], graph[i][k] + graph[k][j])

# 수행된 결과 출력
for i in range(1, n+1):
    for j in range(1, n+1):
        if graph[i][j] == float("inf"):
            print("INF", end=" ")
        else:
            print(graph[i][j], end=" ")
    print()
```

---

#### 다익스트라 알고리즘
* 다익스트라 알고리즘: 특정 노드에서 다른 노드까지의 최단 경로
    * 다이나믹 프로그래밍을 활용한 대표적인 최단 경로 탐색 알고리즘
    * 특정한 하나의 정점에서 다른 모든 정점으로 가는 최단 경를 알려줌

##### 순차탐색
```python
import sys

# 노드(마을)의 개수, 간선(도로) 개수, 시작점
n, m, x = map(int, sys.stdin.readline().split())

# 노드 연결정보
graph = [[] for _ in range(m+1)]
for _ in range(m):
    a,b,c = map(int, sys.stdin.readline().split())
    graph[a].append((b,c))

# 방문 여부
visited = [False] * (n+1)
# 최단거리
distance = [float("inf")] * (n+1)

# 방문하지 않은 노드 중 가장 최단거리의 노드 index 반환
def get_shortest_node():
    min_val = float("inf")
    idx = 0
    for i in range(1, n+1):
        if distance[i] < min_val and not visited[i]:
            min_val = distance[i]
            idx = i
    return idx

def dijkstra(start):
    
    # 시작 노드
    distance[start] = 0
    visited[start] = True
    # 시작노드와 인접노드에 대해 최단거리 테이블 갱신
    for j in graph[start]:
        distance[j[0]] = j[1]
    
    # 노드의 개수 만큼(즉, 모든 node에 대해) loop
    for i in range(n-1):
        now = get_shortest_node()
        visited[now] = True
        
        for j in graph[now]:
            # 선택된 노드로 가는 비용 업데이트(이전 간선들 합)
            cost = distance[now] + j[1]
            if cost < distance[j[0]]:
                distance[j[0]] = cost
                
# 다익스트라 알고리즘 수행
dijkstra(x)

# 모든 노드로 가기 위한 최단 거리 출력
for i in range(1, n+1):
  # 도달할 수 없는 경우
  if distance[i] == float("inf"):
    print("infinity")
  else:
    print(distance[i])
```

##### 최소힙
```python
import sys

# 노드(마을)의 개수, 간선(도로) 개수, 시작점
n, m, x = map(int, sys.stdin.readline().split())

# 노드 연결정보
graph = [[] for _ in range(m+1)]
for _ in range(m):
    a,b,c = map(int, sys.stdin.readline().split())
    graph[a].append((b,c))

# 최단거리
distance = [float("inf")] * (n+1)

def dijkstra(start):
    q = []

    # 시작노드로 가기 위한 최단 경로는 0으로 설정하여 큐에 삽입
    heapq.heappush(q, (0, start))
    distance[start] = 0

    while q:
        dist, now = heapq.heappop(q)

        # 만약 현재 노드가 이미 처리되어있다면(처리되어 거리가 짧기에) continue
        if distance[now] < dist:
            continue

        # 현재 노드와 연결된 다른 인접 노드 확인
        for i in graph[now]:
            cost = dist + i[1]

            # 현재 노드를 거쳐, 다른 노드로 이동하는 거리가 더 짧은 경우 추가
            if cost < distance[i[0]]:
                distance[i[0]] = cost
                heapq.heappush(q, (cost, i[0]))

# 다익스트라 알고리즘 수행
dijkstra(x)

# 모든 노드로 가기 위한 최단 거리 출력
for i in range(1, n+1):
  # 도달할 수 없는 경우
  if distance[i] == float("inf"):
    print("infinity")
  else:
    print(distance[i])


```

---

### 관련 알고리즘 풀이
* [🔗 링크1]()
* [🔗 링크2](https://carl020958.github.io/boj/boj(10)/)
* [🔗 링크3]()