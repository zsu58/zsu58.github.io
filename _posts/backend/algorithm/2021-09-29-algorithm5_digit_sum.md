---
title: "[Algorithm] 자리수 합 - 재귀함수"
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
* 알고리즘 정리(5)
* 재귀함수(3)
  * 핵심 : base case와 recursive case 찾기

---

### 자리수 합 - 재귀함수


```python
def sum_digits(n):
    if n < 10:
        return n
    return n % 10 + sum_digits(n // 10)

print(sum_digits(22541))
print(sum_digits(92130))
print(sum_digits(12634))
print(sum_digits(704))
print(sum_digits(3755))
# 시간 복잡도 : O(d)
```

    14
    15
    16
    11
    20

