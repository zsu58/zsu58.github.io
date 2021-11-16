---
title: "[SQL] Hackerrank SQL 연습문제(3)"
layout: single
date: '16/11/2021'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - SQL
tags:
  - SQL
---

---
### SQL Übung - Hackerrank
* SQL 문제 풀이를 통한 SQL 연습

---

### Weather Observation Station 6
* 16/11/2021
<p align="center">
    <img src="/img/data_engineering/sql/hackerrank_sql21.png" align="center">
</p>
```python
SELECT 
    CASE 
        WHEN A+B>C AND A+C>B AND B+C>A
        THEN
            CASE 
                WHEN A=B AND B=C AND A=C 
                    THEN "Equilateral"
                WHEN A=B OR B=C OR A=C 
                    THEN "Isosceles"
                ELSE "Scalene"
            END
        ELSE "Not A Triangle"
    END
FROM triangles;
```