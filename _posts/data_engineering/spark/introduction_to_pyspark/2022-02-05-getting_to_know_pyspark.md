---
title: "[PySpark] Introduction to PySpark(1)"
layout: single
date: '05/02/2022'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - SPARK
tags:
  - PYTHON
  - PYSPARK
---

---
### PySpark
* Spark
* SparkContext
* SparkSession
* Spark & Pandas

---

### Spark
* Spark should be connected to a cluster in order to be used
* This cluster will be hosted on a remote machine that's connected to all other nodes
* There is one computer, the master that manages splitting up the data and the computations
* The master is connected to the rest of the computers in the cluster, which are called worker
* The master sends the workers data and calculations to run, and they send their results back to the master

---

### SparkContext
* connection to the cluster
* SparkContext is a class whcih contains optional arguments that specifies the attributes of the cluster
* `SparkConf()` - An object that can be created whcih holds all the attributes


```python
from pyspark import SparkContext
sc = SparkContext('local', 'test')
print(sc)
print(sc.version)
```

    <SparkContext master=local appName=test>
    3.2.0


---

### SparkSession
* Needed to use DataFrame which is more optimized than RDD(Resilient Distributed Dataset
* SparkContext can be thought as a connection to the cluster and SparkSession as the interface with that connection.
* `SparkSession.builder.getOrCreate()` - recommended since multiple SparkSessions and SparkContexts can cause issues
* `catalog` - lists all the data inside the cluster


```python
from pyspark.sql import SparkSession
spark = SparkSession.builder.getOrCreate()
print(spark)
# show names of all the tables in the cluster as a list
spark.catalog.listTables()
```

    <pyspark.sql.session.SparkSession object at 0x7fb98450aaf0>





    []



---

### Spark & Pandas


```python
# dataset
import pandas as pd
pd_flight = pd.read_csv("flights.csv").head(3)
```

* Pandas to Spark


```python
spark_temp = spark.createDataFrame(pd_flight)
print(spark.catalog.listTables())

# add spark_temp in the catalog as "flights"
spark_temp.createOrReplaceTempView("flights")
print(spark.catalog.listTables())
```

    []
    [Table(name='flights', database=None, description=None, tableType='TEMPORARY', isTemporary=True)]


* Spark to Pandas


```python
flights_count = spark.sql("select origin, dest, COUNT(*) from flights GROUP BY origin, dest")
pd_flights_count = flights_count.toPandas()
pd_flights_count.head(3)
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
      <th>origin</th>
      <th>dest</th>
      <th>count(1)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>SEA</td>
      <td>LAX</td>
      <td>1</td>
    </tr>
    <tr>
      <th>1</th>
      <td>SEA</td>
      <td>SFO</td>
      <td>1</td>
    </tr>
    <tr>
      <th>2</th>
      <td>SEA</td>
      <td>HNL</td>
      <td>1</td>
    </tr>
  </tbody>
</table>
</div>


