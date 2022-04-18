---
title: "[Python] Reshaping Data with pandas(3)"
layout: single
date: '15/01/2022'
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
* `pd.MultiIndex.from_arrays()` - setting MultiIndex to a dataframe
* `.stack()` - rearrange innermost column index to become the innermost row index (즉, column들을 새로운 하나의 index로 처리)
* `.unstack()` - rearrange innermost row index to become the innermost column index
  * innermost column or row index have the highest level
* `.swaplevel()` - exchange row/column between different levels

---

### pd.MultiIndex.from_arrays()


```python
# import pkg & dataset
import pandas as pd

churn = pd.read_csv("churn-bigml-20.csv")
df3 = churn[["Area code", "Total day calls", "Total day charge", "Total night calls", "Total night charge"]]
df3 = df3.iloc[:4]
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
      <th>Area code</th>
      <th>Total day calls</th>
      <th>Total day charge</th>
      <th>Total night calls</th>
      <th>Total night charge</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>408</td>
      <td>97</td>
      <td>31.37</td>
      <td>90</td>
      <td>9.71</td>
    </tr>
    <tr>
      <th>1</th>
      <td>415</td>
      <td>137</td>
      <td>21.95</td>
      <td>111</td>
      <td>9.40</td>
    </tr>
    <tr>
      <th>2</th>
      <td>415</td>
      <td>67</td>
      <td>56.59</td>
      <td>128</td>
      <td>7.23</td>
    </tr>
    <tr>
      <th>3</th>
      <td>415</td>
      <td>103</td>
      <td>18.77</td>
      <td>105</td>
      <td>8.53</td>
    </tr>
  </tbody>
</table>
</div>



---


```python
# predefine index to use as index
new_index = [['California', 'California', 'New York', 'Ohio'], 
             ['Los Angeles', 'San Francisco', 'New York', 'Cleveland']]

# create a multi-level index using predefined new_index
multi_index = pd.MultiIndex.from_arrays(new_index, names=['state', 'city'])

# Assign the new index to the churn index
df3.index = multi_index

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
      <th></th>
      <th>Area code</th>
      <th>Total day calls</th>
      <th>Total day charge</th>
      <th>Total night calls</th>
      <th>Total night charge</th>
    </tr>
    <tr>
      <th>state</th>
      <th>city</th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowspan="2" valign="top">California</th>
      <th>Los Angeles</th>
      <td>408</td>
      <td>97</td>
      <td>31.37</td>
      <td>90</td>
      <td>9.71</td>
    </tr>
    <tr>
      <th>San Francisco</th>
      <td>415</td>
      <td>137</td>
      <td>21.95</td>
      <td>111</td>
      <td>9.40</td>
    </tr>
    <tr>
      <th>New York</th>
      <th>New York</th>
      <td>415</td>
      <td>67</td>
      <td>56.59</td>
      <td>128</td>
      <td>7.23</td>
    </tr>
    <tr>
      <th>Ohio</th>
      <th>Cleveland</th>
      <td>415</td>
      <td>103</td>
      <td>18.77</td>
      <td>105</td>
      <td>8.53</td>
    </tr>
  </tbody>
</table>
</div>



---

### .stack()
* `level`을 통해 어떤 column을 stack할 것인지 정할 수 있음
* stack의 dropna=True가 default임


