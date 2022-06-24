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
* Subquery - `WHERE` or `HAVING`/ `SELECT`/ `FROM` 안에 쿼리를 쓰는 것
* `ANY`/`SOME` : 하나라도 조건을 만족하는 경우가 있으면 반환
* `ALL` : 모든 조건을 만족하는 경우가 있으면 반환
* Subquery는 독자적으로도 실행 가능한 비상관 코드와, 그렇지 않은 상관 코드로 구분할 수 있음
* 비상관 코드의 경우 각 Row에 대하여 Subquery가 실행된 결과를 반환
* `EXISTS` : 존재하면 반환
* `NOT EXISTS` : 존재하지 않으면 반환

---

### Subquery (inside WHERE or HAVING)
* 가장 많이 사용됨
* Select all fields from populations with records of 2015 that are larger than 1.15 times the average life expectancy

```sql
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
* 단일 값(single value)만 올 수 있음
* GET the country and number of cities per country
* Order the result in descending order of the number and limit the result to 9 countries

```sql
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

```sql
SELECT local_name, subquery.lang_num
  FROM countries,
  	(SELECT code, COUNT(*) AS lang_num
  	 FROM languages
  	 GROUP BY code) AS subquery
  WHERE countries.code = subquery.code
ORDER BY lang_num DESC;
```

---

### ANY & SOME
* 카테고리가 action인 영화의 view_count 값 중 단 하나라도 큰 영화를 리턴하라

```sql
# 서브쿼리의 결과가 120,1000,3000인 경우, view_count가 120보다 큰 영화들이 리턴됨
SELECT *
FROM theater
WHERE view_count > 
SOME(
	SELECT view_count
    FROM theater
    WHERE category = 'ACTION'
)
```

---

### ALL
* 카테고리가 action인 영화의 view_count 값들 모두보다 큰 영화를 리턴하라

```sql
# 서브쿼리의 결과가 120,1000,3000인 경우, view_count가 3000보다 큰 영화들이 리턴됨
SELECT *
FROM theater
WHERE view_count > 
ALL(
	SELECT view_count
    FROM theater
    WHERE category = 'ACTION'
)
```

---

### 비상관 & 상관 Subquery
* member 테이블의 회원 중에서 리뷰를 하나도 남기지 않아서 review 테이블에 관련 정보가 하나도 없는 회원들만 조회하라

```sql
# 상관 Subquery
SELECT * 
FROM member
WHERE NOT EXISTS 
( 
  SELECT * 
  FROM review 
  WHERE review.mem_id = member.id
);
```

---

