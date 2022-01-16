---
title: "[Python] 10 minutes to Pandas"
layout: single
date: '15/1/2022'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - PYTHON
tags:
  - PYTHON
  - PANDAS
---

---
### 10 Minutes Pandas
* Viewing Data
* Selection
* Missing Data
* Operation
* Merge
* Grouping
* Reshaping
* Time Series
* Categoricals
* Plotting
* Getting Data In / Out
* Gotchas

---

### Viewing Data

```python
# 필요한 패키지 불러오기
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
```


```python
# dataset
school_list = [{'name': 'John', 'job': "teacher", 'age': 30},
                {'name': 'Nate', 'job': "teacher", 'age': 35},
                {'name': 'Yuna', 'job': "teacher", 'age': 35},
                {'name': 'Abraham', 'job': "student", 'age': 10},
                {'name': 'Brian', 'job': "student", 'age': 19},
                {'name': 'Janny', 'job': "student", 'age': 15},
                {'name': 'Nate', 'job': "teacher", 'age': 28},
                {'name': 'John', 'job': "student", 'age': 31},
                {'name': 'Sera', 'job': "student", 'age': None},
                {'name': 'Ben', 'job': "teacher", 'age': None}
         ]
df = pd.DataFrame(school_list, columns = ['name', 'job', 'age'])

date_list = [{'yyyy-mm-dd' : '2000-06-27'},
             {'yyyy-mm-dd' : '2002-09-24'},
             {'yyyy-mm-dd' : '2005-12-20'}]
df3 = pd.DataFrame(date_list, columns=['yyyy-mm-dd'])
```



* Q) DataFrame `df` 에서 나이가 많은 순서로 정렬 후, 상위 3명만 보이게 출력해 주세요.


```python
df.sort_values("age", ascending=False).head(3)
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
      <th>name</th>
      <th>job</th>
      <th>age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td>Nate</td>
      <td>teacher</td>
      <td>35.0</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Yuna</td>
      <td>teacher</td>
      <td>35.0</td>
    </tr>
    <tr>
      <th>7</th>
      <td>John</td>
      <td>student</td>
      <td>31.0</td>
    </tr>
  </tbody>
</table>
</div>



---

### Selection

* Q) DataFrame df에서 나이가 20살 미만인 사람 정보 출력해 주세요.


```python
df[df.age < 20]
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
      <th>name</th>
      <th>job</th>
      <th>age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>3</th>
      <td>Abraham</td>
      <td>student</td>
      <td>10.0</td>
    </tr>
    <tr>
      <th>4</th>
      <td>Brian</td>
      <td>student</td>
      <td>19.0</td>
    </tr>
    <tr>
      <th>5</th>
      <td>Janny</td>
      <td>student</td>
      <td>15.0</td>
    </tr>
  </tbody>
</table>
</div>



* Q) DataFrame df에서 나이가 30 이상이면서, 학생인 사람 정보를 출력해 주세요.


```python
df[(df.age >= 30) & (df.job == "student")]
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
      <th>name</th>
      <th>job</th>
      <th>age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>7</th>
      <td>John</td>
      <td>student</td>
      <td>31.0</td>
    </tr>
  </tbody>
</table>
</div>



* Q) "2022-01-12"부터 1씩 증가하는 pandas Series를 df의 index로 설정해 주세요.


```python
dates = pd.date_range('20220112', periods=df.shape[0])
df2 = pd.DataFrame(school_list, index=dates)
df2
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
      <th>name</th>
      <th>job</th>
      <th>age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>2022-01-12</th>
      <td>John</td>
      <td>teacher</td>
      <td>30.0</td>
    </tr>
    <tr>
      <th>2022-01-13</th>
      <td>Nate</td>
      <td>teacher</td>
      <td>35.0</td>
    </tr>
    <tr>
      <th>2022-01-14</th>
      <td>Yuna</td>
      <td>teacher</td>
      <td>35.0</td>
    </tr>
    <tr>
      <th>2022-01-15</th>
      <td>Abraham</td>
      <td>student</td>
      <td>10.0</td>
    </tr>
    <tr>
      <th>2022-01-16</th>
      <td>Brian</td>
      <td>student</td>
      <td>19.0</td>
    </tr>
    <tr>
      <th>2022-01-17</th>
      <td>Janny</td>
      <td>student</td>
      <td>15.0</td>
    </tr>
    <tr>
      <th>2022-01-18</th>
      <td>Nate</td>
      <td>teacher</td>
      <td>28.0</td>
    </tr>
    <tr>
      <th>2022-01-19</th>
      <td>John</td>
      <td>student</td>
      <td>31.0</td>
    </tr>
    <tr>
      <th>2022-01-20</th>
      <td>Sera</td>
      <td>student</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>2022-01-21</th>
      <td>Ben</td>
      <td>teacher</td>
      <td>NaN</td>
    </tr>
  </tbody>
