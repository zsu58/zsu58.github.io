---
title: "[ALGORITHM] LeetCode 121. Best Time to Buy and Sell Stock"
layout: single
date: '16/12/2021'
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
* [🔗 문제 링크](https://leetcode.com/problems/add-two-numbers/)

### 코드
```python
# 나의 풀이
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        iter1 = l1
        num1 = str(iter1.val)
        while iter1.next:
            iter1 = iter1.next
            num1 = str(iter1.val) + num1

        iter2 = l2
        num2 = str(iter2.val)
        while iter2.next:
            iter2 = iter2.next
            num2 = str(iter2.val) + num2

        num3 = str(int(num1) + int(num2))

        node_list = [ListNode(s) for s in num3[::-1]]
        for i in range(len(node_list)-1):
            node_list[i].next = node_list[i+1]

        return node_list[0]
```

---