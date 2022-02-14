---
title: "[PySpark] Big Data Fundamentals with PySpark(1)"
layout: single
date: '12/02/2022'
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
* Big Data terminology
* Spark Modes of Deployment

---

### Big Data terminology
* Clustered Computing - Collection of resources of multiple machines
* Parallel Computing - Simultaneous computation
* Distributed Computing - Collection of nodes(networked computers) that run in parallel
* Batch Processing - Breaking the job into small pieces and running them on individual machines
* Real-time Processing - Immediate processing of data

### Spark Modes of Deployment
* Local Mode - Single machine such as a laptop
    * convenient for testing, debugging, and demonstartion
* Cluster Mode - Set of pre-defined machines
    * for production
* Workflow (Local Mode ➡️ Cluster mode) 
    * No code change necessary 

---


```python
from pyspark import SparkContext
from pyspark.sql import SparkSession
sc = SparkContext('local', 'lernen2-1')
spark = SparkSession.builder.getOrCreate()
```


```python
print(sc)
print(spark)
print(sc.master)
```

    <SparkContext master=local appName=lernen2-1>
    <pyspark.sql.session.SparkSession object at 0x7f0ea9577e50>
    local



```python
numb = range(1, 100)

# Load num into PySpark
spark_data = sc.parallelize(numb)
print(spark_data)
print(type(spark_data))
```

    PythonRDD[1] at RDD at PythonRDD.scala:53
    <class 'pyspark.rdd.PipelinedRDD'>

