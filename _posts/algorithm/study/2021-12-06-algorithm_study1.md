---
title: "[ALGORITHM] Stack & Queue"
layout: single
date: '6/12/2021'
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
* 알고리즘 스터디(1)
* Stack & Queue(Deque)

---

### Stack
* 책을 쌓은 것처럼 차곡차곡 쌓아 올린 형태의 자료구조로 LIFO(Last In First Out)라고도 함
    * 시간 순서에 따라 자료가 쌓이기에 가장 마지막에 삽입된 자료가 가장 먼저 삭제되는 구조적인 특징을 가짐
* 대표적인 기능으로는 push(삽입), pop(삭제), peek(가장 마지막으로 추가된 자료 조회)가 존재
* 대표적으로 웹 브라우저에서 이전 페이지 다음 페이지가 스택을 활용한 사례라고 할 수 있음


```python
# python에서 Stack 구현
class Stack(list):
    # push
    push = list.append
    
    # peek
    def peek(self):
        return self[-1]
    
    # pop은 이미 파이썬의 내장함수로 구현되어 있음
```


```python
# 스텍 선언
s = Stack()

# 데이터 추가
s.push(1)
s.push(5)
s.push(10)

# 보유값 확인
print("my stack contains:", s)

# 삭제
print("popped value is:", s.pop())
# 삭제된 값 확인
print("my stack contains:", s)

# peek
print("peeked value is:", s.peek())
# peek의 경우 변화가 존재하지 않음
print("my stack contains:", s)
```

    my stack contains: [1, 5, 10]
    popped value is: 10
    my stack contains: [1, 5]
    peeked value is: 5
    my stack contains: [1, 5]



```python
# Python의 List을 Stack으로 활용
s = []

# 데이터 추가
s.append(1)
s.append(5)
s.append(10)

# 보유값 확인
print("my stack contains:", s)

# 삭제
print("popped value is:", s.pop())
# 삭제된 값 확인
print("my stack contains:", s)

# peek
print("peeked value is:", s[-1])
# peek의 경우 변화가 존재하지 않음
print("my stack contains:", s)
```

    my stack contains: [1, 5, 10]
    popped value is: 10
    my stack contains: [1, 5]
    peeked value is: 5
    my stack contains: [1, 5]


---

### Queue
* 놀이동산에서 줄을 서서 기다린느 것처럼 먼저 드러온 자료가 먼저 나가는 자료구조로 FIFO(First In First Out)
* 한쪽에서만 삽입, 삭제가 이뤄지는 Stack과 달리 삭제연산만 수행되는 곳과, 삽입연산만 수행되는 곳으로 나뉘어짐
* 대표적인 기능으로는 put(삽입), get(삭제), peek(가장 먼저 추가된 자료 조회)가 존재


```python
# python에서 Queue 구현
class Queue(list):
    # put
    put = list.append
    
    # peek
    def peek(self):
        return self[0]
    
    # get
    def get(self):
        return self.pop(0)
```


```python
# 큐 선언
q = Queue()

# 데이터 추가
q.put(1)
q.put(5)
q.put(10)

# 보유값 확인
print("my queue contains:", q)

# 삭제
print("removed value is:", q.get())
# 삭제된 값 확인
print("my queue contains:", q)

# peek
print("peeked value is:", q.peek())
# peek의 경우 변화가 존재하지 않음
print("my queue contains:", q)
```

    my queue contains: [1, 5, 10]
    removed value is: 1
    my queue contains: [5, 10]
    peeked value is: 5
    my queue contains: [5, 10]



```python
from queue import Queue
q = Queue()

# 데이터 추가
q.put(1)
q.put(5)
q.put(10)

# 삭제
print("removed value is:", q.get())
```

    removed value is: 1



```python
# Python의 List을 Queue으로 활용
q = []

# 데이터 추가
q.append(1)
q.append(5)
q.append(10)

# 보유값 확인
print("my queue contains:", q)

# 삭제
print("removed value is:", q.pop())
# 삭제된 값 확인
print("my queue contains:", q)

# peek
print("peeked value is:", q[0])
# peek의 경우 변화가 존재하지 않음
print("my queue contains:", q)
```

    my queue contains: [1, 5, 10]
    removed value is: 10
    my queue contains: [1, 5]
    peeked value is: 1
    my queue contains: [1, 5]


### Deque
* 데이터를 양방향에서 추가하고 제거할 수 있는 자료 구조


```python
from collections import deque

dq = deque()

# 데이터 추가
dq.append(5)
# 데이터 왼쪽에 추가
dq.appendleft(1)
dq.append(10)

# 보유값 확인
print("my deque contains:", dq)

# 삭제
print("removed value is:", dq.pop())
# 삭제된 값 확인
print("my queue contains:", dq)
```

    my deque contains: deque([1, 5, 10])
    removed value is: 10
    my queue contains: deque([1, 5])


---

### 관련 알고리즘 풀이
* [🔗 링크1](https://carl020958.github.io/programmers/programmers_coding_test(8)/#주식가격)
* [🔗 링크2](https://carl020958.github.io/programmers/programmers_coding_test(8)/#기능개발)
* [🔗 링크3](https://carl020958.github.io/programmers/programmers_coding_test(8)/#다리를-지나는-트럭)
