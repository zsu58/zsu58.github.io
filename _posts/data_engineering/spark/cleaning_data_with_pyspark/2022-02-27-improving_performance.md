---
title: "[PySpark] Cleaning Data with PySpark(3)"
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
* Caching
    * `.cache()`
    * `.is_cached`
    * `.unpersist()`
* Cluster Configuration
* Import Performance
* Performance improvements
    * `.repartition()`
    * `.coalesce()`
    * `.broadcast()`

---


```python
from pyspark import SparkContext
from pyspark.sql import SparkSession
from pyspark import SparkFiles
sc = SparkContext('local', 'lernen3-3')
spark = SparkSession.builder.getOrCreate()
```

    WARNING: An illegal reflective access operation has occurred
    WARNING: Illegal reflective access by org.apache.spark.unsafe.Platform (file:/usr/local/spark-3.1.2-bin-hadoop3.2/jars/spark-unsafe_2.12-3.1.2.jar) to constructor java.nio.DirectByteBuffer(long,int)
    WARNING: Please consider reporting this to the maintainers of org.apache.spark.unsafe.Platform
    WARNING: Use --illegal-access=warn to enable warnings of further illegal reflective access operations
    WARNING: All illegal access operations will be denied in a future release
    22/03/06 03:20:01 WARN NativeCodeLoader: Unable to load native-hadoop library for your platform... using builtin-java classes where applicable
    Using Spark's default log4j profile: org/apache/spark/log4j-defaults.properties
    Setting default log level to "WARN".
    To adjust logging level use sc.setLogLevel(newLevel). For SparkR, use setLogLevel(newLevel).



```python
sc.addFile('https://raw.githubusercontent.com/zsu020958/data_base/main/Python/cleaning_data_in_pyspark/AA_DFW_2014_Departures_Short.csv')
sc.addFile('https://raw.githubusercontent.com/zsu020958/data_base/main/Python/introduction_to_pyspark/flights.csv')
sc.addFile('https://raw.githubusercontent.com/zsu020958/data_base/main/Python/introduction_to_pyspark/airports.csv')

# dataset
departures_df = spark.read.format('csv') \
    .options(header=True) \
    .options(inferSchema=True) \
    .load(SparkFiles.get('AA_DFW_2014_Departures_Short.csv'))

flights = spark.read.format('csv') \
    .options(header=True) \
    .options(inferSchema=True) \
    .load(SparkFiles.get('flights.csv'))

airports = spark.read.format('csv') \
    .options(header=True) \
    .options(inferSchema=True) \
    .load(SparkFiles.get('airports.csv'))
```

                                                                                    

---

### Caching
* Storing dataframe in memory or on disk of the processing nodes in a cluster
* Advantage
    * Improves speed for subsequent transformations and actions & Reduces resource utilization of the clusters
        * since the data no longer needs to be retrieved from the original data source, which requires to access storage, networking, and CPU of the spark node
* Disadvantage
    * Very large data sets may not fit in memory
    * Depending on later transformations the cache may not do anything to improve performance
    * Local Disk based caching may not improve performance
    * Lifetime of cached objects is not guaranteed
* Tips
    * Cache only when it is necessary
        * When dataframe is used again
    * Try caching dataframe at several points and determine if the performance improves(time)
    * Cache in memory or SSD / NVMe Storage
    * Cache to slow local disk if needed
        * Useful when processing large dataset requiring lot of steps to generate, or must be accessed with the internet 
    * Use Parquet files if caching doesn't work
        * This can provide checkpoints in case a job fails mid-task 
    * Stop caching objects when finished

#### .cache()


```python
import time

# cache departures_df after getting unique rows
departures_df = departures_df.distinct().cache()

# count unique rows in departures_df, caching is done in this step
start_time = time.time()
print("Operation Time:", departures_df.count(), time.time() - start_time)

# counting is faster since caching is done
start_time = time.time()
print("Operation Time:", departures_df.count(), time.time() - start_time)
```

    [Stage 9:=====================================================> (194 + 1) / 200]

    Operation Time: 157198 4.95077657699585


    [Stage 12:=============================================>        (170 + 2) / 200]

    Operation Time: 157198 1.8465900421142578


    
    [Stage 12:=====================================================>(197 + 1) / 200]
    
                                                                                    

