---
title: "[PostgreSQL] Understanding Postgres"
layout: single
date: '27/06/2022'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - SQL
tags:
  - SQL
  - POSTGRESQL
---

### Understanding Postgres
* Data Location of Postgres
* Terminology 
* Overall Block/ Page Layout
* Table Row Layout

---


### Data Location of Postgres
* all data is stored insided the $data_directory/base

```sql
-- Where Posetgres is installed and running from 
SHOW data_directory;

-- figure out the oid of each databases
SELECT oid, datname
FROM pg_database;

-- find out what each file means that are stored inside the directory of the oid number
SELECT *
FROM pg_class;

-- find the data(file) that corresponds to the 'users' table
SELECT *
FROM pg_class
WHERE relname = 'users';
-- Result:41572
```

---

### Terminology
* Heap/ Heap File: File that contains all the data(rows) of the table
	* 41572 is the heap file for 'users' table
* Tuple/ Item: Individual rows from the table
* Block/ Page: The heap file is divided into many different 'blocks' or 'pages'. Each page/ block which size is 8kb, stores some number of rows.
* 정리 
	* 하나의 Heap File 안에 여러 Block/ Page가 존재
	* 하나의 Block/ Page 안에 여러 Tuple/Item이 존재

---

### Overall Block/ Page Layout
* PageHedaerData: 24 bytes long, contains general information about the page, including free space pointers.
	...
	* pd_lower: 처음부터 free space 시작까지의 거리(비트)
	* pd_upper: 처음부터 free space 끝까지의 거리(비트)
	...
* ItemIdData: four bytes, 처음부터 item/ tuple/ row까지의 거리(비트), 해당 비트의 길이(비트)
	* 2번째 Byte의 '8 bit Binary'의 2~8자리 + 1번째 Byte의 '8 bit binary'의 10진수 값(binary -> decimal): 처음부터 해당 Item(시작)까지의 거리(비트)
	* 3번째 Byte의 Int16 값: 해당 Item의 길이(비트)

---

### Table Row Layout
* Individual Item/ Tuple/ Row
* There is a fixed-size header (occupying 23 bytes on most machines), followed by an optional null bitmap, an optional object ID field, and the **user data**.

---

### ref
* [🔗 Postgres Page 공식문서](https://www.postgresql.org/docs/current/storage-page-layout.html)
