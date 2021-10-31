---
title: "[Algorithm] 거듭제곱"
layout: single
date: '17/10/2021'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - CODEIT
tags:
  - ALGORITHM
---

### ALGORITHM
* 알고리즘 정리(23)
* Dyanmic Programming

---

### 문제
* 거듭제곱의 경우 for 문을 돌릴 경우 시간복잡도 O(n)이 나옴
* 시간복잡도가 O(lgn)이 되는 함수를 구현하시오.


```python
def power(x, y):
    if y == 0:
        return 1

    subresult = power(x, y // 2)

    if y % 2 == 0:
        return subresult * subresult
    else:
        return x * subresult * subresult

# 테스트
print(power(3, 5))
print(power(5, 6))
print(power(7, 9))
```

    243
    15625
    40353607

