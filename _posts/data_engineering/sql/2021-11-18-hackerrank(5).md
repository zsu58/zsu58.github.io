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
    STATION

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
    pr = 0.5
```

---
