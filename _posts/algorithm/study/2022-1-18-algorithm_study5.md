---
title: "[ALGORITHM] 해시"
layout: single
date: '18/1/2022'
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
* 알고리즘 스터디(5)
* 해시
    
---

### 해시
* 데이터를 다루는 기법 중 하나로 검색과 저장이 아주 유용한 구조
* Key와 Value 쌍으로 데이터를 저장
* Python에서는 dictionary 활용

---

### Hash with Dictionary


```python
# 해시 구현 방법
hash = {}
hash[1] = "apple"
hash["banana"] = 2
hash[(4,5)] = [1,2,3]
hash[10] = {1:"a", 2:"b"}
print(hash)
# set, list, dict은 Key가 될 수 없음
```

    {1: 'apple', 'banana': 2, (4, 5): [1, 2, 3], 10: {1: 'a', 2: 'b'}}



```python
# 값 변경
hash[1] = "melon"
print(hash)
```

    {1: 'melon', 'banana': 2, (4, 5): [1, 2, 3], 10: {1: 'a', 2: 'b'}}



```python
# 값 제거 방법1
hash.pop("banana")

# 값 제거 방법2 (del은 반환을 안해서 성능이 조금 더 좋으나 별 차이 없음)
del(hash[(4,5)])
# 위와 같음
# del hash[(4,5)]

print(hash)
```

    {1: 'apple', 10: {1: 'a', 2: 'b'}}

---

### Loop Dictionary 


```python
# 딕셔너리 생성
for i in range(1,6):
    hash[i] = i**2
```


```python
# 딕셔너리 Key loop
for k in hash.keys():
    print(k)
```

    1
    2
    3
    4
    5



```python
# 딕셔너리 Key loop
for k in hash.values():
    print(k)
```

    1
    4
    9
    16
    25



```python
# 딕셔너리 Key loop
for k,v in hash.items():
    print(k,v)
```

    1 1
    2 4
    3 9
    4 16
    5 25

---

### Sort Dictionary


```python
hash = {1:10, 3:12, 5:7, 7:6, 4:5}
```


```python
# key에 대한 오름차순 정렬
print(sorted(hash.keys(), key=lambda x:x))

# key에 대한 내림차순 정렬
print(sorted(hash.keys(), key=lambda x:-x))
```

    [1, 3, 4, 5, 7]
    [7, 5, 4, 3, 1]



```python
# value에 대한 오름차순 정렬
print(sorted(hash.values(), key=lambda x:x))

# value에 대한 내림차순 정렬
print(sorted(hash.values(), key=lambda x:-x))
```

    [5, 6, 7, 10, 12]
    [12, 10, 7, 6, 5]



```python
# item에 대한 key를 기준으로 오름차순 정렬
print(sorted(hash.items(), key=lambda x:x[0]))

# item에 대한 value을 기준으로 내림차순 정렬
print(sorted(hash.items(), key=lambda x:-x[1]))

# item에 대한 key를 기준으로 오름차순, 그리고 value를 기준으로 내림차순 정렬
print(sorted(hash.items(), key=lambda x:(x[0],-x[1])))
```

    [(1, 10), (3, 12), (4, 5), (5, 7), (7, 6)]
    [(3, 12), (1, 10), (5, 7), (7, 6), (4, 5)]
    [(1, 10), (3, 12), (4, 5), (5, 7), (7, 6)]

---

### 관련 알고리즘 풀이
* [🔗 링크1](https://carl020958.github.io/boj/boj(6)/)
* [🔗 링크2](https://carl020958.github.io/programmers/programmers_coding_test(5)/#완주하지-못한-선수)
* [🔗 링크3](https://carl020958.github.io/programmers/programmers_coding_test(8)/#전화번호-목록)