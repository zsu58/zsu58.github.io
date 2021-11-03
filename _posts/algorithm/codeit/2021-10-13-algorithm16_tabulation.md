---
title: "[Algorithm] 피보나치 수열 - Dynamic Programming(Tabulation)"
layout: single
date: '13/10/2021'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - CODEIT
tags:
  - ALGORITHM
---

### ALGORITHM
* 알고리즘 정리(16)
* Dynamic Programming이 필요한 경우
  * 최적 부분 구조가 있음
  * 중복되는 부분 문제들이 있음
* Dyanmic Programming은 2가지 종류가 존재
    * Memoization
        * 재귀를 사용
        * 장점: 모든 경우를 다 계산할 필요 없음
        * 단점: call stack이 계속 쌓임
    * Tabulation
        * 반복을 사용
        * 장점: call stack이 쌓이지 않음
        * 단점: 모든 경우를 다 계산함

---

### Tabulation
* Fibonacci


```python
def fib_tab(n):
    # 코드를 작성하세요.
    fib_list = [0,1]
    
    for i in range(2,n+1):
         fib_list.append(fib_list[i-1] + fib_list[i-2])
        
    return fib_list[n]


# 테스트
print(fib_tab(10))
print(fib_tab(56))
print(fib_tab(132))
```

    55
    225851433717
    1725375039079340637797070384



```python
# 공간 최적화
def fib_optimized(n):
    current = 1
    previous = 0

    # 반복적으로 위 변수들을 업데이트한다.
    for i in range(1, n):
        current, previous = current + previous, current

    # n번재 피보나치 수를 리턴한다.
    return current

# 테스트
print(fib_optimized(16))
print(fib_optimized(53))
print(fib_optimized(213))
```

    987
    53316291173
    146178119651438213260386312206974243796773058

---