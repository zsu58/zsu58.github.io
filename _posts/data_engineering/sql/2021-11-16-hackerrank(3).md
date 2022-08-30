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

---

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

---

### OCCUPATIONS
* 17/11/2021
* [🔗 문제 링크](https://www.hackerrank.com/challenges/occupations/problem?isFullScreen=true)

```sql
SELECT
    MAX(CASE WHEN OCCUPATION = 'Doctor' THEN NAME END) AS Doctor,
    MAX(CASE WHEN OCCUPATION = 'Professor' THEN NAME END) AS Professor,
    MAX(CASE WHEN OCCUPATION = 'Singer' THEN NAME END) AS Singer,
    MAX(CASE WHEN OCCUPATION = 'Actor' THEN NAME END) AS Actor
FROM (
    SELECT 
        *, 
        ROW_NUMBER() OVER (PARTITION BY OCCUPATION ORDER BY NAME) RN
    FROM OCCUPATIONS
    ) foo
GROUP BY RN
```

---

### Binary Tree Nodes
* 17/11/2021
* [🔗 문제 링크](https://www.hackerrank.com/challenges/binary-search-tree-1/problem?isFullScreen=true)

```sql
SELECT
    BST.N,
    CASE
        WHEN foo.criteria = 3 THEN 'Root'
        WHEN foo.criteria = 2 THEN 'Inner'
        ELSE 'Leaf'
    END
FROM
    BST
LEFT JOIN
(
    SELECT
        COALESCE(P, N) AS node,
        COUNT(1) AS criteria
    FROM
        BST
    GROUP BY
        1
) AS foo
ON
    BST.N = foo.node
ORDER BY 
    BST.N;

-- 더 좋은 풀이
SELECT 
    N,
    CASE 
        WHEN P IS NULL THEN 'Root'
        WHEN N IN (
            SELECT DISTINCT P 
            FROM BST
            WHERE P IS NOT NULL
        ) THEN 'Inner'
        ELSE 'Leaf'
    END
FROM
    BST
ORDER BY
    N;

```

---

### New Companies
* 17/11/2021
* [🔗 문제 링크](https://www.hackerrank.com/challenges/the-company/problem?isFullScreen=true)

```sql
SELECT 
    c.company_code,
    c.founder,
    COUNT(DISTINCT lm.lead_manager_code),
    COUNT(DISTINCT sm.senior_manager_code),
    COUNT(DISTINCT m.manager_code),
    COUNT(DISTINCT e.employee_code)
FROM Company AS c
LEFT JOIN
    Lead_Manager AS lm
ON
    lm.company_code = c.company_code
LEFT JOIN
    Senior_Manager AS sm
ON
    sm.company_code = lm.company_code
    AND sm.lead_manager_code = lm.lead_manager_code
LEFT JOIN
    Manager AS m
ON 
    m.company_code = sm.company_code
    AND m.lead_manager_code = sm.lead_manager_code
    AND m.senior_manager_code = sm.senior_manager_code
LEFT JOIN
    Employee AS e
ON
    e.company_code = m.company_code
    AND e.lead_manager_code = m.lead_manager_code
    AND e.senior_manager_code = m.senior_manager_code
    AND e.manager_code = m.manager_code
GROUP BY
    c.company_code,
    c.founder
ORDER BY
    c.company_code;

```

---

### Revising Aggregations - The Count Function
* 17/11/2021
* [🔗 문제 링크](https://www.hackerrank.com/challenges/revising-aggregations-the-count-function/problem?isFullScreen=true)

```sql
SELECT
    COUNT(1)    
FROM 
    CITY
WHERE
    population > 100000;

```

---

### Revising Aggregations - The Sum Function
* 17/11/2021
* [🔗 문제 링크](https://www.hackerrank.com/challenges/revising-aggregations-sum/problem?isFullScreen=true)

```sql
SELECT
    SUM(POPULATION)
FROM
    CITY
WHERE
    DISTRICT = 'California';

```

---

### Revising Aggregations - Averages
* 17/11/2021
* [🔗 문제 링크](https://www.hackerrank.com/challenges/revising-aggregations-the-average-function/problem?isFullScreen=true)

```sql
SELECT
    AVG(POPULATION)
FROM
    CITY
WHERE
    DISTRICT = 'California';

```

---

### Revising Aggregations - Averages
* 17/11/2021
* [🔗 문제 링크](https://www.hackerrank.com/challenges/revising-aggregations-the-average-function/problem?isFullScreen=true)

```sql
SELECT
    AVG(POPULATION)
FROM
    CITY
WHERE
    DISTRICT = 'California';

```

---

### Average Population
* 17/11/2021
* [🔗 문제 링크](https://www.hackerrank.com/challenges/average-population/problem?isFullScreen=true)

```sql
SELECT
    ROUND(AVG(POPULATION))
FROM
    CITY;

```