---
title: "[Python] Data manipulation with pandas(3)"
layout: single
date: '20/10/2021'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - PYTHON
tags:
  - PYTHON
---

---
### Pandas 
* Slicing and Indexing DataFrames
    * pandas에는 index와 loc을 사용해 더 깔끔한 코드로 subsetting을 수 있음
    * 그러나 data가 index로 활용된 측면에서 이는 tidy data는 아님(이 문제는 .reset_index를 통해 해결 가능)
    * 개인적으로 dataframe 정렬 후 slicing을 통해 dataframe을 subsetting할 때 유용할 수 있을 것이라고 생각
    * .set_index()
    * .reset_index()
    * .loc()
    * .sort_index()
    

---


```python
# import data
import seaborn as sns
import pandas as pd
import numpy as np

# pd.set_option('display.max_rows', 1000)
# pd.set_option('display.max_columns', 1000)

iris = sns.load_dataset("iris")
temperatures = pd.read_csv("temperatures.csv")
temperatures.head(3)
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
      <th>Unnamed: 0</th>
      <th>date</th>
      <th>city</th>
      <th>country</th>
      <th>avg_temp_c</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>0</td>
      <td>2000-01-01</td>
      <td>Abidjan</td>
      <td>Côte D'Ivoire</td>
      <td>27.293</td>
    </tr>
    <tr>
      <th>1</th>
      <td>1</td>
      <td>2000-02-01</td>
      <td>Abidjan</td>
      <td>Côte D'Ivoire</td>
      <td>27.685</td>
    </tr>
    <tr>
      <th>2</th>
      <td>2</td>
      <td>2000-03-01</td>
      <td>Abidjan</td>
      <td>Côte D'Ivoire</td>
      <td>29.061</td>
    </tr>
  </tbody>
</table>
</div>



---

### .set_index()
* index는 multilevel(2개 이상)으로 설정할 수 있음


```python
# index가 1개인 경우
iris["name"] = iris["species"] + np.arange(len(iris)).astype(str)
iris.set_index("name").head()
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
      <th>sepal_length</th>
      <th>sepal_width</th>
      <th>petal_length</th>
      <th>petal_width</th>
      <th>species</th>
    </tr>
    <tr>
      <th>name</th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>setosa0</th>
      <td>5.1</td>
      <td>3.5</td>
      <td>1.4</td>
      <td>0.2</td>
      <td>setosa</td>
    </tr>
    <tr>
      <th>setosa1</th>
      <td>4.9</td>
      <td>3.0</td>
      <td>1.4</td>
      <td>0.2</td>
      <td>setosa</td>
    </tr>
    <tr>
      <th>setosa2</th>
      <td>4.7</td>
      <td>3.2</td>
      <td>1.3</td>
      <td>0.2</td>
      <td>setosa</td>
    </tr>
    <tr>
      <th>setosa3</th>
      <td>4.6</td>
      <td>3.1</td>
      <td>1.5</td>
      <td>0.2</td>
      <td>setosa</td>
    </tr>
    <tr>
      <th>setosa4</th>
      <td>5.0</td>
      <td>3.6</td>
      <td>1.4</td>
      <td>0.2</td>
      <td>setosa</td>
    </tr>
  </tbody>
</table>
</div>




