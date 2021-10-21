---
title: "[Python] Data manipulation with pandas(1)"
layout: single
date: '19/10/2021'
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
* Inspecting dataframe
    * `.info()`
    * `.shape`
    * `.describe`
* Sort
    * `.sort_values()`
* select
    * df`[['column1', 'column2']]`
* filter
    * df`[df[column] == 'condition']`
* mutate
    * df`[column] = df[column] + 1`

---


```python
# import data
import seaborn as sns
import pandas as pd

iris = sns.load_dataset('iris')
```

### .info() & .shape & .describe()
* df`.info`
* df`.shape`
* df`.describe`


```python
# Print information about iris
print(iris.info())

# # Print the shape of iris
print('-'*60)
print(iris.shape)

# # Print a short statsitic description of homelessness
print('-'*60)
print(iris.describe())
```

    <class 'pandas.core.frame.DataFrame'>
    RangeIndex: 150 entries, 0 to 149
    Data columns (total 5 columns):
     #   Column        Non-Null Count  Dtype  
    ---  ------        --------------  -----  
     0   sepal_length  150 non-null    float64
     1   sepal_width   150 non-null    float64
     2   petal_length  150 non-null    float64
     3   petal_width   150 non-null    float64
     4   species       150 non-null    object 
    dtypes: float64(4), object(1)
    memory usage: 6.0+ KB
    None
    ------------------------------------------------------------
    (150, 5)
    ------------------------------------------------------------
           sepal_length  sepal_width  petal_length  petal_width
    count    150.000000   150.000000    150.000000   150.000000
    mean       5.843333     3.057333      3.758000     1.199333
    std        0.828066     0.435866      1.765298     0.762238
    min        4.300000     2.000000      1.000000     0.100000
    25%        5.100000     2.800000      1.600000     0.300000
    50%        5.800000     3.000000      4.350000     1.300000
    75%        6.400000     3.300000      5.100000     1.800000
    max        7.900000     4.400000      6.900000     2.500000


### .head() & .columns & .index
* df`.head`
* df`.column`
* df`.index`


```python
# Print the head 5 values of iris
print('-'*60)
print(iris.head(5).values)

# Print the column index of iris
print('-'*60)
print(iris.columns)

# Print the row index of iris
print('-'*60)
print(iris.index)
```

    ------------------------------------------------------------
    [[5.1 3.5 1.4 0.2 'setosa']
     [4.9 3.0 1.4 0.2 'setosa']
     [4.7 3.2 1.3 0.2 'setosa']
     [4.6 3.1 1.5 0.2 'setosa']
     [5.0 3.6 1.4 0.2 'setosa']]
    ------------------------------------------------------------
    Index(['sepal_length', 'sepal_width', 'petal_length', 'petal_width',
           'species'],
          dtype='object')
    ------------------------------------------------------------
    RangeIndex(start=0, stop=150, step=1)


---

### .sort_values()
* single column - df`.sort_values("column_name")`<br>
* multiple column - df`.sort_values(["column_name1, "column_name2"])`


```python
iris.sort_values('petal_width').head()
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
      <th>32</th>
      <td>5.2</td>
      <td>4.1</td>
      <td>1.5</td>
      <td>0.1</td>
      <td>setosa</td>
    </tr>
    <tr>
      <th>13</th>
      <td>4.3</td>
      <td>3.0</td>
      <td>1.1</td>
      <td>0.1</td>
      <td>setosa</td>
    </tr>
    <tr>
      <th>37</th>
      <td>4.9</td>
      <td>3.6</td>
      <td>1.4</td>
      <td>0.1</td>
      <td>setosa</td>
    </tr>
    <tr>
      <th>9</th>
      <td>4.9</td>
      <td>3.1</td>
      <td>1.5</td>
      <td>0.1</td>
      <td>setosa</td>
    </tr>
    <tr>
      <th>12</th>
      <td>4.8</td>
      <td>3.0</td>
      <td>1.4</td>
      <td>0.1</td>
      <td>setosa</td>
    </tr>
  </tbody>
</table>
</div>




```python
iris.sort_values(['petal_length', 'petal_width'], ascending = [True, False]).head()
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
      <th>22</th>
      <td>4.6</td>
      <td>3.6</td>
      <td>1.0</td>
      <td>0.2</td>
      <td>setosa</td>
    </tr>
    <tr>
      <th>13</th>
      <td>4.3</td>
      <td>3.0</td>
      <td>1.1</td>
      <td>0.1</td>
      <td>setosa</td>
    </tr>
    <tr>
      <th>14</th>
      <td>5.8</td>
      <td>4.0</td>
      <td>1.2</td>
      <td>0.2</td>
      <td>setosa</td>
    </tr>
    <tr>
      <th>35</th>
      <td>5.0</td>
      <td>3.2</td>
      <td>1.2</td>
      <td>0.2</td>
      <td>setosa</td>
    </tr>
    <tr>
      <th>16</th>
      <td>5.4</td>
      <td>3.9</td>
      <td>1.3</td>
      <td>0.4</td>
      <td>setosa</td>
    </tr>
  </tbody>
