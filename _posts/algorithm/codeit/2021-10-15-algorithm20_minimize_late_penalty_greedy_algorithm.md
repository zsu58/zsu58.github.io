---
title: "[Algorithm] 벌금 최소화하기 - Greedy Alogirthm"
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
* 알고리즘 정리(20)
* Greedy Algorithm이 사용되면 최적인 경우
  * 최적 부분 구조가 있음 - 부분 문제들의 최적의 답을 이용해 기존 문제의 최적의 답을 구할 수 있다는 것
  * 탐욕적 선택 속성이 있음 - 당장 최적의 선택을 하는 것이 전체 문제를 해결하는 데 최선의 선택이여함

---

### Greedy Algorithm
* 스터디 약속시간에 늦으면 1분에 1달러씩 내야 하는 벌금 제도가 존재.
* 스터디를 하러갈 때, 준비물을 프린트해야하는데, 프린트하는데 1장당 1분씩 소요되며, 각자 프린트해야하는 양은 변경할 수 없음.
* 벌금을 1/n로 내기로 했을 때, 벌금을 최소화하는 함수를 구하세요.


```python
def min_fee(pages_to_print):
    penalty = 0
    person = len(pages_to_print)

    for page in sorted(pages_to_print):
        penalty += person * page
        person -= 1

    return penalty 

# 테스트
print(min_fee([6, 11, 4, 1]))
print(min_fee([3, 2, 1]))
print(min_fee([3, 1, 4, 3, 2]))
print(min_fee([8, 4, 2, 3, 9, 23, 6, 8]))
```

    39
    10
    32
    188

---