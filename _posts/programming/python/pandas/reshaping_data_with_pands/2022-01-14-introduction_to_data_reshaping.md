---
title: "[Python] Reshaping Data with pandas(1)"
layout: single
date: '14/1/2022'
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
* `.transpose()` - switch column & row
* `.pivot()` - long to wide
* `.pivot_table()` - long to wide

---

```python
# import pkg & dataset
import numpy as np
import pandas as pd
df_fifa = pd.read_csv("players_20.csv")
```
---

### .transpose()

```python
df1 = df_fifa.set_index("short_name")[["height_cm", "weight_kg"]]
df1.head(3)
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
      <th>height_cm</th>
      <th>weight_kg</th>
    </tr>
    <tr>
      <th>short_name</th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>L. Messi</th>
      <td>170</td>
      <td>72</td>
    </tr>
    <tr>
      <th>Cristiano Ronaldo</th>
      <td>187</td>
      <td>83</td>
    </tr>
    <tr>
      <th>Neymar Jr</th>
      <td>175</td>
      <td>68</td>
    </tr>
  </tbody>
</table>
</div>




```python
df1.transpose()
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
      <th>short_name</th>
      <th>L. Messi</th>
      <th>Cristiano Ronaldo</th>
      <th>Neymar Jr</th>
      <th>J. Oblak</th>
      <th>E. Hazard</th>
      <th>K. De Bruyne</th>
      <th>M. ter Stegen</th>
      <th>V. van Dijk</th>
      <th>L. Modrić</th>
      <th>M. Salah</th>
      <th>...</th>
      <th>M. Gallagher</th>
      <th>Huang Jiahui</th>
      <th>M. Sagaf</th>
      <th>E. Tweed</th>
      <th>P. Martin</th>
      <th>Shao Shuai</th>
      <th>Xiao Mingjie</th>
      <th>Zhang Wei</th>
      <th>Wang Haijian</th>
      <th>Pan Ximing</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>height_cm</th>
      <td>170</td>
      <td>187</td>
      <td>175</td>
      <td>188</td>
      <td>175</td>
      <td>181</td>
      <td>187</td>
      <td>193</td>
      <td>172</td>
      <td>175</td>
      <td>...</td>
      <td>178</td>
      <td>183</td>
      <td>177</td>
      <td>180</td>
      <td>188</td>
      <td>186</td>
      <td>177</td>
      <td>186</td>
      <td>185</td>
      <td>182</td>
    </tr>
    <tr>
      <th>weight_kg</th>
      <td>72</td>
      <td>83</td>
      <td>68</td>
      <td>87</td>
      <td>74</td>
      <td>70</td>
      <td>85</td>
      <td>92</td>
      <td>66</td>
      <td>71</td>
      <td>...</td>
      <td>70</td>
      <td>74</td>
      <td>70</td>
      <td>72</td>
      <td>84</td>
      <td>79</td>
      <td>66</td>
      <td>75</td>
      <td>74</td>
      <td>78</td>
    </tr>
  </tbody>
</table>
<p>2 rows × 18278 columns</p>
</div>



---

### .pivot()
* values가 전체인 경우 생략
* 중복값이 있는 경우 제거해야함


```python
# 데이터 불러오기
fifa_long = pd.read_csv("fifa_long.csv")
fifa_long.head(3)
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
      <th>movement</th>
      <th>overall</th>
      <th>attacking</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>messi</td>
      <td>shooting</td>
      <td>92</td>
      <td>90</td>
    </tr>
    <tr>
      <th>1</th>
      <td>ronaldo</td>
      <td>shooting</td>
      <td>91</td>
      <td>89</td>
    </tr>
    <tr>
      <th>2</th>
      <td>messi</td>
      <td>passing</td>
      <td>95</td>
      <td>94</td>
    </tr>
  </tbody>
</table>
</div>




```python
# values가 1개인 경우
fifa_long.pivot(index="name", columns="movement", values="overall")
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
      <th>movement</th>
      <th>dribbling</th>
      <th>passing</th>
      <th>shooting</th>
    </tr>
    <tr>
      <th>name</th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>messi</th>
      <td>96</td>
      <td>95</td>
      <td>92</td>
    </tr>
    <tr>
      <th>ronaldo</th>
      <td>88</td>
      <td>82</td>
      <td>91</td>
    </tr>
  </tbody>