#### is_cached & .unpersist()


```python
print("Is departures_df cached?: %s" % departures_df.is_cached)
departures_df.unpersist()
print("Is departures_df cached?: %s" % departures_df.is_cached)
```

    Is departures_df cached?: True
    Is departures_df cached?: False


---

### Cluster Configuration

* Cluster Type
    * Single node: Deploying all components on a single system
    * Standalone: Dedicated machine as the driver and worker
    * Managed: Cluster componenets are handled by a third party cluster manager (e.g. YARN, Mesos, Kubernetes)
<br><br>
* Spark Clusters are made of two processes
    * Driver Process: Handles task assignment and consolidation of the data results from the workers
        * Driver Node
            * Double memory compared to the worker
            * Fast local storage 
        * Role
            * Responsible for handling task assignment to various nodes/processors in the cluster
            * Monitors state of all process and tasks and handles any task retries
            * Responsible for consolidating results from the other processors in the cluster
            * Handles any access to shared data and verifies whether each worker process has the necessary resources(e.g. data, code)
<br><br>
    * Worker Process: Handles actual transformation & action tasks of a spark job, after the assigned task is finished, it reports the results to the driver
        * Worker Node
            * Depending on the type of task, more worker nodes are often better than larger nodes
            * Fast local storage
        * Role
            * Runs actual tasks
            * Ideally has all code, data, and resources for given task

---


```python
# Name of the Spark application instance
app_name = spark.conf.get("spark.app.name")

# Driver TCP port
driver_tcp_port = spark.conf.get("spark.driver.port")

# Number of join partitions
num_partitions = spark.conf.get('spark.sql.shuffle.partitions')

print("Name: %s" % app_name)
print("Driver TCP port: %s" % driver_tcp_port)
print("Number of partitions: %s" % num_partitions)
```

    Name: lernen3-3
    Driver TCP port: 39801
    Number of partitions: 200



```python
# Store the number of partitions in variable
before = departures_df.rdd.getNumPartitions()

# Configure Spark to use 500 partitions
spark.conf.set('spark.sql.shuffle.partitions', 500)

# Recreate DataFrame
departures_df = departures_df = spark.read.format('csv') \
    .options(header=True) \
    .options(inferSchema=True) \
    .load(SparkFiles.get('AA_DFW_2014_Departures_Short.csv')) \
    .distinct()

print("Partition count before change: %d" % before)
print("Partition count after change: %d" % departures_df.rdd.getNumPartitions())
```

                                                                                    

    Partition count before change: 1
    Partition count after change: 500


---

### Import Performance

* Importing several small files are faster than importing one large file
    * The more import objects available, the better the cluster can divvy up the import job
* Importing files(objects) that have simliar sizes are faster than files with mixed sizes
* Well defined schema drastically improves import performance
* split -l 10000 [file_name] chunk
    * -l: number of lines
    * file_name
    * prefix


```python
# Import the full and split files into DataFrames
full_df = spark.read.csv("./files/flights.csv")
split_df = spark.read.csv("./files/chunk_*")

start_time_a = time.time()
print("Total rows in full DataFrame:\t%d" % full_df.count())
print("Time to run: %f" % (time.time() - start_time_a))

start_time_b = time.time()
print("Total rows in split DataFrame:\t%d" % split_df.count())
print("Time to run: %f" % (time.time() - start_time_b))
```

    Total rows in full DataFrame:	10001
    Time to run: 1.031092
    Total rows in split DataFrame:	10001
    Time to run: 0.482383


---

### Performance improvements

* Spark distributes data amongst the various nodes in the cluster
* Shuffling refers to moving data around to various workers to complete a task
    * Shuffling arises as a side effect
        * since workers must spend time waiting for the data to transfer
        * can be slow to complete the task especially when few nodes require all the data
<br>
* `.repartition()`: increases partition
* `.coalesce()`: reduces partition
* `.join()`: 
    * `.broadcast()`
        * provides a copy of an object to each worker
        * speeds up joins especially if one of the dataframe being joined is much smaller than the other    


