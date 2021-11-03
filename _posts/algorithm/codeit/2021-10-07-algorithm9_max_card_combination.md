---
title: "[Algorithm] 카드 조합 최대값 - 무차별 대입"
layout: single
date: '7/10/2021'
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
* 알고리즘 정리(9)
* Brute Force(1)

---

### 카드 조합 최대값


```python
def max_product(left_cards, right_cards):

    max_product = left_cards[0] * right_cards[0]
    for left in left_cards:
        for right in right_cards:
            max_product = max(max_product, left * right)
    return max_product
    
print(max_product([1, 6, 5], [4, 2, 3]))
print(max_product([1, -9, 3, 4], [2, 8, 3, 1]))
print(max_product([-1, -7, 3], [-4, 3, 6]))
# 시간 복잡도 : O(mn)
```

    24
    32
    28

---