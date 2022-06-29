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
* Automatically Generated Indexes
* Actual File of Index

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

### Automatically Generated Indexes
* Automatically generated indexes don't get listed under 'indexes'
  * For every PK column for every table postgres automatically creates an index
  * For any 'unique' constraint postgres automatically creates an index

```sql
-- list of all the index in the database
SELECT relname, relkind
FROM pg_class
WHERE relkind = 'i';
```

---

### Actual File of Index
* File of Index are composed of the following(similar to the Heap file used to store data)
  * Meta Page(8kb): information about the overall index
  * Leaf Block/Page(8kb)
  * Leaf Block/Page(8kb)
  <br>
  ...
  <br>
  * Root Block/Page(8kb): direction info to the Leaf Block
  * Leaf Block/Page(8kb)
    * the first row is the pointer to the next Leaf Block/Page
    * the second row is the first value of that Leaf Block/Page

```sql
-- create extension to look at page
CREATE EXTENSION pageinspect;

-- Find the Root Block/Page's number
SELECT *
-- bt: B-tree metap: metapage
FROM bt_metap('users_username_idx');
-- root: 3
-- meaning that the 3 page is the Root Block/Page

-- Get the data from the Root Block/Page
SELECT *
-- 3 means the page number
FROM bt_page_items('users_username_idx', 3);
-- if the data matches the data from the 'data' column then should go to the page index listed inside the 'ctid' column
-- ctid consists of ([leaf_page_number], [])

-- Get the data from the Leaf Block/Page 1
SELECT *
FROM bt_page_items('users_username_idx', 1);
-- 'ctid' column: ([page/block_num], [index_num]) of 'users' heap file
-- (96,34)

-- check wether the ctid actually has that data
SELECT ctid, *
FROM users 
WHERE username =  'Aaron_Gutmann'
-- (96,34)
```

---

### ref
* [🔗 인덱스 참고1](https://rebro.kr/167)
* [🔗 인덱스 참고2](https://velog.io/@gillog/SQL-Index인덱스)

