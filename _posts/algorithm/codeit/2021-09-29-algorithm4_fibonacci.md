---
title: "[Algorithm] 피보나치 수열 - 재귀함수"
layout: single
date: '29/9/2021'
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
* 알고리즘 정리(4)
* 재귀함수(2)
  * 핵심 : base case와 recursive case 찾기

---

### 피보나치 수열 - 재귀함수


```python
def fib(n):
    if n < 3:
        return 1
    return fib(n-1) + fib(n-2)

for i in range(1, 11):
    print(fib(i))
    # 시간 복잡도 : O(2^n)
```

    1
    1
    2
    3
    5
    8
    13
    21
    34
    55

---