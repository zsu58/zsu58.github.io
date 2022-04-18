---
title: "[Algorithm] 벽 사이 빗물 최대량(2)"
layout: single
date: '07/11/2021'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - CODEIT
tags:
  - ALGORITHM
---

### ALGORITHM
* 알고리즘 정리(33)

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

    # buildings의 2번째부터 각 index부터 오른쪽 끝(len(builidings)-1) index까지의 최대값을 포함하는 리스트
    max_right = [0] * (len(buildings) - 1)
    right = buildings[-1]
    for i in range(len(buildings)-2, -1, -1):
        right = max(right, buildings[i+1])
        max_right[i] = right

    #왼쪽의 최대값은 for loop 안에서 업데이트
    max_left = buildings[0]
    res = 0
    for i in range(1, len(buildings) - 1):

        upper_bound = min(max_left, max_right[i-1])
        res += max(0, upper_bound - buildings[i])
        max_left = max(max_left, buildings[i])

    return res

# 테스트
print(trapping_rain([3, 0, 0, 2, 0, 4]))
print(trapping_rain([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
```

    10
    6

