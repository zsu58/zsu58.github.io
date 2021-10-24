---
title: "[SQL] UNION & INTER & EXCEPT"
layout: single
date: '17/10/2021'
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
* SQL JOIN 문법 정리(3)
* `UNION`을 통해 두 데이터 간 합집함을 가져올 수 있음
    * 중복되는 데이터는 한 개만 포함됨
    * `UNION`되는 데이터 세트의 열 개수가 같아야 함
    * `UNION`되는 데이터들의 열의 자료형이 같아야 함
* `UNION ALL`을 통해 두 데이터 간 합집합 + 교집합을 가져올 수 있음
    * 중복된 데이터는 2개가 존재
* `INTER`을 통해 교집합만 가져올 수 있음
* `EXCEPT`을 통해 두 데이터 간 교집합을 제외한 한 데이터만 가져올 수 있음
<br><br>
* SEMI JOIN - `WHERE` & `IN`에 원하는 데이터를 조건으로 입력해, 다른 데이터를 filter할 수 있음
* ANTI JOIN - `WHERE` & `NOT IN`에 원하지 않는 데이터를 조건으로 입력해, 다른 데이터를 filter할 수 있음

---

### UNION 
* Determine all (non-duplicated) country codes in either the cities or the currencies table. The result should be a table with only one field called country_code
* Sort by country_code in alphabetical order

```python
SELECT country_code
  FROM cities
	UNION
SELECT code
  -- From currencies
  FROM currencies
ORDER BY country_code;
```
---

### UNION ALL
* Determine all combinations (include duplicates) of country code and year that exist in either the economies or the populations tables. Order by code then year.a table with only one field called country_code
* The result of the query should only have two columns/fields. Think about how many records this query should result in

```python
SELECT country_code
  FROM cities
	UNION
SELECT code
  -- From currencies
  FROM currencies
ORDER BY country_code;
```
---

### INTERSECT
* Determine the records in common for country code and year for the economies and populations tables
* Order by code and then by year, both in ascending order

```python
SELECT code, year
  FROM economies
	INTERSECT
SELECT country_code, year
  FROM populations
ORDER BY code, year;
```
---

### EXCEPT
* Get the names of cities in cities which are not noted as capital cities in countries as a single field result
* Order the resulting field in ascending order

```python
SELECT name
  FROM cities
	EXCEPT
SELECT capital
  FROM countries
ORDER BY name;
```
---

### WHERE & IN (Semi-join)
* Identify languages spoken in the Middle East
* Order the result by name in ascending order

```python
SELECT DISTINCT name
  FROM languages
WHERE code IN
  (SELECT code
   FROM countries
   WHERE region = 'Middle East')
ORDER BY name;
```
---

### WHERE & NOT IN (Anti-join)
* Identify the code and name used in Oceanian countries which are included in the countries table but not in the currencies table

```python
SELECT code, name
  FROM countries
  WHERE continent = 'Oceania'
  	AND code NOT IN
  	(SELECT code 
  	 FROM currencies);
```
---
