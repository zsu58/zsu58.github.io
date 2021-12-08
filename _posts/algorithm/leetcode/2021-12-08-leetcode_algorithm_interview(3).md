---
title: "[ALGORITHM] LeetCode 937. Reorder Data in Log Files"
layout: single
date: '8/12/2021'
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
* [🔗 문제 링크](https://leetcode.com/problems/reorder-data-in-log-files/)

### 코드 
```python
# 나의 풀이
class Solution:
    def reorderLogFiles(self, logs: List[str]) -> List[str]:
        d_list,l_list = [],[]
        for log in logs:
            if log.split(" ")[1].isalpha():
                l_list.append(log)
            else:
                d_list.append(log)
                
        # l_list.sort(key=lambda x: (" ".join(x.split()[1:]), x.split()[0]))
        # list를 기준으로 sort할 수 있음!
        l_list.sort(key=lambda x: (x.split()[1:], x.split()[0]))
        
        return l_list + d_list
```

---