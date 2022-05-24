---
title: "[PostgreSQL] ON DELETE"
layout: single
date: '24/05/2022'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - SQL
tags:
  - SQL
  - POSTGRESQL
---

### ON DELETE
* 사용 이유: 참조무결성을 유지
* 종류
  * ON DELETE RESTRICT
  * ON DELETE NO ACTION
  * ON DELETE CASCADE
    * 해당 column을 foreign key로 두는 모든 record 삭제
  * ON DELETE SET NULL
    * 해당 column을 foreign key로 두는 모든 record의 foreign key 값을 null로 바꿈
  * ON DELETE SET DEFAULT
    * 해당 column을 foreign key로 두는 모든 record의 foreign key 값을 default로 바꿈

```sql
-- ON DELETE CASCADE 예시
CREATE TABLE photos (
  id SERIAL PRIMARY KEY,
  url VARCHAR(200),
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);
```


