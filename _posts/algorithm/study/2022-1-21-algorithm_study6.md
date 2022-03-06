---
title: "[ALGORITHM] 재귀함수"
layout: single
date: '21/1/2022'
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
* 알고리즘 스터디(6)
* 재귀함수
    
---

### 재귀함수
* 메소드 혹은 함수의 내부에서 자기자신의 메소드 혹은 함수를 다시 호출하는 함수


```python
# 각 변수를 조합하여 가능한 합을 출력
data = [3, 5, 8]

def recur(index, value):
    if index == len(data):
        result.add(value)
    else:
        recur(index+1, value + data[index])
        recur(index+1, value)

result = set()
recur(0,0)
print(result)
```

    {0, 3, 5, 8, 11, 13, 16}



```python
# 팩토리얼
def factorial(n):
    if n == 1:
        return 1
    else:
        return n * factorial(n-1)
    
print(factorial(4))
```

    24



```python
# 피보나치 수열
def fibonacci(n):
    if n == 0 or n == 1:
        return 1
    else:
        return fibonacci(n-1) + fibonacci(n-2)

print(fibonacci(5))
```

    8



```python
# Python에서 재귀 함수의 최대 깊이는 1000
# 변경 방법 (2000)으로 변경
import sys
sys.setrecursionlimit(2000)
```
---

### 관련 알고리즘 풀이
* [🔗 링크1](https://carl020958.github.io/boj/boj(7)/)
* [🔗 링크2](https://carl020958.github.io/boj/boj(8)/)
* [🔗 링크3](https://carl020958.github.io/programmers/programmers_coding_test(8)/#괄호-변환)