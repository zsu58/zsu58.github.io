---
title: "[Python] itertools"
date: '13/05/2022'
layout: single
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - PYTHON
tags:
  - PYTHON
---

```python
from itertools import combinations, permutations, product, combinations_with_replacement
```

* generator가 반환되며, list, tuple 등의 iterable한 객체가 인자로 주어져야 함


```python
list_a, list_b = ["A", "B", "C"], [1, 2, 3]
```


```python
# 조합 (순서 고려)
print(list(combinations(list_a, 2)))
print(list(combinations(list_a, 3)))
```

    [('A', 'B'), ('A', 'C'), ('B', 'C')]
    [('A', 'B', 'C')]



```python
# 순열 (순서 고려 X)
print(list(permutations(list_a, 2)))
print(list(permutations(list_a, 3)))
```

    [('A', 'B'), ('A', 'C'), ('B', 'A'), ('B', 'C'), ('C', 'A'), ('C', 'B')]
    [('A', 'B', 'C'), ('A', 'C', 'B'), ('B', 'A', 'C'), ('B', 'C', 'A'), ('C', 'A', 'B'), ('C', 'B', 'A')]



```python
# 두 iterable한 객체간 모든 조합 
list(product(list_a, list_b))
```




    [('A', 1),
     ('A', 2),
     ('A', 3),
     ('B', 1),
     ('B', 2),
     ('B', 3),
     ('C', 1),
     ('C', 2),
     ('C', 3)]




```python
# 중복이 포함된 조합
print(list(combinations_with_replacement(list_a, 2)))
print(list(combinations_with_replacement(list_a, 3)))
```

    [('A', 'A'), ('A', 'B'), ('A', 'C'), ('B', 'B'), ('B', 'C'), ('C', 'C')]
    [('A', 'A', 'A'), ('A', 'A', 'B'), ('A', 'A', 'C'), ('A', 'B', 'B'), ('A', 'B', 'C'), ('A', 'C', 'C'), ('B', 'B', 'B'), ('B', 'B', 'C'), ('B', 'C', 'C'), ('C', 'C', 'C')]

