---
title: "[Algorithm] 최소한의 약수터 방문 - Greedy Algorithm"
layout: single
date: '20/10/2021'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - CODEIT
tags:
  - ALGORITHM
---

### ALGORITHM
* 알고리즘 정리(24)
* Greedy Algorithm

---

### Greedy Algorithm
* 등산을 하는 상황에서, 등산가는 1km에 1L씩 물을 꼭 마셔야함
* 파라미터로 약수터의 위치 리스트(단위: Km)와 물통 용량(단위: L)을 줄 때, 최소한의 약수터를 들리는 함수를 구현하시오.
* 단, 탈수로 인해 정상에 도달하지 못하는 경우는 없으며, 약수터에 갈 때마다 최대 용량으로 물통을 채움
* 또한 마지막 정상의 약수터는 무조건 감


```python
def select_stops(water_stops, capacity):
    result = []

    prev_stop = 0

    for i in range(len(water_stops)):
        if water_stops[i] - prev_stop > capacity:
            result.append(water_stops[i - 1])
            prev_stop = water_stops[i - 1]

    result.append(water_stops[-1])

    return result

# 테스트
list1 = [1, 4, 5, 7, 11, 12, 13, 16, 18, 20, 22, 24, 26]
print(select_stops(list1, 4))

list2 = [5, 8, 12, 17, 20, 22, 23, 24, 28, 32, 38, 42, 44, 47]
print(select_stops(list2, 6))
```

    [4, 7, 11, 13, 16, 20, 24, 26]
    [5, 8, 12, 17, 23, 28, 32, 38, 44, 47]

---