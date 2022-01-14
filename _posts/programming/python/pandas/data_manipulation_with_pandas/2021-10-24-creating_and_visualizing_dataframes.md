---
title: "[Python] Data manipulation with pandas(4)"
layout: single
date: '24/10/2021'
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
* Creating and Visualizing DataFrames
    * `.plot()`
        * kind="bar"/ "line"/ "scatter"
    * `.hist()`
    * `.legend()`
* Missing data
    * `.isna()`
* Read & write dataframe
    * `pd.read_csv()`
    * `.to_csv()`

---


```python
# import data
import seaborn as sns
import pandas as pd
import matplotlib.pyplot as plt

iris = sns.load_dataset("iris")
```

---

### .plot()
* kind="bar"


```python
petal_len_by_species = iris.groupby("species")[["petal_length"]].mean()
petal_len_by_species.plot(kind="bar")
plt.show()
```


    
<p align="center">
    <img src="/img/programming/data_manipulation_with_pandas/output1.png" align="center">
</p>
    


* kind = "line"


```python
sp_wd_by_sp_len = iris.groupby("sepal_length")[["sepal_width"]].mean()
sp_wd_by_sp_len.plot(kind="line")
plt.show()
```


    
<p align="center">
    <img src="/img/programming/data_manipulation_with_pandas/output2.png" align="center">
</p>
    


* kind = "scatter"


```python
iris.plot(x="sepal_length",
          y="sepal_width",
          kind="scatter",
          title="Sepal length x Sepal width")

plt.show()
```


    
<p align="center">
    <img src="/img/programming/data_manipulation_with_pandas/output3.png" align="center">
</p>
    


---

### .hist()
* pandas Series로 subsetting 한 경우 <AxesSubplot:>이 되어 2개의 그래프가 하나의 그래프로 표현될 수 있음


```python
iris[iris.species=="setosa"]['sepal_length'].hist(alpha=0.5, bins=20)
iris[iris.species=="versicolor"]['sepal_length'].hist(alpha=0.5, bins=20)
plt.legend(['setosa sepal length','versicolor sepal length'])
plt.show()
```


    
<p align="center">
    <img src="/img/programming/data_manipulation_with_pandas/output4.png" align="center">
</p>
    


---

### .isna()
* .any()
* .sum()


```python
# column별 missing value 존재 유무 확인
iris.isna().any()

# column별 missing value 개수 확인
iris.isna().sum()
```




    sepal_length    0
    sepal_width     0
    petal_length    0
    petal_width     0
    species         0
    dtype: int64



---

### .dropna()
* 결측값이 존재하는 row 삭제


```python
iris.dropna().head()
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
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>5.1</td>
      <td>3.5</td>
      <td>1.4</td>
      <td>0.2</td>
      <td>setosa</td>
    </tr>
    <tr>
      <th>1</th>
      <td>4.9</td>
      <td>3.0</td>
      <td>1.4</td>
      <td>0.2</td>
      <td>setosa</td>
    </tr>
    <tr>
      <th>2</th>
      <td>4.7</td>
      <td>3.2</td>
      <td>1.3</td>
      <td>0.2</td>
      <td>setosa</td>
    </tr>
    <tr>
      <th>3</th>
      <td>4.6</td>
      <td>3.1</td>
      <td>1.5</td>
      <td>0.2</td>
      <td>setosa</td>
    </tr>
    <tr>
      <th>4</th>
      <td>5.0</td>
      <td>3.6</td>
      <td>1.4</td>
      <td>0.2</td>
      <td>setosa</td>
    </tr>
  </tbody>
</table>
</div>



---

### .fillna()
* 결측값 채워넣기


```python
iris.fillna(0).head()
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
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>5.1</td>
      <td>3.5</td>
      <td>1.4</td>
      <td>0.2</td>
      <td>setosa</td>
    </tr>
    <tr>
      <th>1</th>
      <td>4.9</td>
      <td>3.0</td>
      <td>1.4</td>
      <td>0.2</td>
      <td>setosa</td>
    </tr>
    <tr>
      <th>2</th>
      <td>4.7</td>
      <td>3.2</td>
      <td>1.3</td>
      <td>0.2</td>
      <td>setosa</td>
    </tr>
    <tr>
      <th>3</th>
      <td>4.6</td>
      <td>3.1</td>
      <td>1.5</td>
      <td>0.2</td>
      <td>setosa</td>
    </tr>
    <tr>
      <th>4</th>
      <td>5.0</td>
      <td>3.6</td>
      <td>1.4</td>
      <td>0.2</td>
      <td>setosa</td>
    </tr>
  </tbody>
</table>
</div>



---

### Creating dataframes
* 1) from a dictionary of lists
* 2) from a list of dictionaries


```python
# Create a dictionary of lists with new data
class_dict = {
  "class": ["A", "B"],
  "number_of_students": [40, 38],
  "Teacher": ["Kwon", "Park"]
}

pd.DataFrame(class_dict)
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
      <th>class</th>
      <th>number_of_students</th>
      <th>Teacher</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>A</td>
      <td>40</td>
      <td>Kwon</td>
    </tr>
    <tr>
      <th>1</th>
      <td>B</td>
      <td>38</td>
      <td>Park</td>
    </tr>
  </tbody>
</table>
</div>




```python
class_list = [
    {"class": "A", "number_of_students": 40, "Teacher":"Kwon"},
    {"class": "B", "number_of_students": 38, "Teacher":"Park"},
]

pd.DataFrame(class_list)
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
      <th>class</th>
      <th>number_of_students</th>
      <th>Teacher</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>A</td>
      <td>40</td>
      <td>Kwon</td>
    </tr>
    <tr>
      <th>1</th>
      <td>B</td>
      <td>38</td>
      <td>Park</td>
    </tr>
  </tbody>
</table>
</div>



---

### pd.read_csv() & .to_csv()


```python
tp = pd.read_csv("temperatures.csv")
tp.head()
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
    <tr>
      <th>3</th>
      <td>3</td>
      <td>2000-04-01</td>
      <td>Abidjan</td>
      <td>Côte D'Ivoire</td>
      <td>28.162</td>
    </tr>
    <tr>
      <th>4</th>
      <td>4</td>
      <td>2000-05-01</td>
      <td>Abidjan</td>
      <td>Côte D'Ivoire</td>
      <td>27.547</td>
    </tr>
  </tbody>
</table>
</div>




```python
tp.to_csv("name_of_file.csv")
```
---