</table>
</div>



Q) DataFrame df2에서 2022-01-14 ~ 2022-01-17 사이의 name, age 값을 모두 출력하세요.


```python
df2.loc["20220114":"20220117", ["name","age"]]
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
      <th>name</th>
      <th>age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>2022-01-14</th>
      <td>Yuna</td>
      <td>35.0</td>
    </tr>
    <tr>
      <th>2022-01-15</th>
      <td>Abraham</td>
      <td>10.0</td>
    </tr>
    <tr>
      <th>2022-01-16</th>
      <td>Brian</td>
      <td>19.0</td>
    </tr>
    <tr>
      <th>2022-01-17</th>
      <td>Janny</td>
      <td>15.0</td>
    </tr>
  </tbody>
</table>
</div>



Q) DataFrame df2에 새로운 열 gender를 추가 하세요 (성별은 M/F 중 아무거나 입력)


```python
df2["gender"] = ["M", "M", "F", "M", "M", "F", "M", "M", "F", "M"]
df2
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
      <th>name</th>
      <th>job</th>
      <th>age</th>
      <th>gender</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>2022-01-12</th>
      <td>John</td>
      <td>teacher</td>
      <td>30.0</td>
      <td>M</td>
    </tr>
    <tr>
      <th>2022-01-13</th>
      <td>Nate</td>
      <td>teacher</td>
      <td>35.0</td>
      <td>M</td>
    </tr>
    <tr>
      <th>2022-01-14</th>
      <td>Yuna</td>
      <td>teacher</td>
      <td>35.0</td>
      <td>F</td>
    </tr>
    <tr>
      <th>2022-01-15</th>
      <td>Abraham</td>
      <td>student</td>
      <td>10.0</td>
      <td>M</td>
    </tr>
    <tr>
      <th>2022-01-16</th>
      <td>Brian</td>
      <td>student</td>
      <td>19.0</td>
      <td>M</td>
    </tr>
    <tr>
      <th>2022-01-17</th>
      <td>Janny</td>
      <td>student</td>
      <td>15.0</td>
      <td>F</td>
    </tr>
    <tr>
      <th>2022-01-18</th>
      <td>Nate</td>
      <td>teacher</td>
      <td>28.0</td>
      <td>M</td>
    </tr>
    <tr>
      <th>2022-01-19</th>
      <td>John</td>
      <td>student</td>
      <td>31.0</td>
      <td>M</td>
    </tr>
    <tr>
      <th>2022-01-20</th>
      <td>Sera</td>
      <td>student</td>
      <td>NaN</td>
      <td>F</td>
    </tr>
    <tr>
      <th>2022-01-21</th>
      <td>Ben</td>
      <td>teacher</td>
      <td>NaN</td>
      <td>M</td>
    </tr>
  </tbody>
</table>
</div>



---

### Missing Data

* Q) DataFrame df에서 age에 값이 없는 리스트를 찾아, job(직업)별 평균 나이의 값을 넣어 주세요. (transform 함수 사용)


```python
df['age'].fillna(df.groupby('job')['age'].transform('median'),inplace = True)
df
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
      <th>name</th>
      <th>job</th>
      <th>age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>2022-01-12</th>
      <td>John</td>
      <td>teacher</td>
      <td>30.00</td>
    </tr>
    <tr>
      <th>2022-01-13</th>
      <td>Nate</td>
      <td>teacher</td>
      <td>35.00</td>
    </tr>
    <tr>
      <th>2022-01-14</th>
      <td>Yuna</td>
      <td>teacher</td>
      <td>35.00</td>
    </tr>
    <tr>
      <th>2022-01-15</th>
      <td>Abraham</td>
      <td>student</td>
      <td>10.00</td>
    </tr>
    <tr>
      <th>2022-01-16</th>
      <td>Brian</td>
      <td>student</td>
      <td>19.00</td>
    </tr>
    <tr>
      <th>2022-01-17</th>
      <td>Janny</td>
      <td>student</td>
      <td>15.00</td>
    </tr>
    <tr>
      <th>2022-01-18</th>
      <td>Nate</td>
      <td>teacher</td>
      <td>28.00</td>
    </tr>
    <tr>
      <th>2022-01-19</th>
      <td>John</td>
      <td>student</td>
      <td>31.00</td>
    </tr>
    <tr>
      <th>2022-01-20</th>
      <td>Sera</td>
      <td>student</td>
      <td>18.75</td>
    </tr>
    <tr>
      <th>2022-01-21</th>
      <td>Ben</td>
      <td>teacher</td>
      <td>32.00</td>
    </tr>
  </tbody>
</table>
</div>



---

### Operation

* Q) DataFrame df2의 name을 모두 대문자로 변경해 출력해 주세요.


```python
df2["name"].str.upper()
```




    2022-01-12       JOHN
    2022-01-13       NATE
    2022-01-14       YUNA
    2022-01-15    ABRAHAM
    2022-01-16      BRIAN
    2022-01-17      JANNY
    2022-01-18       NATE
    2022-01-19       JOHN
    2022-01-20       SERA
    2022-01-21        BEN
    Freq: D, Name: name, dtype: object



* Q) DataFrame df2의 age별 count를 출력해 주세요.


```python
df2["age"].value_counts()
```




    35.0    2
    30.0    1
    10.0    1
    19.0    1
    15.0    1
    28.0    1
    31.0    1
    Name: age, dtype: int64



* Q) DataFrame df3에서 날짜의 년도 값만 들어있는 'year' 컬럼을 추가해 주세요.  ex) 2000-06-27 -> 2000


```python
df3["year"] = df3["yyyy-mm-dd"].str.split("-").get(0)
df3
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
      <th>yyyy-mm-dd</th>
      <th>year</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>2000-06-27</td>
      <td>2000</td>
    </tr>
    <tr>
      <th>1</th>
      <td>2002-09-24</td>
      <td>06</td>
    </tr>
    <tr>
      <th>2</th>
      <td>2005-12-20</td>
      <td>27</td>
    </tr>
  </tbody>
