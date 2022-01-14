---
title: "[Error] ParserError: Error tokenizing data. C error"
layout: single
date: '14/1/2022'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - ERROR
tags:
  - MYSQL
  - PYTHON
---

---
### ParserError: Error tokenizing data. C error
* 상황
    * Pandas에서 df.read_csv("filename.csv")에서 에러 발생
* 해결
    * delimiter 명시

---

### Solution
```python
# df_book = pd.read_csv("books.csv")
df_book = pd.read_csv("books.csv", sep ="\t")
```
---

### ref 
* [🔗 참고1]https://mskim8717.tistory.com/82)
* [🔗 참고2]https://stackoverflow.com/questions/18039057/python-pandas-error-tokenizing-data)