---
title: "[ALGORITHM] LeetCode 125. Valid Palindrome"
layout: single
date: '7/12/2021'
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
* [🔗 문제 링크](https://leetcode.com/problems/valid-palindrome/)

### 코드 
```python
# 나의 풀이
import re


class Solution:
    def palindrome(s: str) -> bool:
        # extract alphabets and add all the elements as non-capital alphabets in a list
        str_list = list(map(lambda x: x.lower(), re.findall('[a-zA-Z0-9]', str)))

        for i in range(len(str_list)):
            if str_list[i] != str_list[-1-i]:
                return False
        return True


# 더 좋은 풀이 (굳이 리스트로 만들지 않아도 되고, 슬랑이싱을 활용하는게 더 좋음)
import re


class Solution:
    def isPalindrome(self, s: str) -> bool:
    s = s.lower()
    s = re.sub("[^a-z0-9]", "", s)

    return s == s[::-1]
```

---