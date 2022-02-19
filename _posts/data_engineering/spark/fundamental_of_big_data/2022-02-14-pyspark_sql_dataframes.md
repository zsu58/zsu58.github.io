---
title: "[PySpark] Big Data Fundamentals with PySpark(3)"
layout: single
date: '14/02/2022'
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
* DataFrame
* Transformation & Action of DataFrame
* PySpark SQL
* Visualization

---


```python
from pyspark import SparkContext
from pyspark.sql import SparkSession
sc = SparkContext('local', 'lernen2-3')
spark = SparkSession.builder.getOrCreate()
# Stop SparkContext
# sc.stop()
```

---

### DataFrame
* PySpark DataFrame is an immutable distributed collection of data with named columns
* PySpark DataFrame can process both structured(RDB) and semi-structed data(e.g. JSON)
* PySpark DataFrame supports both SQL queries & expression method(e.g. df.select())
* SparkSession provides entry to interact with Spark DataFrames
* Creation
    * from existing RDD using SparkSession's `createDataFrame()`
        * Schema controls the data and helps DataFrames to optimitze queries
    * loading data using SparkSession's `read()` method


```python
# RDD to DataFrame
sample_list = [('Messi', 35), ('Ronaldo', 30), ('Neymar', 28)]

rdd = sc.parallelize(sample_list)
names_df = spark.createDataFrame(rdd, schema=['Name', 'Age'])

print("The type of names_df is", type(names_df))
```

    The type of names_df is <class 'pyspark.sql.dataframe.DataFrame'>



```python
# file to DataFrame
from pyspark import SparkFiles
sc.addFile('https://raw.githubusercontent.com/zsu020958/data_base/main/Python/big_data_fundamentals/people.csv')
people_df = spark.read.csv(SparkFiles.get('people.csv'), header=True, inferSchema=True)
# 그 외 방법
# spark.read.txt()
# spark.read.json()

print("The type of people_df is", type(people_df))
```

    The type of people_df is <class 'pyspark.sql.dataframe.DataFrame'>


---

### Transformation & Action of DataFrame
* Transformation
    * `select()` - subsets columns in DataFrame
    * `filter()` - filter rows based on condition
    * `groupBy()` - group a variable
    * `orderBy()` - sorts DataFrame based on one or more columns
    * `withColumnRenamed()` - renames a column in DataFrame
    * `drop()` - drop a column in DataFrame
    * `dropDuplicates()` - removes duplicate rows of a DataFrame
    * `withColumn()` - returns a new DataFrame by adding a column or replacing the existing column


* Action
    * `head()` - returns first row(default)
    * `count()` - returns number of rows in DataFrame
    * `show()` - returns first 20 rows(by default) in DataFrame
    * `columns` - returns columns in DataFrame
    * `describe()` - computes summary statistics of numerical columns in DataFrame
    
* Schema
    * `printSchmea()` - prints the type of columns in DataFrame

#### select() & head()


```python
people_df.select('name', 'sex', 'date of birth').head()
```




    Row(name='Penelope Lewis', sex='female', date of birth='1990-08-31')



#### filter() & count()


```python
print("number of female and male people_df is {}".format(people_df.count()))
print("number of female in people_df is {}".format(people_df.filter(people_df.sex == "female").count()))
print("number of male in people_df is {}".format(people_df.filter(people_df.sex == "male").count()))
```

    number of female and male people_df is 100000
    number of female in people_df is 49014
    number of male in people_df is 49066


#### groupBy() & orderBy() & show()


```python
people_df\
    .groupBy("sex")\
    .count()\
    .orderBy("count", ascending=False)\
    .show()
```

    +------+-----+
    |   sex|count|
    +------+-----+
    |  male|49066|
    |female|49014|
    |  null| 1920|
    +------+-----+
    


#### withColumnRenamed() & columns


```python
people_df.withColumnRenamed("sex", "gender").columns
```




    ['_c0', 'person_id', 'name', 'gender', 'date of birth']



