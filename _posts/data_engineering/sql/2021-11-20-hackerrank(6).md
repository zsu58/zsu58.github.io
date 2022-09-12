---
title: "[MySQL] Hackerrank SQL 연습문제 (6)"
layout: single
date: '20/11/2021'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - SQL
tags:
  - MYSQL
---

---
### SQL Übung - Hackerrank
* SQL 문제 풀이를 통한 SQL 연습

---

### Contest Leaderboard
* 20/11/2021
* [🔗 문제 링크](https://www.hackerrank.com/challenges/contest-leaderboard/problem?isFullScreen=true)

```sql
-- JOIN 하기 전 데이터를 최소화하는 버전
SELECT 
    foo2.hacker_id,
    h.name,
    foo2.t_score
FROM (
    SELECT
        hacker_id,
        SUM(max_score) AS t_score
    FROM (
        SELECT
            hacker_id,
            challenge_id,
            MAX(score) as max_score
        FROM
            Submissions AS s
        GROUP BY
            hacker_id,
            challenge_id
    ) as foo
    GROUP BY
        hacker_id
    HAVING SUM(max_score) <> 0
) as foo2
JOIN
    Hackers AS h
ON
    foo2.hacker_id = h.hacker_id
ORDER BY
    foo2.t_score DESC,
    foo2.hacker_id;

-- 코드가 간략한 버전
SELECT
    foo.hacker_id,
    h.name,
    SUM(foo.max_score) AS t_score
FROM (
    SELECT
        hacker_id,
        challenge_id,
        MAX(score) as max_score
    FROM
        Submissions AS s
    GROUP BY
        hacker_id,
        challenge_id
) as foo
JOIN
    Hackers AS h
ON
    foo.hacker_id = h.hacker_id
GROUP BY
    foo.hacker_id,
    h.name
HAVING 
    SUM(foo.max_score) <> 0
ORDER BY
    SUM(foo.max_score) DESC,
    foo.hacker_id;

```

---

### Project Planning
* 20/11/2021
* [🔗 문제 링크](https://www.hackerrank.com/challenges/sql-projects/problem?isFullScreen=true)

```sql
-- MS_SQL 기준 코드
SELECT
    CONCAT(MIN(Start_Date), " ", MAX(End_Date))
FROM(
    SELECT
        Start_Date,
        End_Date,
        DATEADD(DAY, -ROW_NUMBER() OVER(ORDER BY Start_Date), Start_Date) project_group
    FROM
        Projects
) as foo
GROUP BY
    project_group
ORDER BY
    COUNT(1),
    MIN(Start_Date);

```

---

### Placements
* 20/11/2021
* [🔗 문제 링크](https://www.hackerrank.com/challenges/placements/problem?isFullScreen=true)

```sql
SELECT
    s.Name
FROM
    Students AS s
JOIN
    Packages AS p1
ON
    s.ID = p1.ID
JOIN
    (
    SELECT
        f.ID,
        f.Friend_ID,
        p2.Salary
    FROM
        Friends AS f
    JOIN
        Packages AS p2
    ON
        f.Friend_ID = p2.ID
    ) as fp
ON
    s.ID = fp.ID
    AND
        p1.Salary < fp.Salary
ORDER BY
    fp.Salary;

```

---

### Symmetric Pairs
* 20/11/2021
* [🔗 문제 링크](https://www.hackerrank.com/challenges/symmetric-pairs/problem?isFullScreen=true)

```sql
SELECT
    f1.X,
    f1.Y
FROM
    Functions AS f1
JOIN
    Functions AS f2
ON
    f1.X = f2.Y
    AND f2.X = f1.Y
GROUP BY 
    f1.X,
    f1.Y
HAVING
    COUNT(f1.X) > 1
    OR f1.X < f1.Y
ORDER BY
    f1.X;

```

---

### Interviews
* 20/11/2021
* [🔗 문제 링크](https://www.hackerrank.com/challenges/interviews/problem?isFullScreen=false)

```sql
SELECT
    con.contest_id,
    con.hacker_id,
    con.name,
    SUM(ss.total_submissions),
    SUM(ss.total_accepted_submissions),
    SUM(vs.total_views),
    SUM(vs.total_unique_views)
FROM 
    Contests as con
JOIN
    Colleges as col
ON
    con.contest_id = col.contest_id
JOIN
    Challenges AS ch
ON
    col.college_id = ch.college_id

LEFT JOIN
    (
        SELECT
            challenge_id,
            SUM(total_views) AS total_views,
            SUM(total_unique_views) AS total_unique_views
        FROM
            View_Stats
        GROUP BY
            challenge_id        
    ) AS vs
ON
    ch.challenge_id = vs.challenge_id
LEFT JOIN
    (
        SELECT
            challenge_id,
            SUM(total_submissions) AS total_submissions,
            SUM(total_accepted_submissions) AS total_accepted_submissions
        FROM
            Submission_Stats
        GROUP BY
            challenge_id        
    ) AS ss
ON
    ch.challenge_id = ss.challenge_id
GROUP BY
    con.contest_id,
    con.hacker_id,
    con.name
HAVING
    SUM(ss.total_submissions) <> 0
    AND SUM(ss.total_accepted_submissions) <> 0
    AND SUM(vs.total_views) <> 0
    AND SUM(vs.total_unique_views) <> 0
ORDER BY
    con.contest_id;

```

---

### 15 Days of Learning SQL
* 20/11/2021
* [🔗 문제 링크](https://www.hackerrank.com/challenges/15-days-of-learning-sql/problem?isFullScreen=true)

```sql
WITH cte1 AS (
    SELECT
        t2.submission_date,
        t2.hacker_id,
        h1.name
    FROM (
        SELECT
            submission_date,
            hacker_id,
            ROW_NUMBER() OVER(
                PARTITION BY submission_date
                ORDER BY s_num DESC, hacker_id
            ) AS row_num
        FROM (
            SELECT
                submission_date,
                hacker_id,
                COUNT(1) AS s_num
            FROM 
                Submissions
            GROUP BY
                submission_date,
                hacker_id
        ) AS t1
    ) AS t2
    JOIN 
        Hackers AS h1
    ON
        t2.hacker_id = h1.hacker_id
    WHERE row_num = 1
),
cte2 AS (
    SELECT 
        submission_date, 
        COUNT(DISTINCT hacker_id) n_hackers
    FROM Submissions AS s1
    WHERE (DATEDIFF(DAY, CAST('2016-03-01' AS DATE), s1.submission_date)) = (
        SELECT 
            COUNT(DISTINCT s2.submission_date)
        FROM 
            Submissions AS s2
        WHERE s2.submission_date < s1.submission_date
        AND s2.hacker_id = s1.hacker_id
    )
    GROUP BY
        submission_date
           
)
SELECT
    cte2.submission_date,
    cte2.n_hackers,
    cte1.hacker_id,
    cte1.name
FROM 
    cte1
JOIN
    cte2
ON
    cte1.submission_date = cte2.submission_date
ORDER BY
    cte1.submission_date;

```

---

### Draw The Triangle 1
* 20/11/2021
* [🔗 문제 링크](https://www.hackerrank.com/challenges/draw-the-triangle-1/problem?isFullScreen=true)

```sql
WITH RECURSIVE cte (n) AS (
  SELECT 20
  UNION ALL
  SELECT n - 1 
  FROM cte 
  WHERE n > 1
)
SELECT 
    REPEAT('* ', n)
FROM cte;

```

---

### Draw The Triangle 2
* 20/11/2021
* [🔗 문제 링크](https://www.hackerrank.com/challenges/draw-the-triangle-2/problem?isFullScreen=true)

```sql
WITH RECURSIVE cte (n) AS (
  SELECT 1
  UNION ALL
  SELECT n + 1 
  FROM cte 
  WHERE n < 20
)
SELECT 
    REPEAT('* ', n)
FROM cte;

```

---
