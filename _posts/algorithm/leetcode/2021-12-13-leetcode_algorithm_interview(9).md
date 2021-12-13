---
title: "[ALGORITHM] LeetCode 121. Best Time to Buy and Sell Stock"
layout: single
date: '13/12/2021'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - LEETCODE
tags:
  - ALGORITHM
  - LEETCODE
---

---
### ALGORITHM Übung - LeetCode
* 알고리즘 문제 풀이를 통한 코딩 테스트 연습

---

### 문제
* [🔗 문제 링크](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)

### 코드
```python
# 나의 풀이
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        
        min_price = prices[0]
        max_profit = 0
        for i in range(1,len(prices)):
            max_profit = max(max_profit, prices[i]-min_price)
            min_price = min(min_price, prices[i])
            
        if len(prices) < 0 or max_profit < 0:
            return 0
        
        return max_profit

# 더 좋은 풀이 (시스템의 최대값, 최소값으로 지정하면 if 절 생략 가능)
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        min_price = sys.maxsize
        max_profit = 0
        for p in prices:
            max_profit = max(max_profit, p-min_price)
            min_price = min(min_price, p)
        
        return max_profit

# cf. float 사용 시 무한대 값을 지정할 수도 있음
mx = float('-inf')
mn = float('inf)
```

---