---
title: "[MySQL] LEFT JOIN & RIGHT JOIN & FULL JOIN & CROSS JOIN"
layout: single
date: '16/9/2021'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - MYSQL
tags:
  - SQL
---

---
### SQL Übung 
* SQL JOIN 문법 정리(2)
* ```LEFT JOIN``` ```ON``` 을 통해 왼쪽 데이터를 기준으로 오른쪽 데이터를 join
* ```RIGHT JOIN``` ```ON``` 을 통해 오른쪽 데이터를 기준으로 왼쪽 데이터를 join
* ```FULL JOIN``` ```ON``` 을 통해 왼쪽 전체와 오른쪽 전체 데이터를 join, MySQL에서는 불가능
    * key값이 같은 경우 ```ON``` 대신 ```USING()``` 사용 가능
* ```CROSS JOIN``` ```ON``` 을 통해 두 데이터의 전체 조합을 가져올 수 있음
* SQL에서 Multi-line comment 달 경우 ```/*``` Comments ```*/```를 통해 가능
* 두 개의 테이블 간 공통되는 column이 한가지인 경우, `NATURAL JOIN`을 통해 `ON` 없이도 JOIN 가능

---

### LEFT JOIN
1) LEFT JOIN
* Determine the average gross domestic product (GDP) per capita by region in 2010

```python
SELECT region, AVG(gdp_percapita) AS avg_gdp
FROM countries AS c
  LEFT JOIN economies AS e
    ON c.code = e.code
WHERE year = 2010
GROUP BY region
ORDER BY avg_gdp DESC;
```
---

### RIGHT JOIN
2) RIGHT JOIN

```python
/*
SELECT cities.name AS city, urbanarea_pop, countries.name AS country,
       indep_year, languages.name AS language, percent
FROM cities
  LEFT JOIN countries
    ON cities.country_code = countries.code
  LEFT JOIN languages
    ON countries.code = languages.code
ORDER BY city, language;
*/

# 위와 같음
SELECT cities.name AS city, urbanarea_pop, countries.name AS country, indep_year, languages.name AS language, percent
FROM languages
  RIGHT JOIN countries
    ON languages.code = countries.code
  RIGHT JOIN cities
    ON countries.code = cities.country_code
ORDER BY city, language;
```
---

### FULL JOIN
3) FULL JOIN
* Complete a full join with countries on the left and languages on the right
* Next, full join this result with currencies on the right
* Use LIKE to choose the Melanesia and Micronesia regions
* Select the fields corresponding to the country name AS country, region, language name AS language, and basic and fractional units of currency
* MySQL에서는 UNION을 통해 해당 부분 대체

```python
SELECT c1.name AS country, region, l.name AS language,
       basic_unit, frac_unit
FROM countries AS c1
  FULL JOIN languages AS l
    USING (code)
  FULL JOIN currencies AS c2
    USING (code)
WHERE region LIKE 'M%esia';
```
---

### CROSS JOIN
3) CROSS JOIN
* Explore languages potentially and most frequently spoken in the cities of Hyderabad, India and Hyderabad, Pakistan

```python
SELECT c.name AS city, l.name AS language
FROM cities AS c        
  CROSS JOIN languages AS l
WHERE c.name LIKE 'Hyder%';
```

---
