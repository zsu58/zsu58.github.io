---
title: "[Algorithm] 첫 번째 숫자부터 마지막 숫자까지 합 - 분할정복"
layout: single
date: '08/10/2021'
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
* 알고리즘 정리(12)
* Divide and Conquer(1)
  * 핵심 divide/ conquer/ combine

---

### 1부터 n까지의 합


```python
def consecutive_sum(start, end):
    # 코드를 작성하세요
    if start == end:
        return start
    else:
        return consecutive_sum(start, (start+end)//2) + consecutive_sum((start+end)//2+1, end)

# 테스트
print(consecutive_sum(1, 10))
print(consecutive_sum(1, 100))
print(consecutive_sum(1, 253))
print(consecutive_sum(1, 388))
```

    55
    5050
    32131
    75466

---