---
title: "[Python] Data manipulation with pandas(2)"
layout: single
date: '19/10/2021'
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
* Aggregating dataframe
    * pandas Series인 상태로 계산하면 계산값이 int/float 형태로, pandas Dataframe 상태로 계산하면 dataframe으로 반환
        * `.mean()` - 평균
        * `.median()` - 중위값
        * `.mode()` - 최빈값
        * `.max()` - 최대값
        * `.min()` - 최소값
        * `.var()` - 분산
        * `.std()` - 표준편차
        * `.sum()` - 합
        * `.quantile()` - 분위수
        * `.agg()` - custom function 사용이 가능하게 함
    * dataframe으로 반환
        * `.cumsum()` - 누적 합
        * `.cummax()` - 누적 중 최대값
        * `.cummin()` - 누적 중 최소값
        * `.cummprod()` - 누적 곱
* unique
    * `.drop_duplicates()`
* group_by
    * `.groupby()`
* pivot
    * `.pivot_table`

---

```python
# import data
import seaborn as sns
import pandas as pd
import numpy as np

iris = sns.load_dataset('iris')
```
---

### .mean() & .median()
* df`.mean()`
* df`.median()`


```python
print(iris['sepal_length'].mean(), iris['sepal_length'].median())
```

    5.843333333333334 5.8


---

### .agg()
* 여러 열에 함수를 적용할 경우 리스트 안에 함수를 기입


```python
def irq(column):
    return column.quantile(0.75) - column.quantile(0.25)

iris[['sepal_length', 'sepal_width']].agg([irq, np.mean])
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
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>irq</th>
      <td>1.300000</td>
      <td>0.500000</td>
    </tr>
    <tr>
      <th>mean</th>
      <td>5.843333</td>
      <td>3.057333</td>
    </tr>
  </tbody>
</table>
</div>



---

### .cumsum() & .cummax() & .cummin() & .cumprod()


```python
cumsumed_sepaL_length = iris['sepal_length'].cumsum()
cummax_sepaL_length = iris['sepal_length'].cummax()
cummin_sepaL_length = iris['sepal_length'].cummin()
cumprod_sepaL_length = iris['sepal_length'].cumprod().round(2)

iris['sepal_length_cumsum'] = cumsumed_sepaL_length
iris['sepal_length_cummax'] = cummax_sepaL_length
iris['sepal_length_cummin'] = cummin_sepaL_length
iris['sepal_length_cumprod'] = cumprod_sepaL_length
iris[['sepal_length', 'sepal_length_cumsum', 'sepal_length_cummax', 'sepal_length_cummin', 'sepal_length_cumprod']].head(10)
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
      <th>sepal_length_cumsum</th>
      <th>sepal_length_cummax</th>
      <th>sepal_length_cummin</th>
      <th>sepal_length_cumprod</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>5.1</td>
      <td>5.1</td>
      <td>5.1</td>
      <td>5.1</td>
      <td>5.10</td>
    </tr>
    <tr>
      <th>1</th>
      <td>4.9</td>
      <td>10.0</td>
      <td>5.1</td>
      <td>4.9</td>
      <td>24.99</td>
    </tr>
    <tr>
      <th>2</th>
      <td>4.7</td>
      <td>14.7</td>
      <td>5.1</td>
      <td>4.7</td>
      <td>117.45</td>
    </tr>
    <tr>
      <th>3</th>
      <td>4.6</td>
      <td>19.3</td>
      <td>5.1</td>
      <td>4.6</td>
      <td>540.28</td>
    </tr>
    <tr>
      <th>4</th>
      <td>5.0</td>
      <td>24.3</td>
      <td>5.1</td>
      <td>4.6</td>
      <td>2701.42</td>
    </tr>
    <tr>
      <th>5</th>
      <td>5.4</td>
      <td>29.7</td>
      <td>5.4</td>
      <td>4.6</td>
      <td>14587.66</td>
    </tr>
    <tr>
      <th>6</th>
      <td>4.6</td>
      <td>34.3</td>
      <td>5.4</td>
      <td>4.6</td>
      <td>67103.25</td>
    </tr>
    <tr>
      <th>7</th>
      <td>5.0</td>
      <td>39.3</td>
      <td>5.4</td>
      <td>4.6</td>
      <td>335516.24</td>
    </tr>
    <tr>
      <th>8</th>
      <td>4.4</td>
      <td>43.7</td>
      <td>5.4</td>
      <td>4.4</td>
      <td>1476271.46</td>
    </tr>
    <tr>
      <th>9</th>
      <td>4.9</td>
      <td>48.6</td>
      <td>5.4</td>
      <td>4.4</td>
      <td>7233730.13</td>
    </tr>
  </tbody>
</table>
</div>



---

### .drop_duplicates()
* 조건을 2개 이상으로 할 경우 리스트 안에 열이름을 기입


