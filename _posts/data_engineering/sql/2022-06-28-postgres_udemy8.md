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
* Full Table Scan
* Index

---

### Full Table Scan
* Frequently (but not always) poor performance

```sql
-- example of Full Table Scan
SELECT *
FROM users
WHERE username = 'zsu';
```
* 1) takes all the blocks inside the heap file and load all the data into the memory
	* important to reduce the amount of data being loaded
* 2) execute iteration to find the matching data

---

### Index
* Data Structure that efficiently tells what block a record is stored at, therefore data(block) being loaded into the memory reduces
	* Inde
