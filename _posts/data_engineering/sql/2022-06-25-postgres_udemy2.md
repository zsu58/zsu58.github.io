---
title: "[PostgreSQL] OFFSET"
layout: single
date: '25/06/2022'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - SQL
tags:
  - SQL
  - POSTGRESQL
---

### OFFSET
* 몇 번째 행 이후의 데이터를 보고 싶을 때 사용
* LIMIT과 함께 사용시 관습적으로 LIMIT 뒤에 사용함

```sql
-- show 20 orders after the 40th row (41th row - 60th row)
SELECT * 
FROM orders 
LIMIT 20
OFFSET 40; 

-- select the names from the 'phones' of only the second and third most expensive phones
SELECT NAME
FROM phones
ORDER BY price DESC
LIMIT 2
OFFSET 1;
```


