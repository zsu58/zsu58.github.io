---
title: "[Algorithm] 이진 탐색 - 재귀함수"
layout: single
date: '30/9/2021'
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
* 알고리즘 정리(7)
* 재귀함수(5)
  * 핵심 : base case와 recursive case 찾기

---

### 이진 탐색 - 재귀함수


```python
def binary_search(element, some_list, start_index=0, end_index=None):

    if end_index == None:
        end_index = len(some_list) - 1

    if start_index > end_index:
        return None

    search_index = (start_index + end_index) // 2

    if some_list[search_index] == element:
        return search_index

    if element < some_list[search_index]:
        return binary_search(element, some_list, start_index, search_index - 1)

    else:
        return binary_search(element, some_list, search_index + 1, end_index)


print(binary_search(2, [2, 3, 5, 7, 11]))
print(binary_search(0, [2, 3, 5, 7, 11]))
print(binary_search(5, [2, 3, 5, 7, 11]))
print(binary_search(3, [2, 3, 5, 7, 11]))
print(binary_search(11, [2, 3, 5, 7, 11]))
# 시간 복잡도 : O(lgn)
```

    0
    None
    2
    1
    4

