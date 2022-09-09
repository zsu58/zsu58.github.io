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

### Top Competitors
* 19/11/2021
* [🔗 문제 링크](https://www.hackerrank.com/challenges/full-score/problem?isFullScreen=true)

```sql
SELECT
    h.hacker_id,
    h.name
FROM
    Hackers AS h
INNER JOIN
    Submissions AS s
ON
    s.hacker_id = h.hacker_id
INNER JOIN
    Challenges AS c
ON
    c.challenge_id = s.challenge_id
INNER JOIN
    Difficulty AS d
ON
    d.difficulty_level = c.difficulty_level
    AND d.score = S.score
GROUP BY
    h.hacker_id,
    h.name
HAVING 
    COUNT(1) > 1
ORDER BY
    COUNT(1) DESC,
    h.hacker_id ASC;

```

---

### Ollivander's Inventory
* 19/11/2021
* [🔗 문제 링크](https://www.hackerrank.com/challenges/harry-potter-and-wands/problem?isFullScreen=true)

```sql
SELECT 
    w.ID, 
    P.AGE, 
    w.coins_needed, 
    w.power
FROM (
    SELECT 
        code, 
        power,
        MIN(coins_needed) as min_coins_needed
    FROM 
        wands 
    GROUP BY
    code, 
    power
) as t
INNER JOIN
    WANDS as w
ON 
    w.code = t.code 
    and w.power = t.power 
    and w.coins_needed = t.min_coins_needed
INNER JOIN 
    wands_property as p
ON 
    p.code = w.code
where 
    p.is_evil = 0
order by 
    w.power desc, 
    p.age desc;

-- 다른 코드
SELECT
    W.id, 
    P.age, 
    W.coins_needed, 
    W.power
FROM Wands AS W
INNER JOIN 
    Wands_Property AS P 
ON 
    W.code = P.code
    AND P.is_evil = 0
    AND W.coins_needed = (
        SELECT 
            MIN(W1.coins_needed)
        FROM 
            Wands AS W1
        INNER JOIN 
            Wands_Property AS P1 
        ON 
            W1.code = P1.code
        WHERE 
            P1.is_evil = 0 
            AND 
                W1.power = W.power
            AND 
                P1.age = P.age
    )
ORDER BY 
    W.power DESC, 
    P.age DESC
```

---