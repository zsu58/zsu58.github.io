---
title: "[ALGORITHM] LeetCode 49. Group Anagrams"
layout: single
date: '09/12/2021'
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
* [🔗 문제 링크](https://leetcode.com/problems/group-anagrams/)

### 코드 
```python
# 나의 풀이
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        word_dict = {}
        for str in strs:
            s = "".join(sorted(list(str)))
            if s in word_dict.keys():
                word_dict[s].append(str)
            else:
                word_dict[s] = [str]
                
        return [v for v in word_dict.values()]

# 더 좋은 풀이(defaultdict을 사용하면 초기화되는 것을 설정해줄 수 있음)
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        anagrams = collections.defaultdict(list)
        for word in strs:
            anagrams[''.join(sorted(word))].append(word)
        
        return list(anagrams.values())
```

---