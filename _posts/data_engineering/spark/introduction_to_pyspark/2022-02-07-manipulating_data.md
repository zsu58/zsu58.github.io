---
title: "[PySpark] Introduction to PySpark(2)"
layout: single
date: '07/02/2022'
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
* `.filter()`
* `.withColumn()`
* `.select()`
* `.groupBy()`
    * `.min()`
    * `.max()`
    * `.avg()`
    * `.sum()`
    * `.count()`
    * `.agg()`
* `.distinct()`
* `.join()`

---


```python
from pyspark import SparkContext
from pyspark.sql import SparkSession
sc = SparkContext('local', 'lernen2')
spark = SparkSession.builder.getOrCreate()
print(sc)
print(spark)
```

    <SparkContext master=local appName=lernen2>
    <pyspark.sql.session.SparkSession object at 0x7f9ee89de7c0>



```python
# dataset
flights = spark.read.csv("flights.csv", header=True)
# 위와 같음
# flights = spark.read.format("csv").option("header","true").load("flights.csv")

flights.createOrReplaceTempView("flights")
print(spark.catalog.listTables())
```

    [Table(name='flights', database=None, description=None, tableType='TEMPORARY', isTemporary=True)]


---

### .filter()


```python
flights.filter("distance > 1000").show(3)
# 위와 같음
flights.filter(flights.distance > 1000).show(3)
```

    +----+-----+---+--------+---------+--------+---------+-------+-------+------+------+----+--------+--------+----+------+
    |year|month|day|dep_time|dep_delay|arr_time|arr_delay|carrier|tailnum|flight|origin|dest|air_time|distance|hour|minute|
    +----+-----+---+--------+---------+--------+---------+-------+-------+------+------+----+--------+--------+----+------+
    |2014|    1| 22|    1040|        5|    1505|        5|     AS| N559AS|   851|   SEA| HNL|     360|    2677|  10|    40|
    |2014|    4| 19|    1236|       -4|    1508|       -7|     AS| N309AS|   490|   SEA| SAN|     135|    1050|  12|    36|
    |2014|   11| 19|    1812|       -3|    2352|       -4|     AS| N564AS|    26|   SEA| ORD|     198|    1721|  18|    12|
    +----+-----+---+--------+---------+--------+---------+-------+-------+------+------+----+--------+--------+----+------+
    only showing top 3 rows
    



```python
flights\
    .filter(flights.year == 2014)\
    .filter(flights.tailnum == 'N559AS')\
    .show(3)
```

    +----+-----+---+--------+---------+--------+---------+-------+-------+------+------+----+--------+--------+----+------+
    |year|month|day|dep_time|dep_delay|arr_time|arr_delay|carrier|tailnum|flight|origin|dest|air_time|distance|hour|minute|
    +----+-----+---+--------+---------+--------+---------+-------+-------+------+------+----+--------+--------+----+------+
    |2014|    1| 22|    1040|        5|    1505|        5|     AS| N559AS|   851|   SEA| HNL|     360|    2677|  10|    40|
    |2014|    1| 28|    1503|       -2|    1708|      -14|     AS| N559AS|   528|   SEA| BUR|     114|     937|  15|     3|
    |2014|    7| 28|    1804|       14|    2007|       12|     AS| N559AS|   358|   SEA| SFO|     104|     679|  18|     4|
    +----+-----+---+--------+---------+--------+---------+-------+-------+------+------+----+--------+--------+----+------+
    only showing top 3 rows
    


---

### .withColumn


```python
flights.withColumn("duration_hrs", flights.air_time / 60).show(3)
```

    +----+-----+---+--------+---------+--------+---------+-------+-------+------+------+----+--------+--------+----+------+------------+
    |year|month|day|dep_time|dep_delay|arr_time|arr_delay|carrier|tailnum|flight|origin|dest|air_time|distance|hour|minute|duration_hrs|
    +----+-----+---+--------+---------+--------+---------+-------+-------+------+------+----+--------+--------+----+------+------------+
    |2014|   12|  8|     658|       -7|     935|       -5|     VX| N846VA|  1780|   SEA| LAX|     132|     954|   6|    58|         2.2|
    |2014|    1| 22|    1040|        5|    1505|        5|     AS| N559AS|   851|   SEA| HNL|     360|    2677|  10|    40|         6.0|
    |2014|    3|  9|    1443|       -2|    1652|        2|     VX| N847VA|   755|   SEA| SFO|     111|     679|  14|    43|        1.85|
    +----+-----+---+--------+---------+--------+---------+-------+-------+------+------+----+--------+--------+----+------+------------+
    only showing top 3 rows
    


---

### .select()


```python
flights.select("tailnum", "origin", "dest").show(3)
# 위와 같음
flights.select(flights.tailnum, flights.origin, flights.dest).show(3)
```

    +-------+------+----+
    |tailnum|origin|dest|
    +-------+------+----+
    | N846VA|   SEA| LAX|
    | N559AS|   SEA| HNL|
    | N847VA|   SEA| SFO|
    +-------+------+----+
    only showing top 3 rows
    



