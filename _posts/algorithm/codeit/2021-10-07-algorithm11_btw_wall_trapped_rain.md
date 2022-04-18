---
title: "[Algorithm] 벽 사이 빗물 최대량 - 무차별 대입"
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
* 알고리즘 정리(11)
* Brute Force(3)

---

### 문제
* 건물과 건물 사이 쌓일 수 있는 빗물의 양을 구하는 함수를 구현하시오.
* 예를 들어, input 리스트로 [3, 0, 0, 2, 0, 4]가 주어진다면 1번째 건물은 3층, 4번째 건물은 2층, 6번째 건물은 4층이다. 
* 빗물은 아래와 같이 총 10칸 만큼 쌓인다
* 0번 인덱스 - 0 (왼쪽 없음, 오른쪽 중 가장 높은 것은이 4층)
* 1번 인덱스 - 3 (왼쪽 중 가장 높은 것이 3층이 오른쪽 중 가장 높은 것이 4층)
* 2번 인덱스 - 3 (왼쪽 중 가장 높은 것이 3층이 오른쪽 중 가장 높은 것이 4층)
* 3번 인덱스 - 1 (왼쪽 중 가장 높은 것이 3층이 오른쪽 중 가장 높은 것이 4층) - 건물 2층
* 4번 인덱스 - 3 (왼쪽 중 가장 높은 것이 3층이 오른쪽 중 가장 높은 것이 4층)


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

---