```python
print(
    iris.drop_duplicates('petal_width').shape,
    iris.drop_duplicates(['petal_length', 'petal_width']).shape
)
```

    (22, 5) (102, 5)


---

### .value_counts()
* pandas Series만 가능
* normalize 옵션을 통해 비율 산출 가능


```python
iris['species'].value_counts(sort=True)
```




    setosa        50
    versicolor    50
    virginica     50
    Name: species, dtype: int64




```python
iris['species'].value_counts(sort=True, normalize=True)
```




    setosa        0.333333
    versicolor    0.333333
    virginica     0.333333
    Name: species, dtype: float64



---

### .groupby()
* 조건을 2개 이상으로 할 경우 리스트 안에 열이름을 기입


```python
iris.groupby('species')[['sepal_length', 'sepal_width']].mean()

# 조건이 두개인 경우
# iris.groupby(['species', 'petal_length'])[['sepal_length', 'sepal_width']].mean()
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
    </tr>
    <tr>
      <th>species</th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>setosa</th>
      <td>5.006</td>
      <td>3.428</td>
    </tr>
    <tr>
      <th>versicolor</th>
      <td>5.936</td>
      <td>2.770</td>
    </tr>
    <tr>
      <th>virginica</th>
      <td>6.588</td>
      <td>2.974</td>
    </tr>
  </tbody>
</table>
</div>




```python
iris.groupby('species').agg([np.mean, np.median, np.max, np.min])
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
      <th colspan="4" halign="left">sepal_length</th>
      <th colspan="4" halign="left">sepal_width</th>
      <th colspan="4" halign="left">petal_length</th>
      <th colspan="4" halign="left">petal_width</th>
    </tr>
    <tr>
      <th></th>
      <th>mean</th>
      <th>median</th>
      <th>amax</th>
      <th>amin</th>
      <th>mean</th>
      <th>median</th>
      <th>amax</th>
      <th>amin</th>
      <th>mean</th>
      <th>median</th>
      <th>amax</th>
      <th>amin</th>
      <th>mean</th>
      <th>median</th>
      <th>amax</th>
      <th>amin</th>
    </tr>
    <tr>
      <th>species</th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
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
      <th>setosa</th>
      <td>5.006</td>
      <td>5.0</td>
      <td>5.8</td>
      <td>4.3</td>
      <td>3.428</td>
      <td>3.4</td>
      <td>4.4</td>
      <td>2.3</td>
      <td>1.462</td>
      <td>1.50</td>
      <td>1.9</td>
      <td>1.0</td>
      <td>0.246</td>
      <td>0.2</td>
      <td>0.6</td>
      <td>0.1</td>
    </tr>
    <tr>
      <th>versicolor</th>
      <td>5.936</td>
      <td>5.9</td>
      <td>7.0</td>
      <td>4.9</td>
      <td>2.770</td>
      <td>2.8</td>
      <td>3.4</td>
      <td>2.0</td>
      <td>4.260</td>
      <td>4.35</td>
      <td>5.1</td>
      <td>3.0</td>
      <td>1.326</td>
      <td>1.3</td>
      <td>1.8</td>
      <td>1.0</td>
    </tr>
    <tr>
      <th>virginica</th>
      <td>6.588</td>
      <td>6.5</td>
      <td>7.9</td>
      <td>4.9</td>
      <td>2.974</td>
      <td>3.0</td>
      <td>3.8</td>
      <td>2.2</td>
      <td>5.552</td>
      <td>5.55</td>
      <td>6.9</td>
      <td>4.5</td>
      <td>2.026</td>
      <td>2.0</td>
      <td>2.5</td>
      <td>1.4</td>
    </tr>
  </tbody>
</table>
</div>



---

### .pivot_table
* default는 mean이며, aggfunc을 통해 복수의 aggregate 값 산출
* values에는 aggregate한 값을 원하는 변수 기입
* index에는 groupby로 지정하고 싶은 변수 기입, 해당 변수에 따라 aggregate된 값을 row에 따라 제시
* columns에 groupby 지정하고 싶은 변수를 기입할 경우, 해당 변수에 따라 aggregate된 값을 column에 따라 제시
* fill_value에는 Nan 대신 산출하고 싶은 값 기입
* margins에는 종합적인 aggregate 값을 산출하고 싶을 경우 True 사용



