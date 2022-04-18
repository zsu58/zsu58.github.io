---
title: "[Algorithm] 효율적으로 중복되는 숫자 찾기(2)"
layout: single
date: '05/11/2021'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - CODEIT
tags:
  - ALGORITHM
---

### ALGORITHM
* 알고리즘 정리(31)

---

### 문제
* (N + 1)의 크기인 리스트에, 1부터 N까지의 임의의 자연수가 요소로 할당되어 있어, 중복되는 숫자가 최소 1개가 존재
* 중복되는 어느 숫자 '하나'를 가장 효율적으로 찾아 리턴하는 함수를 구현하시오.
* 단, O(n) 이상의 공간을 사용할 수 없으며, input인 리스트도 변형할 수 없음


```python
def find_same_number(some_list, start=1, end=None):
    if end == None:
        end = len(some_list)

    while start < end:
        smaller_half = 0
        mid = (start+end)//2
        for i in some_list:
            if i >= start and i <= mid:
                smaller_half += 1
        if smaller_half > mid-start+1:
            end = mid
        else:
            start = mid+1

    return start

print(find_same_number([1, 4, 3, 5, 3, 2]))
print(find_same_number([4, 1, 5, 2, 3, 5]))
print(find_same_number([5, 2, 3, 4, 1, 6, 7, 8, 9, 3]))
```

    3
    5
    3