```python
# join
joined = flights.join(airports, \
                      on=flights["dest"] == airports["faa"], \
                      how="leftouter")

# Show query plan
joined.explain()
```

    == Physical Plan ==
    *(2) BroadcastHashJoin [dest#51], [faa#88], LeftOuter, BuildRight, false
    :- Exchange RoundRobinPartitioning(50), REPARTITION_WITH_NUM, [id=#94]
    :  +- FileScan csv [year#40,month#41,day#42,dep_time#43,dep_delay#44,arr_time#45,arr_delay#46,carrier#47,tailnum#48,flight#49,origin#50,dest#51,air_time#52,distance#53,hour#54,minute#55] Batched: false, DataFilters: [], Format: CSV, Location: InMemoryFileIndex[file:/tmp/spark-ff968a82-18e0-41af-8335-18d1f25384cb/userFiles-57594436-ff3f-4e..., PartitionFilters: [], PushedFilters: [], ReadSchema: struct<year:int,month:int,day:int,dep_time:string,dep_delay:string,arr_time:string,arr_delay:stri...
    +- BroadcastExchange HashedRelationBroadcastMode(List(input[0, string, false]),false), [id=#109]
       +- Exchange RoundRobinPartitioning(50), REPARTITION_WITH_NUM, [id=#108]
          +- *(1) Filter isnotnull(faa#88)
             +- FileScan csv [faa#88,name#89,lat#90,lon#91,alt#92,tz#93,dst#94] Batched: false, DataFilters: [isnotnull(faa#88)], Format: CSV, Location: InMemoryFileIndex[file:/tmp/spark-ff968a82-18e0-41af-8335-18d1f25384cb/userFiles-57594436-ff3f-4e..., PartitionFilters: [], PushedFilters: [IsNotNull(faa)], ReadSchema: struct<faa:string,name:string,lat:double,lon:double,alt:int,tz:int,dst:string>
    
    



```python
from pyspark.sql import functions as F

# Join
broadcast = flights.join(F.broadcast(airports), \
                         on=flights["dest"] == airports["faa"], \
                         how="leftouter")

# Show query plan
broadcast.explain()
```

    == Physical Plan ==
    *(2) BroadcastHashJoin [dest#51], [faa#88], LeftOuter, BuildRight, false
    :- Exchange RoundRobinPartitioning(50), REPARTITION_WITH_NUM, [id=#137]
    :  +- FileScan csv [year#40,month#41,day#42,dep_time#43,dep_delay#44,arr_time#45,arr_delay#46,carrier#47,tailnum#48,flight#49,origin#50,dest#51,air_time#52,distance#53,hour#54,minute#55] Batched: false, DataFilters: [], Format: CSV, Location: InMemoryFileIndex[file:/tmp/spark-ff968a82-18e0-41af-8335-18d1f25384cb/userFiles-57594436-ff3f-4e..., PartitionFilters: [], PushedFilters: [], ReadSchema: struct<year:int,month:int,day:int,dep_time:string,dep_delay:string,arr_time:string,arr_delay:stri...
    +- BroadcastExchange HashedRelationBroadcastMode(List(input[0, string, false]),false), [id=#152]
       +- Exchange RoundRobinPartitioning(50), REPARTITION_WITH_NUM, [id=#151]
          +- *(1) Filter isnotnull(faa#88)
             +- FileScan csv [faa#88,name#89,lat#90,lon#91,alt#92,tz#93,dst#94] Batched: false, DataFilters: [isnotnull(faa#88)], Format: CSV, Location: InMemoryFileIndex[file:/tmp/spark-ff968a82-18e0-41af-8335-18d1f25384cb/userFiles-57594436-ff3f-4e..., PartitionFilters: [], PushedFilters: [IsNotNull(faa)], ReadSchema: struct<faa:string,name:string,lat:double,lon:double,alt:int,tz:int,dst:string>
    
    



```python
start_time = time.time()

# Count the number of rows in joined
joined_count = joined.count()
joined_duration = time.time() - start_time

start_time = time.time()
# Count the number of rows in broadcast
broadcast_count = broadcast.count()
broadcast_duration = time.time() - start_time

# Print the counts and the duration of the tests
print("Normal count:\t\t%d\tduration: %f" % (joined_count, joined_duration))
print("Broadcast count:\t%d\tduration: %f" % (broadcast_count, broadcast_duration))
```

    Normal count:		10000	duration: 1.909014
    Broadcast count:	10000	duration: 1.643309

