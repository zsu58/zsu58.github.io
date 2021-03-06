---
title: "[ALGORITHM] Programmers ALGORITHM 연습문제 Lv1 (1)"
layout: single
date: '18/10/2021'
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

### x만큼 간격이 있는 n개의 숫자
* 18/10/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test1.png" align="center">
</p>
```python
def solution(x, n):
    return [x + x*i for i in range(n)]
```

---

### 행렬의 덧셈
* 18/10/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test2.png" align="center">
</p>
```python
def solution(arr1, arr2):
    return [[sum(j) for j in zip(*i)] for i in zip(arr1, arr2)]
```

---

### 직사각형 별찍기
* 18/10/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test3.png" align="center">
</p>
```python
a, b = map(int, input().strip().split(' '))
for _ in range(b):
    print("*" * a)
```

---

### 핸드폰 번호 가리기
* 19/10/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test4.png" align="center">
</p>
```python
def solution(phone_number):
    return '*' * (len(phone_number)-4) + phone_number[-4:]
```

---

### 하샤드 수
* 19/10/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test5.png" align="center">
</p>
```python
def solution(x):
    num = 0
    for i in str(x):
        num += int(i)

    if (x/num) == int(x/num):
        return True
    else:
        return False

# 다른 사람의 좋은 풀이
def solution(n):
    return n % sum([int(c) for c in str(n)]) == 0
```

---

### 평균 구하기
* 19/10/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test6.png" align="center">
</p>
```python
def solution(arr):
    return sum(arr) / len(arr)
```

---


### 콜라츠 추측
* 19/10/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test7.png" align="center">
</p>
```python
def solution(num):
    ans = 0
    while num != 1 and ans != 500:
        if num % 2 == 0:
            num /= 2
        else:
            num = (num * 3) + 1

        ans += 1

    if ans >= 500:
        return -1
    else:
        return ans
```

---

### 최대공약수와 최소공배수
* 19/10/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test8.png" align="center">
</p>
```python
def solution(n, m):
    max_div = 1
    for i in range(2, max(n, m)):
        if n % i == 0 and m % i == 0:
            max_div = max(max_div, i)

    return [max_div, int(max_div * (n / max_div) * (m / max_div))]
```

---

### 짝수와 홀수
* 20/10/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test9.png" align="center">
</p>
```python
def solution(num):
    return "Even" if num % 2 == 0 else "Odd"
```

---

### 제일 작은 수 제거하기
* 20/10/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test10.png" align="center">
</p>
```python
def solution(arr):
    if len(arr) == 1:
        return [-1]
    else:
        small = min(arr)
        index_num = 0
        for _ in range(len(arr)):
            if small == arr[index_num]:
                # arr.pop(index_num) # pop은 제거되는 값을 반환, del이 조금 더 효율적
                del arr[index_num]
            else:
                index_num += 1

    return arr

# 다른 사람의 좋은 풀이
def solution(arr):
    if len(arr) == 1:
        return [-1]
    small = min(arr)
    return [num for num in arr if num > small]
```

---
