---
title: "[PostgreSQL] Recursive CTE"
layout: single
date: '29/06/2022'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - SQL
tags:
  - SQL
  - POSTGRESQL
---

### Recursive CTE
* Recursive CTE Introduction
* Recursive CTE Step By Step

---

### Recursive CTE Introduction
* Useful when querying a tree or graph-type data structure
* Every Recursive CTE contains a `UNION`

---

### Recursive CTE Step By Step
* Making a Recursive CTE
  * 1) Define the results and working tables
  * 2) Run the initial non-recursive statement, put the results into the results table and working table
    * results & working table's column is defined inside the parentheses(e.g. val)
  * 3) Run the recursive statement replacing the table name defined after recursive(e.g. 'countdown') with a reference to the working table
  * 4) If recursive statement returns some rows, append them to the results table and run recursion again
    * the working table's values are changed to the result of the recursive statement(below UNION) 
  * 5) If recursive statement returns no rows, stop the recursion
  * 6) The results table is returned

```sql
WITH RECURSIVE countdown(val) AS ( 
SELECT 3 AS val -- Initial, Non-recursive query
UNION
SELECT val - 1 FROM countdown WHERE val > 1 -- Recursive Query, think countdown as the working table
)
SELECT *
FROM countdown;
-- result: 3,2,1
```

```sql
WITH RECURSIVE suggestions(leader_id, follower_id, depth) AS (
	SELECT leader_id, follower_id, 1 AS "depth" 
	FROM followers 
	WHERE follower_id = 1 --hard_coding 
	UNION 
	SELECT f.leader_id, f.follower_id, "depth" + 1
	FROM followers AS f
	INNER JOIN suggestions AS s	-- think as the working table
	ON s.leader_id = f.follower_id
	WHERE "depth" < 3
) 
-- 최종 반환 테이블
SELECT DISTINCT u.id, u.username
FROM suggestions AS s
INNER JOIN users AS u
ON u.id = s.leader_id
WHERE "depth" > 1
LIMIT 30;
```