---
title: "[PostgreSQL] Basic Query Tuning"
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

### Basic Query Tuning
* Query Processing Pipeline
* EXPLAIN & EXPLAIN ANALYZE

---

### Query Processing Pipeline
* Parser
  * checks whether the query is valid
  * build a query tree
* Rewriter
  * decomposes the query and modify if improvements can be made for efficiencies
* Planner
  * evaluate the plans and choose the most efficient plan
* Executor
  * runs the query

---

### EXPLAIN & EXPLAIN ANALYZE
* EXPLAIN: Build a query plan and display info about it
* EXPLAIN ANALYZE: Build a query plan, run it, and display info about it

```sql
EXPLAIN ANALYZE
SELECT username, contents
FROM users AS u
INNER JOIN "comments" AS c ON u.id = c.user_id
WHERE username = 'Alyson14';

 /*
1) Hash Join  (cost=8.31..1756.11 rows=11 width=81) (actual time=0.359..19.250 rows=7 loops=1)
  Hash Cond: (c.user_id = u.id)
  2) ->  Seq Scan on comments c  (cost=0.00..1589.10 rows=60410 width=72) (actual time=0.011..8.107 rows=60410 loops=1)
  3) ->  Hash  (cost=8.30..8.30 rows=1 width=17) (actual time=0.032..0.034 rows=1 loops=1)
        Buckets: 1024  Batches: 1  Memory Usage: 9kB
        4) ->  Index Scan using users_username_idx on users u  (cost=0.28..8.30 rows=1 width=17) (actual time=0.025..0.027 rows=1 loops=1)
              Index Cond: ((username)::text = 'Alyson14'::text)
Planning Time: 0.387 ms
Execution Time: 19.383 ms
*/
```
* The top row and all the arrows(➡️) are query nodes, meaning that it is a step where postgres is trying to access some data stored inside the database or trying to do some processing
* Sequence: 4) Index Scan ➡️ 2) Seq Scan ➡️ 3) Hash ➡️ 1) Hash Join
  * 4) Index Scan: accessing some data on the hard disk and emits the data to 3) Hash
  * 2) Seq Scan: Full Scan on a table and emits the data to 1) Hash Join
  * 3) Hash: hashtag process the data and emits the data to 1) Hash Join
  * 1) Hash Join: combines all the data from 3) Hash and 2) Seq Scan

```sql
-- Hash Join  (cost=8.31..1756.11 rows=11 width=81) (actual time=0.359..19.250 rows=7 loops=1)

/*
postgres can get the following information(rows, width) because postgres saves information about the table
*/
SELECT *
FROM pg_stats
WHERE tablename IN ('users', 'comments');
```
* Hash Join: How this node is generating data
* cost: Amount of processing power required for this step
* rows: Guess at how many rows this step will produce
* width: Guess at the average number of bytes of each row



---

### ref
* [🔗 Query Tuning 참고1](https://coding-factory.tistory.com/744)
* [🔗 Query Tuning 참고2](https://velog.io/@jwpark06/Postgresql-%EC%8A%AC%EB%A1%9C%EC%9A%B0-%EC%BF%BC%EB%A6%AC%EC%97%90-%EB%8C%80%EC%B2%98%ED%95%98%EA%B8%B0
https://bactoria.github.io/2019/06/15/%EC%8B%A4%ED%96%89%EA%B3%84%ED%9A%8D-postgresql/)