</table>
</div>



---

### df[['colum1', 'column2']]
* select하는 column이 1개일 경우 square bracket이 1개여도 가능(pandas.Series로 처리됨)


```python
iris[['species', 'sepal_length']].head(5)
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
      <th>species</th>
      <th>sepal_length</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>setosa</td>
      <td>5.1</td>
    </tr>
    <tr>
      <th>1</th>
      <td>setosa</td>
      <td>4.9</td>
    </tr>
    <tr>
      <th>2</th>
      <td>setosa</td>
      <td>4.7</td>
    </tr>
    <tr>
      <th>3</th>
      <td>setosa</td>
      <td>4.6</td>
    </tr>
    <tr>
      <th>4</th>
      <td>setosa</td>
      <td>5.0</td>
    </tr>
  </tbody>
</table>
</div>



---

### df[df['column'] = 'condition']
* 조건이 두개인 경우 각 조건마다 `()`로 묶어야함
* 조건을 줄 때는 Series로 주어야함


```python
iris[(iris['species']=='setosa') & (iris['sepal_length'] > 5.0)].head(5)

# 위와 같음
# iris_setosa = iris['species']=='setosa'
# sepal_bigger_than_5 = iris['sepal_length'] > 5.0

# iris[iris_setosa & sepal_bigger_than_5].head(5)

# 조건이 복수일 때, 아래 .isin() 활용
iris[(iris['species'].isin(['setosa', 'versicolor'])) & (iris['sepal_length'] > 5.0)]
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
      <th>5</th>
      <td>5.4</td>
      <td>3.9</td>
      <td>1.7</td>
      <td>0.4</td>
      <td>setosa</td>
    </tr>
    <tr>
      <th>10</th>
      <td>5.4</td>
      <td>3.7</td>
      <td>1.5</td>
      <td>0.2</td>
      <td>setosa</td>
    </tr>
    <tr>
      <th>14</th>
      <td>5.8</td>
      <td>4.0</td>
      <td>1.2</td>
      <td>0.2</td>
      <td>setosa</td>
    </tr>
    <tr>
      <th>15</th>
      <td>5.7</td>
      <td>4.4</td>
      <td>1.5</td>
      <td>0.4</td>
      <td>setosa</td>
    </tr>
  </tbody>
</table>
</div>



---

### .isin()
* filter시 여러 조건을 걸 때 사용


```python
cond = iris['species'].isin(['setosa', 'virginica'])

iris[cond].shape # setosa 50개 virginica 50개
```




    (100, 5)



---

### df`[column] =


```python
iris['sepal_agg'] = iris['sepal_length'] * iris['sepal_width']
iris.head(5)
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
      <th>sepal_agg</th>
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
      <td>17.85</td>
    </tr>
    <tr>
      <th>1</th>
      <td>4.9</td>
      <td>3.0</td>
      <td>1.4</td>
      <td>0.2</td>
      <td>setosa</td>
      <td>14.70</td>
    </tr>
    <tr>
      <th>2</th>
      <td>4.7</td>
      <td>3.2</td>
      <td>1.3</td>
      <td>0.2</td>
      <td>setosa</td>
      <td>15.04</td>
    </tr>
    <tr>
      <th>3</th>
      <td>4.6</td>
      <td>3.1</td>
      <td>1.5</td>
      <td>0.2</td>
      <td>setosa</td>
      <td>14.26</td>
    </tr>
    <tr>
      <th>4</th>
      <td>5.0</td>
      <td>3.6</td>
      <td>1.4</td>
      <td>0.2</td>
      <td>setosa</td>
      <td>18.00</td>
    </tr>
  </tbody>
</table>
</div>



---
