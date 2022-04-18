---
title: "[Algorithm] 리스트 항목의 합 탐색"
layout: single
date: '06/11/2021'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - CODEIT
tags:
  - ALGORITHM
---

### ALGORITHM
* 알고리즘 정리(32)

---

### 문제
* 특정 숫자와, 숫자로 이루어진 리스트가 주어질 때, 리스트 안의 두 요소의 조합으로 특정 숫자가 되는지 확인하는 함수를 구현하시오.


```python
# 풀이1
def sum_in_list(search_sum, sorted_list):
    num_dict = {}
    for num in sorted_list:
        if search_sum-num in num_dict.keys():
            return True
        else:
            num_dict[num] = True
    return False
            
print(sum_in_list(15, [1, 2, 5, 6, 7, 9, 11]))
print(sum_in_list(15, [1, 2, 5, 7, 9, 11]))
```

    True
    False



```python
# 풀이2 (공간복잡도가 풀이1보다 좋음)
def sum_in_list(search_sum, sorted_list):
    i,j=0,len(sorted_list)-1

    while i < j:
        if sorted_list[i]+sorted_list[j] == search_sum:
            return True
        elif sorted_list[i]+sorted_list[j] > search_sum:
            j -= 1
        else:
            i += 1
    
    return False
            
print(sum_in_list(15, [1, 2, 5, 6, 7, 9, 11]))
print(sum_in_list(15, [1, 2, 5, 7, 9, 11]))
```

    True
    False

