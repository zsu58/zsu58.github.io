---
title: "[Algorithm] 이진 탐색"
layout: single
date: '29/9/2021'
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
* 알고리즘 정리(2)

---

### 이진 배열


```python
def binary_search(element, some_list):
    min_index = 0
    max_index = len(some_list) - 1
    while max_index >= min_index:
        index = (min_index + max_index)//2
        if some_list[index] == element:
            return index
        elif some_list[index] > element:
            max_index = index - 1
        else:
            min_index = index + 1
    return None


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