</table>
</div>



### Merge


```python
# dataset
url = "https://raw.githubusercontent.com/sheon-j/pandas-study/main/datasets/harry_potter.csv"
df = pd.read_csv(url, sep=';')
```

* Q) print columns


```python
print(*list(df.columns), sep=", ")
```

    Id, Name, Gender, Job, House, Wand, Patronus, Species, Blood status, Hair colour, Eye colour, Loyalty, Skills, Birth, Death



```python
# dataset change
df = df[df["Death"].isna()][["Name", "Gender", "Job", "House"]]
df.head(3)
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
      <th>Name</th>
      <th>Gender</th>
      <th>Job</th>
      <th>House</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Harry James Potter</td>
      <td>Male</td>
      <td>Student</td>
      <td>Gryffindor</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Ronald Bilius Weasley</td>
      <td>Male</td>
      <td>Student</td>
      <td>Gryffindor</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Hermione Jean Granger</td>
      <td>Female</td>
      <td>Student</td>
      <td>Gryffindor</td>
    </tr>
  </tbody>
</table>
</div>



* Q) count the each house's member


```python
df["House"].value_counts()
```




    Gryffindor                      27
    Slytherin                       21
    Ravenclaw                       14
    Hufflepuff                       8
    Beauxbatons Academy of Magic     3
    Durmstrang Institute             1
    Name: House, dtype: int64




```python
# dataset
# 기숙사별 학생 데이터를 구성합니다. 
gryf = df[(df["House"]=="Gryffindor")&(df["Job"]=="Student")].reset_index(drop=True)
slyt = df[(df["House"]=="Slytherin")&(df["Job"]=="Student")].reset_index(drop=True)
ravn = df[(df["House"]=="Ravenclaw")&(df["Job"]=="Student")].reset_index(drop=True)
huff = df[(df["House"]=="Hufflepuff")&(df["Job"]=="Student")].reset_index(drop=True)

huff.head(3)
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
      <th>Name</th>
      <th>Gender</th>
      <th>Job</th>
      <th>House</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Justin Finch-Fletchley</td>
      <td>Male</td>
      <td>Student</td>
      <td>Hufflepuff</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Zacharias Smith</td>
      <td>Male</td>
      <td>Student</td>
      <td>Hufflepuff</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Hannah Abbott</td>
      <td>Female</td>
      <td>Student</td>
      <td>Hufflepuff</td>
    </tr>
  </tbody>
</table>
</div>



* Q) 각 기숙사의 데이터가 합쳐진 DataFrame을 만드세요.


```python
hogwart = [gryf, slyt, ravn, huff]
pd.concat(hogwart).reset_index(drop=True).tail(3)
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
      <th>Name</th>
      <th>Gender</th>
      <th>Job</th>
      <th>House</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>42</th>
      <td>Ernest Macmillan</td>
      <td>Male</td>
      <td>Student</td>
      <td>Hufflepuff</td>
    </tr>
    <tr>
      <th>43</th>
      <td>Susan Bones</td>
      <td>Female</td>
      <td>Student</td>
      <td>Hufflepuff</td>
    </tr>
    <tr>
      <th>44</th>
      <td>Edward Remus Lupin</td>
      <td>Male</td>
      <td>Student</td>
      <td>Hufflepuff</td>
    </tr>
  </tbody>
</table>
</div>




```python
# dataset
# 기숙사별 Gender 항목을 집계한 테이블 준비
def gender_count(df, name):
    df_gender = df.groupby("Gender").count()
    df_gender = df_gender[["Name"]].reset_index()
    df_gender = df_gender.rename(columns={"Name": name})
    return df_gender

