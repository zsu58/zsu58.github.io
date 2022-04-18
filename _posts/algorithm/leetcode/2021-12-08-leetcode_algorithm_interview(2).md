---
title: "[ALGORITHM] LeetCode 344. Reverse String"
layout: single
date: '08/12/2021'
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
* [🔗 문제 링크](https://leetcode.com/problems/reverse-string/)

### 코드 
```python
# 나의 풀이
class Solution:
    def reverseString(self, s: List[str]) -> None:
        s.reverse()

# 투 포인터를 이용한 방식의 풀이
class Solution:
    def reverseString(self, s: List[str]) -> None:
        left,right = 0,len(s)-1
        while left < right:
            s[left],s[right] = s[right],s[left]
            left += 1
            right -= 1
        
```

---