```python
# index가 2개인 경우
temperatures_multi_ind = temperatures.set_index(["country", "city"])
temperatures_multi_ind.head()
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
      <th>Unnamed: 0</th>
      <th>date</th>
      <th>avg_temp_c</th>
    </tr>
    <tr>
      <th>country</th>
      <th>city</th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowspan="5" valign="top">Côte D'Ivoire</th>
      <th>Abidjan</th>
      <td>0</td>
      <td>2000-01-01</td>
      <td>27.293</td>
    </tr>
    <tr>
      <th>Abidjan</th>
      <td>1</td>
      <td>2000-02-01</td>
      <td>27.685</td>
    </tr>
    <tr>
      <th>Abidjan</th>
      <td>2</td>
      <td>2000-03-01</td>
      <td>29.061</td>
    </tr>
    <tr>
      <th>Abidjan</th>
      <td>3</td>
      <td>2000-04-01</td>
      <td>28.162</td>
    </tr>
    <tr>
      <th>Abidjan</th>
      <td>4</td>
      <td>2000-05-01</td>
      <td>27.547</td>
    </tr>
  </tbody>
</table>
</div>



---

### .reset_index()
* index가 다시 column으로 바뀜
* 옵션 drop=True로 할 경우 index 열 제거


```python
temperatures_ind = temperatures.set_index("city")
temperatures_ind.head(3)
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
      <th>Unnamed: 0</th>
      <th>date</th>
      <th>country</th>
      <th>avg_temp_c</th>
    </tr>
    <tr>
      <th>city</th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Abidjan</th>
      <td>0</td>
      <td>2000-01-01</td>
      <td>Côte D'Ivoire</td>
      <td>27.293</td>
    </tr>
    <tr>
      <th>Abidjan</th>
      <td>1</td>
      <td>2000-02-01</td>
      <td>Côte D'Ivoire</td>
      <td>27.685</td>
    </tr>
    <tr>
      <th>Abidjan</th>
      <td>2</td>
      <td>2000-03-01</td>
      <td>Côte D'Ivoire</td>
      <td>29.061</td>
    </tr>
  </tbody>
</table>
</div>




```python
temperatures_ind.reset_index().head(3)
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
      <th>city</th>
      <th>Unnamed: 0</th>
      <th>date</th>
      <th>country</th>
      <th>avg_temp_c</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Abidjan</td>
      <td>0</td>
      <td>2000-01-01</td>
      <td>Côte D'Ivoire</td>
      <td>27.293</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Abidjan</td>
      <td>1</td>
      <td>2000-02-01</td>
      <td>Côte D'Ivoire</td>
      <td>27.685</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Abidjan</td>
      <td>2</td>
      <td>2000-03-01</td>
      <td>Côte D'Ivoire</td>
      <td>29.061</td>
    </tr>
  </tbody>
</table>
</div>




```python
temperatures_ind.reset_index(drop=True).head(3)
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
      <th>Unnamed: 0</th>
      <th>date</th>
      <th>country</th>
      <th>avg_temp_c</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>0</td>
      <td>2000-01-01</td>
      <td>Côte D'Ivoire</td>
      <td>27.293</td>
    </tr>
    <tr>
      <th>1</th>
      <td>1</td>
      <td>2000-02-01</td>
      <td>Côte D'Ivoire</td>
      <td>27.685</td>
    </tr>
    <tr>
      <th>2</th>
      <td>2</td>
      <td>2000-03-01</td>
      <td>Côte D'Ivoire</td>
      <td>29.061</td>
    </tr>
  </tbody>
</table>
</div>



---

### .loc()을 이용한 subsetting(1)
* row에 대한 filter