gryf_gender = gender_count(gryf, "Gryf")
slyt_gender = gender_count(slyt, "Slyt")
ravn_gender = gender_count(ravn, "Ravn")
huff_gender = gender_count(huff, "Huff")

gryf_gender
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
      <th>Gender</th>
      <th>Gryf</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Female</td>
      <td>8</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Male</td>
      <td>11</td>
    </tr>
  </tbody>
</table>
</div>



* Q) 모든 _gender 테이블을 Join 하세요.


```python
from functools import reduce
dfs = [gryf_gender, slyt_gender, ravn_gender, huff_gender]

df_merged = reduce(lambda left,right: pd.merge(left, right, on='Gender'), dfs)
df_merged
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
      <th>Gender</th>
      <th>Gryf</th>
      <th>Slyt</th>
      <th>Ravn</th>
      <th>Huff</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Female</td>
      <td>8</td>
      <td>2</td>
      <td>5</td>
      <td>2</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Male</td>
      <td>11</td>
      <td>8</td>
      <td>5</td>
      <td>4</td>
    </tr>
  </tbody>
</table>
</div>



* Q) 원하는 기숙사에 자신의 데이터를 추가해보세요.


```python
df.append({"Name":"zsu","Gender":"Male","Job":"Student","House":"Hufflepuff"}, ignore_index=True)
# 다른 방법
# zsu = pd.DataFrame.from_dict([{"Name":"zsu","Gender":"Male","Job":"Student","House":"Hufflepuff"}])
# df.append(zsu, ignore_index=True)
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
      <th>Name</th>
      <th>Gender</th>
      <th>Job</th>
      <th>House</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Harry James Potter</td>
      <td>Male</td>
      <td>Student</td>
      <td>Gryffindor</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Ronald Bilius Weasley</td>
      <td>Male</td>
      <td>Student</td>
      <td>Gryffindor</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Hermione Jean Granger</td>
      <td>Female</td>
      <td>Student</td>
      <td>Gryffindor</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Rubeus Hagrid</td>
      <td>Male</td>
      <td>Keeper of Keys and Grounds | Professor of Care...</td>
      <td>Gryffindor</td>
    </tr>
    <tr>
      <th>4</th>
      <td>Neville Longbottom</td>
      <td>Male</td>
      <td>Student</td>
      <td>Gryffindor</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>94</th>
      <td>Septima Vector</td>
      <td>Female</td>
      <td>Professor of Arithmancyat Hogwarts</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>95</th>
      <td>Wilhelmina Grubbly-Plank</td>
      <td>Female</td>
      <td>Substitute professor of Care of Magical Creatu...</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>96</th>
      <td>Fenrir Greyback</td>
      <td>Male</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>97</th>
      <td>Kreacher</td>
      <td>Male</td>
      <td>\nBlack family's house-elf (?-1996), \nHarry P...</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>98</th>
      <td>zsu</td>
      <td>Male</td>
      <td>Student</td>
      <td>Hufflepuff</td>
    </tr>
  </tbody>
</table>
<p>99 rows × 4 columns</p>
</div>



---

### Grouping


```python
# dataset
np.random.seed(132)

# 호그와트의 1학기 성적이 나왔습니다.
df["Score_1"] = np.random.randint(50, 101, len(df))
df.head(3)
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
      <th>Name</th>
      <th>Gender</th>
      <th>Job</th>
      <th>House</th>
      <th>Score_1</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Harry James Potter</td>
      <td>Male</td>
      <td>Student</td>
      <td>Gryffindor</td>
      <td>83</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Ronald Bilius Weasley</td>
      <td>Male</td>
      <td>Student</td>
      <td>Gryffindor</td>
      <td>67</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Hermione Jean Granger</td>
      <td>Female</td>
      <td>Student</td>
      <td>Gryffindor</td>
      <td>100</td>
    </tr>
  </tbody>
</table>
</div>



* Q) 호그와트의 기숙사별(House) 성적 평균을 집계하세요.


```python
hogwarts = df[df["House"].isin(["Gryffindor", "Ravenclaw", "Slytherin", "Hufflepuff"])]
hogwarts.groupby("House").mean().round(1)
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
      <th>Score_1</th>
    </tr>
    <tr>
      <th>House</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Gryffindor</th>
      <td>77.0</td>
    </tr>
    <tr>
      <th>Hufflepuff</th>
      <td>70.4</td>
    </tr>
    <tr>
      <th>Ravenclaw</th>
      <td>79.6</td>
    </tr>
    <tr>
      <th>Slytherin</th>
      <td>79.3</td>
    </tr>
  </tbody>
</table>
</div>



Q) 호그와트의 남녀별 성적 평균을 집계하세요


