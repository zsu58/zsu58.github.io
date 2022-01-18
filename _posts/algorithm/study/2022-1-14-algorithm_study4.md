---
title: "[ALGORITHM] 진법변환 & 비트연산"
layout: single
date: '14/1/2022'
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
* 알고리즘 스터디(4)
* 진법변환 & 비트연산
    
---

### 진법변환
* 진법 - 수를 셀 때 자릿수가 올라가는 단위를 기준으로 하는 셈법의 총칭하며, 사용하는 수자의 개수가 진법의 숫자를 의미


```python
# 파이썬에서 진법 변환 함수

# 2진법
print(bin(10))

# 8진법
print(oct(10))

# 16진법
# 16진법 사용시 10=a, 11=b, 12=c, 13=d, 14=e, 15=f임
print(hex(162))

# 10진법으로 돌리기
print(int(bin(10),2))
print(int(oct(10),8))
print(int(hex(162),16))
```

    0b1010
    0o12
    0xa2
    10
    10
    162


### 비트연산
* 한 개 혹은 두 개의 이진수에 적용되는 연산
* 비트연산 종류
    * `&`(AND) - 둘 다 1일 경우 1, 아니면 0
    * `|`(OR) - 둘 중 하나가 1일 경우 1, 아니면 0
    * `^`(XOR) - 각각의 자리수를 비교하여 (값이) 다르면 1, 같으면 0
    * `~`(NOT) - 비트 반전 연산자로 1은 0으로, 0은 1로 변환 (1을 더한 뒤 부호를 바꿔줌)
    * `<<`(SHIFT) - 이진수를 왼쪽으로 주어진 수 만큼 옮김
    * `>>`)SHIFT) - 이진수를 오른쪽으로 주어진 수 만큼 옮김


```python
print(bin(13))
print(bin(11))

print("------ $ ------")
# &
print(bin(0b1101 & 0b1011))
print(bin(13 & 11))

print("------ | ------")
# |
print(bin(0b1101 | 0b1011))
print(bin(13 | 11))

print("------ ^ ------")
# ^
print(bin(0b1101 ^ 0b1011))
print(bin(13 ^ 11))

print("------ ~ ------")
# ~
print(bin(~0b1101))
print(bin(~13))

print("------ << ------")
print(bin(0b11 << 3))
print(bin(0b1100 << 2))

print("------ << ------")
print(bin(0b11 >> 3))
print(bin(0b1100 >> 2))
```

    0b1101
    0b1011
    ------ $ ------
    0b1001
    0b1001
    ------ | ------
    0b1111
    0b1111
    ------ ^ ------
    0b110
    0b110
    ------ ~ ------
    -0b1110
    -0b1110
    ------ << ------
    0b11000
    0b110000
    ------ << ------
    0b0
    0b11
---

### 관련 알고리즘 풀이
* [🔗 링크1](https://carl020958.github.io/boj/boj(4)/)
* [🔗 링크2](https://carl020958.github.io/boj/boj(5)/)
* [🔗 링크3](https://carl020958.github.io/programmers/programmers_coding_test(5)/#1차-비밀지도)