```python
# .loc을 활용해 (row에 대해) filter하는 방법1 (df.column으로 조건을 주면 됨) (추천)
iris.loc[(iris.species == "setosa") & (iris.sepal_length < 5.0)].head()
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
      <th>sepal_length</th>
      <th>sepal_width</th>
      <th>petal_length</th>
      <th>petal_width</th>
      <th>species</th>
      <th>name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td>4.9</td>
      <td>3.0</td>
      <td>1.4</td>
      <td>0.2</td>
      <td>setosa</td>
      <td>setosa1</td>
    </tr>
    <tr>
      <th>2</th>
      <td>4.7</td>
      <td>3.2</td>
      <td>1.3</td>
      <td>0.2</td>
      <td>setosa</td>
      <td>setosa2</td>
    </tr>
    <tr>
      <th>3</th>
      <td>4.6</td>
      <td>3.1</td>
      <td>1.5</td>
      <td>0.2</td>
      <td>setosa</td>
      <td>setosa3</td>
    </tr>
    <tr>
      <th>6</th>
      <td>4.6</td>
      <td>3.4</td>
      <td>1.4</td>
      <td>0.3</td>
      <td>setosa</td>
      <td>setosa6</td>
    </tr>
    <tr>
      <th>8</th>
      <td>4.4</td>
      <td>2.9</td>
      <td>1.4</td>
      <td>0.2</td>
      <td>setosa</td>
      <td>setosa8</td>
    </tr>
  </tbody>
</table>
</div>




```python
# .loc을 활용해 (row에 대해) filter하는 방법2 (filter할 것을 index로 설정 후 조건을 주면 됨)
temperatures_ind = temperatures.set_index("city")
temperatures_ind = temperatures_ind.loc[["Moscow", "Saint Petersburg"]]
temperatures_ind.reset_index().head(5)

# 방법1로 방법2를 할 경우의 코드
# temperatures.loc[temperatures.city.isin(["Moscow", "Saint Petersburg"])].head(5)
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
      <th>city</th>
      <th>Unnamed: 0</th>
      <th>date</th>
      <th>country</th>
      <th>avg_temp_c</th>
      <th>year</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Moscow</td>
      <td>10725</td>
      <td>2000-01-01</td>
      <td>Russia</td>
      <td>-7.313</td>
      <td>2000</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Moscow</td>
      <td>10726</td>
      <td>2000-02-01</td>
      <td>Russia</td>
      <td>-3.551</td>
      <td>2000</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Moscow</td>
      <td>10727</td>
      <td>2000-03-01</td>
      <td>Russia</td>
      <td>-1.661</td>
      <td>2000</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Moscow</td>
      <td>10728</td>
      <td>2000-04-01</td>
      <td>Russia</td>
      <td>10.096</td>
      <td>2000</td>
    </tr>
    <tr>
      <th>4</th>
      <td>Moscow</td>
      <td>10729</td>
      <td>2000-05-01</td>
      <td>Russia</td>
      <td>10.357</td>
      <td>2000</td>
    </tr>
  </tbody>
</table>
</div>




```python
# .loc을 활용해 (row에 대해 ) filter 하는 방법 2-2 (multi index인 경우, 리스트 안에 튜플로(outer_index, inner_index) 조건을 주어야 함)
temperatures_multi_ind = temperatures.set_index(["country", "city"])
rows_to_keep = [("Brazil", "Rio De Janeiro"), ("Pakistan", "Lahore")]
temperatures_multi_ind.loc[rows_to_keep]

# 방법1로 방법 2-2를 할 경우의 코드
# temperatures[(temperatures.country.isin(["Brazil", "Pakistan"])) & (temperatures.city.isin(["Rio De Janeiro", "Lahore"]))]
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
      <th>Unnamed: 0</th>
      <th>date</th>
      <th>avg_temp_c</th>
    </tr>
    <tr>
      <th>country</th>
      <th>city</th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowspan="5" valign="top">Brazil</th>
      <th>Rio De Janeiro</th>
      <td>12540</td>
      <td>2000-01-01</td>
      <td>25.974</td>
    </tr>
    <tr>
      <th>Rio De Janeiro</th>
      <td>12541</td>
      <td>2000-02-01</td>
      <td>26.699</td>
    </tr>
    <tr>
      <th>Rio De Janeiro</th>
      <td>12542</td>
      <td>2000-03-01</td>
      <td>26.270</td>
    </tr>
    <tr>
      <th>Rio De Janeiro</th>
      <td>12543</td>
      <td>2000-04-01</td>
      <td>25.750</td>
    </tr>
    <tr>
      <th>Rio De Janeiro</th>
      <td>12544</td>
      <td>2000-05-01</td>
      <td>24.356</td>
    </tr>
    <tr>
      <th>...</th>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th rowspan="5" valign="top">Pakistan</th>
      <th>Lahore</th>
      <td>8575</td>
      <td>2013-05-01</td>
      <td>33.457</td>
    </tr>
    <tr>
      <th>Lahore</th>
      <td>8576</td>
      <td>2013-06-01</td>
      <td>34.456</td>
    </tr>
    <tr>
      <th>Lahore</th>
      <td>8577</td>
      <td>2013-07-01</td>
      <td>33.279</td>
    </tr>
    <tr>
      <th>Lahore</th>
      <td>8578</td>
      <td>2013-08-01</td>
      <td>31.511</td>
    </tr>
    <tr>
      <th>Lahore</th>
      <td>8579</td>
      <td>2013-09-01</td>
      <td>NaN</td>
    </tr>
  </tbody>
</table>
<p>330 rows × 3 columns</p>
</div>



---

### .loc()을 이용한 subsetting(2)
* row에 대한 filter & column에 대한 select


```python
temperatures_srt = temperatures.set_index(["country", "city"]).sort_index()

