---
title: "[Algorithm] 최대 곱 구하기 - Greedy Alogirthm"
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
* 알고리즘 정리(19)
* Greedy Algorithm이 사용되면 최적인 경우
  * 최적 부분 구조가 있음 - 부분 문제들의 최적의 답을 이용해 기존 문제의 최적의 답을 구할 수 있다는 것
  * 탐욕적 선택 속성이 있음 - 해당 상황에서 당장 최적의 선택을 할 수 있다는 것

---

### Greedy Algorithm
* 여러 명이 카드 게임을 하는 상황에서 각 플레이어는 3장의 카드를 들고 있습니다. 
* 한 사람당 카드를 하나씩 뽑아서 모두 곱했을 때 가능한 최대 곱을 구하는 함수를 구하세요.


```python
def max_product(card_lists):
    product = 1

    for card_list in card_lists:
        product *= max(card_list)

    return product

test_cards1 = [[1, 6, 5], [4, 2, 3]]
print(max_product(test_cards1))

test_cards2 = [[9, 7, 8], [9, 2, 3], [9, 8, 1], [2, 8, 3], [1, 3, 6], [7, 7, 4]]
print(max_product(test_cards2))

test_cards3 = [[1, 2, 3], [4, 6, 1], [8, 2, 4], [3, 2, 5], [5, 2, 3], [3, 2, 1]]
print(max_product(test_cards3))

test_cards4 = [[5, 5, 5], [4, 3, 5], [1, 1, 1], [9, 8, 3], [2, 8, 4], [5, 7, 4]]
print(max_product(test_cards4))
```

    24
    244944
    10800
    12600

