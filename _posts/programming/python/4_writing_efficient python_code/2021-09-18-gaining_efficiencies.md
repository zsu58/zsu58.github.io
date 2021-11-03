---
title: "[Python] Counter & combinations & set"
layout: single
date: '20/9/2021'
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
* PART3
* ```Counter``` from module collections
    * 종류별 개수를 반환
* ```combinations``` from itertools
    * 가능한 조합을 list로 반환
* ```set``` from itertools
    * ```set```을 통해 distinct한 element만 산출
    * ```intersection```을 통해 교집합 산출
    * ```difference```을 통해 차집합 산출
    * ```symmetric_difference```을 통해 합집합-교집합 산출
* 계산이 한 번만 필요한 것은 loop 전에 계산하기
* ```map```을 활용해 한 번에 처리하기

---

### Counter
1) Counter


```python
import seaborn as sns
import pandas as pd
from collections import Counter

iris_df = sns.load_dataset('iris')
Counter(iris_df['species'])

# 위와 같음
# species_dict = {}
# for species in iris_species:
#     print(species
#     if species in species_dict.keys():
#         species_dict[species] += 1
#     else:
#         species_dict[species] = 1
```




    Counter({'setosa': 50, 'versicolor': 50, 'virginica': 50})



### combinations
2) combinations


```python
from itertools import combinations

iris_species = list(set(iris_df['species']))

# get every combination of 2
print(list(combinations(iris_species, 2)))
```

    [('setosa', 'virginica'), ('setosa', 'versicolor'), ('virginica', 'versicolor')]
---


### set
3) intersection & difference & symmetric_difference


```python
set_a = set([1, 2, 3])
set_b = set([3, 4, 5])

# 교집합
both = set_a.intersection(set_b)
print(both)

# 차집합
set_a_only = set_a.difference(set_b)
print(set_a_only)

# 합집합-교집합
unique_to_set = set_a.symmetric_difference(set_b)
print(unique_to_set)
```

    {3}
    {1, 2}
    {1, 2, 4, 5}
---


### Better loops
```python
# combinations()
possible_pairs = [*combinations(set(iris_df['species']),2)]
enumerated_tuples = []

for i,pair in enumerate(possible_pairs, 1):
    enumerated_pair_tuple = (i,) + pair
    enumerated_tuples.append(enumerated_pair_tuple)

enumerated_pairs = [*map(list, enumerated_tuples)]
print(enumerated_pairs)


# 위와 같음
# for i,pair in enumerate(possible_pairs, 1):
#     enumerated_pair_tuple = (i,) + pair
#     enumerated_pair_list = list(enumerated_pair_tuple)
#     enumerated_pairs.append(enumerated_pair_list)
```

    [[1, 'setosa', 'virginica'], [2, 'setosa', 'versicolor'], [3, 'virginica', 'versicolor']]

---