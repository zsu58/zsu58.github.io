---
title: "[MySQL] Hackerrank SQL 연습문제 (3)"
layout: single
date: '16/11/2021'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - SQL
tags:
  - MYSQL
---

---
### SQL Übung - Hackerrank
* SQL 문제 풀이를 통한 SQL 연습

---

### Type of Triangle
* 16/11/2021
<p align="center">
    <img src="/img/data_engineering/sql/hackerrank_sql21.png" align="center">
</p>
```sql
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

### The PADS
* 17/11/2021
<p align="center">
    <img src="/img/data_engineering/sql/hackerrank_sql22_1.png" align="center">
    <img src="/img/data_engineering/sql/hackerrank_sql22_2.png" align="center">
    <img src="/img/data_engineering/sql/hackerrank_sql22_3.png" align="center">
</p>
```sql
-- SELECT CONCAT(Name,
--     CASE 
--         WHEN Occupation = "Doctor" THEN "(D)"
--         WHEN Occupation = "Actor" THEN "(A)"
--         WHEN Occupation = "Singer" THEN "(S)"
--         ELSE "(P)" 
--         END)
SELECT CONCAT(Name, "(", SUBSTRING(Occupation, 1, 1), ")")
FROM OCCUPATIONS
ORDER BY Name;
SElECT CONCAT("There are a total of ", COUNT(*), " ", LOWER(Occupation), "s.")
FROM OCCUPATIONS
GROUP BY Occupation
ORDER BY COUNT(*);
```