---
title: "[MySQL] Hackerrank SQL 연습문제 (2)"
layout: single
date: '11/11/2021'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - MYSQL
tags:
  - SQL
---

---
### SQL Übung - Hackerrank
* SQL 문제 풀이를 통한 SQL 연습

---

### Weather Observation Station 6
* 11/11/2021
<p align="center">
    <img src="/img/data_engineering/sql/hackerrank_sql11.png" align="center">
</p>
```sql
SELECT DISTINCT(city)
FROM station
WHERE SUBSTRING(city, 1, 1) IN ('a', 'e', 'i', 'o', 'u');
```

### Weather Observation Station 7
* 13/11/2021
<p align="center">
    <img src="/img/data_engineering/sql/hackerrank_sql12.png" align="center">
</p>
```sql
SELECT DISTINCT(city)
FROM station
WHERE SUBSTRING(city, -1, 1) IN ('a', 'e', 'i', 'o', 'u');
```

### Weather Observation Station 8
* 13/11/2021
<p align="center">
    <img src="/img/data_engineering/sql/hackerrank_sql13.png" align="center">
</p>
```sql
SELECT city
FROM station
WHERE SUBSTRING(city, 1, 1) IN ('a', 'e', 'i', 'o', 'u')
AND SUBSTRING(city, -1, 1) IN ('a', 'e', 'i', 'o', 'u');
```

### Weather Observation Station 9
* 13/11/2021
<p align="center">
    <img src="/img/data_engineering/sql/hackerrank_sql14.png" align="center">
</p>
```sql
SELECT DISTINCT(city)
FROM station
WHERE SUBSTRING(city, 1, 1) NOT IN ("a", "e", "i", "o", "u");
```

### Weather Observation Station 10
* 13/11/2021
<p align="center">
    <img src="/img/data_engineering/sql/hackerrank_sql15.png" align="center">
</p>
```sql
SELECT DISTINCT(city)
FROM station
WHERE SUBSTRING(city, -1, 1) NOT IN ("a", "e", "i", "o", "u");
```

### Weather Observation Station 11
* 13/11/2021
<p align="center">
    <img src="/img/data_engineering/sql/hackerrank_sql16.png" align="center">
</p>
```sql
SELECT DISTINCT(city)
FROM station
WHERE SUBSTRING(city, -1, 1) NOT IN ("a", "e", "i", "o", "u")
OR SUBSTRING(city, 1, 1) NOT IN ("a", "e", "i", "o", "u");
```

### Weather Observation Station 12
* 13/11/2021
<p align="center">
    <img src="/img/data_engineering/sql/hackerrank_sql17.png" align="center">
</p>
```sql
SELECT DISTINCT(city)
FROM station
WHERE SUBSTRING(city, -1, 1) NOT IN ("a", "e", "i", "o", "u")
AND SUBSTRING(city, 1, 1) NOT IN ("a", "e", "i", "o", "u");
```

### Higher Than 75 Marks
* 15/11/2021
<p align="center">
    <img src="/img/data_engineering/sql/hackerrank_sql18.png" align="center">
</p>
```sql
SELECT Name
FROM Students
WHERE Marks > 75
ORDER BY RIGHT(Name, 3), ID ASC;
```

### Employee Names
* 15/11/2021
<p align="center">
    <img src="/img/data_engineering/sql/hackerrank_sql19.png" align="center">
</p>
```sql
SELECT Name
FROM Employee
ORDER BY name;
```

### Employee Salaries
* 16/11/2021
<p align="center">
    <img src="/img/data_engineering/sql/hackerrank_sql20.png" align="center">
</p>
```sql
SELECT name
FROM Employee
WHERE salary > 2000
AND months < 10
ORDER BY employee_id;
```

