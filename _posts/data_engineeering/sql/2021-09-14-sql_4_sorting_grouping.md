---
title: "[SQL] ORDER BY & GROUP BY & HAVING"
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
<br><br>
* ```GROUP BY```를 통해 집단 별 통계치 구함
    * ```GROUP BY``` 는 ```FROM``` 이후에 작성
    * ```ORDER BY```와 ```GROUP BY``` 함께 쓸 경우, ```GROUP BY``` → ```ORDER BY```
* ```HAVING```을 통해 ```COUNT```를 통해 산출한 값을 기준으로 filter 가능
    * ```WHERE```뒤에는 ```COUNT``` 올 수 없어 ```HAVING``` 사용

---

### ORDER BY
1) Sorting single columns
* Get the birth date and name for every person, in order of when they were born

```python
SELECT birthdate, name
FROM people
ORDER BY birthdate;
```

### GROUP BY
2-1) GROUP BY
* Get the IMDB score and count of film reviews grouped by IMDB score in the reviews table

```python
SELECT imdb_score, count(*)
FROM reviews
GROUP BY imdb_score;
```

2-2) GROUP BY
* Get the country, release year, and lowest amount grossed per release year per country. Order your results by country and release year.

```python
SELECT country, release_year, MIN(gross)
FROM films
GROUP BY release_year, country
ORDER BY country, release_year;
```
---

### HAVING
3) HAVING
* In how many different years were more than 200 movies released?

```python
SELECT release_year, COUNT(*)
FROM films
GROUP BY release_year
HAVING COUNT(*) > 200;
```
---

### Übung
4-1) Übung
* return the average budget and average gross earnings for films in each year after 1990, if the average budget is greater than $60 million

```python
SELECT release_year, AVG(budget) AS avg_budget, AVG(gross) AS avg_gross
FROM films
WHERE release_year > 1990
GROUP BY release_year
HAVING AVG(budget) > 60000000
ORDER BY avg_gross DESC;
```

4-2) Übung
* Get the country, average budget, and average gross take of countries that have made more than 10 films. Order the result by country name, and limit the number of results displayed to 5. You should alias the averages as avg_budget and avg_gross respectively

```python
SELECT country, AVG(budget) AS avg_budget, AVG(gross) AS avg_gross
FROM films
GROUP BY country
HAVING COUNT(*) > 10
ORDER BY country
LIMIT 5;
```
