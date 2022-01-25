---
title: "[Python] Reshaping Data with pandas(4)"
layout: single
date: '16/1/2022'
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
### Pandas 
* Using `.stack` with `.mean()` or `.diff()`
* `.explode()` - converts list contained column into separate rows
* `pd.json_normalize()` - converts json data into dataframe
* Convert nested data column

---


```python
# import pkg & dataset
import numpy as np
import pandas as pd
df = pd.read_csv("obesity.csv")
df_melted = df.melt(id_vars="country")

df_melted[["gender", "year"]] = df_melted["variable"].str.extract("([a-z]+)([0-9]+)", expand=True)
df_melted = df_melted.drop(columns="variable").rename(columns={"value":"perc_obesity"})
df_melted = df_melted.set_index(["country", "gender", "year"], drop=True)
df_melted
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
      <th></th>
      <th>perc_obesity</th>
    </tr>
    <tr>
      <th>country</th>
      <th>gender</th>
      <th>year</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>argentina</th>
      <th>male</th>
      <th>2005</th>
      <td>21.5</td>
    </tr>
    <tr>
      <th>japan</th>
      <th>male</th>
      <th>2005</th>
      <td>2.5</td>
    </tr>
    <tr>
      <th>norway</th>
      <th>male</th>
      <th>2005</th>
      <td>17.6</td>
    </tr>
    <tr>
      <th>argentina</th>
      <th>female</th>
      <th>2005</th>
      <td>24.2</td>
    </tr>
    <tr>
      <th>japan</th>
      <th>female</th>
      <th>2005</th>
      <td>2.6</td>
    </tr>
    <tr>
      <th>norway</th>
      <th>female</th>
      <th>2005</th>
      <td>18.6</td>
    </tr>
    <tr>
      <th>argentina</th>
      <th>male</th>
      <th>2015</th>
      <td>26.8</td>
    </tr>
    <tr>
      <th>japan</th>
      <th>male</th>
      <th>2015</th>
      <td>4.6</td>
    </tr>
    <tr>
      <th>norway</th>
      <th>male</th>
      <th>2015</th>
      <td>23.0</td>
    </tr>
    <tr>
      <th>argentina</th>
      <th>female</th>
      <th>2015</th>
      <td>28.5</td>
    </tr>
    <tr>
      <th>japan</th>
      <th>female</th>
      <th>2015</th>
      <td>3.6</td>
    </tr>
    <tr>
      <th>norway</th>
      <th>female</th>
      <th>2015</th>
      <td>22.2</td>
    </tr>
  </tbody>
</table>
</div>



---

### Using .stack() with .mean() or .diff()


```python
# mean of obesity percent by gender & year
df_general = df_melted.unstack(level=0).mean(axis=1)
df_general
```




    gender  year
    female  2005    15.133333
            2015    18.100000
    male    2005    13.866667
            2015    18.133333
    dtype: float64




```python
# difference of obesity percent by year considering country & gender
df_melted.unstack(level=2).diff(axis=1)
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
      <th></th>
      <th colspan="2" halign="left">perc_obesity</th>
    </tr>
    <tr>
      <th></th>
      <th>year</th>
      <th>2005</th>
      <th>2015</th>
    </tr>
    <tr>
      <th>country</th>
      <th>gender</th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowspan="2" valign="top">argentina</th>
      <th>female</th>
      <td>NaN</td>
      <td>4.3</td>
    </tr>
    <tr>
      <th>male</th>
      <td>NaN</td>
      <td>5.3</td>
    </tr>
    <tr>
      <th rowspan="2" valign="top">japan</th>
      <th>female</th>
      <td>NaN</td>
      <td>1.0</td>
    </tr>
    <tr>
      <th>male</th>
      <td>NaN</td>
      <td>2.1</td>
    </tr>
    <tr>
      <th rowspan="2" valign="top">norway</th>
      <th>female</th>
      <td>NaN</td>
      <td>3.6</td>
    </tr>
    <tr>
      <th>male</th>
      <td>NaN</td>
      <td>5.4</td>
    </tr>
  </tbody>
</table>
</div>




```python
# mean of obesity by country
df_melted.stack().groupby("country").mean()
```




    country
    argentina    25.250
    japan         3.325
    norway       20.350
    dtype: float64



---

### .explode()


```python
# dataset
# csv는 python의 list로써 저장되는 것이 아니므로, 데이터를 읽을 때 해당 열이 python의 list임을 명시해야 함
import ast
df2 = pd.read_csv("obesity_list.csv", converters={"bounds": ast.literal_eval})
```


