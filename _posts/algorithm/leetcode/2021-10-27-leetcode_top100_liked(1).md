---
title: "[ALGORITHM] LeetCode 1. Two Sum"
layout: single
date: '27/10/2021'
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
<a href="https://leetcode.com/problems/two-sum/">문제 링크</a>

### 코드
```python
# 풀이1 - Brute Force
class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        for i in range(len(nums)):
            for j in range(i+1,len(nums)):
                if nums[i] + nums[j] == target:
                    return [i,j]

# 풀이2 - Hash Map 이용
class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        temp_dict = {}
        for i, val in enumerate(nums):
            diff = target - val
            if diff in temp_dict:
                return [temp_dict[diff], i]
            temp_dict[val] = i
```

---