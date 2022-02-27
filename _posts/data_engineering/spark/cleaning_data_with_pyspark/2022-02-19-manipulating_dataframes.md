---
title: "[PySpark] Cleaning Data with PySpark(2)"
layout: single
date: '27/02/2022'
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
* `isNull()` & `isNotNull()`
* pyspark.sql.functions
    * `F.col()`
        * `contains()`
        * `getItem()`
    * `F.split()`
    * `F.size()`
    * `F.upper()` & `F.lower()`
    * `F.when()` & `F.otherwise()`
* UDF(User Defined Function)
    * `udf()`
* Partitioning & Lazy Processing & Handling ID in Spark

---


```python
from pyspark import SparkContext
from pyspark.sql import SparkSession
from pyspark import SparkFiles
sc = SparkContext('local', 'lernen3-2')
spark = SparkSession.builder.getOrCreate()
# Stop SparkContext
# sc.stop()
```

    WARNING: An illegal reflective access operation has occurred
    WARNING: Illegal reflective access by org.apache.spark.unsafe.Platform (file:/usr/local/spark-3.1.2-bin-hadoop3.2/jars/spark-unsafe_2.12-3.1.2.jar) to constructor java.nio.DirectByteBuffer(long,int)
    WARNING: Please consider reporting this to the maintainers of org.apache.spark.unsafe.Platform
    WARNING: Use --illegal-access=warn to enable warnings of further illegal reflective access operations
    WARNING: All illegal access operations will be denied in a future release
    22/02/27 03:20:28 WARN NativeCodeLoader: Unable to load native-hadoop library for your platform... using builtin-java classes where applicable
    Using Spark's default log4j profile: org/apache/spark/log4j-defaults.properties
    Setting default log level to "WARN".
    To adjust logging level use sc.setLogLevel(newLevel). For SparkR, use setLogLevel(newLevel).



```python
sc.addFile('https://raw.githubusercontent.com/zsu020958/data_base/main/Python/cleaning_data_in_pyspark/DallasCouncilVoters.csv')

# dataset
voters_df = spark.read.format('csv') \
    .options(header=True) \
    .options(inferSchema=True) \
    .load(SparkFiles.get('DallasCouncilVoters.csv'))
```

                                                                                    


```python
# show distinct value of VOTER_NAME, truncate=False shows full data
voters_df.select("VOTER_NAME").distinct().show(3, truncate=False)
```

                                                                                    

    +-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
    |VOTER_NAME                                                                                                                                                                                                                                                                                                                                                                                                   |
    +-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
    |Tennell Atkins                                                                                                                                                                                                                                                                                                                                                                                               |
    |  the  final   2018 Assessment Plan and the 2018 Assessment  Roll  (to  be  kept  on  file  with  the  City  Secretary);  establishing  classifications  for   the   apportionment   of   costs and the methods of assessing special assessments for the services and improvements to property in the District;  closing  the  hearing  and  levying  a  special  assessment  on  property  in  the  District|
    |Scott Griggs                                                                                                                                                                                                                                                                                                                                                                                                 |
    +-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
    only showing top 3 rows
    


---

### isNull() & isNotNull()


```python
# number of total rows
print(voters_df.count())

# get number of rows where VOTER_NAME is Null
print(voters_df.filter(F.col("VOTER_NAME").isNull()).count())
print(voters_df.filter(F.col("VOTER_NAME").isNull()).count())
print(voters_df.filter(~ F.col("VOTER_NAME").isNotNull()).count())

# get number of rows where VOTER_NAME is not Null
print(voters_df.filter(~ F.col("VOTER_NAME").isNull()).count())
print(voters_df.filter(F.col("VOTER_NAME").isNotNull()).count())
```

    44625
    503
    503
    503
    44122
    44122


---

### pyspark.sql.functions

* `F.col().contains()`
* `F.split()`
* `F.col().getItem()`
* `F.size()`
* `F.upper()` & `F.lower()`
* `F.when()` & `F.otherwise()`


```python
import pyspark.sql.functions as F
```

#### F.col().contains()


```python
# Filter voter_df where the VOTER_NAME is 1-20 characters in length
voters_df = voters_df.filter('length(VOTER_NAME) > 0 and length(VOTER_NAME) < 20')

# filter where VOTER_NAME does not contain an "_"
voters_df = voters_df.filter(~ F.col('VOTER_NAME').contains("_"))

# filter where VOTER_NAME contains an "_"
# voters_df.filter(F.col('VOTER_NAME').contains("_"))
```