```python
df.groupby("Gender").mean().round(1)
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
      <th>Score_1</th>
    </tr>
    <tr>
      <th>Gender</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Female</th>
      <td>77.7</td>
    </tr>
    <tr>
      <th>Male</th>
      <td>74.9</td>
    </tr>
  </tbody>
</table>
</div>




```python
hogwarts.groupby(["House", "Gender"]).mean().round(1)
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
      <th></th>
      <th>Score_1</th>
    </tr>
    <tr>
      <th>House</th>
      <th>Gender</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowspan="2" valign="top">Gryffindor</th>
      <th>Female</th>
      <td>82.9</td>
    </tr>
    <tr>
      <th>Male</th>
      <td>73.5</td>
    </tr>
    <tr>
      <th rowspan="2" valign="top">Hufflepuff</th>
      <th>Female</th>
      <td>64.7</td>
    </tr>
    <tr>
      <th>Male</th>
      <td>73.8</td>
    </tr>
    <tr>
      <th rowspan="2" valign="top">Ravenclaw</th>
      <th>Female</th>
      <td>81.0</td>
    </tr>
    <tr>
      <th>Male</th>
      <td>78.6</td>
    </tr>
    <tr>
      <th rowspan="2" valign="top">Slytherin</th>
      <th>Female</th>
      <td>89.6</td>
    </tr>
    <tr>
      <th>Male</th>
      <td>77.6</td>
    </tr>
  </tbody>
</table>
</div>



---

### Reshaping


```python
# 호그와트의 2학기 성적이 나왔습니다.
np.random.seed(134)

df["Score_2"] = np.random.randint(50, 101, len(df))
hogwart = df[df.House.isin(["Gryffindor", "Ravenclaw", "Slytherin", "Hufflepuff"])]
hogwart.head(3)
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
      <th>Name</th>
      <th>Gender</th>
      <th>Job</th>
      <th>House</th>
      <th>Score_1</th>
      <th>Score_2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Harry James Potter</td>
      <td>Male</td>
      <td>Student</td>
      <td>Gryffindor</td>
      <td>83</td>
      <td>85</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Ronald Bilius Weasley</td>
      <td>Male</td>
      <td>Student</td>
      <td>Gryffindor</td>
      <td>67</td>
      <td>88</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Hermione Jean Granger</td>
      <td>Female</td>
      <td>Student</td>
      <td>Gryffindor</td>
      <td>100</td>
      <td>100</td>
    </tr>
  </tbody>
</table>
</div>



* Q) 다음 기숙사 & 남녀별 성적 평균표를 남녀 별 성적 평균표의 다층 컬럼을 단일층 칼럼으로 변환하세요.


```python
# 기숙사 남녀별 성적 평균
hogwart_house_gender_mean = hogwart.groupby(["House", "Gender"]).mean().round(1)
hogwart_house_gender_mean
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
      <th></th>
      <th>Score_1</th>
      <th>Score_2</th>
    </tr>
    <tr>
      <th>House</th>
      <th>Gender</th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowspan="2" valign="top">Gryffindor</th>
      <th>Female</th>
      <td>82.9</td>
      <td>80.7</td>
    </tr>
    <tr>
      <th>Male</th>
      <td>73.5</td>
      <td>73.6</td>
    </tr>
    <tr>
      <th rowspan="2" valign="top">Hufflepuff</th>
      <th>Female</th>
      <td>64.7</td>
      <td>77.3</td>
    </tr>
    <tr>
      <th>Male</th>
      <td>73.8</td>
      <td>84.0</td>
    </tr>
    <tr>
      <th rowspan="2" valign="top">Ravenclaw</th>
      <th>Female</th>
      <td>81.0</td>
      <td>74.3</td>
    </tr>
    <tr>
      <th>Male</th>
      <td>78.6</td>
      <td>79.9</td>
    </tr>
    <tr>
      <th rowspan="2" valign="top">Slytherin</th>
      <th>Female</th>
      <td>89.6</td>
      <td>85.4</td>
    </tr>
    <tr>
      <th>Male</th>
      <td>77.6</td>
      <td>70.0</td>
    </tr>
  </tbody>
</table>
</div>




```python
hogwart_house_gender_mean_stacked = hogwart_house_gender_mean.stack()
hogwart_house_gender_mean_stacked
```




    House       Gender         
    Gryffindor  Female  Score_1    82.9
                        Score_2    80.7
                Male    Score_1    73.5
                        Score_2    73.6
    Hufflepuff  Female  Score_1    64.7
                        Score_2    77.3
                Male    Score_1    73.8
                        Score_2    84.0
    Ravenclaw   Female  Score_1    81.0
                        Score_2    74.3
                Male    Score_1    78.6
                        Score_2    79.9
    Slytherin   Female  Score_1    89.6
                        Score_2    85.4
                Male    Score_1    77.6
                        Score_2    70.0
    dtype: float64



* Q) 단일층으로된 표를 다시 다층으로 변환하세요.