```python
# dataset
df4 = df3.drop(columns=["Area code"])
df4.reset_index(inplace=True)
df4_melt = df4.melt(id_vars=["state", "city"])
df4_melt["variable"] = df4_melt["variable"].str.replace("Total ", "")
df4_melt[["time", "feature"]] = df4_melt["variable"].str.split(" ", expand=True)
df4_pivot = df4_melt.pivot(index=["state","city"], columns=["time", "feature"], values="value")
df4_pivot
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
      <th>time</th>
      <th colspan="2" halign="left">day</th>
      <th colspan="2" halign="left">night</th>
    </tr>
    <tr>
      <th></th>
      <th>feature</th>
      <th>calls</th>
      <th>charge</th>
      <th>calls</th>
      <th>charge</th>
    </tr>
    <tr>
      <th>state</th>
      <th>city</th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowspan="2" valign="top">California</th>
      <th>Los Angeles</th>
      <td>97.0</td>
      <td>31.37</td>
      <td>90.0</td>
      <td>9.71</td>
    </tr>
    <tr>
      <th>San Francisco</th>
      <td>137.0</td>
      <td>21.95</td>
      <td>111.0</td>
      <td>9.40</td>
    </tr>
    <tr>
      <th>New York</th>
      <th>New York</th>
      <td>67.0</td>
      <td>56.59</td>
      <td>128.0</td>
      <td>7.23</td>
    </tr>
    <tr>
      <th>Ohio</th>
      <th>Cleveland</th>
      <td>103.0</td>
      <td>18.77</td>
      <td>105.0</td>
      <td>8.53</td>
    </tr>
  </tbody>
</table>
</div>




```python
# default는 innermost column
df4_pivot.stack()
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
      <th>time</th>
      <th>day</th>
      <th>night</th>
    </tr>
    <tr>
      <th>state</th>
      <th>city</th>
      <th>feature</th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowspan="4" valign="top">California</th>
      <th rowspan="2" valign="top">Los Angeles</th>
      <th>calls</th>
      <td>97.00</td>
      <td>90.00</td>
    </tr>
    <tr>
      <th>charge</th>
      <td>31.37</td>
      <td>9.71</td>
    </tr>
    <tr>
      <th rowspan="2" valign="top">San Francisco</th>
      <th>calls</th>
      <td>137.00</td>
      <td>111.00</td>
    </tr>
    <tr>
      <th>charge</th>
      <td>21.95</td>
      <td>9.40</td>
    </tr>
    <tr>
      <th rowspan="2" valign="top">New York</th>
      <th rowspan="2" valign="top">New York</th>
      <th>calls</th>
      <td>67.00</td>
      <td>128.00</td>
    </tr>
    <tr>
      <th>charge</th>
      <td>56.59</td>
      <td>7.23</td>
    </tr>
    <tr>
      <th rowspan="2" valign="top">Ohio</th>
      <th rowspan="2" valign="top">Cleveland</th>
      <th>calls</th>
      <td>103.00</td>
      <td>105.00</td>
    </tr>
    <tr>
      <th>charge</th>
      <td>18.77</td>
      <td>8.53</td>
    </tr>
  </tbody>
</table>
</div>




```python
# dataset 준비
df5_melt = df4.drop(columns=["Total night charge"]).melt(id_vars=["state", "city"])
df5_melt["variable"] = df5_melt["variable"].str.replace("Total ", "")
df5_melt[["time", "feature"]] = df4_melt["variable"].str.split(" ", expand=True)
df5_pivot = df5_melt.pivot(index=["state","city"], columns=["time", "feature"], values="value")
df5_pivot
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
      <th>time</th>
      <th colspan="2" halign="left">day</th>
      <th>night</th>
    </tr>
    <tr>
      <th></th>
      <th>feature</th>
      <th>calls</th>
      <th>charge</th>
      <th>calls</th>
    </tr>
    <tr>
      <th>state</th>
      <th>city</th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowspan="2" valign="top">California</th>
      <th>Los Angeles</th>
      <td>97.0</td>
      <td>31.37</td>
      <td>90.0</td>
    </tr>
    <tr>
      <th>San Francisco</th>
      <td>137.0</td>
      <td>21.95</td>
      <td>111.0</td>
    </tr>
    <tr>
      <th>New York</th>
      <th>New York</th>
      <td>67.0</td>
      <td>56.59</td>
      <td>128.0</td>
    </tr>
    <tr>
      <th>Ohio</th>
      <th>Cleveland</th>
      <td>103.0</td>
      <td>18.77</td>
      <td>105.0</td>
    </tr>
  </tbody>
</table>
</div>




```python
# dropna=False를 통해 없는 default로 사라진 행까지 생성되게 할 수 있으며, fillna를 통해 빈 값을 채울 수 있음
df5_pivot.stack(dropna=False).fillna("채움")
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
      <th>time</th>
      <th>day</th>
      <th>night</th>
    </tr>
    <tr>
      <th>state</th>
      <th>city</th>
      <th>feature</th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowspan="4" valign="top">California</th>
      <th rowspan="2" valign="top">Los Angeles</th>
      <th>calls</th>
      <td>97.00</td>
      <td>90.0</td>
    </tr>
    <tr>
      <th>charge</th>
      <td>31.37</td>
      <td>채움</td>
    </tr>
    <tr>
      <th rowspan="2" valign="top">San Francisco</th>
      <th>calls</th>
      <td>137.00</td>
      <td>111.0</td>
    </tr>
    <tr>
      <th>charge</th>
      <td>21.95</td>
      <td>채움</td>
    </tr>
    <tr>
      <th rowspan="2" valign="top">New York</th>
      <th rowspan="2" valign="top">New York</th>
      <th>calls</th>
      <td>67.00</td>
      <td>128.0</td>
    </tr>
    <tr>
      <th>charge</th>
      <td>56.59</td>
      <td>채움</td>
    </tr>
    <tr>
      <th rowspan="2" valign="top">Ohio</th>
      <th rowspan="2" valign="top">Cleveland</th>
      <th>calls</th>
      <td>103.00</td>
      <td>105.0</td>
    </tr>
    <tr>
      <th>charge</th>
      <td>18.77</td>
      <td>채움</td>
    </tr>
  </tbody>
