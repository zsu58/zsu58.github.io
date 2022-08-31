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

### Top Earners
* 17/11/2021
* [🔗 문제 링크](https://www.hackerrank.com/challenges/earnings-of-employees/problem?isFullScreen=false)

```sql
SELECT
    months * salary,
    COUNT(1)
FROM
    Employee
GROUP BY
    months * salary
ORDER BY 
    months * salary DESC
LIMIT 
    1;

```

---

### Weather Observation Station 2
* 17/11/2021
* [🔗 문제 링크](https://www.hackerrank.com/challenges/weather-observation-station-2/problem?isFullScreen=true)

```sql
SELECT
    ROUND(SUM(LAT_N), 2),
    ROUND(SUM(LONG_W), 2)
FROM
    STATION;

```

---


### Weather Observation Station 13
* 17/11/2021
* [🔗 문제 링크](https://www.hackerrank.com/challenges/weather-observation-station-13/problem?isFullScreen=true)

```sql
SELECT
    TRUNCATE(SUM(LAT_N), 4)
FROM
    STATION
WHERE
    LAT_N > 38.7880 
    AND LAT_N < 137.2345
    

```

---

### Weather Observation Station 14
* 17/11/2021
* [🔗 문제 링크](https://www.hackerrank.com/challenges/weather-observation-station-14/problem?isFullScreen=true)

```sql
SELECT
    TRUNCATE(MAX(LAT_N), 4)
FROM
    STATION
WHERE
    LAT_N < 137.2345

```

---


### Weather Observation Station 15
* 17/11/2021
* [🔗 문제 링크](https://www.hackerrank.com/challenges/weather-observation-station-15/problem?isFullScreen=true)

```sql
SELECT
    ROUND(LONG_W, 4)
FROM
    STATION
WHERE
    LAT_N < 137.2345
ORDER BY 
    LAT_N DESC 
LIMIT 1;

```

---

### Weather Observation Station 16
* 17/11/2021
* [🔗 문제 링크](https://www.hackerrank.com/challenges/weather-observation-station-16/problem?isFullScreen=true)

```sql
SELECT
    ROUND(MIN(LAT_N), 4)
FROM
    STATION
WHERE
    LAT_N > 38.7780;

```

---

### Weather Observation Station 17
* 17/11/2021
* [🔗 문제 링크](https://www.hackerrank.com/challenges/weather-observation-station-17/problem?isFullScreen=true)

```sql
SELECT
    ROUND(LONG_W, 4)
FROM
    STATION
WHERE
    LAT_N > 38.7780
ORDER BY
    LAT_N 
LIMIT
    1;

```

---

### Weather Observation Station 18
* 17/11/2021
* [🔗 문제 링크](https://www.hackerrank.com/challenges/weather-observation-station-18/problem?isFullScreen=true)

```sql
SELECT
    ROUND(ABS(MIN(LAT_N) - MAX(LAT_N)) + ABS(MIN(LONG_W) - MAX(LONG_W)), 4)
FROM
    STATION;

```
