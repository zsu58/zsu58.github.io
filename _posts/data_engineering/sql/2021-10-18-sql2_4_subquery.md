---
title: "[SQL] Subquery"
layout: single
date: '18/10/2021'
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
* SQL JOIN 문법 정리(4)
* Subquery - `WHERE`/ `SELECT`/ `FROM` 안에 쿼리를 쓰는 것

---

### Subquery (inside WHERE)
* 가장 많이 사용됨
* Select all fields from populations with records of 2015 that are larger than 1.15 times the average life expectancy

```python
SELECT *
  FROM populations
WHERE year = '2015'
  AND life_expectancy > 
  (SELECT AVG(life_expectancy * 1.15)
   FROM populations
   WHERE year = 2015);
```
---

### Subquery (inside SELECT)
* 이 경우, `AS`로 alias 해야 함!
* GET the country and number of cities per country
* Order the result in descending order of the number and limit the result to 9 countries

```python
SELECT countries.name AS country, COUNT(*) AS cities_num
  FROM cities
    INNER JOIN countries
    ON countries.code = cities.country_code
GROUP BY country
ORDER BY cities_num DESC, country
LIMIT 9;


# 위 코드와 같은 코드
SELECT countries.name AS country,
  (SELECT COUNT(*)
   FROM cities
   WHERE countries.code = cities.country_code) AS cities_num
FROM countries
ORDER BY cities_num DESC, country
LIMIT 9;
```
---

### Subquery (inside FROM)
* 이 경우, `AS`로 alias 해야 함!
* Get the number of languages spoken for each country, identified by the country's local name

```python
SELECT local_name, subquery.lang_num
  FROM countries,
  	(SELECT code, COUNT(*) AS lang_num
  	 FROM languages
  	 GROUP BY code) AS subquery
  WHERE countries.code = subquery.code
ORDER BY lang_num DESC;
```
---
