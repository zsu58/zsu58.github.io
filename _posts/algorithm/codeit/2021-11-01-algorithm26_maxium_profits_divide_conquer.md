---
title: "[Algorithm] 최대 이익 구간 - Divide & Conquer"
layout: single
date: '01/11/2021'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - CODEIT
tags:
  - ALGORITHM
---

### ALGORITHM
* 알고리즘 정리(26)

---

### Divide & Conquer
* 리스트에는 며칠 동안의 수익이 담겨 있습니다.
* 예를 들어서 [7, -3, 4, -8]이라면 첫 날에는 7달러를 벌었고, 둘째 날에는 3달러를 잃었고, 셋째 날에는 4달러를 벌었고, 마지막 날에는 8달러를 잃은 것입니다.
* profits를 파라미터로 받아, 최대 수익을 내는 구간의 수익을 리턴 sublist_max 함수를 구현하시오.
* 함수의 시간 복잡도는 O(nlgn)여야 함.


```python
def middle_incl_max(profits, start, end):
    
    mid = (start + end) // 2
    
    l_sum = 0
    l_max = profits[mid]
    for i in profits[mid::-1]:
        l_sum += i
        l_max = max(l_max, l_sum)
        
    r_sum = 0
    r_max = profits[mid+1]
    for j in profits[mid+1:]:
        r_sum += j
        r_max = max(r_max, r_sum)
        
    return l_max+r_max

def sublist_max(profits, start, end):
    if start == end:
        return profits[start]

    mid = (start + end) // 2    
    
    left_max = sublist_max(profits, start, mid)
    right_max = sublist_max(profits, mid+1, end)
    middle_max = middle_incl_max(profits, start, end)
    
    return max(left_max, right_max, middle_max)


# 테스트
list1 = [-2, -3, 4, -1, -2, 1, 5, -3]
print(sublist_max(list1, 0, len(list1) - 1))

list2 = [4, 7, -6, 9, 2, 6, -5, 7, 3, 1, -1, -7, 2]
print(sublist_max(list2, 0, len(list2) - 1))

list3 = [9, -8, 0, -7, 8, -6, -3, -8, 9, 2, 8, 3, -5, 1, -7, -1, 10, -1, -9, -5]
print(sublist_max(list3, 0, len(list3) - 1))

list4 = [-9, -8, -8, 6, -4, 6, -2, -3, -10, -8, -9, -9, 6, 2, 8, -1, -1]
print(sublist_max(list4, 0, len(list4) - 1))
```

    7
    28
    22
    16

---