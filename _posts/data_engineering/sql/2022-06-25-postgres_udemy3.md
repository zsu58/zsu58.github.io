---
title: "[PostgreSQL] GREATER & LEAST"
layout: single
date: '25/06/2022'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - SQL
tags:
  - SQL
  - POSTGRESQL
---

### GREATER & LEAST
* `GREATER`: returns the greatest value from the list
* `LEAST`: returns the least(smallest) value from the list

```sql
-- returns 300
SELECT GREATEST(300, 100, 50, 200)

-- returns 50
SELECT LEAST(300, 100, 50, 200)
```


