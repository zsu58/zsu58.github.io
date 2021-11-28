---
title: "[ALGORITHM] Programmers ALGORITHM 연습문제 Lv2 (1)"
layout: single
date: '19/11/2021'
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

### N개의 최소공배수
* 19/11/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test55.png" align="center">
</p>
```python
def solution(arr):
    def gcd(x, y):
        while(x):
            x, y =  y%x, x 
        return y
    
    res = 1
    for i in arr:
        res *=  i // gcd(res, i)
    return res
```

---

### JadenCase 문자열 만들기
* 19/11/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test56.png" align="center">
</p>
```python
def solution(s):
    return " ".join([word.capitalize() for word in s.split(" ")])
```

---

### 행렬의 곱셈
* 20/11/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test57.png" align="center">
</p>
```python
def solution(arr1, arr2):
    return [[sum(a * b for a, b in zip(row_a, column_b)) for column_b in zip(*arr2)] for row_a in arr1]
```

---

### 피보나치 수
* 21/11/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test58.png" align="center">
</p>
```python
def solution(n):
    fiboList=[0,1]
    for i in range(n-1):
        fiboList.append(fiboList[i+1] + fiboList[i])

    return fiboList[n]%1234567

# 다른 사람의 좋은 풀이
def solution(n):
    a,b=0,1
    for i in range(n-1):
        a,b=b,a+b
    
    return b%1234567
```

---

### 최댓값과 최솟값
* 22/11/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test59.png" align="center">
</p>
```python
def solution(s):
    valList = list(s.split(" "))
    minVal = int(valList[0])
    maxVal = int(valList[0])
    for i in valList:
        maxVal = max(maxVal, int(i))
        minVal = min(minVal, int(i))
    return str(minVal) + " " + str(maxVal)
```

---

### 숫자의 표현
* 23/11/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test60.png" align="center">
</p>
```python
def solution(n):
    answer = 0
    for i in range(1, n+1):
        sum =0
        for j in range(i, n+1):
            sum += j
            if sum == n:
                answer += 1
                break
            elif sum > n:
                break
    return answer

# 다른 사람의 좋은 풀이
def expressions(num):
    return len([i  for i in range(1,num+1,2) if num % i is 0])
```

---

### 다음 큰 숫자
* 24/11/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test61.png" align="center">
</p>
```python
def solution(n):
    
    numOne = bin(n).count("1")
    while True:
        n += 1
        if bin(n).count("1") == numOne:
            break
    return n
```

---

### [3차] n진수 게임
* 25/11/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test62.png" align="center">
</p>
```python
def convert(num, n):
    convertDict = {10:"A", 11:"B", 12:"C", 13:"D", 14:"E", 15:"F"}

    if num == 0:
        return "0"

    ans = ""
    while (num):
        if num%n in convertDict.keys():
            ans = convertDict[num%n] + ans
        else:
            ans = str(num%n) + ans
        num //= n
    return ans

def solution(n, t, m, p):

    replies = ""
    num = 0
    while (len(replies) < t*m):
        replies += convert(num, n)
        num += 1

    return replies[p-1:t*m:m]

# 다른 사람의 좋은 풀이
def solution(n, t, m, p):
    data = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
    numbers = "0"
    for number in range(1, t*m):
        temp = []
        while number > 0:
            temp.append(data[number%n])
            number //= n
        numbers += "".join(reversed(temp))

    return numbers[p-1:t*m:m]

# 참고 : 10진수 숫자를 n진수로 바꾸는 함수
def convert(num, n):

    if num == 0:
        return "0"

    ans = ""
    while (num):
        ans = str(num%n) + ans
        num //= n
    return ans
```

---

### A Correct Parenthesis
* 26/11/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test63.png" align="center">
</p>
```python
def solution(s):

    openP = 0
    for p in s:
        if p == "(":
            openP += 1
        else:
            openP -= 1
        if openP < 0:
            return False

    return openP == 0
```

---

### 땅따먹기
* 28/11/2021
<p align="center">
    <img src="/img/backend/algorithm/coding_test/coding_test64.png" align="center">
</p>
```python
def solution(land):
    for i in range(1,len(land)):
        for j in range(4):
            land[i][j] += max(land[i-1][:j] + land[i-1][j+1:])
    return max(land[-1])
```

---




