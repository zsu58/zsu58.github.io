---
title: "[Python] iterrows & itertuples & pd.applys"
layout: single
date: '21/09/2021'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - PYTHON
tags:
  - PYTHON
---

---
### Writing Efficient Python Code
* PART4
* ```iterrows```를 통해 row별 iterration 가능
    * ```iterrows```를 쓸 경우 index와 pandas Series로 구성되어 있는 tuple을 반환
* ```itertuples```를 통해 row별 iterration 가능
    * ```itertuples```를 쓸 경우 namedtuple 형태를 반환
* ```pd.applys```을 통해 loop 대체 가능
    * 0: row, 1: column
* 효율성: ```.values``` > ```pd.applys``` > ```itertuples``` > ```iterrows```

---


```python
# import data
import pandas as pd
import numpy as np
baseball_df = pd.read_csv('baseball_stats.csv')
baseball_df.head(5)
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
      <th>Team</th>
      <th>League</th>
      <th>Year</th>
      <th>RS</th>
      <th>RA</th>
      <th>W</th>
      <th>OBP</th>
      <th>SLG</th>
      <th>BA</th>
      <th>Playoffs</th>
      <th>RankSeason</th>
      <th>RankPlayoffs</th>
      <th>G</th>
      <th>OOBP</th>
      <th>OSLG</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>ARI</td>
      <td>NL</td>
      <td>2012</td>
      <td>734</td>
      <td>688</td>
      <td>81</td>
      <td>0.328</td>
      <td>0.418</td>
      <td>0.259</td>
      <td>0</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>162</td>
      <td>0.317</td>
      <td>0.415</td>
    </tr>
    <tr>
      <th>1</th>
      <td>ATL</td>
      <td>NL</td>
      <td>2012</td>
      <td>700</td>
      <td>600</td>
      <td>94</td>
      <td>0.320</td>
      <td>0.389</td>
      <td>0.247</td>
      <td>1</td>
      <td>4.0</td>
      <td>5.0</td>
      <td>162</td>
      <td>0.306</td>
      <td>0.378</td>
    </tr>
    <tr>
      <th>2</th>
      <td>BAL</td>
      <td>AL</td>
      <td>2012</td>
      <td>712</td>
      <td>705</td>
      <td>93</td>
      <td>0.311</td>
      <td>0.417</td>
      <td>0.247</td>
      <td>1</td>
      <td>5.0</td>
      <td>4.0</td>
      <td>162</td>
      <td>0.315</td>
      <td>0.403</td>
    </tr>
    <tr>
      <th>3</th>
      <td>BOS</td>
      <td>AL</td>
      <td>2012</td>
      <td>734</td>
      <td>806</td>
      <td>69</td>
      <td>0.315</td>
      <td>0.415</td>
      <td>0.260</td>
      <td>0</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>162</td>
      <td>0.331</td>
      <td>0.428</td>
    </tr>
    <tr>
      <th>4</th>
      <td>CHC</td>
      <td>NL</td>
      <td>2012</td>
      <td>613</td>
      <td>759</td>
      <td>61</td>
      <td>0.302</td>
      <td>0.378</td>
      <td>0.240</td>
      <td>0</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>162</td>
      <td>0.335</td>
      <td>0.424</td>
    </tr>
  </tbody>
</table>
</div>




```python
for i,row in baseball_df.head(1).iterrows():
    print(i,row)


for series in baseball_df.head(1).iterrows():
    print(series[1]['Team'])
```

    0 Team              ARI
    League             NL
    Year             2012
    RS                734
    RA                688
    W                  81
    OBP             0.328
    SLG             0.418
    BA              0.259
    Playoffs            0
    RankSeason        NaN
    RankPlayoffs      NaN
    G                 162
    OOBP            0.317
    OSLG            0.415
    Name: 0, dtype: object
    ARI



```python
def calc_run_diff(run_s, run_a):
    return run_s - run_a 

run_diffs = []

for i,row in baseball_df.iterrows():
    run_scored = row['RS']
    run_allowed = row['RA']
    
    run_diff = calc_run_diff(run_scored, run_allowed)
    
    run_diffs.append(run_diff)
    
baseball_df['RD'] = run_diffs

