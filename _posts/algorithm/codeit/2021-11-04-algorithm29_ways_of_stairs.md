---
title: "[Algorithm] 계단 올라가는 방법의 수(1)"
layout: single
date: '04/11/2021'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - CODEIT
tags:
  - ALGORITHM
---

### ALGORITHM
* 알고리즘 정리(29)

---

### 문제
* 계단을 1칸 혹은 2칸씩만 올라갈 수 있다.
* 총 n칸을 올라갈 때 올라갈 수 있는 방법의 수를 리턴하는 함수를 구현하시오
* 예를 들어 계단 4가지를 올라 갈때 가능한 방법은 아래와 같이 총 5가지이다.
    * 1, 1, 1, 1
    * 2, 1, 1
    * 1, 2, 1
    * 1, 1, 2
    * 2, 2


```python
def staircase(n):
    # 코드를 작성하세요.
    a,b = 1,1
    for _ in range(n-1):
        a,b = b,a+b
    return b
        

# 테스트
print(staircase(0))
print(staircase(6))
print(staircase(15))
print(staircase(25))
print(staircase(41))

```

    1
    13
    987
    121393
    267914296


---
