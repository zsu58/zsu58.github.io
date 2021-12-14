---
title: "[ALGORITHM] LeetCode 121. Best Time to Buy and Sell Stock"
layout: single
date: '13/12/2021'
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
* [🔗 문제 링크](https://leetcode.com/problems/palindrome-linked-list/submissions/)

### 코드
```python
# 나의 풀이
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        linked_list = []
        iter = head
        while iter is not None:
            linked_list.append(iter.val)
            iter = iter.next
        
        return linked_list == linked_list[::-1]

# pop을 이용한 풀이
class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        q: Deque = collections.deque()
        if not head:
            return True
        
        node = head
        while node is not None:
            q.append(node.val)
            node = node.next
            
        while len(q) > 1:
            if q.popleft() != q.pop():
                return False
        
        return True
```

---