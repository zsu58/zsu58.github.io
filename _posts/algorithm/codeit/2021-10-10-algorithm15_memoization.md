---
title: "[Algorithm] 피보나치 수열 - Dynamic Programming(Memoization)"
layout: single
date: '10/10/2021'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - CODEIT
tags:
  - ALGORITHM
---

### ALGORITHM
* 알고리즘 정리(15)
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

### Memoization
* Fibonacci


```python
def fib_memo(n, cache):
    # 코드를 작성하세요.
    if n < 3:
        return 1
    else:
        if n in cache:
            return cache[n]
        else:
            cache[n] = fib_memo(n-1, cache) + fib_memo(n-2, cache)
            return cache[n]

def fib(n):
    # n번째 피보나치 수를 담는 사전
    fib_cache = {}
    return fib_memo(n, fib_cache)

# 테스트
print(fib(10))
print(fib(50))
print(fib(100))
```

    55
    12586269025
    354224848179261915075