#### drop() & describe()


```python
people_df.drop("_c0").describe().show()
```

    +-------+-----------------+-------------+------+-------------+
    |summary|        person_id|         name|   sex|date of birth|
    +-------+-----------------+-------------+------+-------------+
    |  count|           100000|       100000| 98080|       100000|
    |   mean|          50099.5|         null|  null|         null|
    | stddev|28867.65779668774|         null|  null|         null|
    |    min|              100|Aaron Addesso|female|   1899-08-28|
    |    max|           100099|  Zulma Biggs|  male|   2084-11-17|
    +-------+-----------------+-------------+------+-------------+
    


#### dropDuplicates()


```python
print("total rows of people_df is {}".format(people_df.count()))
print("unique values of 'sex' in people_df is {}".format(people_df.select("sex").dropDuplicates().count()))
```

    total rows of people_df is 100000
    unique values of 'sex' in people_df is 3


#### printSchmea()


```python
people_df.printSchema()
```

    root
     |-- _c0: integer (nullable = true)
     |-- person_id: integer (nullable = true)
     |-- name: string (nullable = true)
     |-- sex: string (nullable = true)
     |-- date of birth: string (nullable = true)
    


#### withColumn()  & printSchema()


```python
from pyspark.sql.functions import regexp_replace
# articles = articles.withColumn('date', (col("date").cast("date")))
people_df.withColumn('date of birth', regexp_replace('date of birth', '-', '/')).show(3)
```

    +---+---------+--------------+------+-------------+
    |_c0|person_id|          name|   sex|date of birth|
    +---+---------+--------------+------+-------------+
    |  0|      100|Penelope Lewis|female|   1990/08/31|
    |  1|      101| David Anthony|  male|   1971/10/14|
    |  2|      102|     Ida Shipp|female|   1962/05/24|
    +---+---------+--------------+------+-------------+
    only showing top 3 rows
    



```python
people_df.withColumn()
```

    +---+---------+--------------+------+-------------+
    |_c0|person_id|          name|   sex|date of birth|
    +---+---------+--------------+------+-------------+
    |  0|      100|Penelope Lewis|female|   1990-08-31|
    |  1|      101| David Anthony|  male|   1971-10-14|
    |  2|      102|     Ida Shipp|female|   1962-05-24|
    +---+---------+--------------+------+-------------+
    only showing top 3 rows
    



```python
from pyspark.sql.functions import col
print(people_df.select("person_id").printSchema())
print(people_df.withColumn('person_id', (col("person_id").cast("string"))).select("person_id").printSchema())
```

    root
     |-- person_id: integer (nullable = true)
    
    None
    root
     |-- person_id: string (nullable = true)
    
    None


---

### PySpark SQL
* `sql()` - executes SQL query and returns a DataFrame
    * `createOrReplaceTempView()` - DataFrame becomes a temporary VIEW(table) in which the query is executed


```python
# temporary table(view) "people"
print(spark.catalog.listTables())
people_df.createOrReplaceTempView("people")
print(spark.catalog.listTables())

query = '''SELECT name FROM people'''
people_df_names = spark.sql(query)

people_df_names.show(3)
```

    []
    [Table(name='people', database=None, description=None, tableType='TEMPORARY', isTemporary=True)]
    +--------------+
    |          name|
    +--------------+
    |Penelope Lewis|
    | David Anthony|
    |     Ida Shipp|
    +--------------+
    only showing top 3 rows
    



```python
print("number of female in people_df is", spark.sql('SELECT * FROM people WHERE sex="female"').count())
print("number of male in people_df is", spark.sql('SELECT * FROM people WHERE sex="male"').count())
```

    number of female in people_df is 49014
    number of male in people_df is 49066


---

### Visualization
* pyspark_dist_explore library
    * [🔗 Git Link](https://github.com/Bergvca/pyspark_dist_explore)
* HandySpark library
    * [🔗 Git Link](https://github.com/dvgodoy/handyspark)