# .loc을 활용해 (row에 대해) slice 하는 방법 1 (index slicing ("condition1":"condition2")로 조건을 주면 됨)
temperatures_srt.loc["Pakistan":"Russia"]

# multi index인 경우, inner index에 대해서만 조건을 줄 수 없음, 아래의 겨우 원하는 df를 반환하지 않음
# temperatures_srt.loc["Lahore":"Moscow"]
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
      <th>Unnamed: 0</th>
      <th>date</th>
      <th>avg_temp_c</th>
      <th>year</th>
    </tr>
    <tr>
      <th>country</th>
      <th>city</th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowspan="5" valign="top">Pakistan</th>
      <th>Faisalabad</th>
      <td>4785</td>
      <td>2000-01-01</td>
      <td>12.792</td>
      <td>2000</td>
    </tr>
    <tr>
      <th>Faisalabad</th>
      <td>4786</td>
      <td>2000-02-01</td>
      <td>14.339</td>
      <td>2000</td>
    </tr>
    <tr>
      <th>Faisalabad</th>
      <td>4787</td>
      <td>2000-03-01</td>
      <td>20.309</td>
      <td>2000</td>
    </tr>
    <tr>
      <th>Faisalabad</th>
      <td>4788</td>
      <td>2000-04-01</td>
      <td>29.072</td>
      <td>2000</td>
    </tr>
    <tr>
      <th>Faisalabad</th>
      <td>4789</td>
      <td>2000-05-01</td>
      <td>34.845</td>
      <td>2000</td>
    </tr>
    <tr>
      <th>...</th>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th rowspan="5" valign="top">Russia</th>
      <th>Saint Petersburg</th>
      <td>13360</td>
      <td>2013-05-01</td>
      <td>12.355</td>
      <td>2013</td>
    </tr>
    <tr>
      <th>Saint Petersburg</th>
      <td>13361</td>
      <td>2013-06-01</td>
      <td>17.185</td>
      <td>2013</td>
    </tr>
    <tr>
      <th>Saint Petersburg</th>
      <td>13362</td>
      <td>2013-07-01</td>
      <td>17.234</td>
      <td>2013</td>
    </tr>
    <tr>
      <th>Saint Petersburg</th>
      <td>13363</td>
      <td>2013-08-01</td>
      <td>17.153</td>
      <td>2013</td>
    </tr>
    <tr>
      <th>Saint Petersburg</th>
      <td>13364</td>
      <td>2013-09-01</td>
      <td>NaN</td>
      <td>2013</td>
    </tr>
  </tbody>
</table>
<p>1155 rows × 4 columns</p>
</div>




