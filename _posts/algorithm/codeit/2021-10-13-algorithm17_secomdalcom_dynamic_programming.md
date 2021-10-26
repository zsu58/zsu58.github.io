---
title: "[Algorithm] 최대 수익 - Dynamic Programming(Memoization & Tabulation)"
layout: single
date: '13/10/2021'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - CODEIT
tags:
  - ALGORITHM
---

### ALGORITHM
* 알고리즘 정리(17)
* Dynamic Programming이 필요한 경우
  * 최적 부분 구조가 있음
  * 중복되는 부분 문제들이 있음
* Dyanmic Programming은 2가지 종류가 존재
    * Memoization
        * 재귀를 사용
        * 장점: 모든 경우를 다 계산할 필요 없음
        * 단점: call stack이 계속 쌓임
    * Tabulation
        * 반복을 사용
        * 장점: call stack이 쌓이지 않음
        * 단점: 모든 경우를 다 계산함

---

### 문제
* 솔희는 학원 쉬는 시간에 친구들을 상대로 새꼼달꼼 장사를 합니다. 그러다 문뜩, 갖고 있는 새꼼달꼼으로 벌어들일 수 있는 최대 수익이 궁금해졌는데요...
* 가능한 최대 수익을 리턴시켜 주는 함수 max_profit_memo를 Memoization 방식과 Tabulation 방식으로 작성해 보세요. Memoization의 경우, max_profit_memo는 파라미터 세 개를 받습니다.
* price_list: 개수별 가격이 정리되어 있는 리스트
* count: 판매할 새꼼달꼼 개수
* cache: 개수별 최대 수익이 저장되어 있는 사전
* 예를 들어 price_list가 [0, 100, 400, 800, 900, 1000]이라면,
    * 새꼼달꼼 0개에 0원
    * 새꼼달꼼 1개에 100원
    * 새꼼달꼼 2개에 400원
    * 새꼼달꼼 3개에 800원
    * 새꼼달꼼 4개에 900원
    * 새꼼달꼼 5개에 1000원




```python
# Memoization
def max_profit_memo(price_list, count, cache):
    if count < 2:
        cache[count] = price_list[count]
        return cache[count]

    if count in cache:
        return cache[count]

    if count < len(price_list):
        max_profit = price_list[count]
    else:
        max_profit = 0

    for i in range(1, count // 2 + 1):
        max_profit = max(max_profit, max_profit_memo(price_list, i, cache) + max_profit_memo(price_list, count-i, cache))
    cache[count] = max_profit
    return max_profit


def max_profit(price_list, count):
    max_profit_cache = {}

    return max_profit_memo(price_list, count, max_profit_cache)

# 테스트
print(max_profit([0, 100, 400, 800, 900, 1000], 5))
print(max_profit([0, 100, 400, 800, 900, 1000], 10))
print(max_profit([0, 100, 400, 800, 900, 1000, 1400, 1600, 2100, 2200], 9))
```

    1200
    2500
    2400



```python
# Tabulation
def max_profit(price_list, count):
    profit_tbl = [0]

    for i in range(1, count + 1):
        if i < len(price_list):
            biggest_profit = price_list[i]
        else:
            biggest_profit = 0
        for j in range(1, count // 2 + 1):
            biggest_profit = max(biggest_profit, max_profit(price_list, j) + max_profit(price_list, count - j))
        profit_tbl.append(biggest_profit)

    return profit_tbl[count]

# 테스트
print(max_profit([0, 200, 600, 900, 1200, 2000], 5))
print(max_profit([0, 300, 600, 700, 1100, 1400], 8))
print(max_profit([0, 100, 200, 400, 600, 900, 1200, 1300, 1500, 1800], 9))
```

    2000
    2400
    1800

