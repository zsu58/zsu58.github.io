---
title: "[PySpark] Cleaning Data with PySpark(1)"
layout: single
date: '19/02/2022'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - SPARK
tags:
  - PYTHON
  - PYSPARK
---

### Spark
* Parquet

---


```python
from pyspark import SparkContext
from pyspark.sql import SparkSession
from pyspark import SparkFiles
sc = SparkContext('local', 'lernen3-1')
spark = SparkSession.builder.getOrCreate()
# Stop SparkContext
# sc.stop()
```

---

### parquet
* columnar data foramt
* binary file format
* less disk IO
* stores schema info
* The Parquet format is a columnar data store, allowing Spark to use predicate pushdown. This means Spark will only process the data necessary to complete the operations you define versus reading the entire datase


```python
sc.addFile('https://raw.githubusercontent.com/zsu020958/data_base/main/Python/cleaning_data_in_pyspark/userdata1.parquet')
sc.addFile('https://raw.githubusercontent.com/zsu020958/data_base/main/Python/cleaning_data_in_pyspark/userdata2.parquet')

# load parquet file
user_df1 = spark.read.format('parquet').load(SparkFiles.get('userdata1.parquet'))
user_df2 = spark.read.format('parquet').load(SparkFiles.get('userdata2.parquet'))
# 위와 같음
# spark.read.parquet(SparkFiles.get('userdata1.parquet'))
# spark.read.parquet(SparkFiles.get('userdata2.parquet'))
```

                                                                                    


```python
print(user_df1.count())
print(user_df2.count())
user_df_all = user_df1.union(user_df2)
print(user_df_all.count())
```

    1000
    1000
    2000



```python
# write parquet file
user_df_all.write.format("parquet").save("user_df_all")

# 위와 같음
user_df_all.write.parquet("user_df_all.parquet", mode='overwrite')
```

                                                                                    