```python
hogwart_house_gender_mean = hogwart_house_gender_mean_stacked.unstack()
hogwart_house_gender_mean
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
      <th></th>
      <th>Score_1</th>
      <th>Score_2</th>
    </tr>
    <tr>
      <th>House</th>
      <th>Gender</th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowspan="2" valign="top">Gryffindor</th>
      <th>Female</th>
      <td>82.9</td>
      <td>80.7</td>
    </tr>
    <tr>
      <th>Male</th>
      <td>73.5</td>
      <td>73.6</td>
    </tr>
    <tr>
      <th rowspan="2" valign="top">Hufflepuff</th>
      <th>Female</th>
      <td>64.7</td>
      <td>77.3</td>
    </tr>
    <tr>
      <th>Male</th>
      <td>73.8</td>
      <td>84.0</td>
    </tr>
    <tr>
      <th rowspan="2" valign="top">Ravenclaw</th>
      <th>Female</th>
      <td>81.0</td>
      <td>74.3</td>
    </tr>
    <tr>
      <th>Male</th>
      <td>78.6</td>
      <td>79.9</td>
    </tr>
    <tr>
      <th rowspan="2" valign="top">Slytherin</th>
      <th>Female</th>
      <td>89.6</td>
      <td>85.4</td>
    </tr>
    <tr>
      <th>Male</th>
      <td>77.6</td>
      <td>70.0</td>
    </tr>
  </tbody>
</table>
</div>



* Q) pivot_table 기능을 통해 원하는 통계 테이블을 만들어보세요.


```python
hogwart.pivot_table(index="House", 
                    values=["Score_1", "Score_2"], 
                    aggfunc={"Score_1": [max, min, np.median], "Score_2": [max, min, np.median]})
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead tr th {
        text-align: left;
    }

    .dataframe thead tr:last-of-type th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr>
      <th></th>
      <th colspan="3" halign="left">Score_1</th>
      <th colspan="3" halign="left">Score_2</th>
    </tr>
    <tr>
      <th></th>
      <th>max</th>
      <th>median</th>
      <th>min</th>
      <th>max</th>
      <th>median</th>
      <th>min</th>
    </tr>
    <tr>
      <th>House</th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Gryffindor</th>
      <td>100.0</td>
      <td>75.0</td>
      <td>53.0</td>
      <td>100.0</td>
      <td>73.0</td>
      <td>53.0</td>
    </tr>
    <tr>
      <th>Hufflepuff</th>
      <td>88.0</td>
      <td>76.5</td>
      <td>53.0</td>
      <td>100.0</td>
      <td>84.5</td>
      <td>56.0</td>
    </tr>
    <tr>
      <th>Ravenclaw</th>
      <td>100.0</td>
      <td>80.0</td>
      <td>58.0</td>
      <td>100.0</td>
      <td>77.5</td>
      <td>51.0</td>
    </tr>
    <tr>
      <th>Slytherin</th>
      <td>100.0</td>
      <td>83.0</td>
      <td>50.0</td>
      <td>95.0</td>
      <td>76.0</td>
      <td>53.0</td>
    </tr>
  </tbody>
</table>
</div>



---

### Time Series


```python
# dataset
# 다음은 매일 기록되는 기숙사 점수표입니다.
np.random.seed(0)
hogwart_board = pd.DataFrame({
    "Date": pd.date_range("2021-3-1", periods=120, freq="D"), 
    "Gryf": np.random.randint(0, 10, 120),
    "Slyt": np.random.randint(0, 10, 120),
    "Ravn": np.random.randint(0, 10, 120),
    "Huff": np.random.randint(0, 10, 120)
})
hogwart_board.tail()
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
      <th>Date</th>
      <th>Gryf</th>
      <th>Slyt</th>
      <th>Ravn</th>
      <th>Huff</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>115</th>
      <td>2021-06-24</td>
      <td>2</td>
      <td>1</td>
      <td>9</td>
      <td>2</td>
    </tr>
    <tr>
      <th>116</th>
      <td>2021-06-25</td>
      <td>3</td>
      <td>0</td>
      <td>2</td>
      <td>4</td>
    </tr>
    <tr>
      <th>117</th>
      <td>2021-06-26</td>
      <td>4</td>
      <td>3</td>
      <td>0</td>
      <td>9</td>
    </tr>
    <tr>
      <th>118</th>
      <td>2021-06-27</td>
      <td>1</td>
      <td>8</td>
      <td>8</td>
      <td>7</td>
    </tr>
    <tr>
      <th>119</th>
      <td>2021-06-28</td>
      <td>2</td>
      <td>8</td>
      <td>2</td>
      <td>4</td>
    </tr>
  </tbody>
</table>
</div>



* Q) 월별 합산 기숙사 점수를 나타내세요.


```python
hogwart_board.groupby(hogwart_board["Date"].dt.month).sum()
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
      <th>Gryf</th>
      <th>Slyt</th>
      <th>Ravn</th>
      <th>Huff</th>
    </tr>
    <tr>
      <th>Date</th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>3</th>
      <td>148</td>
      <td>130</td>
      <td>128</td>
      <td>155</td>
    </tr>
    <tr>
      <th>4</th>
      <td>126</td>
      <td>168</td>
      <td>139</td>
      <td>102</td>
    </tr>
    <tr>
      <th>5</th>
      <td>142</td>
      <td>166</td>
      <td>137</td>
      <td>150</td>
    </tr>
    <tr>
      <th>6</th>
      <td>83</td>
      <td>115</td>
      <td>145</td>
      <td>127</td>
    </tr>
  </tbody>