```python
flights.select("origin", "dest", "tailnum", 
               (flights.distance/(flights.air_time/60)).alias("avg_speed")).show(3)
# 위와 같음
# flights.selectExpr("origin", "dest", "tailnum", "distance/(air_time/60) as avg_speed").show(3)
```

    +------+----+-------+------------------+
    |origin|dest|tailnum|         avg_speed|
    +------+----+-------+------------------+
    |   SEA| LAX| N846VA| 433.6363636363636|
    |   SEA| HNL| N559AS| 446.1666666666667|
    |   SEA| SFO| N847VA|367.02702702702703|
    +------+----+-------+------------------+
    only showing top 3 rows
    


---

### .groupBy()
* `.min()`
* `.max()`
* `.avg()`
* `.sum()`
* `.count()`
* `.agg()`


```python
cols = ["distance", "air_time", "dep_delay"]
for col in cols:
    flights=flights.withColumn(col, flights[col].cast('int'))
```

#### .min()
* shortest flight from PDX in terms of distance


```python
flights.filter(flights.origin == 'PDX').groupBy().min("distance").show()
```

    +-------------+
    |min(distance)|
    +-------------+
    |          106|
    +-------------+
    


#### .max()
* longest flight from SEA in terms of air time


```python
flights.filter(flights.origin == 'SEA').groupBy().max("air_time").show()
```

    +-------------+
    |max(air_time)|
    +-------------+
    |          409|
    +-------------+
    


#### .avg()
* Average duration of Delta flights which left from SEA


```python
flights\
    .filter(flights.carrier == "DL")\
    .filter(flights.origin == "SEA")\
    .groupBy()\
    .avg("air_time").show()
```

    +------------------+
    |     avg(air_time)|
    +------------------+
    |188.20689655172413|
    +------------------+
    


* air_time of flights from PDX and SEA


```python
flights.groupBy("origin")\
    .avg("air_time").show()
```

    +------+------------------+
    |origin|     avg(air_time)|
    +------+------------------+
    |   SEA| 160.4361496051259|
    |   PDX|137.11543248288737|
    +------+------------------+
    


#### .sum()
* Total hours in the air of all flights


```python
flights\
    .withColumn("duration_hrs", flights.air_time/60)\
    .groupBy()\
    .sum("duration_hrs").show()
```

    +------------------+
    | sum(duration_hrs)|
    +------------------+
    |25289.600000000126|
    +------------------+
    


#### .count()
* number of flights by tailnum


```python
flights\
    .groupBy("tailnum")\
    .count().show()
```

    +-------+-----+
    |tailnum|count|
    +-------+-----+
    | N442AS|   38|
    | N102UW|    2|
    | N36472|    4|
    | N38451|    4|
    | N73283|    4|
    | N513UA|    2|
    | N954WN|    5|
    | N388DA|    3|
    | N567AA|    1|
    | N516UA|    2|
    | N927DN|    1|
    | N8322X|    1|
    | N466SW|    1|
    |  N6700|    1|
    | N607AS|   45|
    | N622SW|    4|
    | N584AS|   31|
    | N914WN|    4|
    | N654AW|    2|
    | N336NW|    1|
    +-------+-----+
    only showing top 20 rows
    


#### .agg()


```python
by_motth_dest = flights.groupBy("month", "dest")
```


```python
by_motth_dest.avg("dep_delay").show()
```

    +-----+----+--------------------+
    |month|dest|      avg(dep_delay)|
    +-----+----+--------------------+
    |   11| TUS| -2.3333333333333335|
    |   11| ANC|   7.529411764705882|
    |    1| BUR|               -1.45|
    |    1| PDX| -5.6923076923076925|
    |    6| SBA|                -2.5|
    |    5| LAX|-0.15789473684210525|
    |   10| DTW|                 2.6|
    |    6| SIT|                -1.0|
    |   10| DFW|  18.176470588235293|
    |    3| FAI|                -2.2|
    |   10| SEA|                -0.8|
    |    2| TUS| -0.6666666666666666|
    |   12| OGG|  25.181818181818183|
    |    9| DFW|   4.066666666666666|
    |    5| EWR|               14.25|
    |    3| RDM|                -6.2|
    |    8| DCA|                 2.6|
    |    7| ATL|   4.675675675675675|
    |    4| JFK| 0.07142857142857142|
    |   10| SNA| -1.1333333333333333|
    +-----+----+--------------------+
    only showing top 20 rows
    