</table>
</div>




```python
# level을 통해 어떤 열을 stack할 것인지 명시 가능
df4_pivot.stack(level=1)
# 위와 같음
df4_pivot.stack(level="feature")
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
      <th>time</th>
      <th>day</th>
      <th>night</th>
    </tr>
    <tr>
      <th>state</th>
      <th>city</th>
      <th>feature</th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowspan="4" valign="top">California</th>
      <th rowspan="2" valign="top">Los Angeles</th>
      <th>calls</th>
      <td>97.00</td>
      <td>90.00</td>
    </tr>
    <tr>
      <th>charge</th>
      <td>31.37</td>
      <td>9.71</td>
    </tr>
    <tr>
      <th rowspan="2" valign="top">San Francisco</th>
      <th>calls</th>
      <td>137.00</td>
      <td>111.00</td>
    </tr>
    <tr>
      <th>charge</th>
      <td>21.95</td>
      <td>9.40</td>
    </tr>
    <tr>
      <th rowspan="2" valign="top">New York</th>
      <th rowspan="2" valign="top">New York</th>
      <th>calls</th>
      <td>67.00</td>
      <td>128.00</td>
    </tr>
    <tr>
      <th>charge</th>
      <td>56.59</td>
      <td>7.23</td>
    </tr>
    <tr>
      <th rowspan="2" valign="top">Ohio</th>
      <th rowspan="2" valign="top">Cleveland</th>
      <th>calls</th>
      <td>103.00</td>
      <td>105.00</td>
    </tr>
    <tr>
      <th>charge</th>
      <td>18.77</td>
      <td>8.53</td>
    </tr>
  </tbody>
</table>
</div>




```python
# 복수의 column index stack
df4_pivot.stack(level=[0,1])
# # 위와 같음
# df4_pivot.stack(level=["time", "feature"])
```




    state       city           time   feature
    California  Los Angeles    day    calls       97.00
                                      charge      31.37
                               night  calls       90.00
                                      charge       9.71
                San Francisco  day    calls      137.00
                                      charge      21.95
                               night  calls      111.00
                                      charge       9.40
    New York    New York       day    calls       67.00
                                      charge      56.59
                               night  calls      128.00
                                      charge       7.23
    Ohio        Cleveland      day    calls      103.00
                                      charge      18.77
                               night  calls      105.00
                                      charge       8.53
    dtype: float64



---

### .unstack()
* `level`을 통해 어떤 column을 unstack할 것인지 정할 수 있음
* `fill_value`를 통해 unstack 시 발생하는 NaN을 다른 값으로 채울 수 있음


```python
# default는 innermost row
df4_pivot.unstack()
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
      <th>time</th>
      <th colspan="8" halign="left">day</th>
      <th colspan="8" halign="left">night</th>
    </tr>
    <tr>
      <th>feature</th>
      <th colspan="4" halign="left">calls</th>
      <th colspan="4" halign="left">charge</th>
      <th colspan="4" halign="left">calls</th>
      <th colspan="4" halign="left">charge</th>
    </tr>
    <tr>
      <th>city</th>
      <th>Cleveland</th>
      <th>Los Angeles</th>
      <th>New York</th>
      <th>San Francisco</th>
      <th>Cleveland</th>
      <th>Los Angeles</th>
      <th>New York</th>
      <th>San Francisco</th>
      <th>Cleveland</th>
      <th>Los Angeles</th>
      <th>New York</th>
      <th>San Francisco</th>
      <th>Cleveland</th>
      <th>Los Angeles</th>
      <th>New York</th>
      <th>San Francisco</th>
    </tr>
    <tr>
      <th>state</th>
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
      <th>California</th>
      <td>NaN</td>
      <td>97.0</td>
      <td>NaN</td>
      <td>137.0</td>
      <td>NaN</td>
      <td>31.37</td>
      <td>NaN</td>
      <td>21.95</td>
      <td>NaN</td>
      <td>90.0</td>
      <td>NaN</td>
      <td>111.0</td>
      <td>NaN</td>
      <td>9.71</td>
      <td>NaN</td>
      <td>9.4</td>
    </tr>
    <tr>
      <th>New York</th>
      <td>NaN</td>
      <td>NaN</td>
      <td>67.0</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>56.59</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>128.0</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>7.23</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>Ohio</th>
      <td>103.0</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>18.77</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>105.0</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>8.53</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
  </tbody>