```python
# 방법 1) explode한 df와 기존 df의 열 merge
df2_bounds = df2["bounds"].explode()
df2[["country", "perc_obesity"]].merge(df2_bounds, left_index=True, right_index=True)
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
      <th>country</th>
      <th>perc_obesity</th>
      <th>bounds</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Argentina</td>
      <td>21.5</td>
      <td>15.4</td>
    </tr>
    <tr>
      <th>0</th>
      <td>Argentina</td>
      <td>21.5</td>
      <td>31.5</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Germany</td>
      <td>22.3</td>
      <td>16.2</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Germany</td>
      <td>22.3</td>
      <td>32.4</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Japan</td>
      <td>2.5</td>
      <td>1.1</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Japan</td>
      <td>2.5</td>
      <td>3.5</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Norway</td>
      <td>23.0</td>
      <td>13.1</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Norway</td>
      <td>23.0</td>
      <td>33.0</td>
    </tr>
  </tbody>
</table>
</div>




```python
# 방법 2) 해당 행을 explode 함수 안에 명시, 이 경우 index를 reset할 필요 존재
df2.explode("bounds").reset_index(drop=True)
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
      <th>country</th>
      <th>perc_obesity</th>
      <th>bounds</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Argentina</td>
      <td>21.5</td>
      <td>15.4</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Argentina</td>
      <td>21.5</td>
      <td>31.5</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Germany</td>
      <td>22.3</td>
      <td>16.2</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Germany</td>
      <td>22.3</td>
      <td>32.4</td>
    </tr>
    <tr>
      <th>4</th>
      <td>Japan</td>
      <td>2.5</td>
      <td>1.1</td>
    </tr>
    <tr>
      <th>5</th>
      <td>Japan</td>
      <td>2.5</td>
      <td>3.5</td>
    </tr>
    <tr>
      <th>6</th>
      <td>Norway</td>
      <td>23.0</td>
      <td>13.1</td>
    </tr>
    <tr>
      <th>7</th>
      <td>Norway</td>
      <td>23.0</td>
      <td>33.0</td>
    </tr>
  </tbody>
</table>
</div>




```python
# dataset
df3 = pd.read_csv("obesity3.csv")
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
      <th>country</th>
      <th>perc_obesity</th>
      <th>bounds</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Argentina</td>
      <td>21.5</td>
      <td>11.4-25.5</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Germany</td>
      <td>22.3</td>
      <td>16.2-32.4</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Japan</td>
      <td>2.5</td>
      <td>8.1-16.5</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Norway</td>
      <td>23.0</td>
      <td>9.1-20.1</td>
    </tr>
  </tbody>
</table>
</div>




```python
# 한 열이 특정한 string을 기준을 바탕으로 list로 분리한 뒤 explode를 사용할 수도 있음
df3_splited = df3.assign(bounds = df3["bounds"].str.split("-").explode("bounds"))
df3_splited
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
      <th>country</th>
      <th>perc_obesity</th>
      <th>bounds</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Argentina</td>
      <td>21.5</td>
      <td>11.4</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Germany</td>
      <td>22.3</td>
      <td>25.5</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Japan</td>
      <td>2.5</td>
      <td>16.2</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Norway</td>
      <td>23.0</td>
      <td>32.4</td>
    </tr>
  </tbody>
</table>
</div>



---

### pd.json_normalize()
* nest가 한번인 경우까지 dataframe으로 normalize 됨
* parameter
    * `sep` -  column name의 separator인 string 명시 가능 (default는 .)
    * `record_path` - double nested 되어 있을 경우 해당 데이터를 dataframe으로 반환
    * `meta` - Fields to use as metadata for each record in resulting table


```python
# dataset
import json
movies = json.load(open("movies.json"))
movies
```




    [{'director': 'Woody Allen',
      'producer': 'Letty Aronson',
      'features': {'title': 'Magic in the Moonlight', 'year': 2014}},
     {'director': 'Niki Caro',
      'producer': 'Jason Reed',
      'features': {'title': 'Mulan', 'year': 2020}}]