```python
import pyspark.sql.functions as F
by_motth_dest.agg(F.stddev("dep_delay")).show()
```

    +-----+----+----------------------+
    |month|dest|stddev_samp(dep_delay)|
    +-----+----+----------------------+
    |   11| TUS|    3.0550504633038935|
    |   11| ANC|    18.604716401245316|
    |    1| BUR|     15.22627576540667|
    |    1| PDX|     5.677214918493858|
    |    6| SBA|     2.380476142847617|
    |    5| LAX|     13.36268698685904|
    |   10| DTW|     5.639148871948674|
    |    6| SIT|                  null|
    |   10| DFW|     45.53019017606675|
    |    3| FAI|    3.1144823004794873|
    |   10| SEA|     18.70523227029577|
    |    2| TUS|    14.468356276140469|
    |   12| OGG|     82.64480404939947|
    |    9| DFW|    21.728629347782924|
    |    5| EWR|     42.41595968929191|
    |    3| RDM|      2.16794833886788|
    |    8| DCA|     9.946523680831074|
    |    7| ATL|    22.767001039582183|
    |    4| JFK|     8.156774303176903|
    |   10| SNA|    13.726234873756304|
    +-----+----+----------------------+
    only showing top 20 rows
    


---

### .distinct()


```python
flights.select("origin").distinct().show()
```

    +------+
    |origin|
    +------+
    |   SEA|
    |   PDX|
    +------+
    


---

### .join()


```python
airports = spark.read.csv("airports.csv", header=True)
airports.show(3)
```

    +---+--------------------+----------+-----------+----+---+---+
    |faa|                name|       lat|        lon| alt| tz|dst|
    +---+--------------------+----------+-----------+----+---+---+
    |04G|   Lansdowne Airport|41.1304722|-80.6195833|1044| -5|  A|
    |06A|Moton Field Munic...|32.4605722|-85.6800278| 264| -5|  A|
    |06C| Schaumburg Regional|41.9893408|-88.1012428| 801| -6|  A|
    +---+--------------------+----------+-----------+----+---+---+
    only showing top 3 rows
    



```python
flights.show(3)
```

    +----+-----+---+--------+---------+--------+---------+-------+-------+------+------+----+--------+--------+----+------+
    |year|month|day|dep_time|dep_delay|arr_time|arr_delay|carrier|tailnum|flight|origin|dest|air_time|distance|hour|minute|
    +----+-----+---+--------+---------+--------+---------+-------+-------+------+------+----+--------+--------+----+------+
    |2014|   12|  8|     658|       -7|     935|       -5|     VX| N846VA|  1780|   SEA| LAX|     132|     954|   6|    58|
    |2014|    1| 22|    1040|        5|    1505|        5|     AS| N559AS|   851|   SEA| HNL|     360|    2677|  10|    40|
    |2014|    3|  9|    1443|       -2|    1652|        2|     VX| N847VA|   755|   SEA| SFO|     111|     679|  14|    43|
    +----+-----+---+--------+---------+--------+---------+-------+-------+------+------+----+--------+--------+----+------+
    only showing top 3 rows
    



```python
# Rename the faa column to dest in purpose of matching the key item to join 
airports = airports.withColumnRenamed("faa", "dest")
airports.show(3)
```

    +----+--------------------+----------+-----------+----+---+---+
    |dest|                name|       lat|        lon| alt| tz|dst|
    +----+--------------------+----------+-----------+----+---+---+
    | 04G|   Lansdowne Airport|41.1304722|-80.6195833|1044| -5|  A|
    | 06A|Moton Field Munic...|32.4605722|-85.6800278| 264| -5|  A|
    | 06C| Schaumburg Regional|41.9893408|-88.1012428| 801| -6|  A|
    +----+--------------------+----------+-----------+----+---+---+
    only showing top 3 rows
    



```python
flights.join(airports, on="dest", how="leftouter").show(3)
```

    +----+----+-----+---+--------+---------+--------+---------+-------+-------+------+------+--------+--------+----+------+------------------+---------+-----------+---+---+---+
    |dest|year|month|day|dep_time|dep_delay|arr_time|arr_delay|carrier|tailnum|flight|origin|air_time|distance|hour|minute|              name|      lat|        lon|alt| tz|dst|
    +----+----+-----+---+--------+---------+--------+---------+-------+-------+------+------+--------+--------+----+------+------------------+---------+-----------+---+---+---+
    | LAX|2014|   12|  8|     658|       -7|     935|       -5|     VX| N846VA|  1780|   SEA|     132|     954|   6|    58|  Los Angeles Intl|33.942536|-118.408075|126| -8|  A|
    | HNL|2014|    1| 22|    1040|        5|    1505|        5|     AS| N559AS|   851|   SEA|     360|    2677|  10|    40|     Honolulu Intl|21.318681|-157.922428| 13|-10|  N|
    | SFO|2014|    3|  9|    1443|       -2|    1652|        2|     VX| N847VA|   755|   SEA|     111|     679|  14|    43|San Francisco Intl|37.618972|-122.374889| 13| -8|  A|
    +----+----+-----+---+--------+---------+--------+---------+-------+-------+------+------+--------+--------+----+------+------------------+---------+-----------+---+---+---+
    only showing top 3 rows
    