</table>
</div>



* Q) 최종 점수를 확인하고, 우승 기숙사를 발표하세요.


```python
hogwart_board.groupby(hogwart_board["Date"].dt.year).sum()
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
      <th>Gryf</th>
      <th>Slyt</th>
      <th>Ravn</th>
      <th>Huff</th>
    </tr>
    <tr>
      <th>Date</th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>2021</th>
      <td>499</td>
      <td>579</td>
      <td>549</td>
      <td>534</td>
    </tr>
  </tbody>
</table>
</div>



---

### Categoricals

* Q) 아래의 데이터프레임이 존재한다. '국가' 데이터(열)을 범주형 데이터로 변환하시오. 이떄 열 이름을 '대륙_카테고리'로 하시오.


```python
df = pd.DataFrame({"기업":["현대","삼성","벤츠","애플","테슬라"], "국가":["한국","한국","독일","미국","미국"]})
```


```python
df["대륙_카테고리"] = df["국가"].astype("category")
```


```python
# 확인
df["대륙_카테고리"]
```




    0    한국
    1    한국
    2    독일
    3    미국
    4    미국
    Name: 대륙_카테고리, dtype: category
    Categories (3, object): ['독일', '미국', '한국']



* Q) 생각해보니 대륙 카테고리입니다. 대륙_카테고리를 대륙별로 새롭게 범주화하시오(유럽/아메리카/아시아).


```python
df["대륙_카테고리"].cat.categories = ["유럽","아메리카","아시아"]
```


```python
# 확인
df
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
      <th>기업</th>
      <th>국가</th>
      <th>대륙_카테고리</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>현대</td>
      <td>한국</td>
      <td>아시아</td>
    </tr>
    <tr>
      <th>1</th>
      <td>삼성</td>
      <td>한국</td>
      <td>아시아</td>
    </tr>
    <tr>
      <th>2</th>
      <td>벤츠</td>
      <td>독일</td>
      <td>유럽</td>
    </tr>
    <tr>
      <th>3</th>
      <td>애플</td>
      <td>미국</td>
      <td>아메리카</td>
    </tr>
    <tr>
      <th>4</th>
      <td>테슬라</td>
      <td>미국</td>
      <td>아메리카</td>
    </tr>
  </tbody>
</table>
</div>



* Q) 대륙 카테고리에 빠진 대륙들을 추가해주시오. 빠진 대륙은 (아프리카, 오세아니아) 입니다.


```python
df["대륙_카테고리"] = df["대륙_카테고리"].cat.set_categories(["유럽","아메리카","아시아","아프리카","오세아니아"])
```


```python
# 확인
df["대륙_카테고리"]
```




    0     아시아
    1     아시아
    2      유럽
    3    아메리카
    4    아메리카
    Name: 대륙_카테고리, dtype: category
    Categories (5, object): ['유럽', '아메리카', '아시아', '아프리카', '오세아니아']



* Q) 대륙 카테고리를 기준으로 데이터프레임을 정렬하시오(유럽, 아메리카, 이시아, 아프리카, 오세아니아 순으로).


