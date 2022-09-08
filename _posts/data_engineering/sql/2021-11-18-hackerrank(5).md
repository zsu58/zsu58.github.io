---
title: "[MySQL] Hackerrank SQL 연습문제 (5)"
layout: single
date: '18/11/2021'
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

### Weather Observation Station 18
* 17/11/2021
* [🔗 문제 링크](https://www.hackerrank.com/challenges/weather-observation-station-18/problem?isFullScreen=true)

```sql
SELECT
    ROUND(ABS(MIN(LAT_N) - MAX(LAT_N)) + ABS(MIN(LONG_W) - MAX(LONG_W)), 4)
FROM
    STATION;

```

---

### Weather Observation Station 19
* 18/11/2021
* [🔗 문제 링크](https://www.hackerrank.com/challenges/weather-observation-station-19/problem?isFullScreen=true)

```sql
SELECT
    ROUND(
        SQRT(
            POWER(MAX(LAT_N) - MIN(LAT_N), 2) + POWER(MAX(LONG_w) - MIN(LONG_W), 2)
        ),
        4
    )
FROM
    STATION;

```

---

### Weather Observation Station 20
* 19/11/2021
* [🔗 문제 링크](https://www.hackerrank.com/challenges/weather-observation-station-20/problem?isFullScreen=false)

```sql
SELECT
    ROUND(LAT_N, 4)
FROM 
    (
        SELECT
            LAT_N,
            PERCENT_RANK() OVER(ORDER BY LAT_N) AS pr
        FROM 
            STATION
    ) AS foo
WHERE
    pr = 0.5;

```

---

### Population Census
* 19/11/2021
* [🔗 문제 링크](https://www.hackerrank.com/challenges/asian-population/problem?isFullScreen=true)

```sql
SELECT
     SUM(ci.POPULATION)    
FROM
    CITY AS ci
INNER JOIN
    COUNTRY AS co
ON 
    ci.COUNTRYCODE = co.CODE
    AND co.CONTINENT = 'Asia';

```

---

### African Cities
* 19/11/2021
* [🔗 문제 링크](https://www.hackerrank.com/challenges/african-cities/problem?isFullScreen=true)

```sql
SELECT
     ci.NAME
FROM
    CITY AS ci
INNER JOIN
    COUNTRY AS co
ON 
    ci.COUNTRYCODE = co.CODE
    AND co.CONTINENT = 'Africa';

```

---

### Average Population of Each Continent
* 19/11/2021
* [🔗 문제 링크](https://www.hackerrank.com/challenges/average-population-of-each-continent/problem?isFullScreen=true)

```sql
SELECT
     co.CONTINENT,
     FLOOR(AVG(ci.POPULATION))
FROM
    CITY AS ci
INNER JOIN
    COUNTRY AS co
ON 
    ci.COUNTRYCODE = co.CODE
GROUP BY
    co.CONTINENT;

```

---


### The Report
* 19/11/2021
* [🔗 문제 링크](https://www.hackerrank.com/challenges/the-report/problem?isFullScreen=true)

```sql
SELECT
    CASE 
        WHEN g.Grade < 8 THEN 'NULL'
        ELSE s.Name
    END AS Name,
    g.Grade,
    s.Marks
FROM
    Students AS s
INNER JOIN
    Grades AS g
ON
    s.Marks BETWEEN Min_Mark AND Max_Mark
ORDER BY
    g.Grade DESC, s.Name, s.Marks;

```

---
