---
title: "[MySQL] Programmers SQL 연습문제 (1)"
layout: single
date: '16/10/2021'
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

### 문제 1
* 16/10/2021
<p align="center">
    <img src="/img/data_engineering/sql/sql_programmers1.png" align="center">
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
    <img src="/img/data_engineering/sql/sql_programmers2.png" align="center">
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
    <img src="/img/data_engineering/sql/sql_programmers3.png" align="center">
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
    <img src="/img/data_engineering/sql/sql_programmers4.png" align="center">
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
    <img src="/img/data_engineering/sql/sql_programmers5.png" align="center">
</p>

```python
SELECT ANIMAL_ID, NAME
FROM ANIMAL_INS;
```

---

### 문제 6
* 16/10/2021
<p align="center">
    <img src="/img/data_engineering/sql/sql_programmers6.png" align="center">
</p>

```python
SELECT ANIMAL_ID, NAME, DATETIME
FROM ANIMAL_INS
ORDER BY NAME, DATETIME DESC;
```

---

### 문제 7
* 16/10/2021
<p align="center">
    <img src="/img/data_engineering/sql/sql_programmers7.png" align="center">
</p>

```python
SELECT NAME
FROM ANIMAL_INS
ORDER BY DATETIME
LIMIT 1;
```

---

### 문제 8
* 17/10/2021
<p align="center">
    <img src="/img/data_engineering/sql/sql_programmers8.png" align="center">
</p>

```python
SELECT MAX(DATETIME)
FROM ANIMAL_INS;
```

---

### 문제 9
* 22/10/2021
<p align="center">
    <img src="/img/data_engineering/sql/sql_programmers9.png" align="center">
</p>

```python
SELECT ANIMAL_ID
FROM ANIMAL_INS
WHERE NAME IS NULL
```

---

### 문제 10
* 22/10/2021
<p align="center">
    <img src="/img/data_engineering/sql/sql_programmers10.png" align="center">
</p>

```python
SELECT ANIMAL_ID
FROM ANIMAL_INS
WHERE NAME IS NOT NULL
```

---