```python
df.sort_values(by="대륙_카테고리")
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
      <th>기업</th>
      <th>국가</th>
      <th>대륙_카테고리</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>2</th>
      <td>벤츠</td>
      <td>독일</td>
      <td>유럽</td>
    </tr>
    <tr>
      <th>3</th>
      <td>애플</td>
      <td>미국</td>
      <td>아메리카</td>
    </tr>
    <tr>
      <th>4</th>
      <td>테슬라</td>
      <td>미국</td>
      <td>아메리카</td>
    </tr>
    <tr>
      <th>0</th>
      <td>현대</td>
      <td>한국</td>
      <td>아시아</td>
    </tr>
    <tr>
      <th>1</th>
      <td>삼성</td>
      <td>한국</td>
      <td>아시아</td>
    </tr>
  </tbody>
</table>
</div>



* Q) 대륙 카테고리 별 기업의 숫자를 구하시오.


```python
df.groupby("대륙_카테고리").size()
```




    대륙_카테고리
    유럽       1
    아메리카     2
    아시아      2
    아프리카     0
    오세아니아    0
    dtype: int64



### Getting Data In / Out

* Q) 공유한 happiness_data.csv 파일을 읽고 df 이름의 객체로 저장하시오.


```python
df = pd.read_csv("/Users/jisu/Desktop/happiness_data.csv")
```

* Q) df에서 country_name이 "South Korea"인 데이터만 필터(filter)한 후 happiness_data_korea.csv 파일(index가 없는 상태)로 저장하시오.


```python
df[df["country_name"] == "South Korea"].to_csv("/Users/jisu/Desktop/happiness_data_korea.csv", index=False)
```

* Q) happiness_data_korea.csv 파일을 읽고 df2 이름의 객체로 저장하시오.


```python
df2 = pd.read_csv("/Users/jisu/Desktop/happiness_data_korea.csv")
```

* Q) df2 데이터프레임에서 social_support가 0.79 이상이며 동시에 freedom_to_make_life_choices가 0.65 이상인 데이터를 필터링한 후 high_happiness.h5 파일의 df3로 저장하시오.


```python
df2[(df2.social_support >= 0.79) & (df2.freedom_to_make_life_choices >= 0.65)].to_hdf("/Users/jisu/Desktop/high_happiness.h5", "df3")
```

* Q) high_happiness.h5파일의 df3을 읽고 df3 이름의 객체로 저장하시오.


```python
df3 = pd.read_hdf("/Users/jisu/Desktop/high_happiness.h5", "df3")
```

* Q) df3의 2번째와 3번째 행(index가 4,5번인 행)을 subsetting 한후 df4.xlsx 파일(Sheet 이름은 "Sheet1", index가 없는 상태)으로 저장하시오.


```python
df3.iloc[1:3].to_excel("/Users/jisu/Desktop/df4.xlsx", sheet_name="Sheet1", index=None)
```

* Q) df4.xlsx 파일을 읽고 df4 이름의 객체로 저장하시오.


```python
df4 = pd.read_excel("/Users/jisu/Desktop/df4.xlsx", sheet_name="Sheet1")
```

### Plotting

Q)
* 공유한 happiness_data.csv 파일을 읽고 df 이름의 객체로 저장하시오.
* df에서 country_name이 "South Korea"인 데이터만 필터(filter)한 후 df_korea로 저장하시오.
* df_korea에서 "year"과 "happiness" column만을 select 한 뒤, index을 "year"로 설정한 후 그래프로 그려보시오.


```python
df = pd.read_csv("/Users/jisu/Desktop/happiness_data.csv")
df_korea = df[df.country_name == "South Korea"]
df_korea[["year", "happiness"]].set_index("year").plot()
```


Q)
* matplotlib의 pyplot을 활용하여 다음을 구하시오.
* 년도별 regional_indicator 별 평균 행복을 도표로 구하시오.


```python
df_by_regional_indicator = df[["regional_indicator","year","happiness"]].groupby(["regional_indicator", "year"]).agg(["mean"])
df_pivoted = df_by_regional_indicator.pivot_table(index="year", columns="regional_indicator")

plt.figure()
df_pivoted.plot()
plt.legend(loc="best")
```

### Gotchas(Using if/truth statements with pandas)

* 아래 코드의 Pandas Series는 False도 포함하고 있으며 False도, 또한 길이가 1 이상 이기에 True가 될 수 있는 상황이여서 에러가 발생합니다.


```python
if pd.Series([False, True, False]):
    print("I was true")
```


    ---------------------------------------------------------------------------

    ValueError                                Traceback (most recent call last)

    /var/folders/6k/3q6ftyyn3v1gswgzvq0rxsf80000gn/T/ipykernel_5803/2648304181.py in <module>
    ----> 1 if pd.Series([False, True, False]):
          2     print("I was true")


    ~/miniconda3/envs/exp_project/lib/python3.9/site-packages/pandas/core/generic.py in __nonzero__(self)
       1535     @final
       1536     def __nonzero__(self):
    -> 1537         raise ValueError(
       1538             f"The truth value of a {type(self).__name__} is ambiguous. "
       1539             "Use a.empty, a.bool(), a.item(), a.any() or a.all()."


    ValueError: The truth value of a Series is ambiguous. Use a.empty, a.bool(), a.item(), a.any() or a.all().


* Pandas Series 중 하나라도 True인 경우를 만족하고 싶은 경우 `.any()`를 사용하면 됩니다.


```python
if pd.Series([False, True, False]).any():
    print("At least one True included")
else:
    print("No True included")
```

    At least one True included


* Pandas Series가 모두 True인 경우를 만족하고 싶은 경우 `.all()`을 사용하면 됩니다.


```python
if pd.Series([True, True]).all():
    print("Everything is True")
else:
    print("At least one False included")
```

    Everything is True


* Pandas Series가 비어있는지 확인하고 싶은 경우 `.empty`나 is None을 사용하면 됩니다.


```python
if pd.Series(["1"]) is None:  
    print("No element is included")
else:
    print("At least one element included")

# 위와 같음
# if pd.Series(["1"]).empty:
#     print("No element is included")
# else:
#     print("At least one element included")
    
```

    At least one element included

