---
title: "[Algorithm] 주식 최대 이익"
layout: single
date: '3/11/2021'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - CODEIT
tags:
  - ALGORITHM
---

### ALGORITHM
* 알고리즘 정리(28)

---

### 문제
* 리스트의 형태로 특정 기간에 주식의 가격이 주어집니다.
    * 예. [1, 2, 3, 4, 5] (첫날:1, 둘째날:2, ...)
* 딱 한 번만 해당 주식을 사고 팔았을 때 최대의 수익을 구하는 함수를 구현하시오.
* 주식은 한 번씩만 사고 팔 수 있으며, 산 당일에 팔 수 없습니다.
* 함수의 시간 복잡도는 O(n)여야 함


```python
def max_profit(stock_list):
    max_profit_so_far = stock_list[1] - stock_list[0]
    min_so_far = min(stock_list[0], stock_list[1])

    for i in range(2, len(stock_list)):
        max_profit_so_far = max(max_profit_so_far, stock_list[i] - min_so_far)
        min_so_far = min(min_so_far, stock_list[i])

    return max_profit_so_far

print(max_profit([7, 1, 5, 3, 6, 4]))
print(max_profit([7, 6, 4, 3, 1]))
print(max_profit([11, 13, 9, 13, 20, 14, 19, 12, 19, 13]))
print(max_profit([12, 4, 11, 18, 17, 19, 1, 19, 14, 13, 7, 15, 10, 1, 3, 6]))
```

    5
    -1
    11
    18


---
