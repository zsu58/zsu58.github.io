---
title: "[SQL] INNER JOIN & USING & CASE WHEN"
layout: single
date: '16/09/2021'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - SQL
tags:
  - SQL
---

---
### SQL Übung 
* SQL JOIN 문법 정리(1)

* ```INNER JOIN``` ```ON``` 을 통해 동시에 존재하는 데이터 join
    * key값이 같은 경우 ```ON``` 대신 ```USING()``` 사용 가능
<br><br>
* ```CASE WHEN``` & ```THEN```, ```WHEN``` & ```THEN``` ```ELSE``` & ```END```를 통해 조건에 따른 column 만들 수 있음
* ```INTO```를 통해 query를 만들 수 있음
* `CREATE VIEW` `INTO`를 통해 가상의 table을 만들 수 있음

---

### INNER JOIN
1-1) INNER JOIN
* Join the tables countries (left) and economies (right) aliasing countries AS c and economies AS e
* From this join, SELECT: c.code, aliased as country_code, & name, year, and inflation_rate, not aliased.

```sql
SELECT c.code AS country_code, name, year, inflation_rate
FROM countries AS c
  INNER JOIN economies AS e
    ON c.code = e.code;
```

1-2) INNER JOIN
* For each country, you want to get the country name, its region, the fertility rate, and the unemployment rate for both 2010 and 2015
* match the year of population & economics table

```sql
SELECT c.code, name, region, e.year, fertility_rate, unemployment_rate
  FROM countries AS c
  INNER JOIN populations AS p
    ON c.code = p.country_code
  INNER JOIN economies AS e
    ON c.code = e.code AND p.year = e.year;
```
---

### INNER JOIN & USING
2) INNER JOIN with USING
* Inner join countries on the left and languages on the right with USING(code)
* Select the fields corresponding to: country name AS country, continent name, language name AS language, and whether or not the language is official

```sql
SELECT c.name AS country, continent, l.name AS language, official
  FROM countries AS c
  INNER JOIN languages AS l
    USING(code);
```
---

### SELF JOIN
3) SELF JOIN by INNER JOIN
* Join populations with itself ON country_code
* Select the country_code from p1 and the size field from both p1 and p2. name p1.size as size2010 and p2.size as size2015
* Extend the ON in your query to include only those records where the p1.year (2010) matches with p2.year - 5
* make a column aliased as growth_perc, that calculates the percentage population growth from 2010 to 2015 for each country, using p2.size and p1.size
    * the percentage growth from A to B can be calculated as (B−A)/A*100.0


```sql
SELECT p1.country_code,
       p1.size AS size2010, 
       p2.size AS size2015,
       ((p2.size - p1.size)/p1.size * 100.0) AS growth_perc
FROM populations AS p1
  INNER JOIN populations AS p2
    ON p1.country_code = p2.country_code
        AND p1.year = p2.year - 5;
```
---

### CASE WHEN & INTO
4) CASE WHEN & INTO
* Using the populations table focused only for the year 2015, create a new field aliased as popsize_group to organize population size into 'large' (> 50 million), 'medium' (> 1 million), and 'small' groups
* Write a query to join countries_plus AS c on the left with pop_plus AS p on the right matching on the country code fields
* Sort the data based on geosize_group, in ascending order so that large appears on top
* Select the name, continent, geosize_group, and popsize_group fields

```sql
SELECT country_code, size,
  CASE WHEN size > 50000000
            THEN 'large'
       WHEN size > 1000000
            THEN 'medium'
       ELSE 'small' END
       AS popsize_group
INTO pop_plus       
FROM populations
WHERE year = 2015;

SELECT name, continent, geosize_group, popsize_group
FROM countries_plus as c
  INNER JOIN pop_plus as p
    ON c.code = p.country_code
ORDER BY geosize_group;
```

---

### CREATE VIEW INTO
5) CREATE VIEW INTO
* CREATE VIEW name_of_view INTO
* 분석에 자주 사용되는 review가 2개 이상인 고객들의 id가 담겨있는 테이블을 만들어라

```sql
CREATE VIEW more_than_two_order AS
SELECT mem_id
FROM review
GROUP BY mem_id
HAVING COUNT(mem_id) > 2
```

---