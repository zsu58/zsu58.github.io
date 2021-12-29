---
title: "[SQL] AVG & SUM & MAX & MIN & AS"
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
* SQL 문법 정리(3)
* ```AVG``` 평균
  * NULL은 제외하고 계산됨
* ```SUM``` 합계
* ```MAX``` 최대값
* ```MIN``` 최소값
* 연산자
    * ```+```
    * ```-```
    * ```/```
    * ```*```
    * ```%```
* ```AS```를 통해 column의 이름 수정

---
### SUM
1-1) Aggregate functions
* Get the total duration of all films.

```sql
SELECT SUM(duration)
FROM films;
```

---

### MIN
1-2) Aggregate functions
* Get the duration of the shortest film

```sql
SELECT MIN(duration)
FROM films;
```
---

### AVG
1-3) Aggregate functions
* Get the average amount grossed by all films whose titles start with the letter 'A'

```sql
SELECT AVG(gross)
FROM films
WHERE title LIKE 'A%';
```
---

### MAX
1-4) Aggregate functions
* Get the amount grossed by the best performing film between 2000 and 2012, inclusive

```sql
SELECT MAX(gross)
FROM films
WHERE release_year BETWEEN 2000 AND 2012;
```
---

### 나누기
2) Arithmetic
* 나누기 할 때 자료형(float/ int) 주의

```sql
SELECT (10 / 3);
SELECT (10.0 / 3.0);
```

    3
    3.333
---

### AS
3-1) AS aliasing
* Get the title and net profit (the amount a film grossed, minus its budget) for all films. Alias the net profit as net_profit

```sql
SELECT title, gross-budget AS net_profit
FROM films;
```

3-2) AS aliasing
* Get the average duration in hours for all films, aliased as avg_duration_hours

```sql
SELECT AVG(duration)/60.0 as avg_duration_hours
FROM films;
```

4-1) More aliasing
* Get the percentage of people who are no longer alive. Alias the result as percentage_dead

```sql
SELECT 100.0 * COUNT(*)/8397 AS percentage_dead
FROM people
WHERE deathdate IS NOT NULL;


-- SELECT COUNT(*)
-- FROM people;
-- 8397
```

4-2) More aliasing
* Get the number of decades the films table covers. Alias the result as number_of_decades. The top half of your fraction should be enclosed in parentheses

```sql
SELECT (MAX(release_year) - MIN(release_year)) / 10 AS number_of_decades
FROM films;
```

---