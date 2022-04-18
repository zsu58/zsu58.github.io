---
title: "[Algorithm] 하노이의 탑 - 재귀함수"
layout: single
date: '01/10/2021'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - CODEIT
tags:
  - ALGORITHM
---


---
### ALGORITHM
* 알고리즘 정리(8)
* 재귀함수(6)
  * 핵심 : base case와 recursive case 찾기

---

### 하노이의 탑 - 재귀함수


```python
def move_disk(disk_num, start_peg, end_peg):
    print("%d번 원판을 %d번 기둥에서 %d번 기둥으로 이동" % (disk_num, start_peg, end_peg))

def hanoi(num_disks, start_peg, end_peg):

    other_peg = 6 - start_peg - end_peg

    if num_disks == 0:
        return
    else:
        hanoi(num_disks-1, start_peg, other_peg)
        move_disk(num_disks, start_peg, end_peg)
        hanoi(num_disks-1, other_peg, end_peg)

print('---------------2개---------------')
hanoi(2, 1, 3)
print('---------------3개---------------')
hanoi(3, 1, 3)
# 시간 복잡도 : O(2^n)
```

    ---------------2개---------------
    1번 원판을 1번 기둥에서 2번 기둥으로 이동
    2번 원판을 1번 기둥에서 3번 기둥으로 이동
    1번 원판을 2번 기둥에서 3번 기둥으로 이동
    ---------------3개---------------
    1번 원판을 1번 기둥에서 3번 기둥으로 이동
    2번 원판을 1번 기둥에서 2번 기둥으로 이동
    1번 원판을 3번 기둥에서 2번 기둥으로 이동
    3번 원판을 1번 기둥에서 3번 기둥으로 이동
    1번 원판을 2번 기둥에서 1번 기둥으로 이동
    2번 원판을 2번 기둥에서 3번 기둥으로 이동
    1번 원판을 1번 기둥에서 3번 기둥으로 이동

---