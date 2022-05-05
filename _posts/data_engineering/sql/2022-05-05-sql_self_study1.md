---
title: "[SQL] Duplicates"
layout: single
date: '05/05/2022'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - SQL
tags:
  - SQL
---

---
### Duplicates

```sql
-- b와 c를 모두 고려하여 (해당 조합이) 2개 이상인(중복된) row 알아보기
SELECT 
	 b, c, count(1)
FROM t1
GROUP BY b, c
HAVING count(*) > 1



/*
b와 c를 모두 고려하여 (해당 조합이) 2개 이상인(중복된) 모든 row 가져오기
앞의 query와 달리 부가적인 정보 + 중복된 모든 행을 가져올 수 있음
*/
SELECT t1.a ,t1.b ,t1.c ,t1.d
FROM t1
JOIN (
	SELECT b, c, count(1)
	FROM t1
	GROUP BY b, c
	HAVING count(1) > 1
) AS t2
	ON t1.b = t2.b
	AND t1.c = t2.c

/*
b와 c를 모두 고려하여 (해당 조합이) 2개 이상인(중복된) 모든 row 중
d를 기준으로 첫 번째 행만 filter 한 뒤 (즉, 중복된 값 제거)
a열만 가져오기
*/
SELECT
	t1.a 
FROM (
	SELECT 
		 a 
		,b 
		,c 
		,d 
		,ROW_NUMBER() OVER (
			PARTITION BY b, c 
			ORDER BY d DESC) AS row_num
	FROM table1 
) AS t1
WHERE t1.row_num > 1
```



