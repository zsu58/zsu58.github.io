---
title: "[MySQL] Jupyter Notebook & Docker MySql 연동"
layout: single
date: '27/12/2021'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - SQL
tags:
  - MYSQL
  - DOCKER
---

### 환경구성
* install sqlalchemy, ipython-sql in Jupyter notebook

```python
import sys
!conda install --yes --prefix {sys.prefix} sqlalchemy
conda install -c conda-forge ipython-sql
```

```python
# load sql extension
%load_ext sql
```
---

### 연결
* connect DB

```python
%sql mysql://root:1234@0.0.0.0:3306/testDB
```
---

### SQL Table 생성 및 데이터 추가
* create table
* insert data into table

```sql
-- create table 
%%sql
DROP TABLE IF EXISTS testTbl;
CREATE TABLE testTbl(
    value int
)
```

```sql
-- insert data into table
%%sql
INSERT INTO testTbl VALUES (NULL),(NULL),(0),(1),(2),(3),(3)
```
---

### Pandas DF

```python
# Convert to pandas DataFrame
result = %sql SELECT * FROM testTbl
result.DataFrame()
```

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>NaN</td>
    </tr>
    <tr>
      <th>1</th>
      <td>NaN</td>
    </tr>
    <tr>
      <th>2</th>
      <td>0.0</td>
    </tr>
    <tr>
      <th>3</th>
      <td>1.0</td>
    </tr>
    <tr>
      <th>4</th>
      <td>2.0</td>
    </tr>
    <tr>
      <th>5</th>
      <td>3.0</td>
    </tr>
    <tr>
      <th>6</th>
      <td>3.0</td>
    </tr>
  </tbody>
</table>
</div>
---

### SQL 주의사항
* COUNT(변수)는 null을 count하지 않음
* COUNT(숫자)는 숫자에 상관 없이 전체 행의 개수 반환

```sql
%%sql
SELECT COUNT(1), COUNT(value), COUNT(DISTINCT value)
FROM testTbl;
```

<table>
    <thead>
        <tr>
            <th>COUNT(1)</th>
            <th>COUNT(value)</th>
            <th>COUNT(DISTINCT value)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>7</td>
            <td>5</td>
            <td>4</td>
        </tr>
    </tbody>
</table>

```sql
-- Null인 경우 "="가 아닌 "IS"로 확인해야 함
%%sql
SELECT COUNT(1)
FROM testTbl
WHERE value IS NULL;
```

<table>
    <thead>
        <tr>
            <th>COUNT(1)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>2</td>
        </tr>
    </tbody>
</table>