baseball_df.head(5)
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
      <th>Team</th>
      <th>League</th>
      <th>Year</th>
      <th>RS</th>
      <th>RA</th>
      <th>W</th>
      <th>OBP</th>
      <th>SLG</th>
      <th>BA</th>
      <th>Playoffs</th>
      <th>RankSeason</th>
      <th>RankPlayoffs</th>
      <th>G</th>
      <th>OOBP</th>
      <th>OSLG</th>
      <th>RD</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>ARI</td>
      <td>NL</td>
      <td>2012</td>
      <td>734</td>
      <td>688</td>
      <td>81</td>
      <td>0.328</td>
      <td>0.418</td>
      <td>0.259</td>
      <td>0</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>162</td>
      <td>0.317</td>
      <td>0.415</td>
      <td>46</td>
    </tr>
    <tr>
      <th>1</th>
      <td>ATL</td>
      <td>NL</td>
      <td>2012</td>
      <td>700</td>
      <td>600</td>
      <td>94</td>
      <td>0.320</td>
      <td>0.389</td>
      <td>0.247</td>
      <td>1</td>
      <td>4.0</td>
      <td>5.0</td>
      <td>162</td>
      <td>0.306</td>
      <td>0.378</td>
      <td>100</td>
    </tr>
    <tr>
      <th>2</th>
      <td>BAL</td>
      <td>AL</td>
      <td>2012</td>
      <td>712</td>
      <td>705</td>
      <td>93</td>
      <td>0.311</td>
      <td>0.417</td>
      <td>0.247</td>
      <td>1</td>
      <td>5.0</td>
      <td>4.0</td>
      <td>162</td>
      <td>0.315</td>
      <td>0.403</td>
      <td>7</td>
    </tr>
    <tr>
      <th>3</th>
      <td>BOS</td>
      <td>AL</td>
      <td>2012</td>
      <td>734</td>
      <td>806</td>
      <td>69</td>
      <td>0.315</td>
      <td>0.415</td>
      <td>0.260</td>
      <td>0</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>162</td>
      <td>0.331</td>
      <td>0.428</td>
      <td>-72</td>
    </tr>
    <tr>
      <th>4</th>
      <td>CHC</td>
      <td>NL</td>
      <td>2012</td>
      <td>613</td>
      <td>759</td>
      <td>61</td>
      <td>0.302</td>
      <td>0.378</td>
      <td>0.240</td>
      <td>0</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>162</td>
      <td>0.335</td>
      <td>0.424</td>
      <td>-146</td>
    </tr>
  </tbody>
</table>
</div>



### iterrows
* 1) loop over pit_df and print each row


```python
for i,row in baseball_df.head(1).iterrows():
    print(i,row)
```

    0 Team              ARI
    League             NL
    Year             2012
    RS                734
    RA                688
    W                  81
    OBP             0.328
    SLG             0.418
    BA              0.259
    Playoffs            0
    RankSeason        NaN
    RankPlayoffs      NaN
    G                 162
    OOBP            0.317
    OSLG            0.415
    Name: 0, dtype: object


### itertuples
* In what year within your DataFrame did the New York Yankees have the highest run differential?


```python
yankees_df = baseball_df[baseball_df.Team == 'NYY']

run_diff = []
for row in yankees_df.itertuples():
    RS = row.RS
    RA = row.RA
    run_diff.append(abs(calc_run_diff(RS, RA)))

yankees_df['RD']= run_diff

yankees_df.sort_values('RD', ascending = 0).head(5)
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
      <th>Team</th>
      <th>League</th>
      <th>Year</th>
      <th>RS</th>
      <th>RA</th>
      <th>W</th>
      <th>OBP</th>
      <th>SLG</th>
      <th>BA</th>
      <th>Playoffs</th>
      <th>RankSeason</th>
      <th>RankPlayoffs</th>
      <th>G</th>
      <th>OOBP</th>
      <th>OSLG</th>
      <th>RD</th>
      <th>WP</th>
      <th>WP_preds</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>439</th>
      <td>NYY</td>
      <td>AL</td>
      <td>1998</td>
      <td>965</td>
      <td>656</td>
      <td>114</td>
      <td>0.364</td>
      <td>0.460</td>
      <td>0.288</td>
      <td>1</td>
      <td>1.0</td>
      <td>1.0</td>
      <td>162</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>309</td>
      <td>0.70</td>
      <td>0.68</td>
    </tr>
    <tr>
      <th>48</th>
      <td>NYY</td>
      <td>AL</td>
      <td>2011</td>
      <td>867</td>
      <td>657</td>
      <td>97</td>
      <td>0.343</td>
      <td>0.444</td>
      <td>0.263</td>
      <td>1</td>
      <td>2.0</td>
      <td>4.0</td>
      <td>162</td>
      <td>0.322</td>
      <td>0.399</td>
      <td>210</td>
      <td>0.60</td>
      <td>0.64</td>
    </tr>
    <tr>
      <th>468</th>
      <td>NYY</td>
      <td>AL</td>
      <td>1997</td>
      <td>891</td>
      <td>688</td>
      <td>96</td>
      <td>0.362</td>
      <td>0.436</td>
      <td>0.287</td>
      <td>1</td>
      <td>3.0</td>
      <td>4.0</td>
      <td>162</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>203</td>
      <td>0.59</td>
      <td>0.63</td>
    </tr>
    <tr>
      <th>319</th>
      <td>NYY</td>
      <td>AL</td>
      <td>2002</td>
      <td>897</td>
      <td>697</td>
      <td>103</td>
      <td>0.354</td>
      <td>0.455</td>
      <td>0.275</td>
      <td>1</td>
      <td>1.0</td>
      <td>4.0</td>
      <td>161</td>
      <td>0.309</td>
      <td>0.395</td>
      <td>200</td>
      <td>0.64</td>
      <td>0.62</td>
    </tr>
    <tr>
      <th>168</th>
      <td>NYY</td>
      <td>AL</td>
      <td>2007</td>
      <td>968</td>
      <td>777</td>
      <td>94</td>
      <td>0.366</td>
      <td>0.463</td>
      <td>0.290</td>
      <td>1</td>
      <td>2.0</td>
      <td>4.0</td>
      <td>162</td>
      <td>0.340</td>
      <td>0.417</td>
      <td>191</td>
      <td>0.58</td>
      <td>0.61</td>
    </tr>
  </tbody>
</table>
</div>



### pd.apply


```python
# row sum
baseball_df[['RS', 'RA']].sum(axis=0)
```




    RS    880981
    RA    880981
    dtype: int64




```python
# column sum
baseball_df[['RS', 'RA']].sum(axis=1)
```




    0       1422
    1       1300
    2       1417
    3       1540
    4       1372
            ... 
    1227    1464
    1228    1332
    1229    1568
    1230    1438
    1231    1315
    Length: 1232, dtype: int64




```python
def text_playoffs(num_playoffs): 
    if num_playoffs == 1:
        return 'Yes'
    else:
        return 'No' 

