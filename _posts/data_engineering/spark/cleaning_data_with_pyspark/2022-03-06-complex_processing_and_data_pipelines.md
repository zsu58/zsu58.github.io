---
title: "[PySpark] Cleaning Data with PySpark(4)"
layout: single
date: '06/03/2022'
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
* Cleaning Data in PySpark
* Validating Data in PySpark
* Analysis and Delivery

---


```python
from pyspark import SparkContext
from pyspark.sql import SparkSession
from pyspark import SparkFiles
sc = SparkContext('local', 'lernen3-4')
spark = SparkSession.builder.getOrCreate()
```

    WARNING: An illegal reflective access operation has occurred
    WARNING: Illegal reflective access by org.apache.spark.unsafe.Platform (file:/usr/local/spark-3.1.2-bin-hadoop3.2/jars/spark-unsafe_2.12-3.1.2.jar) to constructor java.nio.DirectByteBuffer(long,int)
    WARNING: Please consider reporting this to the maintainers of org.apache.spark.unsafe.Platform
    WARNING: Use --illegal-access=warn to enable warnings of further illegal reflective access operations
    WARNING: All illegal access operations will be denied in a future release
    22/03/13 07:08:21 WARN NativeCodeLoader: Unable to load native-hadoop library for your platform... using builtin-java classes where applicable
    Using Spark's default log4j profile: org/apache/spark/log4j-defaults.properties
    Setting default log level to "WARN".
    To adjust logging level use sc.setLogLevel(newLevel). For SparkR, use setLogLevel(newLevel).


---

### Cleaning Data in PySpark


```python
from pyspark.sql import functions as F
from pyspark.sql import types as T

# import data
annotations_df = spark.read.csv('annotation.csv', sep="|", header=True)

# count the number of rows beginning with '#'
print(annotations_df.filter(F.col('_c0').startswith('#')).count())

# import the file to a new DataFrame, without commented rows
no_comments_df = spark.read.csv('annotation.csv', sep="|", comment='#')

# count the number of rows beginning with '#'
print(no_comments_df.filter(F.col('_c0').startswith('#')).count())
```

    1
    0



```python
# split _c0 on the tab character and store the list in a variable
tmp_fields = F.split(annotations_df['_c0'], '\s')

# create the colcount column on the DataFrame
annotations_df = annotations_df.withColumn('colcount', F.size(tmp_fields))

# remove any rows containing fewer than 5 fields
annotations_df_filtered = annotations_df.filter(~ (annotations_df.colcount < 5))

print(annotations_df.count())
print(annotations_df_filtered.count())
```

    4
    3



