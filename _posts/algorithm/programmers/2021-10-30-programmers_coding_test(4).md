---
title: "[ALGORITHM] Programmers ALGORITHM 연습문제 Lv1 (4)"
layout: single
date: '30/10/2021'
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

### 부족한 금액 계산하기
* 30/10/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test31.png" align="center">
</p>
```python
def solution(price, money, count):
    return max(sum([price*i for i in range(1,count+1)])-money,0)
```

---

### 나머지가 1이 되는 수 찾기
* 31/10/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test32.png" align="center">
</p>
```python
def solution(n):
    for i in range(1,n):
        if n%i == 1:
            return i
```

---

### 최소직사각형
* 1/11/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test33.png" align="center">
</p>
```python
def solution(sizes):
    max_size = max(sizes[0])
    min_size = min(sizes[0])
    
    for size in sizes:
        max_size = max(max_size, max(size))
        min_size = max(min_size, min(size))
        
    return max_size * min_size
```

---

### 2016년
* 2/11/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test34.png" align="center">
</p>
```python
def solution(a, b):
    dayPerMonth=[0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30]
    numtoWeekday=["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"]

    return numtoWeekday[(sum([dayPerMonth[i] for i in range(a)])+b)%7]
```

---

### 두 개 뽑아서 더하기
* 3/11/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test35.png" align="center">
</p>
```python
def solution(numbers):
    sum_list = []
    for i in range(len(numbers)-1):
        for j in range(i+1, len(numbers)):
            sum_list.append(numbers[i]+numbers[j])
    return sorted(list(set(sum_list)))
```

---

### 예산
* 3/11/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test36.png" align="center">
</p>
```python
def solution(d, budget):
    res = 0
    for mon in sorted(d):
        if budget >= mon:
            budget -= mon
            res += 1
        else:
            break
    
    return res
```

---

### 3진법 뒤집기
* 4/11/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test37.png" align="center">
</p>
```python
def solution(n):
    ternary = ''
    while n > 2:
        ternary = str(n % 3) + ternary
        n //= 3
    ternary = str(n) + ternary

    result = 0
    for i in range(len(ternary)):
        result += 3**i * int(ternary[i])

    return result

# 다른 사람의 좋은 풀이
def solution(n):
    tmp = ''
    while n:
        tmp += str(n % 3)
        n = n // 3

    answer = int(tmp, 3)
    return answer
```

---

### 약수의 개수와 덧셈
* 4/11/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test38.png" align="center">
</p>
```python
from math import sqrt
def solution(left, right):
    res = 0
    for num in range(left, right + 1):
        if num % sqrt(num) == 0:
        # if int(num ** 0.5) == num ** 0.5: #위와 같음
                res -= num
            else:
                res += num

    return res
```

---

### 폰켓몬

* 5/11/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test39.png" align="center">
</p>
```python
def solution(nums):
    my_ponketmon = {}
    for i in nums:
        if len(my_ponketmon.keys()) == len(nums)//2:
            return len(my_ponketmon.keys())
        if i not in my_ponketmon:
            my_ponketmon[i] = True
    
    return len(my_ponketmon.keys())

# 다른 사람의 좋은 풀이
def solution(ls):
    return min(len(ls)/2, len(set(ls)))
```

---

### 모의고사
* 7/11/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test4.png" align="center">
</p>
```python
def solution(answers):
    answer_dict = {1:(1,2,3,4,5),
                   2:(2,1,2,3,2,4,2,5),
                   3:(3,3,1,1,2,2,4,4,5,5)}

    res={1:0,2:0,3:0}
    for i in range(len(answers)):
        if answer_dict[1][i%5] == answers[i]:
            res[1] += 1
        if answer_dict[2][i%8] == answers[i]:
            res[2] += 1
        if answer_dict[3][i%10] == answers[i]:
            res[3] += 1
    
    return [k for k,v in res.items() if v == max(res.values())]

solution([1,3,2,4,2])
```

---