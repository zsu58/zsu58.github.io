---
title: "[ALGORITHM] LeetCode 1725. Number Of Rectangles That Can Form The Largest Square"
layout: single
date: '26/10/2021'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - LEETCODE
tags:
  - ALGORITHM
  - LEETCODE
---

---
### ALGORITHM Übung - LeetCode
* 알고리즘 문제 풀이를 통한 코딩 테스트 연습

---

### 문제
<a href="https://leetcode.com/problems/number-of-rectangles-that-can-form-the-largest-square/">문제 링크</a>

### 코드
```python
class Solution(object):
    def countGoodRectangles(self, rectangles):
        rect_list = [min(rectangle) for rectangle in range(rectangles)]
        maxLen = max(rect_list)

        result = 0
        return sum([i for i in rect_list if maxLen == i])
```

---