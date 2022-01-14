---
title: "[Python] Reshaping Data with pandas(2)"
layout: single
date: '15/1/2022'
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
* `.melt()` - wide to long
* `pd.wide_to_long` - wide to long
    * function of pandas
* `.str` - handling string in pandas

---


```python
# import pkg & dataset
import numpy as np
import pandas as pd
df_book = pd.read_csv("books.csv", sep =",", index_col="bookID")
df_book.head(1)
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
      <th>title</th>
      <th>authors</th>
      <th>average_rating</th>
      <th>isbn</th>
      <th>isbn13</th>
      <th>language_code</th>
      <th>num_pages</th>
      <th>ratings_count</th>
      <th>text_reviews_count</th>
      <th>publication_date</th>
      <th>publisher</th>
    </tr>
    <tr>
      <th>bookID</th>
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
      <th>1</th>
      <td>Harry Potter and the Half-Blood Prince (Harry ...</td>
      <td>J.K. Rowling/Mary GrandPré</td>
      <td>4.57</td>
      <td>0439785960</td>
      <td>9780439785969</td>
      <td>eng</td>
      <td>652</td>
      <td>2095690.0</td>
      <td>27591.0</td>
      <td>9/16/2006</td>
      <td>Scholastic Inc.</td>
    </tr>
  </tbody>
</table>
</div>



---

### .melt()
* parameter
    * id_vars - identifier variable
    * value_vars - category variable (default는 전체)
    * var_name - categroy variable cloumn name
    * value_name - value column name


```python
# value_vars default는 모든 열
df_book.melt(id_vars="title")
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
      <th>title</th>
      <th>variable</th>
      <th>value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Harry Potter and the Half-Blood Prince (Harry ...</td>
      <td>authors</td>
      <td>J.K. Rowling/Mary GrandPré</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Harry Potter and the Order of the Phoenix (Har...</td>
      <td>authors</td>
      <td>J.K. Rowling/Mary GrandPré</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Harry Potter and the Chamber of Secrets (Harry...</td>
      <td>authors</td>
      <td>J.K. Rowling</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Harry Potter and the Prisoner of Azkaban (Harr...</td>
      <td>authors</td>
      <td>J.K. Rowling/Mary GrandPré</td>
    </tr>
    <tr>
      <th>4</th>
      <td>Harry Potter Boxed Set  Books 1-5 (Harry Potte...</td>
      <td>authors</td>
      <td>J.K. Rowling/Mary GrandPré</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>111305</th>
      <td>Expelled from Eden: A William T. Vollmann Reader</td>
      <td>publisher</td>
      <td>Da Capo Press</td>
    </tr>
    <tr>
      <th>111306</th>
      <td>You Bright and Risen Angels</td>
      <td>publisher</td>
      <td>Penguin Books</td>
    </tr>
    <tr>
      <th>111307</th>
      <td>The Ice-Shirt (Seven Dreams #1)</td>
      <td>publisher</td>
      <td>Penguin Books</td>
    </tr>
    <tr>
      <th>111308</th>
      <td>Poor People</td>
      <td>publisher</td>
      <td>Ecco</td>
    </tr>
    <tr>
      <th>111309</th>
      <td>Las aventuras de Tom Sawyer</td>
      <td>publisher</td>
      <td>Edimat Libros</td>
    </tr>
  </tbody>
</table>
<p>111310 rows × 3 columns</p>
</div>




```python
# 관심있는 열만 지정할 수 있음
df_book.melt(id_vars=["title",'authors'],
             value_vars=["ratings_count","num_pages"],
             var_name="feature",
             value_name="number")
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
      <th>title</th>
      <th>authors</th>
      <th>feature</th>
      <th>number</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Harry Potter and the Half-Blood Prince (Harry ...</td>
      <td>J.K. Rowling/Mary GrandPré</td>
      <td>ratings_count</td>
      <td>2095690.0</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Harry Potter and the Order of the Phoenix (Har...</td>
      <td>J.K. Rowling/Mary GrandPré</td>
      <td>ratings_count</td>
      <td>2153167.0</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Harry Potter and the Chamber of Secrets (Harry...</td>
      <td>J.K. Rowling</td>
      <td>ratings_count</td>
      <td>6333.0</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Harry Potter and the Prisoner of Azkaban (Harr...</td>
      <td>J.K. Rowling/Mary GrandPré</td>
      <td>ratings_count</td>
      <td>2339585.0</td>
    </tr>
    <tr>
      <th>4</th>
      <td>Harry Potter Boxed Set  Books 1-5 (Harry Potte...</td>
      <td>J.K. Rowling/Mary GrandPré</td>
      <td>ratings_count</td>
      <td>41428.0</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>22257</th>
      <td>Expelled from Eden: A William T. Vollmann Reader</td>
      <td>William T. Vollmann/Larry McCaffery/Michael He...</td>
      <td>num_pages</td>
      <td>512</td>
    </tr>
    <tr>
      <th>22258</th>
      <td>You Bright and Risen Angels</td>
      <td>William T. Vollmann</td>
      <td>num_pages</td>
      <td>635</td>
    </tr>
    <tr>
      <th>22259</th>
      <td>The Ice-Shirt (Seven Dreams #1)</td>
      <td>William T. Vollmann</td>
      <td>num_pages</td>
      <td>415</td>
    </tr>
    <tr>
      <th>22260</th>
      <td>Poor People</td>
      <td>William T. Vollmann</td>
      <td>num_pages</td>
      <td>434</td>
    </tr>
    <tr>
      <th>22261</th>
      <td>Las aventuras de Tom Sawyer</td>
      <td>Mark Twain</td>
      <td>num_pages</td>
      <td>272</td>
    </tr>
  </tbody>
</table>
<p>22262 rows × 4 columns</p>
</div>



---

### pd.wide_to_long
* parameter
    * dataframe
    * stubnames - names columns containng the prefix
    * i - id
    * j - name the column containing the suffix
    * sep - separation criterion (default="")
        * alwalys assumed that prefix is immediately followed by a nuermic suffix
    * suffix - if suffix is not numeric, suffix can be assigned using regex


```python
# dataset
df1 = df_book[["title","language_code","publication_date","num_pages"]]
df1 = df1.rename(columns={"language_code":"language","publication_date":"publication date","num_pages":"page number"})
df1 = df1.iloc[:3]
df1["publication number"] = [2,6,4]
df1.set_index("title", inplace=True)
df1
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
      <th>language</th>
      <th>publication date</th>
      <th>page number</th>
      <th>publication number</th>
    </tr>
    <tr>
      <th>title</th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Harry Potter and the Half-Blood Prince (Harry Potter  #6)</th>
      <td>eng</td>
      <td>9/16/2006</td>
      <td>652</td>
      <td>2</td>
    </tr>
    <tr>
      <th>Harry Potter and the Order of the Phoenix (Harry Potter  #5)</th>
      <td>eng</td>
      <td>9/1/2004</td>
      <td>870</td>
      <td>6</td>
    </tr>
    <tr>
      <th>Harry Potter and the Chamber of Secrets (Harry Potter  #2)</th>
      <td>eng</td>
      <td>11/1/2003</td>
      <td>352</td>
      <td>4</td>
    </tr>
  </tbody>
</table>
</div>




```python
# wide_to_long은 index을 사용할 수 없기에 일반 column으로 전환
df1 = df1.reset_index(drop=False)

pd.wide_to_long(
    df1,
    stubnames=["publication", "page"],
    i=["title", "language"],
    j="feature",
    sep=" ",
    suffix="\w+"
)
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
      <th></th>
      <th>publication</th>
      <th>page</th>
    </tr>
    <tr>
      <th>title</th>
      <th>language</th>
      <th>feature</th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowspan="2" valign="top">Harry Potter and the Half-Blood Prince (Harry Potter  #6)</th>
      <th rowspan="2" valign="top">eng</th>
      <th>date</th>
      <td>9/16/2006</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>number</th>
      <td>2</td>
      <td>652</td>
    </tr>
    <tr>
      <th rowspan="2" valign="top">Harry Potter and the Order of the Phoenix (Harry Potter  #5)</th>
      <th rowspan="2" valign="top">eng</th>
      <th>date</th>
      <td>9/1/2004</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>number</th>
      <td>6</td>
      <td>870</td>
    </tr>
    <tr>
      <th rowspan="2" valign="top">Harry Potter and the Chamber of Secrets (Harry Potter  #2)</th>
      <th rowspan="2" valign="top">eng</th>
      <th>date</th>
      <td>11/1/2003</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>number</th>
      <td>4</td>
      <td>352</td>
    </tr>
  </tbody>
</table>
</div>



---

### .str
* Pandas series를 string으로 데이터 처리 가능
* `.split`으로 문자열 분리
    * 첫 번째 parameter는 분리 기준
    * `expand=True`를 통해 분리된 값을 dataframe으로 반환
* `.get`으로 분리된 문자열 선택 가능


```python
# dataset
df2 = df_book[["title", "num_pages", "ratings_count"]]
df2 = df2[df2["title"].str.contains("The Science of Sherlock Holmes|The New Annotated Sherlock Holmes", na=False)] # na=False - df2["title"] 값이 NA인 경우에는 제외
df2 = df2.rename(columns={"title":"main_title", "num_pages":"number_pages", "ratings_count":"number_ratings"})
df2["version"] = ["Vol I", "Vol II", "Vol I"]
df2.reset_index(drop=True, inplace=True)
df2
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
      <th>main_title</th>
      <th>number_pages</th>
      <th>number_ratings</th>
      <th>version</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>The New Annotated Sherlock Holmes: The Complet...</td>
      <td>1878</td>
      <td>1411.0</td>
      <td>Vol I</td>
    </tr>
    <tr>
      <th>1</th>
      <td>The New Annotated Sherlock Holmes: The Novels</td>
      <td>907</td>
      <td>2203.0</td>
      <td>Vol II</td>
    </tr>
    <tr>
      <th>2</th>
      <td>The Science of Sherlock Holmes: From Baskervil...</td>
      <td>244</td>
      <td>2037.0</td>
      <td>Vol I</td>
    </tr>
  </tbody>
</table>
</div>




```python
# Split main_title by a colon and assign it to two columns named title and subtitle 
df2[['title', 'subtitle']] = df2['main_title'].str.split(':', expand=True)

# Split version by a space and assign the second element to the column named volume 
df2['volume'] = df2['version'].str.split(' ').str.get(1)

# Drop the main_title and version columns modifying books_sh
df2.drop(['main_title', 'version'], axis=1, inplace=True)

# Reshape using title, subtitle and volume as index, name feature the new variable from columns starting with number, separated by undescore and ending in words 
df2_long = pd.wide_to_long(df2, 
                          stubnames="number", 
                          i=["title", "subtitle", "volume"], 
                          j="feature", 
                          sep="_", 
                          suffix="\w+")

df2_long
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
      <th></th>
      <th></th>
      <th>number</th>
    </tr>
    <tr>
      <th>title</th>
      <th>subtitle</th>
      <th>volume</th>
      <th>feature</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowspan="4" valign="top">The New Annotated Sherlock Holmes</th>
      <th rowspan="2" valign="top">The Complete Short Stories</th>
      <th rowspan="2" valign="top">I</th>
      <th>pages</th>
      <td>1878</td>
    </tr>
    <tr>
      <th>ratings</th>
      <td>1411.0</td>
    </tr>
    <tr>
      <th rowspan="2" valign="top">The Novels</th>
      <th rowspan="2" valign="top">II</th>
      <th>pages</th>
      <td>907</td>
    </tr>
    <tr>
      <th>ratings</th>
      <td>2203.0</td>
    </tr>
    <tr>
      <th rowspan="2" valign="top">The Science of Sherlock Holmes</th>
      <th rowspan="2" valign="top">From Baskerville Hall to the Valley of Fear  the Real Forensics Behind the Great Detective's Greatest Cases</th>
      <th rowspan="2" valign="top">I</th>
      <th>pages</th>
      <td>244</td>
    </tr>
    <tr>
      <th>ratings</th>
      <td>2037.0</td>
    </tr>
  </tbody>
</table>
</div>


