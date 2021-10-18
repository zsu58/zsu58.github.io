---
title: "[Algorithm] 수업을 최대로 많이 듣는 수강 신청 - Greedy Alogirthm"
layout: single
date: '15/10/2021'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - ALGORITHM
tags:
  - BACKEND
  - ALGORITHM
---

### ALGORITHM
* 알고리즘 정리(21)
* Greedy Algorithm이 사용되면 최적인 경우
  * 최적 부분 구조가 있음 - 부분 문제들의 최적의 답을 이용해 기존 문제의 최적의 답을 구할 수 있다는 것
  * 탐욕적 선택 속성이 있음 - 해당 상황에서 당장 최적의 선택을 할 수 있다는 것

---

### Greedy Algorithm
* 리스트에 담겨있는 튜플들은 각각 하나의 수업을 나타내며, 각 튜플의 0번째 항목은 해당 수업의 시작 교시, 그리고 1 번 항목은 해당 수업이 끝나는 교시를 의미
* 최대한 많은 수업을 들을 수 있는 수업 조합을 찾아주는 함수를 구하세요.


```python
def course_selection(course_list):
    sorted_list = sorted(course_list, key=lambda x: x[1])

    my_selection = [sorted_list[0]]

    for course in sorted_list:
        if course[0] > my_selection[-1][1]:
            my_selection.append(course)

    return my_selection

# 테스트
print(course_selection([(6, 10), (2, 3), (4, 5), (1, 7), (6, 8), (9, 10)]))
print(course_selection([(1, 2), (3, 4), (0, 6), (5, 7), (8, 9), (5, 9)]))
print(course_selection([(4, 7), (2, 5), (1, 3), (8, 10), (5, 9), (2, 5), (13, 16), (9, 11), (1, 8)]))
```

    [(2, 3), (4, 5), (6, 8), (9, 10)]
    [(1, 2), (3, 4), (5, 7), (8, 9)]
    [(1, 3), (4, 7), (8, 10), (13, 16)]

