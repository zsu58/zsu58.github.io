---
title: "[SQL] ORDER BY & CAST & GROUP BY & HAVING & WITH ROLLUP"
layout: single
date: '14/9/2021'
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
* SQL 문법 정리(4)
* ```ORDER BY```를 통해 정렬
    * ```ORDER BY``` 는 ```FROM``` 이후에 작성
    * DEFAULT는 ASCENDING, ```DESC```를 통해 DESCENDING 가능
    * `CAST`를 통해 자료형을 일시적으로 변환시킬 수 있음
      * `signed` - 모든 정수(양수, 0, 음수)
      * `decimal` - 살수(소수점을 포함하는 숫자 포함)
    * 문자형 기준으로 SORT시, 한 문자씩 그 문자 순서를 비교해 정렬
<br><br>
* ```GROUP BY```를 통해 집단 별 통계치 구함
    * ```GROUP BY``` 는 ```FROM``` 이후에 작성
    * ```ORDER BY```와 ```GROUP BY``` 함께 쓸 경우, ```GROUP BY``` → ```ORDER BY```
* ```HAVING```을 통해 ```COUNT```를 통해 산출한 값을 기준으로 filter 가능
    * ```WHERE```뒤에는 ```COUNT``` 올 수 없어 ```HAVING``` 사용
* ```WITH ROLLUP```을 통해 그룹 별 부분 총계 산출 가능
    * `GROUPING`을 통해 NULL 값으로 발생하는 문제 해결 가능

---

### ORDER BY
1) Sorting single columns
* Get the birth date and name for every person, in order of when they were born

```sql
SELECT birthdate, name
FROM people
ORDER BY birthdate;
```

### ORDER BY & CAST
* registration's data-type is TEXT, order sales table by the number value of registration

```sql
SELECT *
FROM sales
ORDER BY CAST(registration_num AS signed)
```

### GROUP BY
2-1) GROUP BY
* Get the IMDB score and count of film reviews grouped by IMDB score in the reviews table

```sql
SELECT imdb_score, count(*)
FROM reviews
GROUP BY imdb_score;
```

2-2) GROUP BY
* Get the country, release year, and lowest amount grossed per release year per country. Order your results by country and release year.

```sql
SELECT country, release_year, MIN(gross)
FROM films
GROUP BY release_year, country
ORDER BY country, release_year;
```
---

### HAVING
3) HAVING
* In how many different years were more than 200 movies released?

```sql
SELECT release_year, COUNT(*)
FROM films
GROUP BY release_year
HAVING COUNT(*) > 200;
```
---

### Übung
4-1) Übung
* return the average budget and average gross earnings for films in each year after 1990, if the average budget is greater than $60 million

```sql
SELECT release_year, AVG(budget) AS avg_budget, AVG(gross) AS avg_gross
FROM films
WHERE release_year > 1990
GROUP BY release_year
HAVING AVG(budget) > 60000000
ORDER BY avg_gross DESC;
```

4-2) Übung
* Get the country, average budget, and average gross take of countries that have made more than 10 films. Order the result by country name, and limit the number of results displayed to 5. You should alias the averages as avg_budget and avg_gross respectively

```sql
SELECT country, AVG(budget) AS avg_budget, AVG(gross) AS avg_gross
FROM films
GROUP BY country
HAVING COUNT(*) > 10
ORDER BY country
LIMIT 5;
```

---

### WITH ROLLUP
5) WITH ROLLUP
* 회원들이 태어난 연도, 가입한 해, 그리고 회원들의 성별에 따른 인원 수를 분류하시오. 이때 연도, 해, 그리고 성별 그룹에 따른 부분총계를 구하시오

```sql
SELECT YEAR(birthday) AS b_year, YEAR(sign_up_day) AS s_year, gender, COUNT(*)
FROM copang_main.member
GROUP BY YEAR(birthday), YEAR(sign_up_day), gender WITH ROLLUP
ORDER BY b_year DESC, s_year DESC, gender DESC;
```

* `WITH ROLLUP`을 사용할 경우 부분 총계시 실제 NULL과 부분 총계에 따른 NULL인지 구분할 수 없음
* 이를 해결하기 위해 `GROUPING`을 사용하면 실제 NULL은 0으로 출력되어서 구분 가능

```sql
SELECT YEAR(sign_up_day) AS s_year, gender, SUBSTRING(address, 1, 2) AS region,
GROUPING(YEAR(sign_up_day)), GROUPING(gender), GROUPING(SUBSTRING(address, 1, 2)),
COUNT(*)
FROM copang_main.member
GROUP BY YEAR(sign_up_day), gender, SUBSTRING(address, 1, 2) WITH ROLLUP
ORDER BY s_year DESC, gender DESC, SUBSTRING(address, 1, 2) DESC;
```
---

