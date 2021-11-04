---
title: "[Algorithm] 계단 올라가는 방법의 수(2)"
layout: single
date: '4/11/2021'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - CODEIT
tags:
  - ALGORITHM
---

### ALGORITHM
* 알고리즘 정리(30)

---

### 문제
* 계단을 오를 수 있는 칸 수가 리스트로 주어진다.
* 총 n칸을 올라갈 때 올라갈 수 있는 방법의 수를 리턴하는 함수를 구현하시오
* 예를 들어 계단을 오를 수 있는 칸 수가 [1,2,4]이고 총 4칸을 올라 갈때 가능한 방법은 아래와 같이 총 6가지이다.
    * 1, 1, 1, 1
    * 2, 1, 1
    * 1, 2, 1
    * 1, 1, 2
    * 2, 2
    * 4


```python
def staircase(stairs, possible_steps):
    num_way_list = [0, 1]

    for height in range(2, stairs+1):
        res = 0

        for step in possible_steps:
            if step == height:
                res += 1
            elif step <= height:
                res += num_way_list[height - step]

        num_way_list.append(res)

    return num_way_list[stairs]

print(staircase(5, [1, 2, 3]))
print(staircase(6, [1, 2, 3]))
print(staircase(7, [1, 2, 4]))
print(staircase(8, [1, 3, 5]))
```

    13
    24
    31
    19


---
