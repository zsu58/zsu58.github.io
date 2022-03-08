---
title: "[ALGORITHM] 완전탐색(Brute-Force) & 이분탐색"
layout: single
date: '13/12/2021'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - STUDY_ALGORITHM
tags:
  - ALGORITHM
---

---
### ALGORITHM
* 알고리즘 스터디(2)
* 탐색
    * **완전탐색(Brute-Force)**
    * **이분탐색(Binary Search)**
    * 깊이우선탐색(Depth First Search)
    * 너비우선탐색(Breadth First Search)
    * 문자열탐색
    * KMP(Knuth-Morris-Pratt)
    * BM(Boyer-Moore)

---

### 완전탐색
* 가능한 모든 경우의 수를 탐색
* 효율성의 관점에서는 최악
* 구현방법
    * 반복문
    * 재귀함수
        * cf. 재귀함수는 동적 계획법/ 백트래킹/ 탐욕법에서도 사용됨


```python
# card 안에 8의 순서를 찾는 함수 (반복문)
def solution(card):
    for i in range(len(card)):
        if card[i] == 8:
            return i
    return -1

# card 안에 8의 순서를 찾는 함수 (재귀문)
def solution2(card, idx):
    if card[idx] == 8:
        return idx
    return solution2(card, idx+1)
```


```python
cards = [5,1,6,7,3,8,2,4]
print(solution(cards))
print(solution2(cards, 0))
```

    5
    5


---

### 이분탐색
* 오름차순으로 <u><b>정렬된</b></u> 리스트에서 특정 값의 위치를 찾는 알고리즘
* 중간의 값을 선택하여 찾고자 하는 값과의 크고 작음을 비교함


```python
# card 안에 8의 순서를 찾는 이분탐색 함수
def solution(card):
    l,r = 0,len(card)-1
    while l <= r:
        m = (l+r)//2
        if card[m] == 8:
            return m
        elif card[m] < 8:
            l = m + 1
        elif card[m] > 8:
            r = m - 1
    return m
```


```python
cards = [5,1,6,7,3,8,2,4]
print(solution(cards))
```

    5

---

### 관련 알고리즘 풀이
* [🔗 링크1](https://carl020958.github.io/programmers/programmers_coding_test(4)/#모의고사)
* [🔗 링크2](https://carl020958.github.io/programmers/programmers_coding_test(9)/#소수-찾기)
* [🔗 링크3](https://carl020958.github.io/boj/boj(1)/)

