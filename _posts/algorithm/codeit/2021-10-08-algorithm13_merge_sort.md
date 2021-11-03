---
title: "[Algorithm] 합병 정렬 - 분할정복"
layout: single
date: '8/10/2021'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - CODEIT
tags:
  - ALGORITHM
---

---
### ALGORITHM
* 알고리즘 정리(13)
* Divide and Conquer(2)
  * 핵심 divide/ conquer/ combine
  * 합병 정렬의 경우 divide, conquer이 간단, combine이 복잡

---

### 합병 정렬


```python
# combine
def merge(list1, list2):
    i = 0
    j = 0

    merged_list = []

    while i < len(list1) and j < len(list2):
        if list1[i] > list2[j]:
            merged_list.append(list2[j])
            j += 1
        else:
            merged_list.append(list1[i])
            i += 1

    if i == len(list1):
        merged_list += list2[j:]
    elif j == len(list2):
        merged_list += list1[i:]

    return merged_list

print(merge([1],[]))
print(merge([],[1]))
print(merge([2],[1]))
print(merge([1, 2, 3, 4],[5, 6, 7, 8]))
print(merge([5, 6, 7, 8],[1, 2, 3, 4]))
print(merge([4, 7, 8, 9],[1, 3, 6, 10]))
```

    [1]
    [1]
    [1, 2]
    [1, 2, 3, 4, 5, 6, 7, 8]
    [1, 2, 3, 4, 5, 6, 7, 8]
    [1, 3, 4, 6, 7, 8, 9, 10]



```python
# divide & conquer
def merge_sort(my_list):
    if len(my_list) == 1:
        return my_list
    else:
        mid = len(my_list) // 2
        return merge(merge_sort(my_list[0:mid]), merge_sort(my_list[mid:len(my_list)]))


print(merge_sort([1, 3, 5, 7, 9, 11, 13, 11]))
print(merge_sort([28, 13, 9, 30, 1, 48, 5, 7, 15]))
print(merge_sort([2, 5, 6, 7, 1, 2, 4, 7, 10, 11, 4, 15, 13, 1, 6, 4]))
```

    [1, 3, 5, 7, 9, 11, 11, 13]
    [1, 5, 7, 9, 13, 15, 28, 30, 48]
    [1, 1, 2, 2, 4, 4, 4, 5, 6, 6, 7, 7, 10, 11, 13, 15]

---