---
title: "[ALGORITHM] LeetCode 819. Most Common Word"
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
* [🔗 문제 링크](https://leetcode.com/problems/most-common-word/)

### 코드 
```python
# 나의 풀이
from collections import Counter
import re

class Solution:
    def mostCommonWord(self, paragraph: str, banned: List[str]) -> str:
      # [\W] = [^\w] = [^a-zA-Z_]
        paragraph_list = re.sub('[^a-zA-Z]', " ", paragraph).lower().split()
        for c in Counter(paragraph_list).most_common():
            if c[0] not in banned:
                return c[0]
```

---