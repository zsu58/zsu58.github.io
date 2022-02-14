---
title: "[PySpark] Big Data Fundamentals with PySpark(2)"
layout: single
date: '13/02/2022'
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
* RDD
* Transformation & Action of RDD
* Paired RDD
* * [🔗 More Information of Transformation & Action Functions](* https://spark.apache.org/docs/latest/rdd-programming-guide.html)


---


```python
from pyspark import SparkContext
from pyspark.sql import SparkSession
sc = SparkContext('local', 'lernen2-2')
spark = SparkSession.builder.getOrCreate()
```

---

### RDD
* Resilient Distributed Datasets
    * Collection of distributed data across a cluster
    * Fundamental data type in spark
    * When spark processes the data, it divides the data into partition and distributes data across nodes in the cluster, with each node containing a slice of data
* Resilient - Ability to withstand failure
* Distributed - Spanning across multiple machines
* Datasets - Collection of partitioned data(e.g. arrays, tuples, tables)
<br>
* Creation
    * by taking an existing dataset and pass it to SparkContext's `paralleize()`
    * load data an pass it to SparkContext's `textFile()`
<br>
* Partition - Division of large dataset with each part stored in multiple locations across the cluster

#### Creation


```python
# paralleize()
numb = range(1, 100)

numbRDD = sc.parallelize(numb)
numbRDD.take(3)
```




    [1, 2, 3]




```python
# textFile()
url = 'https://raw.githubusercontent.com/zsu020958/data_base/main/Python/big_data_fundamentals/Complete_Shakespeare.txt'

from pyspark import SparkFiles
sc.addFile(url)
shakespeareRDD = sc.textFile(SparkFiles.get('Complete_Shakespeare.txt'))
shakespeareRDD.take(3)
```




    ['The Project Gutenberg EBook of The Complete Works of William Shakespeare, by',
     'William Shakespeare',
     '']



#### Partition


```python
# default
print(shakespeareRDD.getNumPartitions())

# assign partitions
shakespeareRDD2 = sc.textFile(SparkFiles.get('Complete_Shakespeare.txt'), minPartitions = 2)
print(shakespeareRDD2.getNumPartitions())
```

    1
    2


---

### Transformation & Action of RDD
* Transformation - Creates new RDDs
    * follows lazy evaluation(optimize resources by executing only when the action is performed)
    * `map()` - applies a function to all elements in the RDD
    * `filter()` - returns a RDD with only the elements that pass the condition
    * `flatMap()` - returns multiple values for each element in the original RDD
    * `union()` - combines RDDs
    * `reduce()` - aggregates elements 
    * `join()` - join two pairs of RDD based on their key
    * `coalesce()` - saves a single (new) RDD that is reduced into a single partition
    * `repartition()` - Reshuffle data in the RDD randomly to create either more or fewer partitions and balance it across them


* Action - Perform computations on RDDs
    * `collect()` - returns all the elements of the dataset as an array
    * `first()` - return the first element of the dataset
    * `take()` - returns an array with first N elements of the dataset
    * `count()` - returns the number of elements in the RDD
    * `saveAsTextFile()` - saves RDD with each partition as a separate filed inside a directory

#### map() & collect()


```python
numbRDD = sc.parallelize(range(1,4))
cubedRDD = numbRDD.map(lambda x: x**3)

numbers_all = cubedRDD.collect()

for numb in numbers_all:
    print(numb)
```

    1
    8
    27


#### filter() & first()


```python
shakespeareRDD2_filter = shakespeareRDD2.filter(lambda line: 'Shakespeare' in line)
# shakespeareRDD2_filter = splitRDD.filter(lambda x: x.lower() not in ["a", "the"])

# First line of shakespeareRDD2_filter
print(shakespeareRDD2_filter.first())
```

    The Project Gutenberg EBook of The Complete Works of William Shakespeare, by


#### flatMap() & take()


```python
shakespeareRDD2_filter_flat = shakespeareRDD2_filter.flatMap(lambda line: line.split(" "))

print("The total number of words in shakespeareRDD2_filter_flat:", shakespeareRDD2_filter_flat.count())

# First four lines of shakespeareRDD2_filter_flat
for line in shakespeareRDD2_filter_flat.take(4): 
    print(line)
```

    The total number of lines in shakespeareRDD2_filter_flat: 63
    The
    Project
    Gutenberg
    EBook


#### union() & count()


```python
numbRDD1 = sc.parallelize(range(1,5))
numbRDD2 = sc.parallelize(range(5,11))
numbRDD3 = numbRDD1.union(numbRDD2)

print("The total number of element is numbRDD3:", numbRDD3.count())

for ele in numbRDD3.take(3):
    print(ele)
```

    The total number of element is numbRDD3: 10
    1
    2
    3


#### reduce()


```python
sc.parallelize([1,2,3,4]).reduce(lambda x,y:x+y)
```




    10



#### join()


```python
rdd1 = sc.parallelize([("Messi", 34), ("Ronaldo", 30), ("Neymar", 28)])
rdd2 = sc.parallelize([("Messi", 36), ("Ronaldo", 30), ("Neymar", 22)])
rdd1.join(rdd2).collect()
```




    [('Ronaldo', (30, 30)), ('Messi', (34, 36)), ('Neymar', (28, 22))]



#### saveAsTextFile()


```python
shakespeareRDD2_filter_flat.saveAsTextFile("shakespare_filtered.txt")
```


```python
# read
sc.textFile("shakespare_filtered.txt").first()
```




    'The'



#### coalesce()


```python
print(shakespeareRDD2_filter_flat.getNumPartitions())
shakespeareRDD2_filter_flat = shakespeareRDD2_filter_flat.coalesce(1)
print(shakespeareRDD2_filter_flat.getNumPartitions())
```

    2
    1


#### repartition()


```python
print(shakespeareRDD2_filter_flat.repartition(3).getNumPartitions())
```

    3


---

### Paired RDD
* RDD which consists of key/value pairs
* Creation
    * from a list of key/value tuple
    * from a regular RDD
* `collectAsMap()` - returns key/values pairs in rdd as dictionary
    * should be used on a dataset whose size is small enough to fit in memory
* `reduceByKey()` - combine values with the same key
* `countByKey()` - counts number of elements for each key, and returns a dictionary
    * should be used on a dataset whose size is small enough to fit in memory
* `groupByKey()` - group values with the same key
* `sortByKey()` - return an RDD sorted by the key
* `sortBy()` - return an sorted RDD

#### Creation


```python
# list of key/value tuple
football_tuple = [('Zsu', 27), ('Arm', 28)]
for ele in sc.parallelize(my_tuple).collect():
    print(ele)
```

    ('ZSU', 27)
    ('Arm', 28)



```python
# from a regular RDD
pairedRDD = shakespeareRDD2_filter_flat.map(lambda x:(x, 1))
for k,v in pairedRDD.take(2):
    print(k, v)
```

    The 1
    Project 1


#### collectAsMap()


```python
pairedRDD.take(3)
```




    [('The', 1), ('Project', 1), ('Gutenberg', 1)]




```python
# return pairedRDD as dictionary
pairedRDD.collectAsMap()
```




    {'The': 1,
     'Project': 1,
     'Gutenberg': 1,
     'EBook': 1,
     'of': 1,
     'Complete': 1,
     'Works': 1,
     'William': 1,
     'Shakespeare,': 1,
     'by': 1,
     'Shakespeare': 1,
     'Title:': 1,
     'Author:': 1,
     'Library': 1,
     'the': 1,
     'Future': 1,
     'and': 1,
     'CDROMS.': 1,
     '': 1,
     'in': 1,
     'presentation': 1}



#### reduceByKey()


```python
# reducing(combining) values with the same key
pairedRDD_reduced = pairedRDD.reduceByKey(lambda x,y: x+y)
print(pairedRDD_reduced.take(3))
```

    [('The', 4), ('Project', 2), ('EBook', 1)]


#### countByKey()


```python
pairedRDD.countByKey()
```




    defaultdict(int,
                {'The': 4,
                 'Project': 2,
                 'Gutenberg': 2,
                 'EBook': 1,
                 'of': 6,
                 'Complete': 3,
                 'Works': 3,
                 'William': 11,
                 'Shakespeare,': 1,
                 'by': 7,
                 'Shakespeare': 12,
                 'Title:': 1,
                 'Author:': 1,
                 'Library': 1,
                 'the': 2,
                 'Future': 1,
                 'and': 1,
                 'CDROMS.': 1,
                 '': 1,
                 'in': 1,
                 'presentation': 1})



#### groupByKey()


```python
for ele in pairedRDD.groupByKey().take(3):
    print(ele)
```

    ('The', <pyspark.resultiterable.ResultIterable object at 0x7efe7ded80d0>)
    ('Project', <pyspark.resultiterable.ResultIterable object at 0x7efe7ded81c0>)
    ('EBook', <pyspark.resultiterable.ResultIterable object at 0x7efe7ded80a0>)


#### sortByKey()


```python
for k,v in pairedRDD_reduced.sortByKey(ascending=False).take(3):
    print("Key: '{}' has {} Counts".format(k, v))
```

    Key: 'the'' has 2 Counts
    Key: 'presentation'' has 1 Counts
    Key: 'of'' has 6 Counts


#### sortBy()


```python
for k,v in pairedRDD_reduced.sortBy(lambda x: x[1], ascending=False).take(3):
    print("Key: '{}' has {} Counts".format(k, v))
```

    Key: 'Shakespeare' has 12 Counts
    Key: 'William' has 11 Counts
    Key: 'by' has 7 Counts


---
