---
title: "[Python] R to Python"
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
### R to Python

---


```python
# import data
import seaborn as sns
import pandas as pd

iris_df = sns.load_dataset('iris')
```

### Get name of columns in df

```python
# R
names(iris_df)

# Python
list(iris_df.columns)
```

---