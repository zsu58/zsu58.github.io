---
title: "[Algorithm] 최대 이익 구간"
layout: single
date: '02/11/2021'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - CODEIT
tags:
  - ALGORITHM
---

### ALGORITHM
* 알고리즘 정리(27)

---

### Divide & Conquer
* 리스트에는 며칠 동안의 수익이 담겨 있습니다.
* 예를 들어서 [7, -3, 4, -8]이라면 첫 날에는 7달러를 벌었고, 둘째 날에는 3달러를 잃었고, 셋째 날에는 4달러를 벌었고, 마지막 날에는 8달러를 잃은 것입니다.
* profits를 파라미터로 받아, 최대 수익을 내는 구간의 수익을 리턴 sublist_max 함수를 구현하시오.
* 함수의 시간 복잡도는 O(n)여야 함.


```python
def sublist_max(profits):
    max_profit_so_far = profits[0]
    max_check = profits[0]
    
    for i in range(1, len(profits)):
        max_check = max(max_check + profits[i], profits[i])
        
        max_profit_so_far = max(max_profit_so_far, max_check)
    
    return max_profit_so_far

print(sublist_max([7, -3, 4, -8]))
print(sublist_max([-2, -3, 4, -1, -2, 1, 5, -3, -1]))
```

    8
    7

---