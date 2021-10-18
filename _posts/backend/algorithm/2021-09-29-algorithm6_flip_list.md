---
title: "[Algorithm] 리스트 뒤집기 - 재귀함수"
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
* 알고리즘 정리(6)
* 재귀함수(4)
  * 핵심 : base case와 recursive case 찾기

---

### 리스트 뒤집기 - 재귀함수


```python
def flip(some_list):
    if (len(some_list)) == 0 or len(some_list) == 1:
        return some_list
    return some_list[-1:] + flip(some_list[:-1])

some_list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
some_list = flip(some_list)
print(some_list)
# 시간 복잡도 : O(n^2)
```

    [9, 8, 7, 6, 5, 4, 3, 2, 1]

