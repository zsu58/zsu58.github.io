---
title: "[SQL] Hackerrank SQL 연습문제 (1)"
layout: single
date: '10/11/2021'
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

### Revising the Select Query I
* 10/11/2021
<p align="center">
    <img src="/img/data_engineering/sql/hackerrank_sql1.png" align="center">
</p>
```python
SELECT *
FROM city
WHERE countrycode="USA"
AND population > 100000
```

### Revising the Select Query II
* 10/11/2021
<p align="center">
    <img src="/img/data_engineering/sql/hackerrank_sql2.png" align="center">
</p>
```python
SELECT name
FROM city
WHERE population > 120000
AND countrycode="USA";
```

### Select All
* 10/11/2021
<p align="center">
    <img src="/img/data_engineering/sql/hackerrank_sql3.png" align="center">
</p>
```python
SELECT *
FROM city;
```

### Select By ID
* 10/11/2021
<p align="center">
    <img src="/img/data_engineering/sql/hackerrank_sql4.png" align="center">
</p>
```python
SELECT *
FROM city
WHERE id = 1661;
```

### Japanese Cities' Attributes
* 11/11/2021
<p align="center">
    <img src="/img/data_engineering/sql/hackerrank_sql5.png" align="center">
</p>
```python
SELECT *
FROM city
WHERE countrycode = 'JPN';
```

### Japanese Cities' Names
* 11/11/2021
<p align="center">
    <img src="/img/data_engineering/sql/hackerrank_sql6.png" align="center">
</p>
```python
SELECT name
FROM city
WHERE countrycode = 'JPN'
```



### Weather Observation Station 1
* 11/11/2021
<p align="center">
    <img src="/img/data_engineering/sql/hackerrank_sql7.png" align="center">
</p>
```python
SELECT city, state
FROM station;
```

### Weather Observation Station 3
* 11/11/2021
<p align="center">
    <img src="/img/data_engineering/sql/hackerrank_sql8.png" align="center">
</p>
```python
SELECT DISTINCT(city)
FROM station
WHERE ID % 2 = 0;
```

### Weather Observation Station 4
* 11/11/2021
<p align="center">
    <img src="/img/data_engineering/sql/hackerrank_sql9.png" align="center">
</p>
```python
SELECT COUNT(*) - COUNT(DISTINCT(city))
FROM station;
```

### Weather Observation Station 5
* 11/11/2021
<p align="center">
    <img src="/img/data_engineering/sql/hackerrank_sql10.png" align="center">
</p>
```python
(SELECT city, LENGTH(city)
FROM station
ORDER BY LENGTH(city) ASC, city
LIMIT 1)
UNION
(SELECT city, LENGTH(city)
FROM station
ORDER BY LENGTH(city) DESC, city
LIMIT 1)
```