---
title: "[Algorithm] 시간 복잡도"
layout: single
date: '28/09/2021'
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
* 시간 복잡도 - 알고리즘 평가 방법

---

### List 시간 복잡도
* 인덱싱 - my_list[index] : O(1)
* 정렬 - my_list.sort() / sorted(my_list) : O(nlgn)
* 뒤집기 - my_list.reverse() : O(n)
* 탐색 - element in my_list : O(n)
* 끝에 요소 추가 - my_list.append(element) : O(1)
* 중간에 요소 추가 - my_list.insert(index, element) : O(n)
* 삭제 - del my_list[index] : O(n), (끝 요소 삭제 : O(1))
* 최솟값, 최댓값 찾기 - min(my_list) / max(my_list) : O(n)
* 길이 구하기 - len(my_list) : O(1)
* 슬라이싱 - my_list[a:b] : O(b-a)

### Dictionary 시간 복잡도
* 값 찾기 - my_dict[key] : O(1)
* 값 넣어주기/덮어쓰기 - my_dict[key] = value : O(1)
* 값 삭제 - del my_list[key] : O(1)

---