</table>
</div>




```python
# values가 복수개인 경우
fifa_long.pivot(index="name", columns="movement", values=["overall", "attacking"])
# values가 2개이므로 위와 같음
# fifa_long.pivot(index="name", columns="movement")
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
      <th colspan="3" halign="left">overall</th>
      <th colspan="3" halign="left">attacking</th>
    </tr>
    <tr>
      <th>movement</th>
      <th>dribbling</th>
      <th>passing</th>
      <th>shooting</th>
      <th>dribbling</th>
      <th>passing</th>
      <th>shooting</th>
    </tr>
    <tr>
      <th>name</th>
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
      <th>messi</th>
      <td>96</td>
      <td>95</td>
      <td>92</td>
      <td>88</td>
      <td>94</td>
      <td>90</td>
    </tr>
    <tr>
      <th>ronaldo</th>
      <td>88</td>
      <td>82</td>
      <td>91</td>
      <td>83</td>
      <td>83</td>
      <td>89</td>
    </tr>
  </tbody>
</table>
</div>




```python
# 중복 행 만들기
fifa_long = fifa_long.append({"name":"ronaldo","movement":"dribbling","overall":85,"attacking":84}, ignore_index=True)
fifa_long
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
      <th>movement</th>
      <th>overall</th>
      <th>attacking</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>messi</td>
      <td>shooting</td>
      <td>92</td>
      <td>90</td>
    </tr>
    <tr>
      <th>1</th>
      <td>ronaldo</td>
      <td>shooting</td>
      <td>91</td>
      <td>89</td>
    </tr>
    <tr>
      <th>2</th>
      <td>messi</td>
      <td>passing</td>
      <td>95</td>
      <td>94</td>
    </tr>
    <tr>
      <th>3</th>
      <td>ronaldo</td>
      <td>passing</td>
      <td>82</td>
      <td>83</td>
    </tr>
    <tr>
      <th>4</th>
      <td>messi</td>
      <td>dribbling</td>
      <td>96</td>
      <td>88</td>
    </tr>
    <tr>
      <th>5</th>
      <td>ronaldo</td>
      <td>dribbling</td>
      <td>88</td>
      <td>83</td>
    </tr>
    <tr>
      <th>6</th>
      <td>ronaldo</td>
      <td>dribbling</td>
      <td>85</td>
      <td>84</td>
    </tr>
    <tr>
      <th>7</th>
      <td>ronaldo</td>
      <td>dribbling</td>
      <td>85</td>
      <td>84</td>
    </tr>
  </tbody>
</table>
</div>




```python
# 중복 행 제거
fifa_long.drop(7, axis=0)
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
      <th>movement</th>
      <th>overall</th>
      <th>attacking</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>messi</td>
      <td>shooting</td>
      <td>92</td>
      <td>90</td>
    </tr>
    <tr>
      <th>1</th>
      <td>ronaldo</td>
      <td>shooting</td>
      <td>91</td>
      <td>89</td>
    </tr>
    <tr>
      <th>2</th>
      <td>messi</td>
      <td>passing</td>
      <td>95</td>
      <td>94</td>
    </tr>
    <tr>
      <th>3</th>
      <td>ronaldo</td>
      <td>passing</td>
      <td>82</td>
      <td>83</td>
    </tr>
    <tr>
      <th>4</th>
      <td>messi</td>
      <td>dribbling</td>
      <td>96</td>
      <td>88</td>
    </tr>
    <tr>
      <th>5</th>
      <td>ronaldo</td>
      <td>dribbling</td>
      <td>88</td>
      <td>83</td>
    </tr>
    <tr>
      <th>6</th>
      <td>ronaldo</td>
      <td>dribbling</td>
      <td>85</td>
      <td>84</td>
    </tr>
  </tbody>
</table>
</div>



---

### .pivot_table()
* 다음 3가지의 조건 중 하나라도 만족하는 경우 사용(즉, pivot과의 차이)
    * index/column pair이 한 개 이상인 경우
    * multi-index로 pivot을 원하는 경우
    * summary statistic을 산출하고 싶은 경우
* parameter
    * index - 행 기준
    * columns - 열 기준
    * values - 값 기준
    * aggfunc - 값에 대한 통계치, default는 mean
    * margins - 총계


```python
# dataset player included in fc barcelona or real madrid
df2 = df_fifa[["sofifa_id", "short_name", "age", "height_cm", "weight_kg", "nationality", "club"]]
df_rm_fbc = df2[df2.club.isin(["FC Barcelona", "Real Madrid"])]
```


```python
# maximum height of player by nationality & club
df_rm_fbc.pivot_table(index="nationality", 
                      columns="club",
                      values="height_cm",
                      aggfunc="max").head(3)
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
      <th>club</th>
      <th>FC Barcelona</th>
      <th>Real Madrid</th>
    </tr>
    <tr>
      <th>nationality</th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Argentina</th>
      <td>170.0</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>Belgium</th>
      <td>NaN</td>
      <td>199.0</td>
    </tr>
    <tr>
      <th>Brazil</th>
      <td>190.0</td>
      <td>186.0</td>
    </tr>
  </tbody>