```python
iris.pivot_table(values = ['sepal_length', 'petal_length'],
                 index = ['species','petal_width'],
                 aggfunc = [np.mean, np.max],
                 margins = True)
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
      <th colspan="2" halign="left">mean</th>
      <th colspan="2" halign="left">amax</th>
    </tr>
    <tr>
      <th></th>
      <th></th>
      <th>petal_length</th>
      <th>sepal_length</th>
      <th>petal_length</th>
      <th>sepal_length</th>
    </tr>
    <tr>
      <th>species</th>
      <th>petal_width</th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowspan="6" valign="top">setosa</th>
      <th>0.1</th>
      <td>1.380000</td>
      <td>4.820000</td>
      <td>1.5</td>
      <td>5.2</td>
    </tr>
    <tr>
      <th>0.2</th>
      <td>1.444828</td>
      <td>4.972414</td>
      <td>1.9</td>
      <td>5.8</td>
    </tr>
    <tr>
      <th>0.3</th>
      <td>1.428571</td>
      <td>4.971429</td>
      <td>1.7</td>
      <td>5.7</td>
    </tr>
    <tr>
      <th>0.4</th>
      <td>1.571429</td>
      <td>5.300000</td>
      <td>1.9</td>
      <td>5.7</td>
    </tr>
    <tr>
      <th>0.5</th>
      <td>1.700000</td>
      <td>5.100000</td>
      <td>1.7</td>
      <td>5.1</td>
    </tr>
    <tr>
      <th>0.6</th>
      <td>1.600000</td>
      <td>5.000000</td>
      <td>1.6</td>
      <td>5.0</td>
    </tr>
    <tr>
      <th rowspan="9" valign="top">versicolor</th>
      <th>1.0</th>
      <td>3.628571</td>
      <td>5.414286</td>
      <td>4.1</td>
      <td>6.0</td>
    </tr>
    <tr>
      <th>1.1</th>
      <td>3.566667</td>
      <td>5.400000</td>
      <td>3.9</td>
      <td>5.6</td>
    </tr>
    <tr>
      <th>1.2</th>
      <td>4.240000</td>
      <td>5.780000</td>
      <td>4.7</td>
      <td>6.1</td>
    </tr>
    <tr>
      <th>1.3</th>
      <td>4.176923</td>
      <td>5.884615</td>
      <td>4.6</td>
      <td>6.6</td>
    </tr>
    <tr>
      <th>1.4</th>
      <td>4.500000</td>
      <td>6.357143</td>
      <td>4.8</td>
      <td>7.0</td>
    </tr>
    <tr>
      <th>1.5</th>
      <td>4.580000</td>
      <td>6.190000</td>
      <td>4.9</td>
      <td>6.9</td>
    </tr>
    <tr>
      <th>1.6</th>
      <td>4.766667</td>
      <td>6.100000</td>
      <td>5.1</td>
      <td>6.3</td>
    </tr>
    <tr>
      <th>1.7</th>
      <td>5.000000</td>
      <td>6.700000</td>
      <td>5.0</td>
      <td>6.7</td>
    </tr>
    <tr>
      <th>1.8</th>
      <td>4.800000</td>
      <td>5.900000</td>
      <td>4.8</td>
      <td>5.9</td>
    </tr>
    <tr>
      <th rowspan="12" valign="top">virginica</th>
      <th>1.4</th>
      <td>5.600000</td>
      <td>6.100000</td>
      <td>5.6</td>
      <td>6.1</td>
    </tr>
    <tr>
      <th>1.5</th>
      <td>5.050000</td>
      <td>6.150000</td>
      <td>5.1</td>
      <td>6.3</td>
    </tr>
    <tr>
      <th>1.6</th>
      <td>5.800000</td>
      <td>7.200000</td>
      <td>5.8</td>
      <td>7.2</td>
    </tr>
    <tr>
      <th>1.7</th>
      <td>4.500000</td>
      <td>4.900000</td>
      <td>4.5</td>
      <td>4.9</td>
    </tr>
    <tr>
      <th>1.8</th>
      <td>5.381818</td>
      <td>6.445455</td>
      <td>6.3</td>
      <td>7.3</td>
    </tr>
    <tr>
      <th>1.9</th>
      <td>5.320000</td>
      <td>6.340000</td>
      <td>6.1</td>
      <td>7.4</td>
    </tr>
    <tr>
      <th>2.0</th>
      <td>5.550000</td>
      <td>6.650000</td>
      <td>6.7</td>
      <td>7.9</td>
    </tr>
    <tr>
      <th>2.1</th>
      <td>5.783333</td>
      <td>6.916667</td>
      <td>6.6</td>
      <td>7.6</td>
    </tr>
    <tr>
      <th>2.2</th>
      <td>6.033333</td>
      <td>6.866667</td>
      <td>6.7</td>
      <td>7.7</td>
    </tr>
    <tr>
      <th>2.3</th>
      <td>5.700000</td>
      <td>6.912500</td>
      <td>6.9</td>
      <td>7.7</td>
    </tr>
    <tr>
      <th>2.4</th>
      <td>5.433333</td>
      <td>6.266667</td>
      <td>5.6</td>
      <td>6.7</td>
    </tr>
    <tr>
      <th>2.5</th>
      <td>5.933333</td>
      <td>6.733333</td>
      <td>6.1</td>
      <td>7.2</td>
    </tr>
    <tr>
      <th>All</th>
      <th></th>
      <td>3.758000</td>
      <td>5.843333</td>
      <td>6.9</td>
      <td>7.9</td>
    </tr>
  </tbody>
</table>
</div>

---
