---
title: "[Algorithm] 최대 이익 구간 - Brute Force"
layout: single
date: '16/10/2021'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - ALGORITHM
tags:
  - BACKEND
  - ALGORITHM
---

### ALGORITHM
* 알고리즘 정리(22)
* Brute Force

---

### Brute Force
* 리스트에는 며칠 동안의 수익이 담겨 있습니다.
* 예를 들어서 [7, -3, 4, -8]이라면 첫 날에는 7달러를 벌었고, 둘째 날에는 3달러를 잃었고, 셋째 날에는 4달러를 벌었고, 마지막 날에는 8달러를 잃은 것입니다.
* profits를 파라미터로 받아, 최대 수익을 내는 구간의 수익을 리턴 sublist_max 함수를 구현하시오.


```python
def sublist_max(profits):
    # 코드를 작성하세요.
    max_result = 0
    for i in range(len(profits)):
        for j in range(i, len(profits) + 1):
            max_result = max(max_result, sum(profits[i : i+j]))

    return max_result


# 테스트
print(sublist_max([4, 3, 8, -2, -5, -3, -5, -3]))
print(sublist_max([2, 3, 1, -1, -2, 5, -1, -1]))
print(sublist_max([7, -3, 14, -8, -5, 6, 8, -5, -4, 10, -1, 8]))
```

    15
    8
    27