```python
# .loc을 활용해 (row에 대해) slice 하는 방법 1-2 (multi index인 경우, 리스트 안에 튜플:튜플로("outer_index", "inner_index"):("outer_index", "inner_index") 조건을 주어야 함)
temperatures_srt.loc[("Pakistan","Lahore"):("Russia","Moscow")]
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
      <th>Unnamed: 0</th>
      <th>date</th>
      <th>avg_temp_c</th>
    </tr>
    <tr>
      <th>country</th>
      <th>city</th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowspan="5" valign="top">Pakistan</th>
      <th>Lahore</th>
      <td>8415</td>
      <td>2000-01-01</td>
      <td>12.792</td>
    </tr>
    <tr>
      <th>Lahore</th>
      <td>8416</td>
      <td>2000-02-01</td>
      <td>14.339</td>
    </tr>
    <tr>
      <th>Lahore</th>
      <td>8417</td>
      <td>2000-03-01</td>
      <td>20.309</td>
    </tr>
    <tr>
      <th>Lahore</th>
      <td>8418</td>
      <td>2000-04-01</td>
      <td>29.072</td>
    </tr>
    <tr>
      <th>Lahore</th>
      <td>8419</td>
      <td>2000-05-01</td>
      <td>34.845</td>
    </tr>
    <tr>
      <th>...</th>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th rowspan="5" valign="top">Russia</th>
      <th>Moscow</th>
      <td>10885</td>
      <td>2013-05-01</td>
      <td>16.152</td>
    </tr>
    <tr>
      <th>Moscow</th>
      <td>10886</td>
      <td>2013-06-01</td>
      <td>18.718</td>
    </tr>
    <tr>
      <th>Moscow</th>
      <td>10887</td>
      <td>2013-07-01</td>
      <td>18.136</td>
    </tr>
    <tr>
      <th>Moscow</th>
      <td>10888</td>
      <td>2013-08-01</td>
      <td>17.485</td>
    </tr>
    <tr>
      <th>Moscow</th>
      <td>10889</td>
      <td>2013-09-01</td>
      <td>NaN</td>
    </tr>
  </tbody>
</table>
<p>660 rows × 3 columns</p>
</div>




```python
temperatures_srt = temperatures.set_index(["country", "city"]).sort_index()

# .loc을 활용해 (column)에 대해 slice 하는 방법 2
temperatures_srt.loc[:,'date':'avg_temp_c']
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
      <th>date</th>
      <th>avg_temp_c</th>
    </tr>
    <tr>
      <th>country</th>
      <th>city</th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowspan="5" valign="top">Afghanistan</th>
      <th>Kabul</th>
      <td>2000-01-01</td>
      <td>3.326</td>
    </tr>
    <tr>
      <th>Kabul</th>
      <td>2000-02-01</td>
      <td>3.454</td>
    </tr>
    <tr>
      <th>Kabul</th>
      <td>2000-03-01</td>
      <td>9.612</td>
    </tr>
    <tr>
      <th>Kabul</th>
      <td>2000-04-01</td>
      <td>17.925</td>
    </tr>
    <tr>
      <th>Kabul</th>
      <td>2000-05-01</td>
      <td>24.658</td>
    </tr>
    <tr>
      <th>...</th>
      <th>...</th>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th rowspan="5" valign="top">Zimbabwe</th>
      <th>Harare</th>
      <td>2013-05-01</td>
      <td>18.298</td>
    </tr>
    <tr>
      <th>Harare</th>
      <td>2013-06-01</td>
      <td>17.020</td>
    </tr>
    <tr>
      <th>Harare</th>
      <td>2013-07-01</td>
      <td>16.299</td>
    </tr>
    <tr>
      <th>Harare</th>
      <td>2013-08-01</td>
      <td>19.232</td>
    </tr>
    <tr>
      <th>Harare</th>
      <td>2013-09-01</td>
      <td>NaN</td>
    </tr>
  </tbody>
</table>
<p>16500 rows × 2 columns</p>
</div>




