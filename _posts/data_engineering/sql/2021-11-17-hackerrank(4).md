---
title: "[MySQL] Hackerrank SQL 연습문제 (4)"
layout: single
date: '17/11/2021'
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

### Japan Population
* 17/11/2021
* [🔗 문제 링크](https://www.hackerrank.com/challenges/japan-population/problem?isFullScreen=true)

```sql
SELECT
    SUM(POPULATION)
FROM
    CITY
WHERE
    COUNTRYCODE = 'JPN';

```

---

### Population Density Difference
* 17/11/2021
* [🔗 문제 링크](https://www.hackerrank.com/challenges/population-density-difference/problem?isFullScreen=true)

```sql
SELECT
    MAX(POPULATION) - MIN(POPULATION)
FROM
    CITY;

```

---

### The Blunder
* 17/11/2021
* [🔗 문제 링크](https://www.hackerrank.com/challenges/the-blunder/problem?isFullScreen=true)

```sql
SELECT
    CEIL(AVG(Salary) - AVG(REPLACE(Salary, 0, '')))
FROM
    EMPLOYEES;

```

---