baseball_df['Playoffs'].apply(text_playoffs)

# 위와 같음
# baseball_df.apply(lambda row: text_playoffs(row['Playoffs']), axis=1)
```




    0        No
    1       Yes
    2       Yes
    3        No
    4        No
           ... 
    1227     No
    1228     No
    1229    Yes
    1230     No
    1231     No
    Name: Playoffs, Length: 1232, dtype: object




```python
def calc_win_perc(wins, games_played):
    win_perc = wins / games_played
    return np.round(win_perc,2)

win_percs = yankees_df.apply(lambda row: calc_win_perc(row['W'], row['G']), axis=1)

yankees_df['WP'] = win_percs

print(yankees_df[yankees_df['WP'] >= 0.50].head(5))
```

        Team League  Year   RS   RA    W    OBP    SLG     BA  Playoffs  \
    18   NYY     AL  2012  804  668   95  0.337  0.453  0.265         1   
    48   NYY     AL  2011  867  657   97  0.343  0.444  0.263         1   
    78   NYY     AL  2010  859  693   95  0.350  0.436  0.267         1   
    108  NYY     AL  2009  915  753  103  0.362  0.478  0.283         1   
    138  NYY     AL  2008  789  727   89  0.342  0.427  0.271         0   
    
         RankSeason  RankPlayoffs    G   OOBP   OSLG   RD    WP  
    18          3.0           3.0  162  0.311  0.419  136  0.59  
    48          2.0           4.0  162  0.322  0.399  210  0.60  
    78          3.0           3.0  162  0.322  0.399  166  0.59  
    108         1.0           1.0  162  0.327  0.408  162  0.64  
    138         NaN           NaN  162  0.329  0.405   62  0.55  



* Pandas series에 .values를 사용해 numpy array로 바꾼 후 연산하면 빠르게 연산 가능


```python
win_percs_np = calc_win_perc(baseball_df['W'].values, baseball_df['G'].values)

baseball_df['WP'] = win_percs_np
baseball_df['WP'].head()
```




    0    0.50
    1    0.58
    2    0.57
    3    0.43
    4    0.38
    Name: WP, dtype: float64




```python
win_perc_preds_loop = []

# Use a loop and .itertuples() to collect each row's predicted win percentage
for row in baseball_df.itertuples():
    runs_scored = row.RS
    runs_allowed = row.RA
    win_perc_pred = predict_win_perc(runs_scored, runs_allowed)
    win_perc_preds_loop.append(win_perc_pred)

# Apply predict_win_perc to each row of the DataFrame
win_perc_preds_apply = baseball_df.apply(lambda row: predict_win_perc(row['RS'], row['RA']), axis=1)

# Calculate the win percentage predictions using NumPy arrays
win_perc_preds_np = predict_win_perc(baseball_df['RS'].values, baseball_df['RA'].values)
baseball_df['WP_preds'] = win_perc_preds_np
print(baseball_df.head())
```

      Team League  Year   RS   RA   W    OBP    SLG     BA  Playoffs  RankSeason  \
    0  ARI     NL  2012  734  688  81  0.328  0.418  0.259         0         NaN   
    1  ATL     NL  2012  700  600  94  0.320  0.389  0.247         1         4.0   
    2  BAL     AL  2012  712  705  93  0.311  0.417  0.247         1         5.0   
    3  BOS     AL  2012  734  806  69  0.315  0.415  0.260         0         NaN   
    4  CHC     NL  2012  613  759  61  0.302  0.378  0.240         0         NaN   
    
       RankPlayoffs    G   OOBP   OSLG   RD    WP  WP_preds  
    0           NaN  162  0.317  0.415   46  0.50      0.53  
    1           5.0  162  0.306  0.378  100  0.58      0.58  
    2           4.0  162  0.315  0.403    7  0.57      0.50  
    3           NaN  162  0.331  0.428  -72  0.43      0.45  
    4           NaN  162  0.335  0.424 -146  0.38      0.39  

---