</table>
</div>




```python
# fill_value=0을 통해 missing value 채울 수 있음
df4_pivot.unstack(fill_value=0)
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
      <th>time</th>
      <th colspan="8" halign="left">day</th>
      <th colspan="8" halign="left">night</th>
    </tr>
    <tr>
      <th>feature</th>
      <th colspan="4" halign="left">calls</th>
      <th colspan="4" halign="left">charge</th>
      <th colspan="4" halign="left">calls</th>
      <th colspan="4" halign="left">charge</th>
    </tr>
    <tr>
      <th>city</th>
      <th>Cleveland</th>
      <th>Los Angeles</th>
      <th>New York</th>
      <th>San Francisco</th>
      <th>Cleveland</th>
      <th>Los Angeles</th>
      <th>New York</th>
      <th>San Francisco</th>
      <th>Cleveland</th>
      <th>Los Angeles</th>
      <th>New York</th>
      <th>San Francisco</th>
      <th>Cleveland</th>
      <th>Los Angeles</th>
      <th>New York</th>
      <th>San Francisco</th>
    </tr>
    <tr>
      <th>state</th>
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
      <th>California</th>
      <td>0.0</td>
      <td>97.0</td>
      <td>0.0</td>
      <td>137.0</td>
      <td>0.00</td>
      <td>31.37</td>
      <td>0.00</td>
      <td>21.95</td>
      <td>0.0</td>
      <td>90.0</td>
      <td>0.0</td>
      <td>111.0</td>
      <td>0.00</td>
      <td>9.71</td>
      <td>0.00</td>
      <td>9.4</td>
    </tr>
    <tr>
      <th>New York</th>
      <td>0.0</td>
      <td>0.0</td>
      <td>67.0</td>
      <td>0.0</td>
      <td>0.00</td>
      <td>0.00</td>
      <td>56.59</td>
      <td>0.00</td>
      <td>0.0</td>
      <td>0.0</td>
      <td>128.0</td>
      <td>0.0</td>
      <td>0.00</td>
      <td>0.00</td>
      <td>7.23</td>
      <td>0.0</td>
    </tr>
    <tr>
      <th>Ohio</th>
      <td>103.0</td>
      <td>0.0</td>
      <td>0.0</td>
      <td>0.0</td>
      <td>18.77</td>
      <td>0.00</td>
      <td>0.00</td>
      <td>0.00</td>
      <td>105.0</td>
      <td>0.0</td>
      <td>0.0</td>
      <td>0.0</td>
      <td>8.53</td>
      <td>0.00</td>
      <td>0.00</td>
      <td>0.0</td>
    </tr>
  </tbody>
</table>
</div>




```python
# level을 통해 어떤 row를 stack할 것인지 명시 가능
df4_pivot.unstack(level=0)
# 위와 같음
# df4_pivot.unstack(level="state")
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
      <th>time</th>
      <th colspan="6" halign="left">day</th>
      <th colspan="6" halign="left">night</th>
    </tr>
    <tr>
      <th>feature</th>
      <th colspan="3" halign="left">calls</th>
      <th colspan="3" halign="left">charge</th>
      <th colspan="3" halign="left">calls</th>
      <th colspan="3" halign="left">charge</th>
    </tr>
    <tr>
      <th>state</th>
      <th>California</th>
      <th>New York</th>
      <th>Ohio</th>
      <th>California</th>
      <th>New York</th>
      <th>Ohio</th>
      <th>California</th>
      <th>New York</th>
      <th>Ohio</th>
      <th>California</th>
      <th>New York</th>
      <th>Ohio</th>
    </tr>
    <tr>
      <th>city</th>
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
      <th>Cleveland</th>
      <td>NaN</td>
      <td>NaN</td>
      <td>103.0</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>18.77</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>105.0</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>8.53</td>
    </tr>
    <tr>
      <th>Los Angeles</th>
      <td>97.0</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>31.37</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>90.0</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>9.71</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>New York</th>
      <td>NaN</td>
      <td>67.0</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>56.59</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>128.0</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>7.23</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>San Francisco</th>
      <td>137.0</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>21.95</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>111.0</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>9.40</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
  </tbody>
