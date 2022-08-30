---
title: "[SQL] Programmers SQL 연습문제 (2)"
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

### 문제 11
* 22/10/2021
<p align="center">
    <img src="/img/data_engineering/sql/sql_programmers11.png" align="center">
</p>
```sql
SELECT MIN(DATETIME)
FROM ANIMAL_INS;
```

---

### 문제 12
* 22/10/2021
<p align="center">
    <img src="/img/data_engineering/sql/sql_programmers12.png" align="center">
</p>
```sql
SELECT COUNT(*)
FROM ANIMAL_INS;
```

---

### 문제 13
* 22/10/2021

<p align="center">
    <img src="/img/data_engineering/sql/sql_programmers13.png" align="center">
</p>

```sql
SELECT COUNT(DISTINCT NAME)
FROM ANIMAL_INS;
```

---

### 문제 14
* 22/10/2021

<p align="center">
    <img src="/img/data_engineering/sql/sql_programmers14.png" align="center">
</p>

```sql
SELECT ANIMAL_TYPE, COUNT(ANIMAL_TYPE) AS count
FROM ANIMAL_INS
GROUP BY ANIMAL_TYPE
ORDER BY ANIMAL_TYPE ASC
```

---

### 문제 15
* 22/10/2021

<p align="center">
    <img src="/img/data_engineering/sql/sql_programmers15.png" align="center">
</p>

```sql
SELECT NAME, COUNT(NAME)
FROM ANIMAL_INS
WHERE NAME IS NOT NULL
GROUP BY NAME
HAVING COUNT(NAME) > 1
ORDER BY NAME;
```

---

### 문제 16
* 22/10/2021

<p align="center">
    <img src="/img/data_engineering/sql/sql_programmers16.png" align="center">
</p>

```sql
SELECT DATE_FORMAT(DATETIME, "%H") AS HOUR, COUNT(*) AS COUNT
FROM ANIMAL_OUTS
GROUP BY HOUR
HAVING HOUR BETWEEN 9 AND 19
ORDER BY HOUR;

```

### 문제 17
* [🔗 문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/59413)

```sql
WITH RECURSIVE h(hour) AS (
    SELECT
        0
    UNION ALL
    SELECT
        hour + 1
    FROM
        h
    WHERE
        hour < 23
)
SELECT
    h.hour AS HOUR,
    CASE 
        WHEN cnt IS NULL THEN 0
        ELSE cnt
    END AS COUNT
FROM
    h
    LEFT JOIN
        (
            SELECT
                HOUR(DATETIME) AS hour,
                COUNT(ANIMAL_ID) AS cnt
            FROM
                ANIMAL_OUTS
            GROUP BY
                1
        ) AS foo 
    ON h.hour = foo.hour;

```

---

### 문제 18
* [🔗 문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/59410)

```sql
SELECT 
    ANIMAL_TYPE,
    COALESCE(NAME, "No name") AS NAME,
    SEX_UPON_INTAKE
FROM 
    ANIMAL_INS
ORDER BY
    ANIMAL_ID;

```

---

### 문제 19
* [🔗 문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/59042)

```sql
SELECT
    AO.ANIMAL_ID,
    AO.NAME
FROM
    ANIMAL_OUTS AS AO
LEFT JOIN
    ANIMAL_INS AS AI
ON
    AO.ANIMAL_ID = AI.ANIMAL_ID
WHERE 
    AI.ANIMAL_ID IS NULL
ORDER BY
    AO.ANIMAL_ID;

```

---

### 문제 20
* [🔗 문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/59042)

```sql
SELECT
    AO.ANIMAL_ID,
    AO.NAME
FROM
    ANIMAL_OUTS AS AO
LEFT JOIN
    ANIMAL_INS AS AI
ON
    AO.ANIMAL_ID = AI.ANIMAL_ID
WHERE 
    AI.ANIMAL_ID IS NULL
ORDER BY
    AO.ANIMAL_ID;

```

---
