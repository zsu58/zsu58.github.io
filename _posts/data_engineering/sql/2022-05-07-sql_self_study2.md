---
title: "[SQL] Transaction"
layout: single
date: '07/05/2022'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - SQL
tags:
  - SQL
---

---
### Transaction
* 개념
* autocommit=True
* autocmmit=False
* try/catch & autocommit

---

### 개념
* Transaction: 데이터베이스의 상태를 변화시키기 해서 수행하는 작업의 단위
	* 즉, 데이터 삭제 및 추가하는 SQL문들이 마치 하나의 SQL문처럼 작동해야 함
	* 다시 말해, 쿼리가 부분적으로만 반영되지 않음
* autocommit=True: SQL문들이 바로 반영됨
* autocommit=False: SQL문들이 임시 테이블에 저장되었다가 별도로 commit해야 반영됨
* Python의 경우 try/catch 문으로 사용하는 것이 일반적

### autocommit=True
* `BEGIN`, `END` or `COMMIT`을 활용해서 transaction 구현

```python
# 예시
import psycopg2


def get_connection(autocommit):
	host="end-point"
	user="user"
	password="pwd"
	port=5432
	dbname="dbname"
	conn=psycopg2.connect(f'dbname={dbname} user={user} host={host} password={password} port={port} dbname={dbname}') 
	conn.set_session(autocommit=autocommit)
	return conn


def load(lines):
	logging.info("load start")
	cur = get_connection(True)
	# 멱등성(여러번 실행하더라도 결과가 달라지지 않는 성질)을 가지기 위해 DELETE FROM 존재
	sql = "BEGIN; DELETE FROM schema.table;"
	for l in lines:
		if l != "":
			(key, value) = l.split(",")
			sql += f'INSERT INTO schema.table VALUES ("{key}", "{value}");'
		# END대신 COMMIT이 와도 가능
		sql += "END;"
	cur.excute(sql)
	logging.info(sql)
	logging.info("load finish")
```

### autocommit=False
* connection 객체의 `.commit()`과 `.rollback()`함수로 커밋 여부 결정

```python
# 얘시
conn = get_connection(False)
cur = conn.cursor()
cur.execute("DELETE FROM schema.table;")
cur.execute("INSERT INTO schema.table VALUES ('key1', 'value1');")
# commit할 경우
cur.execute("COMMIT;")
# rollback할 경우
cur.execute("ROLLBACK;")
```

### try/catch & autocommit

#### try/catch & autocommit=True

```python
conn = get_connection(True)
cur = conn.cursor()

try:
	cur.execute("BEGIN;")
	cur.execute("DELETE FROM schema.table;")
	cur.execute("INSERT INTO schema.table VALUES ('key1', 'value1');")
	cur.execute("END;") # COMMIT도 가능
except (Exception, psycopg2.DatabaseError) as error:
	print(error)
	cur.execute("ROLLBACK;")
finally:
	conn.close()

```

#### try/catch & autocommit=False

```python
conn = get_connection(False)
cur = conn.cursor()

try:
	cur.execute("DELETE FROM schema.table;")
	cur.execute("INSERT INTO schema.table VALUES ('key1', 'value1');")
	conn.commit() # cur.execute("COMMIT;")과 같음
except (Exception, psycopg2.DatabaseError) as error:
	print(error)
	conn.rollback() # cur.execute("ROLLBACK;")과 같음
finally:
	conn.close()
```


