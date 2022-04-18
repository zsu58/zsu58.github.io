---
title: "[Python] Generator"
date: '13/9/2021'
layout: single
date: '13/09/2021'
# toc: true
# toc_sticky: true
# toc_label: Table of Contents
categories:
  - PYTHON
tags:
  - PYTHON
---


---
### Generator
* list와 같은 ```iterable객체```와 달리 대용량의 memory를 사용하지 않음
     * 그러나 반대로 여러번 값을 가져올 수 없음
* ```next```함수를 통해 다음 generator의 값을 가져올 수 있음
* 함수 안의 ```yield```를 통해 generator을 만들 수도 있음

---


```python
lannister = ['cersei', 'jaime', 'tywin', 'tyrion', 'joffrey']
lengths = (len(person) for person in lannister)

for value in lengths:
    print(value)
```

    6
    5
    5
    6
    7



```python
lannister = ['cersei', 'jaime', 'tywin', 'tyrion', 'joffrey']
lengths = (len(person) for person in lannister)

print(next(lengths))
print(next(lengths))
print(next(lengths))
print(next(lengths))
print(next(lengths))
print(next(lengths)) # 더이상 없으므로 StopIteration 에러 발생
```

    6
    5
    5
    6
    7



    ---------------------------------------------------------------------------

    StopIteration                             Traceback (most recent call last)

    /var/folders/6k/3q6ftyyn3v1gswgzvq0rxsf80000gn/T/ipykernel_31849/842899953.py in <module>
          7 print(next(lengths))
          8 print(next(lengths))
    ----> 9 print(next(lengths)) # 더이상 없으므로 StopIteration 에러 발생
    

    StopIteration: 



```python
def get_lengths(input_list):
    for person in input_list:
        yield len(person)
        
lannister = ['cersei', 'jaime', 'tywin', 'tyrion', 'joffrey']
for value in get_lengths(lannister):
    print(value)
```

    6
    5
    5
    6
    7

---