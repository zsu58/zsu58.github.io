---
title: "[SQL] Programmers SQL 연습문제 (1)"
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

### 문제 1
* 16/10/2021
<p align="center">
    <img src="/img/sql/sql_programmers1.png" align="center">
</p>
```python
SELECT *
FROM ANIMAL_INS
ORDER BY ANIMAL_ID;
```

---

### 문제 2
* 16/10/2021
<p align="center">
    <img src="/img/sql/sql_programmers2.png" align="center">
</p>

```python
SELECT NAME, DATETIME
FROM ANIMAL_INS
ORDER BY ANIMAL_ID DESC;
```

---

### 문제 3
* 16/10/2021
<p align="center">
    <img src="/img/sql/sql_programmers3.png" align="center">
</p>

```python
SELECT ANIMAL_ID, NAME
FROM ANIMAL_INS
WHERE INTAKE_CONDITION = 'Sick'
ORDER BY ANIMAL_ID;
```

---

### 문제 4
* 16/10/2021
<p align="center">
    <img src="/img/sql/sql_programmers4.png" align="center">
</p>

```python
SELECT ANIMAL_ID, NAME
FROM ANIMAL_INS
WHERE INTAKE_CONDITION <> 'Aged'
ORDER BY ANIMAL_ID;
```

---

### 문제 5
* 16/10/2021
<p align="center">
    <img src="/img/sql/sql_programmers5.png" align="center">
</p>

```python
SELECT ANIMAL_ID, NAME, DATETIME
FROM ANIMAL_INS
ORDER BY NAME, DATETIME DESC;
```

---

### 문제 6
* 16/10/2021
<p align="center">
    <img src="/img/sql/sql_programmers6.png" align="center">
</p>

```python
SELECT NAME
FROM ANIMAL_INS
ORDER BY DATETIME
LIMIT 1;
```

---

### 문제 7
* 17/10/2021
<p align="center">
    <img src="/img/sql/sql_programmers7.png" align="center">
</p>

```python
SELECT MAX(DATETIME)
FROM ANIMAL_INS;
```

---

### 문제 8
* 17/10/2021
<p align="center">
    <img src="/img/sql/sql_programmers8.png" align="center">
</p>

```python
SELECT COUNT(*)
FROM ANIMAL_INS;
```

---

### 문제 9
* 17/10/2021
<p align="center">
    <img src="/img/sql/sql_programmers9.png" align="center">
</p>

```python
SELECT COUNT(DISTINCT NAME)
FROM ANIMAL_INS;
```

---

### 문제 10
* 17/10/2021
<p align="center">
    <img src="/img/sql/sql_programmers10.png" align="center">
</p>

```python
SELECT ANIMAL_TYPE, COUNT(ANIMAL_TYPE) AS count
FROM ANIMAL_INS
GROUP BY ANIMAL_TYPE
ORDER BY ANIMAL_TYPE ASC
```

---

### 문제 11
* 17/10/2021
<p align="center">
    <img src="/img/sql/sql_programmers11.png" align="center">
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

### 문제 12
* 17/10/2021
<p align="center">
    <img src="/img/sql/sql_programmers12.png" align="center">
</p>

```python
SELECT DATE_FORMAT(DATETIME, "%H") AS HOUR, COUNT(*) AS COUNT
FROM ANIMAL_OUTS
GROUP BY HOUR
HAVING HOUR BETWEEN 9 AND 19
ORDER BY HOUR
```

---



