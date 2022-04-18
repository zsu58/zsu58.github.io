---
title: "[Algorithm] 퀵 정렬 - 분할정복"
layout: single
date: '08/10/2021'
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
* 알고리즘 정리(14)
* Divide and Conquer(3)
  * 핵심 divide/ conquer/ combine
  * 퀵 정렬
  * 퀵 정렬의 경우 conquer, combine이 간단, divide가 복잡
  * Divide: partition 과정을 통해, pivot을 기준으로 리스트를 나눈다.
  * Conquer: pivot 왼쪽 부분과 pivot 오른쪽 부분을 각각 quicksort 함수로 정렬한다.
  * Combine: 따로 할 게 없다!

---


```python
# partition 함수
def swap_elements(my_list, index1, index2):
    my_list[index1], my_list[index2] = my_list[index2], my_list[index1]
    return my_list

def partition(my_list, start, end):
    i = start
    b = start
    p = end

    while i < p:
        if my_list[i] <= my_list[p]:
            swap_elements(my_list, i, b)
            b += 1
        i += 1

    swap_elements(my_list, b, p)
    p = b

    return p

list1 = [4, 3, 6, 2, 7, 1, 5]
pivot_index1 = partition(list1, 0, len(list1) - 1)
print(list1)
print(pivot_index1)

list2 = [6, 1, 2, 6, 3, 5, 4]
pivot_index2 = partition(list2, 0, len(list2) - 1)
print(list2)
print(pivot_index2)
```

    [4, 3, 2, 1, 5, 6, 7]
    4
    [1, 2, 3, 4, 6, 5, 6]
    3



```python
# 퀵 정렬
def quicksort(my_list, start=0, end=None):
    if end == None:
        end = len(my_list) - 1

    if end - start < 1:
        return

    pivot = partition(my_list, start, end)

    quicksort(my_list, start, pivot - 1)
    quicksort(my_list, pivot + 1, end)
    
list1 = [1, 3, 5, 7, 9, 11, 13, 11]
quicksort(list1)
print(list1)

list2 = [28, 13, 9, 30, 1, 48, 5, 7, 15]
quicksort(list2)
print(list2)

list3 = [2, 5, 6, 7, 1, 2, 4, 7, 10, 11, 4, 15, 13, 1, 6, 4]
quicksort(list3)
print(list3)
```

    [1, 3, 5, 7, 9, 11, 11, 13]
    [1, 5, 7, 9, 13, 15, 28, 30, 48]
    [1, 1, 2, 2, 4, 4, 4, 5, 6, 6, 7, 7, 10, 11, 13, 15]

---