</table>
</div>




```python
# 복수의 row index unstack
df4_pivot.unstack(level=[0,1])
# # 위와 같음
# df4_pivot.unstack(level=["state", "city"])
```




    time   feature  state       city         
    day    calls    California  Cleveland           NaN
                                Los Angeles       97.00
                                New York            NaN
                                San Francisco    137.00
                    New York    Cleveland           NaN
                                Los Angeles         NaN
                                New York          67.00
                                San Francisco       NaN
                    Ohio        Cleveland        103.00
                                Los Angeles         NaN
                                New York            NaN
                                San Francisco       NaN
           charge   California  Cleveland           NaN
                                Los Angeles       31.37
                                New York            NaN
                                San Francisco     21.95
                    New York    Cleveland           NaN
                                Los Angeles         NaN
                                New York          56.59
                                San Francisco       NaN
                    Ohio        Cleveland         18.77
                                Los Angeles         NaN
                                New York            NaN
                                San Francisco       NaN
    night  calls    California  Cleveland           NaN
                                Los Angeles       90.00
                                New York            NaN
                                San Francisco    111.00
                    New York    Cleveland           NaN
                                Los Angeles         NaN
                                New York         128.00
                                San Francisco       NaN
                    Ohio        Cleveland        105.00
                                Los Angeles         NaN
                                New York            NaN
                                San Francisco       NaN
           charge   California  Cleveland           NaN
                                Los Angeles        9.71
                                New York            NaN
                                San Francisco      9.40
                    New York    Cleveland           NaN
                                Los Angeles         NaN
                                New York           7.23
                                San Francisco       NaN
                    Ohio        Cleveland          8.53
                                Los Angeles         NaN
                                New York            NaN
                                San Francisco       NaN
    dtype: float64



---

### .swaplevel()
* axis=1을 통해 column의 level 간 이동이 가능


```python
# row index 간 교환
df4_pivot.swaplevel(0,1)
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
      <th>time</th>
      <th colspan="2" halign="left">day</th>
      <th colspan="2" halign="left">night</th>
    </tr>
    <tr>
      <th></th>
      <th>feature</th>
      <th>calls</th>
      <th>charge</th>
      <th>calls</th>
      <th>charge</th>
    </tr>
    <tr>
      <th>city</th>
      <th>state</th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Los Angeles</th>
      <th>California</th>
      <td>97.0</td>
      <td>31.37</td>
      <td>90.0</td>
      <td>9.71</td>
    </tr>
    <tr>
      <th>San Francisco</th>
      <th>California</th>
      <td>137.0</td>
      <td>21.95</td>
      <td>111.0</td>
      <td>9.40</td>
    </tr>
    <tr>
      <th>New York</th>
      <th>New York</th>
      <td>67.0</td>
      <td>56.59</td>
      <td>128.0</td>
      <td>7.23</td>
    </tr>
    <tr>
      <th>Cleveland</th>
      <th>Ohio</th>
      <td>103.0</td>
      <td>18.77</td>
      <td>105.0</td>
      <td>8.53</td>
    </tr>
  </tbody>
</table>
</div>




```python
# column index 간 교환
df4_pivot.swaplevel(0,1,axis=1)
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
      <th>feature</th>
      <th>calls</th>
      <th>charge</th>
      <th>calls</th>
      <th>charge</th>
    </tr>
    <tr>
      <th></th>
      <th>time</th>
      <th>day</th>
      <th>day</th>
      <th>night</th>
      <th>night</th>
    </tr>
    <tr>
      <th>state</th>
      <th>city</th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowspan="2" valign="top">California</th>
      <th>Los Angeles</th>
      <td>97.0</td>
      <td>31.37</td>
      <td>90.0</td>
      <td>9.71</td>
    </tr>
    <tr>
      <th>San Francisco</th>
      <td>137.0</td>
      <td>21.95</td>
      <td>111.0</td>
      <td>9.40</td>
    </tr>
    <tr>
      <th>New York</th>
      <th>New York</th>
      <td>67.0</td>
      <td>56.59</td>
      <td>128.0</td>
      <td>7.23</td>
    </tr>
    <tr>
      <th>Ohio</th>
      <th>Cleveland</th>
      <td>103.0</td>
      <td>18.77</td>
      <td>105.0</td>
      <td>8.53</td>
    </tr>
  </tbody>
</table>
</div>


