---
title: "[MySQL] Programmers SQL 연습문제 (2)"
layout: single
date: '22/10/2021'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - MYSQL
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
```python
SELECT MIN(DATETIME)
FROM ANIMAL_INS;
```

---

### 문제 12
* 22/10/2021
<p align="center">
    <img src="/img/data_engineering/sql/sql_programmers12.png" align="center">
</p>
```python
SELECT COUNT(*)
FROM ANIMAL_INS;
```

---

### 문제 13
* 22/10/2021
<p align="center">
    <img src="/img/data_engineering/sql/sql_programmers13.png" align="center">
</p>
```python
SELECT COUNT(DISTINCT NAME)
FROM ANIMAL_INS;
```

---

### 문제 14
* 22/10/2021
<p align="center">
    <img src="/img/data_engineering/sql/sql_programmers14.png" align="center">
</p>
```python
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
```python
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
```python
SELECT DATE_FORMAT(DATETIME, "%H") AS HOUR, COUNT(*) AS COUNT
FROM ANIMAL_OUTS
GROUP BY HOUR
HAVING HOUR BETWEEN 9 AND 19
ORDER BY HOUR
```

---