---
title: "[Postgres] Jupyter Notebook & Docker Postgres 연동"
layout: single
date: '28/12/2021'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - SQL
tags:
  - POSTGRES
  - DOCKER
---

### 환경구성
* install psycopg2 in Jupyter notebook


```python
import sys
!conda install --yes --prefix {sys.prefix} psycopg2
# !conda install --yes --prefix {sys.prefix} requests
```
---

### 연결
* connect DB


```python
import psycopg2
```

```python
%load_ext sql
```

```python
%sql postgresql://carl020958:1234@0.0.0.0:5432/testDB
```
    'Connected: carl020958@testDB'
---

### Table 생성

```sql
%%sql
DROP TABLE IF EXISTS name_geschlecht;
CREATE TABLE name_geschlecht(
    name varchar(32),
    geschlecht varchar(8)
)
```

     * postgresql://carl020958:***@0.0.0.0:5432/testDB
    Done.
    Done.
    []

---

### Connection & ETL function

```python
def get_postgres_connection():
    host = "0.0.0.0"
    user = "carl020958"
    password = "1234"
    port = "5432"
    dbname = "testDB"
    conn = psycopg2.connect("dbname={dbname} user={user} host={host} password={password} port={port}".format(
        dbname=dbname,
        user=user,
        password=password,
        host=host,
        port=port
    ))
    conn.set_session(autocommit=True)
    return conn.cursor()
```

```python
import pandas as pd
def extract(path):
    df = pd.read_csv(path)
    print(df)
    return df
```

```python
def transform_load(df):
    cur = get_postgres_connection()
    delete_sql = "DELETE FROM name_geschlecht"
    cur.execute(sql)
    
    name_geschlecht = []
    for r in df.itertuples():
        (name, geschlecht) = (r.name, r.gender)
        print(name, "-", geschlecht)
        sql = "INSERT INTO name_geschlecht VALUES('{n}', '{g}')".format(n=name, g=geschlecht)
        print(sql)
        cur.execute(sql)
```
---

### Execute

```python
dataframe = extract("test.csv")
```
        name  gender
    0    hee       F
    1     su       M
    2    min  Unisex
    3     ji       M
    4  young       F
    5     ae  Unisex

```python
transform_load(dataframe)
```

    hee - F
    INSERT INTO name_geschlecht VALUES('hee', 'F')
    su - M
    INSERT INTO name_geschlecht VALUES('su', 'M')
    min - Unisex
    INSERT INTO name_geschlecht VALUES('min', 'Unisex')
    ji - M
    INSERT INTO name_geschlecht VALUES('ji', 'M')
    young - F
    INSERT INTO name_geschlecht VALUES('young', 'F')
    ae - Unisex
    INSERT INTO name_geschlecht VALUES('ae', 'Unisex')


```sql
-- 확인
%%sql
SELECT * FROM name_geschlecht
```
     * postgresql://carl020958:***@0.0.0.0:5432/testDB
    6 rows affected.

<table>
    <thead>
        <tr>
            <th>name</th>
            <th>geschlecht</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>hee</td>
            <td>F</td>
        </tr>
        <tr>
            <td>su</td>
            <td>M</td>
        </tr>
        <tr>
            <td>min</td>
            <td>Unisex</td>
        </tr>
        <tr>
            <td>ji</td>
            <td>M</td>
        </tr>
        <tr>
            <td>young</td>
            <td>F</td>
        </tr>
        <tr>
            <td>ae</td>
            <td>Unisex</td>
        </tr>
    </tbody>
</table>


