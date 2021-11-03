---
title: "[Python] range & enumerate & map & numpy"
layout: single
date: '16/9/2021'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - PYTHON
tags:
  - PYTHON
---

---
### Writing Efficient Python Code
* ```RANGE```
* ```ENUMERATE```
* ```MAP```
* ```NUMPY```

---

### range
1) range
* Create a new list of odd numbers from 1 to 11 by unpacking a range object


```python
num_list = [*range(1,12,2)]
print(num_list)
```

    [1, 3, 5, 7, 9, 11]


---

### enumerate
2) enumerate


```python
names = ['Jerry', 'Kramer', 'Elaine', 'George', 'Newman']

# method 1
indexed_names = []
for i in range(len(names)):
    index_name = (i, names[i])
    indexed_names.append(index_name)

# method 2
indexed_names = []
for i,name in enumerate(names):
    index_name = (i,name)
    indexed_names.append(index_name) 
print(indexed_names)

# method 3
indexed_names_comp = [(i,name) for i,name in enumerate(names)]
print(indexed_names_comp)

# method 4
indexed_names_unpack = [*enumerate(names, 1)] # 1부터 시작
print(indexed_names_unpack)
```

    [(0, 'Jerry'), (1, 'Kramer'), (2, 'Elaine'), (3, 'George'), (4, 'Newman')]
    [(0, 'Jerry'), (1, 'Kramer'), (2, 'Elaine'), (3, 'George'), (4, 'Newman')]
    [(1, 'Jerry'), (2, 'Kramer'), (3, 'Elaine'), (4, 'George'), (5, 'Newman')]


---

### map
3) map


```python
names = ['Jerry', 'Kramer', 'Elaine', 'George', 'Newman']

# method1
names_map  = map(str.upper, names)
print(list(names_map))

# method2
names_uppercase = [*map(str.upper, names)]
print(names_uppercase)
```

    ['JERRY', 'KRAMER', 'ELAINE', 'GEORGE', 'NEWMAN']
    ['JERRY', 'KRAMER', 'ELAINE', 'GEORGE', 'NEWMAN']
---

### numpy
4) numpy


```python
import numpy as np
num_list = [[ 1,  2,  3,  4,  5],
            [ 6,  7,  8,  9, 10]]

nums = np.array(num_list)

# Print second row of nums
print(nums[1,:])

# Print all elements of nums that are greater than six
print(nums[nums > 6])

# Double every element of nums
nums_dbl = nums * 2
print(nums_dbl)

# Replace the third column of nums
nums[:,2] = nums[:,2] + 1
print(nums)
```

    [ 6  7  8  9 10]
    [ 7  8  9 10]
    [[ 2  4  6  8 10]
     [12 14 16 18 20]]
    [[ 1  2  4  4  5]
     [ 6  7  9  9 10]]
---


### Wrap up
5) Bringing it all together


```python
names = ['Jerry', 'Kramer', 'Elaine', 'George', 'Newman']
def welcome_guest(guest_arrivals):
    return "Welcome to Festivus", guest_arrivals[0]+"...", "You're", guest_arrivals[1], "min late."

arrival_times = [*range(10,60,10)]
arrival_times_np = np.array(arrival_times)
new_times = arrival_times_np - 3

guest_arrivals = [(names[i],time) for i,time in enumerate(new_times)]

welcome_map = map(welcome_guest, guest_arrivals)
guest_welcomes = [*welcome_map]
print(*guest_welcomes, sep='\n')
```

    ('Welcome to Festivus', 'Jerry...', "You're", 7, 'min late.')
    ('Welcome to Festivus', 'Kramer...', "You're", 17, 'min late.')
    ('Welcome to Festivus', 'Elaine...', "You're", 27, 'min late.')
    ('Welcome to Festivus', 'George...', "You're", 37, 'min late.')
    ('Welcome to Festivus', 'Newman...', "You're", 47, 'min late.')

---