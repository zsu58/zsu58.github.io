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
* ```LEFT JOIN``` ```ON``` 을 통해 왼쪽 테이블을 기준으로 오른쪽 테이블을 join
* ```RIGHT JOIN``` ```ON``` 을 통해 오른쪽 테이블을 기준으로 왼쪽 테이블을 join
* ```FULL JOIN``` ```ON``` 을 통해 왼쪽 전체와 오른쪽 전체 테이블을 join, MySQL에서는 불가능
    * key값이 같은 경우 ```ON``` 대신 ```USING()``` 사용 가능
* ```CROSS JOIN``` ```ON``` 을 통해 두 테이블의 전체 조합을 가져올 수 있음
* SQL에서 Multi-line comment 달 경우 ```/*``` Comments ```*/```를 통해 가능
* 두 테이블 간 공통되는 column이 한가지인 경우, `NATURAL JOIN`을 통해 `ON` 없이도 JOIN 가능
* `WHERE`을 이용하여 JOIN 할 수 있음

---

### LEFT JOIN
1) LEFT JOIN
* Determine the average gross domestic product (GDP) per capita by region in 2010

```sql
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

```sql
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

```sql
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

```sql
SELECT c.name AS city, l.name AS language
FROM cities AS c        
  CROSS JOIN languages AS l
WHERE c.name LIKE 'Hyder%';
```

---

### JOIN USING WHERE
4-1) JOIN USING WHERE(1)
* smith의 이름, 소속 부서명은?

```sql
SELECT ename, dname
FROM emp, dept
WHERE (emp.deptno = dept.deptno)
AND (ename = 'SMITH');
```

4-2) JOIN USING WHERE(2)
* 부서이름별 평균급여가 2000이 넘는 부서와 평균급여는?

```sql
SELECT d.dname, AVG(e.sal) '평균급여'
FROM dept d, emp e 
WHERE (d.deptno = e.deptno)
GROUP BY d.dname
HAVING  AVG(e.sal) >= 2000;
```

4-3) JOIN USING WHERE(3)
* Research 부서 소속 직원들의 부서명, 부서번호, 이름, 사번, 급여, 급여등급은?

```sql
SELECT d.dname, d.deptno, e.ename, e.empno, e.sal, s.grade
FROM emp e, salgrade s, dept d
WHERE (e.deptno = d.deptno)
AND (e.sal BETWEEN s.losal AND s.hisal)
AND (d.dname = 'RESEARCH');
```

4-4) JOIN USING WHERE(4)
* 4 급여등급에 해당하는 직원들의 이름, 사번, 부서명, 급여등급과 그 직원들의 부하직원의 이름, 사번, 부서명, 급여등급은?

```sql
SELECT e1.ename, e1.empno, d1.dname, s1.grade, 
	   e2.ename, e2.empno, d2.dname, s2.grade
FROM emp e1, emp e2, dept d1, dept d2, salgrade s1, salgrade s2
WHERE (e1.empno = e2.mgr)
AND (e2.deptno = d2.deptno)
AND (e1.deptno = d1.deptno)
AND (e1.sal BETWEEN s1.losal AND s1.hisal)
AND (e2.sal BETWEEN s2.losal AND s2.hisal)
AND (s1.grade = 4);
```
---