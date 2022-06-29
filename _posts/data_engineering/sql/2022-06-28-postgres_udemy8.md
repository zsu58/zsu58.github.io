---
title: "[PostgreSQL] Index"
layout: single
date: '28/06/2022'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - SQL
tags:
  - SQL
  - POSTGRESQL
---

### Index
* Full Table Scan & Index
* Index Types
* Downsides of Indexes
* Index Creation

---

### Full Table Scan & Index
* Frequently (but not always) poor performance
  * 1) takes all the blocks inside the heap file and load all the data into the memory
  * 2) execute iteration to find the matching data
  * Therefore it is important to reduce the amount of data being loaded ➡️ `Index`
* Index: Data Structure that efficiently tells what block a record is stored at, therefore data(block) being loaded into the memory reduces

```sql
-- example of Full Table Scan
SELECT *
FROM users
WHERE username = 'zsu';
```

---

### Index Types
* B-Tree: general purpose index, majority of times used(99%)
* Hash: speeds up simple equality chekcs
* GiST: Geometry, full-text search
* SP-GiST: Clustered data, such as dates(many rows having the same year)
* GIN: columns containing arrays or JSON data
* BRIN: specialized for really large datasets

---

### Downsides of Indexes
* Additional storage required
  * A file is created in the hard drive to store the index data
* Slows down DML(INSERT/UPDATE/DELETE) since index has to be updated
* Index may not be used by postgres

```sql
-- amount of space used by the 'users' table
SELECT pg_size_pretty(pg_relation_size('users'));
-- 872kB

-- amount of space used by the 'users_username_idx' index
SELECT pg_size_pretty(pg_relation_size('users_username_idx'));
-- 184kB
```

---

### Index Creation
* index naming convention: [<table_name>_<column_name>_idx]

```sql
-- create index on table 'users' on column 'username'
CREATE INDEX users_username_idx ON users(username);

-- delete index
DROP INDEX users_username_idx;

-- BENCHMARK 
EXPLAIN ANALYZE
SELECT *
FROM users
WHERE username = 'Emil30';
-- without index execution time was approximately 1.2ms
-- with index execution time was approximately 0.05ms
```



---

### ref
* [🔗 인덱스 참고1](https://rebro.kr/167)
* [🔗 인덱스 참고2](https://velog.io/@gillog/SQL-Index인덱스)

