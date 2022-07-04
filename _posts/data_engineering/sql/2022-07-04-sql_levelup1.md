---
title: "[SQL] SIGN"
layout: single
date: '04/07/2022'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - SQL
tags:
  - SQL
---

### SIGN 
* 숫자 자료형의 매겨변수가 음수라면, -1, 0이라면 0, 양수라면 1을 리턴하는 함수


```sql
-- 현재의 값을 이전의 값과 비교해서 더 크면 +, 같으면 =, 작으면 -를 리턴
-- 단, 이전 값이 없는 경우 NULL을 리턴
SELECT
	*,
    CASE
        SIGN(
            sale - max(sale) OVER (
                PARTITION BY company
                ORDER BY
                    "year" ROWS BETWEEN 1 PRECEDING
                    AND 1 preceding
            )
        )
    WHEN 0 THEN '='
    WHEN 1 THEN '+'
    WHEN -1 THEN '-'
    ELSE NULL
    END
        FROM
            Sales;
```



