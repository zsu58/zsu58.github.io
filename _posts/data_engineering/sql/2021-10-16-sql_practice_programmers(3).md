---
title: "[SQL] Programmers SQL 연습문제 (3)"
layout: single
date: '16/10/2021'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - SQL
tags:
  - SQL
---

---
### SQL Übung - Programmers
* SQL 문제 풀이를 통한 연습

---

### 문제 20
* [🔗 문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/59043)

```sql
SELECT
    AI.ANIMAL_ID,
    AI.NAME
FROM
    ANIMAL_INS AS AI
INNER JOIN
    ANIMAL_OUTS AS AO
ON
    AI.ANIMAL_ID = AO.ANIMAL_ID
    AND AO.DATETIME < AI.DATETIME 
ORDER BY
    AI.DATETIME
```

---

### 문제 21
* [🔗 문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/59044)

```sql
SELECT
    AI.NAME,
    AI.DATETIME
FROM 
    ANIMAL_INS AS AI
LEFT JOIN
    ANIMAL_OUTS AS AO
ON
    AI.ANIMAL_ID = AO.ANIMAL_ID
WHERE
    AO.ANIMAL_ID IS NULL
ORDER BY
    AI.DATETIME
LIMIT 
    3;
```

---

### 문제 22
* [🔗 문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/59045)

```sql
SELECT
    AI.ANIMAL_ID,
    AI.ANIMAL_TYPE,
    AI.NAME
FROM
    ANIMAL_INS AS AI
INNER JOIN
    ANIMAL_OUTS AS AO
ON
    AI.ANIMAL_ID = AO.ANIMAL_ID
    AND SUBSTRING(AI.SEX_UPON_INTAKE, 1, 1) = 'I'
    AND SUBSTRING(AO.SEX_UPON_OUTCOME, 1, 1) <> 'I'
ORDER BY
    AI.ANIMAL_ID;

```

---

### 문제 23
* [🔗 문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/59046)

```sql
SELECT
    ANIMAL_ID,
    NAME,
    SEX_UPON_INTAKE
FROM 
    ANIMAL_INS
WHERE
    NAME IN ('Lucy', 'Ella', 'Pickle', 'Rogan', 'Sabrina', 'Mitty');

```

---

### 문제 24
* [🔗 문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/59047)

```sql
SELECT
    ANIMAL_ID,
    NAME
FROM
    ANIMAL_INS
WHERE
    LOWER(name) LIKE '%el%'
    AND ANIMAL_TYPE = 'Dog'
ORDER BY
    NAME;

```

---

### 문제 25
* [🔗 문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/59409)

```sql
SELECT
    ANIMAL_ID,
    NAME,
    CASE
        WHEN SUBSTRING(SEX_UPON_INTAKE, 1, 1) = 'I' THEN 'X'
        ELSE 'O'
    END AS '중성화'
FROM 
    ANIMAL_INS;

```

---

### 문제 26
* [🔗 문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/59411)

```sql
SELECT
    AO.ANIMAL_ID,
    AO.NAME
FROM
    ANIMAL_OUTS AS AO
INNER JOIN
    ANIMAL_INS AS AI
ON
    AO.ANIMAL_ID = AI.ANIMAL_ID
ORDER BY
    AO.DATETIME - AI.DATETIME DESC
LIMIT 2;
    
```

---

### 문제 27
* [🔗 문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/59414#fn1)

```sql
SELECT
    ANIMAL_ID,
    NAME,
    DATE_FORMAT(DATETIME, '%Y-%m-%d') AS '날짜'
FROM 
    ANIMAL_INS
ORDER BY
    ANIMAL_ID;

```

---

### 문제 28
* [🔗 문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/62284)

```sql
WITH cte AS (
SELECT
    *,
    MAX(CASE 
        WHEN NAME = 'Yogurt' THEN 1
    END) +
    MAX(CASE 
        WHEN NAME = 'Milk' THEN 1
    END) AS criteria
FROM
    CART_PRODUCTS
GROUP BY
    CART_ID
)
SELECT CART_ID
FROM cte
WHERE criteria = 2;

```

---

### 문제 29
* [🔗 문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/77487)

```sql
-- 코드를 입력하세요
SELECT
    *
FROM
    PLACES
WHERE
    HOST_ID IN (
        SELECT 
          HOST_ID
        FROM 
          PLACES
        GROUP BY 
          HOST_ID
        HAVING 
          COUNT(1) >= 2
    )
ORDER BY ID;

```

---