```python
# Split the content of _c0 on the tab character (aka, '\t')
split_cols = F.split(annotations_df_filtered['_c0'], '\s')

# Add the columns folder, filename, width, and height
split_df = annotations_df_filtered.withColumn('folder', split_cols.getItem(0))
split_df = split_df.withColumn('filename', split_cols.getItem(1))
split_df = split_df.withColumn('width', split_cols.getItem(2))
split_df = split_df.withColumn('height', split_cols.getItem(3))

# Add split_cols as a column
split_df = split_df.withColumn('split_cols', split_cols)

split_df.show()
```

    +--------------------+--------+--------+---------------+-----+------+--------------------+
    |                 _c0|colcount|  folder|       filename|width|height|          split_cols|
    +--------------------+--------+--------+---------------+-----+------+--------------------+
    |2110627 n02110627...|       9| 2110627|n02110627_12938|  200|   300|[2110627, n021106...|
    |02093754 n0209375...|       9|02093754| n02093754_1148|  500|   378|[02093754, n02093...|
    |02104029 n0210402...|       9|02104029|   n02104029_63|  500|   375|[02104029, n02104...|
    +--------------------+--------+--------+---------------+-----+------+--------------------+
    



```python
# def retriever(cols, colcount):
#   # Return a list of dog data
#   return ",".join(cols[4:colcount])

# # Define the method as a UDF
# udfRetriever = F.udf(retriever, T.ArrayType(T.StringType()))

# 위와 같음
@F.udf(T.ArrayType(T.StringType()))
def retriever(cols, colcount):
    return cols[4:colcount]

# Create a new column using your UDF
# split_df = split_df.withColumn('dog_list', udfRetriever(split_df.split_cols, split_df.colcount))
split_df = split_df.withColumn('dog_list', retriever(split_df.split_cols, split_df.colcount))

# Remove the original column, split_cols, and the colcount
split_df = split_df.drop('_c0').drop('split_cols').drop('colcount')
split_df.show()
```

    +--------+---------------+-----+------+--------------------+
    |  folder|       filename|width|height|            dog_list|
    +--------+---------------+-----+------+--------------------+
    | 2110627|n02110627_12938|  200|   300|[affenpinscher, 0...|
    |02093754| n02093754_1148|  500|   378|[affenpinscher, 7...|
    |02104029|   n02104029_63|  500|   375|[Shetland_sheepdo...|
    +--------+---------------+-----+------+--------------------+
    


---

### Validating Data in PySpark


```python
valid_folders_df = spark.read.csv("valid_folder.csv", header=True, inferSchema=True)
valid_folders_df = valid_folders_df.withColumnRenamed("_c0", "folder")

# count the number of rows in split_df
print(split_df.count())

# join the dataframes
joined_df = split_df.join(F.broadcast(valid_folders_df), "folder", "inner")

print(joined_df.count())
```

    3
    2



```python
# determine the row counts for each DataFrame
split_count = split_df.count()
joined_count = joined_df.count()

# create a DataFrame containing the invalid rows
# 원래는 동시에 만족하는 'inner'이여야 하지만, 일부로 split_df의 folder을 기준으로 join한 예시
invalid_df = split_df.join(F.broadcast(joined_df), 'folder', 'leftouter')

# validate the count of the new DataFrame is as expected
invalid_count = invalid_df.count()
print(" split_df:\t%d\n joined_df:\t%d\n invalid_df: \t%d" % (split_count, joined_count, invalid_count))

# determine the number of distinct folder rows removed
# joined_df와, split_df의 folder 개수 중 최소값인 2개여야 하지만, 3개가 나와, 수정이 필요한 것을 알 수 있음
invalid_folder_count = invalid_df.select('folder').distinct().count()
print("%d distinct invalid folders found" % invalid_folder_count)
```

     split_df:	3
     joined_df:	2
     invalid_df: 	3


    [Stage 207:====================================================>(198 + 1) / 200]

    3 distinct invalid folders found


                                                                                    

---

### Analysis and Delivery


```python
# show dog details and as untruncated rows
print(joined_df.select("dog_list").show(10, truncate=False))

# define schema type for the details in the dog list
DogType = T.StructType([
	T.StructField("breed", T.StringType(), False),
    T.StructField("start_x", T.IntegerType(), False),
    T.StructField("start_y", T.IntegerType(), False),
    T.StructField("end_x", T.IntegerType(), False),
    T.StructField("end_y", T.IntegerType(), False)
])
```

    +----------------------------------+
    |dog_list                          |
    +----------------------------------+
    |[affenpinscher, 0, 9, 173, 298]   |
    |[affenpinscher, 73, 127, 341, 335]|
    +----------------------------------+
    
    None



```python
# # function to return the number and type of dogs as a tuple
# def dogParse(doglist):
#     dogs = []
#     breed, start_x, start_y, end_x, end_y = doglist
#     dogs.append((breed, int(start_x), int(start_y), int(end_x), int(end_y)))
#     return dogs

# # create a UDF
# udfDogParse = F.udf(dogParse, T.ArrayType(DogType))

# 위와 같음
@F.udf(T.ArrayType(DogType))
def dogParse(doglist):
    dogs = []
    breed, start_x, start_y, end_x, end_y = doglist
    dogs.append((breed, int(start_x), int(start_y), int(end_x), int(end_y)))
    return dogs

# use the UDF to list of dogs and drop the old column
# joined_df = joined_df.withColumn('dogs', udfDogParse('dog_list')).drop('dog_list')
joined_df = joined_df.withColumn('dogs', udfDogParse('dog_list')).drop('dog_list')

# show the number of dogs in the first 10 rows
joined_df.select(F.size('dogs')).show(10)
```

    +----------+
    |size(dogs)|
    +----------+
    |         1|
    |         1|
    +----------+
    



```python
joined_df.printSchema()
```

    root
     |-- folder: string (nullable = true)
     |-- filename: string (nullable = true)
     |-- width: string (nullable = true)
     |-- height: string (nullable = true)
     |-- dogs: array (nullable = true)
     |    |-- element: struct (containsNull = true)
     |    |    |-- breed: string (nullable = false)
     |    |    |-- start_x: integer (nullable = false)
     |    |    |-- start_y: integer (nullable = false)
     |    |    |-- end_x: integer (nullable = false)
     |    |    |-- end_y: integer (nullable = false)
    



```python
# # Define a UDF to determine the number of pixels per image
# def dogPixelCount(doglist):
#     totalpixels = 0
#     for dog in doglist:
#         totalpixels += (dog[3] - dog[1]) * (dog[4] - dog[2])
#     return totalpixels

# # Define a UDF for the pixel count
# udfDogPixelCount = F.udf(dogPixelCount, T.IntegerType())

# 위와 같음
@F.udf(T.IntegerType())
def dogPixelCount(doglist):
    totalpixels = 0
    for dog in doglist:
        totalpixels += (dog[3] - dog[1]) * (dog[4] - dog[2])
    return totalpixels

joined_df = joined_df.withColumn('dog_pixels', udfDogPixelCount('dogs'))

for col in ["width", "height"]:
    joined_df = joined_df.withColumn(col, F.col(col).cast(T.IntegerType()))

# Create a column representing the percentage of pixels
joined_df = joined_df.withColumn('dog_percent', (joined_df.dog_pixels / (joined_df.width * joined_df.height)) * 100)

# Show the first 10 annotations with more than 60% dog
joined_df.filter(joined_df.dog_percent > 60).show(10)
```

    +-------+---------------+-----+------+--------------------+----------+-----------------+
    | folder|       filename|width|height|                dogs|dog_pixels|      dog_percent|
    +-------+---------------+-----+------+--------------------+----------+-----------------+
    |2110627|n02110627_12938|  200|   300|[{affenpinscher, ...|     49997|83.32833333333333|
    +-------+---------------+-----+------+--------------------+----------+-----------------+
    