</table>
</div>




```python
# total count of players of RM and FBC by nationality & club
df_rm_fbc.pivot_table(index="nationality",
                      columns="club",
                      values="sofifa_id",
                      aggfunc="count",
                      margins=True)
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
      <th>club</th>
      <th>FC Barcelona</th>
      <th>Real Madrid</th>
      <th>All</th>
    </tr>
    <tr>
      <th>nationality</th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Argentina</th>
      <td>1.0</td>
      <td>NaN</td>
      <td>1</td>
    </tr>
    <tr>
      <th>Belgium</th>
      <td>NaN</td>
      <td>2.0</td>
      <td>2</td>
    </tr>
    <tr>
      <th>Brazil</th>
      <td>3.0</td>
      <td>6.0</td>
      <td>9</td>
    </tr>
    <tr>
      <th>Chile</th>
      <td>1.0</td>
      <td>NaN</td>
      <td>1</td>
    </tr>
    <tr>
      <th>Colombia</th>
      <td>NaN</td>
      <td>1.0</td>
      <td>1</td>
    </tr>
    <tr>
      <th>Costa Rica</th>
      <td>NaN</td>
      <td>1.0</td>
      <td>1</td>
    </tr>
    <tr>
      <th>Croatia</th>
      <td>1.0</td>
      <td>1.0</td>
      <td>2</td>
    </tr>
    <tr>
      <th>Dominican Republic</th>
      <td>NaN</td>
      <td>1.0</td>
      <td>1</td>
    </tr>
    <tr>
      <th>France</th>
      <td>5.0</td>
      <td>3.0</td>
      <td>8</td>
    </tr>
    <tr>
      <th>Germany</th>
      <td>1.0</td>
      <td>1.0</td>
      <td>2</td>
    </tr>
    <tr>
      <th>Japan</th>
      <td>1.0</td>
      <td>1.0</td>
      <td>2</td>
    </tr>
    <tr>
      <th>Netherlands</th>
      <td>2.0</td>
      <td>NaN</td>
      <td>2</td>
    </tr>
    <tr>
      <th>Portugal</th>
      <td>1.0</td>
      <td>NaN</td>
      <td>1</td>
    </tr>
    <tr>
      <th>Senegal</th>
      <td>1.0</td>
      <td>NaN</td>
      <td>1</td>
    </tr>
    <tr>
      <th>Serbia</th>
      <td>NaN</td>
      <td>1.0</td>
      <td>1</td>
    </tr>
    <tr>
      <th>Spain</th>
      <td>15.0</td>
      <td>13.0</td>
      <td>28</td>
    </tr>
    <tr>
      <th>Uruguay</th>
      <td>1.0</td>
      <td>1.0</td>
      <td>2</td>
    </tr>
    <tr>
      <th>Wales</th>
      <td>NaN</td>
      <td>1.0</td>
      <td>1</td>
    </tr>
    <tr>
      <th>All</th>
      <td>33.0</td>
      <td>33.0</td>
      <td>66</td>
    </tr>
  </tbody>
</table>
</div>