```python
temperatures_srt = temperatures.set_index(["country", "city"]).sort_index()

# .loc을 활용해 (row와 column)에 대해 slice 하는 방법 2
temperatures_srt.loc[("India", "Hyderabad"):("Iraq", "Baghdad"),"date":"avg_temp_c"]
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
      <th>date</th>
      <th>avg_temp_c</th>
    </tr>
    <tr>
      <th>country</th>
      <th>city</th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowspan="5" valign="top">India</th>
      <th>Hyderabad</th>
      <td>2000-01-01</td>
      <td>23.779</td>
    </tr>
    <tr>
      <th>Hyderabad</th>
      <td>2000-02-01</td>
      <td>25.826</td>
    </tr>
    <tr>
      <th>Hyderabad</th>
      <td>2000-03-01</td>
      <td>28.821</td>
    </tr>
    <tr>
      <th>Hyderabad</th>
      <td>2000-04-01</td>
      <td>32.698</td>
    </tr>
    <tr>
      <th>Hyderabad</th>
      <td>2000-05-01</td>
      <td>32.438</td>
    </tr>
    <tr>
      <th>...</th>
      <th>...</th>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th rowspan="5" valign="top">Iraq</th>
      <th>Baghdad</th>
      <td>2013-05-01</td>
      <td>28.673</td>
    </tr>
    <tr>
      <th>Baghdad</th>
      <td>2013-06-01</td>
      <td>33.803</td>
    </tr>
    <tr>
      <th>Baghdad</th>
      <td>2013-07-01</td>
      <td>36.392</td>
    </tr>
    <tr>
      <th>Baghdad</th>
      <td>2013-08-01</td>
      <td>35.463</td>
    </tr>
    <tr>
      <th>Baghdad</th>
      <td>2013-09-01</td>
      <td>NaN</td>
    </tr>
  </tbody>
</table>
<p>2145 rows × 2 columns</p>
</div>



---

### .sort_index


```python
temperatures_ind = temperatures.set_index(["country", "city"])
temperatures_ind.sort_index(level=["country", "city"], ascending=[True,False]).reset_index(drop=True)

# 위와 같음
# temperatures.sort_values(["country", "city"], ascending = [True,False])[["Unnamed: 0", "date", "avg_temp_c"]]
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
      <th>Unnamed: 0</th>
      <th>date</th>
      <th>avg_temp_c</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>7260</td>
      <td>2000-01-01</td>
      <td>3.326</td>
    </tr>
    <tr>
      <th>1</th>
      <td>7261</td>
      <td>2000-02-01</td>
      <td>3.454</td>
    </tr>
    <tr>
      <th>2</th>
      <td>7262</td>
      <td>2000-03-01</td>
      <td>9.612</td>
    </tr>
    <tr>
      <th>3</th>
      <td>7263</td>
      <td>2000-04-01</td>
      <td>17.925</td>
    </tr>
    <tr>
      <th>4</th>
      <td>7264</td>
      <td>2000-05-01</td>
      <td>24.658</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>16495</th>
      <td>5605</td>
      <td>2013-05-01</td>
      <td>18.298</td>
    </tr>
    <tr>
      <th>16496</th>
      <td>5606</td>
      <td>2013-06-01</td>
      <td>17.020</td>
    </tr>
    <tr>
      <th>16497</th>
      <td>5607</td>
      <td>2013-07-01</td>
      <td>16.299</td>
    </tr>
    <tr>
      <th>16498</th>
      <td>5608</td>
      <td>2013-08-01</td>
      <td>19.232</td>
    </tr>
    <tr>
      <th>16499</th>
      <td>5609</td>
      <td>2013-09-01</td>
      <td>NaN</td>
    </tr>
  </tbody>
</table>
<p>16500 rows × 3 columns</p>
</div>



---

### .iloc을 이용한 pivot_table subsetting


