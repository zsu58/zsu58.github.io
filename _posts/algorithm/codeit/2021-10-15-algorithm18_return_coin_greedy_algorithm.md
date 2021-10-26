---
title: "[Algorithm] 최대 수익 - Greedy Alogirthm"
layout: single
date: '15/10/2021'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - CODEIT
tags:
  - ALGORITHM
---

### ALGORITHM
* 알고리즘 정리(18)
* Greedy Algorithm이 사용되면 최적인 경우
  * 최적 부분 구조가 있음 - 부분 문제들의 최적의 답을 이용해 기존 문제의 최적의 답을 구할 수 있다는 것
  * 탐욕적 선택 속성이 있음 - 해당 상황에서 당장 최적의 선택을 할 수 있다는 것

---

### Greedy Algorithm
* 최소의 동전 개수로 거슬러주기


```python
def min_coin_count(value, coin_list):
    count = 0

    for coin in sorted(coin_list, reverse=True):
        count += (value // coin)
        value %= coin

    return count

# 테스트
default_coin_list = [100, 500, 10, 50]
print(min_coin_count(1440, default_coin_list))
print(min_coin_count(1700, default_coin_list))
print(min_coin_count(23520, default_coin_list))
print(min_coin_count(32590, default_coin_list))
```

    10
    5
    49
    70

