---
title: "[Python] Dplyr to Pandas"
layout: single
date: '16/9/2021'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - PYTHON
tags:
  - PYTHON
---

---
### dplyr to pandas

---


```python
# import data
import seaborn as sns
import pandas as pd
import re

iris_df = sns.load_dataset('iris')
print(type(iris_df))
```

    <class 'pandas.core.frame.DataFrame'>


### dplyr::mutate()

```python
# dplyr
iris_df %>% mutate(New_feature= Petal.Width*Petal.Length/2)

# pandas
iris_df["New_feature"] = iris_df["petal_width"] * iris_df["petal_length"] / 2
```

---

### dplyr::select()

```python
# dplyr
iris_df %>% select('sepal_length', 'sepal_width')

# pandas
iris_df[['sepal_length', 'sepal_width']]
# 위와 같음
iris_df.loc[:,['sepal_length', 'sepal_width']]
iris_df.iloc[:,[1,2]]
```

---

### dplyr::select(-)

```python
# dplyr
iris_df %>% select(-c(Sepal.Length, Sepal.Width))

# pandas
# cf. inplace = False means the result would be stored in a new DataFrame instead of the original one
iris_df.drop(["sepal_length", "sepal_width"], axis=1, inplace=True)
```

---

### dplyr::filter()

```python
# dplyr
iris_df %>% filter(species %in% c('setosa', 'virginica'))
iris_df %>% filter(sepal_length > 5.0 & species == 'versicolor')

# pandas
iris_df.loc[(iris_df.species == 'setosa') | (iris_df.species == 'virginica'),:]
iris_df.loc[(iris_df.sepal_length > 5.0) & (iris_df.species == 'versicolor') ]
```

---

### dplyr::arrange()

```python
# 오름차순
dplyr
iris_df %>% arrange(sepal_length)

# pandas
iris_df.sort_values('sepal_length', ascending=1)

# 내림차순
# dplyr
iris_df %>% arrange(desc(sepal_length))

# pandas
iris_df.sort_values('sepal_length', ascending=0)
```

---

### dplyr::rename()

```python
# dplyr
iris_df_renamed = iris_df %>% rename(SEPAL_LENGTH = sepal_length)

# pandas
# cf. inplace = False means the result would be stored in a new DataFrame instead of the original one
iris_df_renamed = iris_df.rename(columns={'sepal_length':'SEPAL_LENGTH'}, inplace=False) 
```

```python
# dplyr
iris_df %>% rename_with(toupper, matches("length|width"))

# pandas
pattern = re.compile(r".*(length|width)")
for col in iris_df.columns:
  if bool((pattern.match(col))):
    iris_df.rename(columns = {col: col.upper()}, inplace = True)
```

---

### dplyr::case_when()

```python
# dplyr
iris_df %>% 
  mutate(Species = case_when(Species == 'setosa' ~ 0,
                             Species == 'versicolor' ~ 1,
                             Species == 'virginica' ~ 2))

# pandas
iris_df.loc[iris_df['species'] == 'setosa', "species"] = 0
iris_df.loc[iris_df['species'] == 'versicolor', "species"] = 1
iris_df.loc[iris_df['species'] == 'virginica', "species"] = 2
iris_df
```

---

### dplyr::distinct()

```python
# dplyr
iris_df %>% select(Species) %>% distinct()

# pandas
iris_df.species.unique()
```

---

### dplyr::distinct()

```python
# dplyr
iris_df %>% select(Species) %>% distinct()

# pandas
iris_df.species.unique()
```

---

### dplyr::summarise()
* get mean and min for each column

```python
# dplyr
iris_df %>% summarise(across(everything(), mean))
iris_df %>% summarise(across(everything(), min))

# pandas
iris_df.agg(['mean', 'min'])
```

---

### dplyr::group_by()

```python
# dplyr
# aggregation by group for all columns
iris_df %>% group_by(Species) %>% summarise_all(list(mean,min))

# aggregation by group for a specific column
iris_df %>% group_by(Species) %>% summarise(mean=mean(Sepal.Length))

# pandas
# aggregation by group for all columns
iris_df.groupby(['species']).agg(['mean', 'min'])

# aggregation by group for a specific column
iris_df.groupby(['species']).agg({'sepal_length':['mean']})
```

---

### dplyr::relocate()

```python
# dplyr
iris_df %>% relocate(Species, .before = Sepal.Length)

# pandas
# cf. iris_df에 저장이 안 됨
iris_df.reindex(['species', 'petal_length', 'sepal_length', 'sepal_width', 'petal_width'], axis=1)
```

---

### dplyr::slice()

```python
# dplyr, r은 1부터 시작
# 첫 5개행
iris_df %>% slice(1:6)

# 첫 2개열
iris_df[,1:2]

# 1st, 4th, 25th 행 & 1st 6th 열
iris_df %>% select(Sepal.Length, Petal.Width) %>% slice(1,4,25)

# 첫 5개 행 & 5th~7th 열
iris_df %>% select(Sepal.Length, Sepal.Width, Petal.Length) %>% slice(0:5)

# pandas, python은 0부터 시작
# 첫 5개행
iris_df.iloc[0:5]

# 첫 2개열
iris_df.iloc[:, 0:2] 

# 1st, 4th, 25th 행 & 1st 6th 열
iris_df.iloc[[0,3,24], [0,3]]

# 첫 5개 행 & 5th~7th 열
iris_df.iloc[0:5, 0:3] 
```

---

### dplyr::slice_head() & slice_tail()

```python
# dplyr
iris_df %>% slice_head(n=5)
iris_df %>% slice_tail(prop=0.1)

# pandas
iris_df.head(5)
iris_df.tail(n=int(len(iris_df)*0.1))
```

---

### dplyr::bind_rows() & bind_cols()

```python
# dplyr
a %>% bind_rows(b)
a %>% bind_cols(b)

# pandas
# rows
pd.concat([A,B])

# cols
pd.concat([A,B], axis=1)
```

---

### count records

```python
# dplyr
# Total number of records in dataframe
iris_df %>% nrow()

# Number of records per Group(two ways)
iris_df %>% group_by(Species) %>% count()
iris_df %>% group_by(Species) %>% tally()


# Total number of records in dataframe
len(iris_df)

# Number of records per Group(two ways)
iris_df.value_counts('species')
iris_df.groupby(['species']).size()
```
