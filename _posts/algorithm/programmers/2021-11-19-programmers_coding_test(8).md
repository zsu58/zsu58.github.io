---
title: "[ALGORITHM] Programmers ALGORITHM 연습문제 Lv2 (2)"
layout: single
date: '29/11/2021'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - PROGRAMMERS
tags:
  - ALGORITHM
  - PROGRAMMERS
---

---
### ALGORITHM Übung - Programmers
* 알고리즘 문제 풀이를 통한 코딩 테스트 연습

---

### [3차] 파일명 정렬
* 29/11/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test65_1.png" align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test65_2.png" align="center">
</p>
```python
import re

def solution(files):
    files = sorted(files, key=lambda x:
                                (re.findall(r"[a-zA-Z-.\s]+", x.lower())[0],
                                int(re.findall(r"[0-9]+", x)[0]))
                   )
    return files
```

---

