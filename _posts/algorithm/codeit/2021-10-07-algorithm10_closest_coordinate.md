---
title: "[Algorithm] 좌표 간 가까운 거리 - 무차별 대입"
layout: single
date: '07/10/2021'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - CODEIT
tags:
  - ALGORITHM
---

---
### ALGORITHM
* 알고리즘 정리(10)
* Brute Force(2)

---

### 좌표 간 가까운 거리


```python
from math import sqrt

def distance(store1, store2):
    return sqrt((store1[0] - store2[0]) ** 2 + (store1[1] - store2[1]) ** 2)

def closest_pair(coordinates):
    pair = [coordinates[0], coordinates[1]]

    for i in range(len(coordinates) - 1):
        for j in range(i + 1, len(coordinates)):
            store1, store2 = coordinates[i], coordinates[j]
            if distance(pair[0], pair[1]) > distance(store1, store2):
                pair = [store1, store2]

    return pair

# 테스트
test_coordinates = [(2, 3), (12, 30), (40, 50), (5, 1), (12, 10), (3, 4)]
print(closest_pair(test_coordinates))
# 시간 복잡도 : O(n^2)
```

    [(2, 3), (3, 4)]

---