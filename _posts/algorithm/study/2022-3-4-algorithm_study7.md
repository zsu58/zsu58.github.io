---
title: "[ALGORITHM] 동적계획법"
layout: single
date: '4/3/2022'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - STUDY_ALGORITHM
tags:
  - ALGORITHM
---
---
### ALGORITHM
* 알고리즘 스터디(7)
* 동적계획법(Dynamic Programming)
    
---

### 동적계획법
* 하나의 큰 문제를 여러 개의 공통되는 작은 문제로 나누어서 작은 문제의 정답들을 결합하여 알고리즘을 푸는 과정
* 푸는 방법
    * Bottom Up: 작은 문제에서 큰 문제로 반복문 호출
    * Top Down: 큰 문제에서 작은 문제로 재귀 호출
        * Memoization: 중복을 줄이기 위해 단계마다 메모
        

#### Bottom Up


```python
# 피보나치 수열
def fib(n):
    fibList = [1, 1]
    for i in range(2, n+1):
        fibList.append(fibList[i-2] + fibList[i-1])
    return fibList[-1]

print(fib(5))
```

    8


#### Top Down


```python
def fib(n):
    if n == 0 or n == 1:
        return 1
    else:
        return fib(n-1) + fib(n-2)
print(fib(5))
```

    8



```python
# Memoization
memo = {0: 1, 1: 1}
def fib(n):
    if n in memo:
        return memo[n]
    else:
        result = fib(n-1) + fib(n-2)
        memo[n] = result
        return result
print(fib(5))
```

    8



```python
# 인접하지 않은 수들의 합의 최대값 구하기
data = [3,4,5,6,1,2,5]

def solution(data):
    if len(data) == 1:
        return data[0]
    # memo
    result = [data[0], max(data[0], data[1])]
    
    # 이전값과 (이전값 이전의 최대 합값 + 자기값) 사이를 비교해서 합읯 최대값 업데이트
    for i in range(2, len(data)):
        result.append(max(result[i-1], (result[i-2] + data[i])))

    return result[-1]

print(solution(data))
```

    15

---
### 관련 알고리즘 풀이
* [🔗 링크1](https://carl020958.github.io/boj/boj(9)/)
* [🔗 링크2](https://carl020958.github.io/programmers/programmers_coding_test(10)/#정수-삼각형)
* [🔗 링크3](https://carl020958.github.io/programmers/programmers_coding_test(10)/#N으로-표현)