#### F.split()


```python
# Add a new column called splits separated on whitespace
voters_df = voters_df.withColumn("splits", F.split(voters_df.VOTER_NAME, '\s+'))
voters_df.show(3)
```

    +----------+-------------+-------------------+--------------------+
    |      DATE|        TITLE|         VOTER_NAME|              splits|
    +----------+-------------+-------------------+--------------------+
    |02/08/2017|Councilmember|  Jennifer S. Gates|[Jennifer, S., Ga...|
    |02/08/2017|Councilmember| Philip T. Kingston|[Philip, T., King...|
    |02/08/2017|        Mayor|Michael S. Rawlings|[Michael, S., Raw...|
    +----------+-------------+-------------------+--------------------+
    only showing top 3 rows
    


#### F.col().getItem()


```python
# create column "first_name" with the first element of splits(an array)
voters_df = voters_df.withColumn("first_name", F.col("splits").getItem(0))
voters_df.show(3)
```

    +----------+-------------+-------------------+--------------------+----------+
    |      DATE|        TITLE|         VOTER_NAME|              splits|first_name|
    +----------+-------------+-------------------+--------------------+----------+
    |02/08/2017|Councilmember|  Jennifer S. Gates|[Jennifer, S., Ga...|  Jennifer|
    |02/08/2017|Councilmember| Philip T. Kingston|[Philip, T., King...|    Philip|
    |02/08/2017|        Mayor|Michael S. Rawlings|[Michael, S., Raw...|   Michael|
    +----------+-------------+-------------------+--------------------+----------+
    only showing top 3 rows
    


#### F.size()
* returns the length of the array or map stored in the column.
* Parameter - column or str


```python
# Create a new column called first_name based on the first item in splits
voters_df = voters_df.withColumn("first_name", voters_df.splits.getItem(0))

# Get the last entry of the splits list and create a column called last_name
voters_df = voters_df.withColumn("last_name", F.col("splits").getItem(F.size('splits') - 1))
voters_df.show(3)
```

    +----------+-------------+-------------------+--------------------+----------+---------+
    |      DATE|        TITLE|         VOTER_NAME|              splits|first_name|last_name|
    +----------+-------------+-------------------+--------------------+----------+---------+
    |02/08/2017|Councilmember|  Jennifer S. Gates|[Jennifer, S., Ga...|  Jennifer|    Gates|
    |02/08/2017|Councilmember| Philip T. Kingston|[Philip, T., King...|    Philip| Kingston|
    |02/08/2017|        Mayor|Michael S. Rawlings|[Michael, S., Raw...|   Michael| Rawlings|
    +----------+-------------+-------------------+--------------------+----------+---------+
    only showing top 3 rows
    


#### F.upper() & F.lower()


```python
voters_df \
    .withColumn("first_name_upper", F.upper(F.col("first_name"))) \
    .withColumn("first_name_lower", F.upper(F.col("first_name"))) \
    .select("first_name_upper", "first_name_lower").show(3)
```

    +----------------+----------------+
    |first_name_upper|first_name_lower|
    +----------------+----------------+
    |        JENNIFER|        JENNIFER|
    |          PHILIP|          PHILIP|
    |         MICHAEL|         MICHAEL|
    +----------------+----------------+
    only showing top 3 rows
    


#### F.when()


```python
# Add a column based on TITLE(Councilmember: 0, Mayor: 1, Others: 2)
voters_df = voters_df.withColumn('TITLE_BY_NUM',
                               F.when(F.col("TITLE") == 'Councilmember', 0)
                               .when(F.col("TITLE") == "Mayor", 1)
                               .otherwise(2))

voters_df.show()
```

    +----------+-------------+-------------------+--------------------+----------+---------+------------+
    |      DATE|        TITLE|         VOTER_NAME|              splits|first_name|last_name|TITLE_BY_NUM|
    +----------+-------------+-------------------+--------------------+----------+---------+------------+
    |02/08/2017|Councilmember|  Jennifer S. Gates|[Jennifer, S., Ga...|  Jennifer|    Gates|           0|
    |02/08/2017|Councilmember| Philip T. Kingston|[Philip, T., King...|    Philip| Kingston|           0|
    |02/08/2017|        Mayor|Michael S. Rawlings|[Michael, S., Raw...|   Michael| Rawlings|           1|
    |02/08/2017|Councilmember|       Adam Medrano|     [Adam, Medrano]|      Adam|  Medrano|           0|
    |02/08/2017|Councilmember|       Casey Thomas|     [Casey, Thomas]|     Casey|   Thomas|           0|
    |02/08/2017|Councilmember|Carolyn King Arnold|[Carolyn, King, A...|   Carolyn|   Arnold|           0|
    |02/08/2017|Councilmember|       Scott Griggs|     [Scott, Griggs]|     Scott|   Griggs|           0|
    |02/08/2017|Councilmember|   B. Adam  McGough| [B., Adam, McGough]|        B.|  McGough|           0|
    |02/08/2017|Councilmember|       Lee Kleinman|     [Lee, Kleinman]|       Lee| Kleinman|           0|
    |02/08/2017|Councilmember|      Sandy Greyson|    [Sandy, Greyson]|     Sandy|  Greyson|           0|
    |02/08/2017|Councilmember|  Jennifer S. Gates|[Jennifer, S., Ga...|  Jennifer|    Gates|           0|
    |02/08/2017|Councilmember| Philip T. Kingston|[Philip, T., King...|    Philip| Kingston|           0|
    |02/08/2017|        Mayor|Michael S. Rawlings|[Michael, S., Raw...|   Michael| Rawlings|           1|
    |02/08/2017|Councilmember|       Adam Medrano|     [Adam, Medrano]|      Adam|  Medrano|           0|
    |02/08/2017|Councilmember|       Casey Thomas|     [Casey, Thomas]|     Casey|   Thomas|           0|
    |02/08/2017|Councilmember|Carolyn King Arnold|[Carolyn, King, A...|   Carolyn|   Arnold|           0|
    |02/08/2017|Councilmember| Rickey D. Callahan|[Rickey, D., Call...|    Rickey| Callahan|           0|
    |01/11/2017|Councilmember|  Jennifer S. Gates|[Jennifer, S., Ga...|  Jennifer|    Gates|           0|
    |04/25/2018|Councilmember|     Sandy  Greyson|    [Sandy, Greyson]|     Sandy|  Greyson|           0|
    |04/25/2018|Councilmember| Jennifer S.  Gates|[Jennifer, S., Ga...|  Jennifer|    Gates|           0|
    +----------+-------------+-------------------+--------------------+----------+---------+------------+
    only showing top 20 rows
    


---

### UDF(User Defined Function)
* name of the method , Spark data type


```python
from pyspark.sql.types import StringType

def getName(names):
    tmp = [names[0]]
    tmp.append(names[-1])
    return ' '.join(tmp)

udfName = F.udf(getName, StringType())

voters_df = voters_df.withColumn('VOTER_NAME2', udfName(voters_df.splits))

voters_df.select("VOTER_NAME", "VOTER_NAME2").show(3)
```

    +-------------------+----------------+
    |         VOTER_NAME|     VOTER_NAME2|
    +-------------------+----------------+
    |  Jennifer S. Gates|  Jennifer Gates|
    | Philip T. Kingston| Philip Kingston|
    |Michael S. Rawlings|Michael Rawlings|
    +-------------------+----------------+
    only showing top 3 rows
    



```python
user_df = user_df.withColumn('ReverseName', udfReverseString(user_df.Name))
```


```python
def sortingCap():
    return random.choice(["A", "B", "C"])
udfStoringCap = udf(sortingCap, StringType())
user_df = user_df.withColumn('sorted_class', udfStoringCap())
```

---

### Partitioning & Lazy Processing & Handling ID in Spark

#### Partitioning
* In Spark dataFrames are broken into partitions
    * Partitions can be automatically defined, enlarged, and shrunk and can differ based on the cluster type of Spark cluster
    * Partition size can vary but recommended to keep the partition size equal
    

#### Lazy Processing
* Transformations(e.g. `withColumn()`) are lazy, meaning that process is done only when an action(e.g. `count()`) is performed
* Transformations can be reordered for best performance without notice which sometimes causes unexpected behavior(e.g. ID not being added until after other transformations have been completed)

#### Handling ID in Spark
* Adding sequential ids in spark can cause undue bottleneck
* Integer (64-bit) increases in unique value, but are not sequential, but completly parallel


```python
# unique council voters
voter_df = voters_df.select(voters_df.VOTER_NAME).distinct()
print("rows:", voter_df.count())

# Add ROW_ID
voter_df = voter_df.withColumn('ROW_ID', F.monotonically_increasing_id())

# 5 highest IDs in the set
voter_df.orderBy(voter_df.ROW_ID.desc()).show(5)
```

                                                                                    

    rows: 27


    [Stage 22:==================================================>   (188 + 1) / 200]

    +-------------------+-------------+
    |         VOTER_NAME|       ROW_ID|
    +-------------------+-------------+
    |       Lee Kleinman|1709396983808|
    |        Erik Wilson|1700807049216|
    |Carolyn King Arnold|1632087572480|
    |Rickey D.  Callahan|1597727834112|
    |   Monica R. Alonzo|1382979469312|
    +-------------------+-------------+
    only showing top 5 rows
    


                                                                                    


```python
# decrease partition
voter_df_smaller = voter_df.coalesce(1)
# increase partition
voter_df_bigger = voter_df.repartition(300)

# number of partitions in each dataframe
print("voter_df_smaller consists of {} partitions".format(voter_df_smaller.rdd.getNumPartitions()))
print("voter_df consists of {} partitions".format(voter_df.rdd.getNumPartitions()))
print("voter_df_bigger consists of {} partitions".format(voter_df_bigger.rdd.getNumPartitions()))

# add a ROW_ID field to each dataframe
voter_df_smaller = voter_df_smaller.withColumn('ROW_ID', F.monotonically_increasing_id())
voter_df = voter_df.withColumn('ROW_ID', F.monotonically_increasing_id())
voter_df_bigger = voter_df_bigger.withColumn('ROW_ID', F.monotonically_increasing_id())

# top 5 IDs in each dataframe
voter_df_smaller.orderBy(voter_df_smaller.ROW_ID.desc()).show(5)
voter_df.orderBy(voter_df.ROW_ID.desc()).show(5)
voter_df_bigger.orderBy(voter_df_bigger.ROW_ID.desc()).show(5)
```

    voter_df_smaller consists of 1 partitions
    voter_df consists of 200 partitions
    voter_df_bigger consists of 300 partitions
    +-------------------+------+
    |         VOTER_NAME|ROW_ID|
    +-------------------+------+
    |       Lee Kleinman|    26|
    |        Erik Wilson|    25|
    |Carolyn King Arnold|    24|
    |Rickey D.  Callahan|    23|
    |   Monica R. Alonzo|    22|
    +-------------------+------+
    only showing top 5 rows
    


    [Stage 32:=============================================>        (168 + 1) / 200]

    +-------------------+-------------+
    |         VOTER_NAME|       ROW_ID|
    +-------------------+-------------+
    |       Lee Kleinman|1709396983808|
    |        Erik Wilson|1700807049216|
    |Carolyn King Arnold|1632087572480|
    |Rickey D.  Callahan|1597727834112|
    |   Monica R. Alonzo|1382979469312|
    +-------------------+-------------+
    only showing top 5 rows
    


    [Stage 35:===========================================>          (241 + 1) / 300]

    +----------------+-------------+
    |      VOTER_NAME|       ROW_ID|
    +----------------+-------------+
    |   Scott  Griggs|2473901162496|
    |  Tennell Atkins|2456721293312|
    |    Mark Clayton|2310692405248|
    |   Mark  Clayton|2156073582592|
    |Monica R. Alonzo|2001454759936|
    +----------------+-------------+
    only showing top 5 rows
    


                                                                                    


```python
voter_df_smaller1 = voter_df_smaller.filter(voter_df_smaller.ROW_ID < 18)
voter_df_smaller2 = voter_df_smaller.filter(voter_df_smaller.ROW_ID >= 18).drop('ROW_ID')

# determine highest ROW_ID in voter_df_smaller1
previous_max_ID = voter_df_smaller1.select('ROW_ID').rdd.max()[0]

# add ROW_ID column to voter_df_smaller2 starting at the highest ROW_ID of voter_df_smaller1
voter_df_smaller2 = voter_df_smaller2.withColumn('ROW_ID', F.monotonically_increasing_id() + previous_max_ID + 1)

voter_df_smaller1.select('ROW_ID').show()
voter_df_smaller2.select('ROW_ID').show()
```

    +------+
    |ROW_ID|
    +------+
    |     0|
    |     1|
    |     2|
    |     3|
    |     4|
    |     5|
    |     6|
    |     7|
    |     8|
    |     9|
    |    10|
    |    11|
    |    12|
    |    13|
    |    14|
    |    15|
    |    16|
    |    17|
    +------+
    
    +------+
    |ROW_ID|
    +------+
    |    18|
    |    19|
    |    20|
    |    21|
    |    22|
    |    23|
    |    24|
    |    25|
    |    26|
    +------+
    

