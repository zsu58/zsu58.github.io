---
title: "[ALGORITHM] LeetCode 5. Longest Palindromic Substring"
layout: single
date: '12/12/2021'
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
* [🔗 문제 링크](https://leetcode.com/problems/longest-palindromic-substring/)

### 코드
```python
# 나의 풀이
class Solution:
    def longestPalindrome(self, s: str) -> str:

        def ispalindrome(s: str) -> str:
            return s == s[::-1]

        for i in range(len(s)):
            for j in range(i+1):
                if ispalindrome(s[j:len(s)-i + j]):
                    return s[j:len(s)-i + j]

# 더 좋은 풀이 (투 포인터를 이용, str의 len이 짝수개인 경우와 홀수개인 경우 두 가지로 검사 & 만약 palindrome이면 확장되도록)
class Solution:
    def longestPalindrome(self, s: str) -> str:

        def expand(s: str, l: int, r: int) -> str:
          # if expanding left, right is available & is a palindrome
            while l >= 0 and r < len(s) and s[l] == s[r]:
                l -= 1
                r += 1
            return s[l+1:r]

        # used to check conditions fast
        if len(s) == 1 or s == s[::-1]:
            return s

        res = ''
        for i in range(len(s)-1):
            res = max(res, 
                      expand(s, i, i+1), # even
                      expand(s, i, i+2), # odd
                      key=len)

        return res
```

---