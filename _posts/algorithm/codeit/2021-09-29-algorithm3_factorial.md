---
title: "[Algorithm] 팩토리얼 - 재귀함수"
layout: single
date: '29/09/2021'
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
* 알고리즘 정리(3)
* 재귀함수(1)
  * 핵심 : base case와 recursive case 찾기

---

### 팩토리얼 - 재귀함수


```python
def factorial(n):
    if n == 0:
        return 1
    return factorial(n-1) * n

print(factorial(5))
```

    120

---