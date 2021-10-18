---
title: "[Algorithm] 벽 사이 빗물 최대량 - 무차별 대입"
layout: single
date: '8/10/2021'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - ALGORITHM
tags:
  - BACKEND
  - ALGORITHM
---

---
### ALGORITHM
* 알고리즘 정리(11)
* Brute Force(3)

---

### 벽 사이 빗물 최대량


```python
def trapping_rain(buildings):
    total_height = 0

    for i in range(1, len(buildings) - 1):
        max_left = max(buildings[:i])
        max_right = max(buildings[i:])

        upper_bound = min(max_left, max_right)

        total_height += max(0, upper_bound - buildings[i])

    return total_height

print(trapping_rain([0, 3, 0, 0, 2, 0, 4]))
print(trapping_rain([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
# 시간 복잡도 : O(n^2)
```

    10
    6