```python
# dataframe["column"].dt.component을 통해 date의 year, month, day 등을 얻을 수 있음
temperatures["date"] = pd.to_datetime(temperatures["date"])
temperatures["year"] = temperatures["date"].dt.year

temp_by_country_city_vs_year = temperatures.pivot_table(
    values = "avg_temp_c", 
    index = ["country", "city"], 
    columns = "year")

temp_by_country_city_vs_year.loc[("Egypt", "Cairo"):("India", "Delhi"), "2005":"2010"]
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
      <th>year</th>
      <th>2005</th>
      <th>2006</th>
      <th>2007</th>
      <th>2008</th>
      <th>2009</th>
      <th>2010</th>
    </tr>
    <tr>
      <th>country</th>
      <th>city</th>
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
      <th rowspan="2" valign="top">Egypt</th>
      <th>Cairo</th>
      <td>22.006500</td>
      <td>22.050000</td>
      <td>22.361000</td>
      <td>22.644500</td>
      <td>22.625000</td>
      <td>23.718250</td>
    </tr>
    <tr>
      <th>Gizeh</th>
      <td>22.006500</td>
      <td>22.050000</td>
      <td>22.361000</td>
      <td>22.644500</td>
      <td>22.625000</td>
      <td>23.718250</td>
    </tr>
    <tr>
      <th>Ethiopia</th>
      <th>Addis Abeba</th>
      <td>18.312833</td>
      <td>18.427083</td>
      <td>18.142583</td>
      <td>18.165000</td>
      <td>18.765333</td>
      <td>18.298250</td>
    </tr>
    <tr>
      <th>France</th>
      <th>Paris</th>
      <td>11.552917</td>
      <td>11.788500</td>
      <td>11.750833</td>
      <td>11.278250</td>
      <td>11.464083</td>
      <td>10.409833</td>
    </tr>
    <tr>
      <th>Germany</th>
      <th>Berlin</th>
      <td>9.919083</td>
      <td>10.545333</td>
      <td>10.883167</td>
      <td>10.657750</td>
      <td>10.062500</td>
      <td>8.606833</td>
    </tr>
    <tr>
      <th rowspan="5" valign="top">India</th>
      <th>Ahmadabad</th>
      <td>26.828083</td>
      <td>27.282833</td>
      <td>27.511167</td>
      <td>27.048500</td>
      <td>28.095833</td>
      <td>28.017833</td>
    </tr>
    <tr>
      <th>Bangalore</th>
      <td>25.476500</td>
      <td>25.418250</td>
      <td>25.464333</td>
      <td>25.352583</td>
      <td>25.725750</td>
      <td>25.705250</td>
    </tr>
    <tr>
      <th>Bombay</th>
      <td>27.035750</td>
      <td>27.381500</td>
      <td>27.634667</td>
      <td>27.177750</td>
      <td>27.844500</td>
      <td>27.765417</td>
    </tr>
    <tr>
      <th>Calcutta</th>
      <td>26.729167</td>
      <td>26.986250</td>
      <td>26.584583</td>
      <td>26.522333</td>
      <td>27.153250</td>
      <td>27.288833</td>
    </tr>
    <tr>
      <th>Delhi</th>
      <td>25.716083</td>
      <td>26.365917</td>
      <td>26.145667</td>
      <td>25.675000</td>
      <td>26.554250</td>
      <td>26.520250</td>
    </tr>
  </tbody>
</table>
</div>



---

### .pivot_table().mean()
* .pivot_table도 dataframe이기에 mean()함수 적용 가능
* .mean()의 옵션으로 axis = 'columns'/'index'를 입력해 해당 axis에 대한 평균 산출 가능


```python
mean_temp_by_year = temperatures.pivot_table(
    values = "avg_temp_c", 
    index = ["country", "city"], 
    columns = "year").mean()

mean_temp_by_city = temp_by_country_city_vs_year.mean(axis = 'columns')

# Filter for the city that had the lowest mean temp
mean_temp_by_city[mean_temp_by_city == min(mean_temp_by_city)]
```




    country  city  
    China    Harbin    4.876551
    dtype: float64


