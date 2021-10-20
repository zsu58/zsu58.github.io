---
title: "[Algorithm] 효율적으로 중복되는 숫자 찾기"
layout: single
date: '20/10/2021'
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
* 알고리즘 정리(25)

---

### Algorithm
* (N + 1)의 크기인 리스트에, 1부터 N까지의 임의의 자연수가 요소로 할당되어 있어, 중복되는 숫자가 최소 1개가 존재
* 중복되는 어느 숫자 '하나'를 가장 효율적으로 찾아 리턴하는 함수를 구현하시오.


```python
def find_same_number(some_list):
    ele_dict = {}

    for ele in some_list:
        if ele in ele_dict:
            return ele

        ele_dict[ele] = True

print(find_same_number([1, 4, 3, 5, 3, 2]))
print(find_same_number([4, 1, 5, 2, 3, 5]))
print(find_same_number([5, 2, 3, 4, 1, 6, 7, 8, 9, 3]))
```

    3
    5
    3