```python
pd.json_normalize(movies, sep="_")
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
      <th>director</th>
      <th>producer</th>
      <th>features_title</th>
      <th>features_year</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Woody Allen</td>
      <td>Letty Aronson</td>
      <td>Magic in the Moonlight</td>
      <td>2014</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Niki Caro</td>
      <td>Jason Reed</td>
      <td>Mulan</td>
      <td>2020</td>
    </tr>
  </tbody>
</table>
</div>




```python
# dataset
movies2 = json.load(open("movies2.json"))
movies2
```




    [{'director': 'Woody Allen',
      'producer': 'Letty Aronson',
      'features': [{'title': 'Magic in the Moonlight', 'year': 2014},
       {'title': 'Vicky Cristina Barcelona', 'year': 2008},
       {'title': 'Midnight in Paris', 'year': 2011}]},
     {'director': 'Niki Caro',
      'producer': 'Jason Reed',
      'features': [{'title': 'Mulan', 'year': 2020}]}]




```python
# 열 안에 또 json 형식의 데이터가 있으면 flatten되지 않음
pd.json_normalize(movies2)
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
      <th>director</th>
      <th>producer</th>
      <th>features</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Woody Allen</td>
      <td>Letty Aronson</td>
      <td>[{'title': 'Magic in the Moonlight', 'year': 2...</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Niki Caro</td>
      <td>Jason Reed</td>
      <td>[{'title': 'Mulan', 'year': 2020}]</td>
    </tr>
  </tbody>
</table>
</div>




```python
# features 열의 json 형식의 데이터를 dataframe으로 반환
pd.json_normalize(movies2, record_path="features")
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
      <th>title</th>
      <th>year</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Magic in the Moonlight</td>
      <td>2014</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Vicky Cristina Barcelona</td>
      <td>2008</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Midnight in Paris</td>
      <td>2011</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Mulan</td>
      <td>2020</td>
    </tr>
  </tbody>
</table>
</div>




```python
pd.json_normalize(movies2, record_path='features', meta=["director", "producer"])
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
      <th>title</th>
      <th>year</th>
      <th>director</th>
      <th>producer</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Magic in the Moonlight</td>
      <td>2014</td>
      <td>Woody Allen</td>
      <td>Letty Aronson</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Vicky Cristina Barcelona</td>
      <td>2008</td>
      <td>Woody Allen</td>
      <td>Letty Aronson</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Midnight in Paris</td>
      <td>2011</td>
      <td>Woody Allen</td>
      <td>Letty Aronson</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Mulan</td>
      <td>2020</td>
      <td>Niki Caro</td>
      <td>Jason Reed</td>
    </tr>
  </tbody>
</table>
</div>



---

### Convert nested data column
* `json.loads` - convert json string into python dictionary


```python
# dataset
# bird_name이 담겨 있는 list
bird_name = ['Killdeer', 'Chipping Sparrow', 'Cedar Waxwing']
# bird feature이 담겨 있는 list(각 bird의 feature은 dictionary 형태의 String임)
bird_features = ['{"Size" : "Large", "Color": "Golden brown", "Behavior": "Runs swiftly along ground", "Habitat": "Rocky areas"}',
                 '{"Size":"Small", "Color": "Gray-white", "Behavior": "Often in flocks", "Habitat": "Open woodlands"}',
                 '{"Size":"Small", "Color": "Gray-brown", "Behavior": "Catch insects over open water", "Habitat": "Parks"}']
```


```python
# make dataframe using dict
birds = pd.DataFrame(dict(bird_name=bird_name, bird_features=bird_features))
birds
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
      <th>bird_name</th>
      <th>bird_features</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Killdeer</td>
      <td>{"Size" : "Large", "Color": "Golden brown", "B...</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Chipping Sparrow</td>
      <td>{"Size":"Small", "Color": "Gray-white", "Behav...</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Cedar Waxwing</td>
      <td>{"Size":"Small", "Color": "Gray-brown", "Behav...</td>
    </tr>
  </tbody>
</table>
</div>



* 방법1


```python
# convert bird_features into dataframe using json.loads & pd.Series
# json.loads - json 형식의 문자열을 dictionary으로 convert, 이후 dictionary를 pd.Series으로 convert
bird_features_df = birds["bird_features"].apply(json.loads).apply(pd.Series)
bird_features_df
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
      <th>Size</th>
      <th>Color</th>
      <th>Behavior</th>
      <th>Habitat</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Large</td>
      <td>Golden brown</td>
      <td>Runs swiftly along ground</td>
      <td>Rocky areas</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Small</td>
      <td>Gray-white</td>
      <td>Often in flocks</td>
      <td>Open woodlands</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Small</td>
      <td>Gray-brown</td>
      <td>Catch insects over open water</td>
      <td>Parks</td>
    </tr>
  </tbody>
</table>
</div>




```python
# bird_name과 bird_feature 최종 합치기
bird_name_df = birds.drop(columns="bird_features")
pd.concat([bird_name_df, bird_features_df], axis=1)
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
      <th>bird_name</th>
      <th>Size</th>
      <th>Color</th>
      <th>Behavior</th>
      <th>Habitat</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Killdeer</td>
      <td>Large</td>
      <td>Golden brown</td>
      <td>Runs swiftly along ground</td>
      <td>Rocky areas</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Chipping Sparrow</td>
      <td>Small</td>
      <td>Gray-white</td>
      <td>Often in flocks</td>
      <td>Open woodlands</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Cedar Waxwing</td>
      <td>Small</td>
      <td>Gray-brown</td>
      <td>Catch insects over open water</td>
      <td>Parks</td>
    </tr>
  </tbody>
</table>
</div>



* 방법2


```python
# Apply json.loads to the bird_features column and transform it to a list 
birds_features = birds['bird_features'].apply(json.loads).to_list()

# Convert birds_features into a JSON 
birds_dump = json.dumps(birds_features)

# Read the JSON birds_dump into a DataFrame
birds_df = pd.read_json(birds_dump)

# Concatenate the 'bird_name' column of birds with birds_df
pd.concat([birds["bird_name"], birds_df], axis=1)
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
      <th>bird_name</th>
      <th>Size</th>
      <th>Color</th>
      <th>Behavior</th>
      <th>Habitat</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Killdeer</td>
      <td>Large</td>
      <td>Golden brown</td>
      <td>Runs swiftly along ground</td>
      <td>Rocky areas</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Chipping Sparrow</td>
      <td>Small</td>
      <td>Gray-white</td>
      <td>Often in flocks</td>
      <td>Open woodlands</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Cedar Waxwing</td>
      <td>Small</td>
      <td>Gray-brown</td>
      <td>Catch insects over open water</td>
      <td>Parks</td>
    </tr>
  </tbody>
</table>
</div>


