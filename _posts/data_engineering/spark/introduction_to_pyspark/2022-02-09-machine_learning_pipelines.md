---
title: "[PySpark] Introduction to PySpark(3)"
layout: single
date: '08/02/2022'
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
* `StringIndexer()` & `OneHotEncoder()`
* `VectorAssembler()` & `Pipeline()`
* `LogisticRegression()`

---


```python
from pyspark import SparkContext
from pyspark.sql import SparkSession
sc = SparkContext('local', 'lernen1-3')
spark = SparkSession.builder.getOrCreate()
print(sc)
print(spark)
```

    <SparkContext master=local appName=lernen1-3>
    <pyspark.sql.session.SparkSession object at 0x7f96186a9970>



```python
# dataset
flights = spark.read.csv("flights.csv", header=True)
planes = spark.read.csv("planes.csv", header=True)

# flights.createOrReplaceTempView("flights")
# print(spark.catalog.listTables())
```


```python
# ML을 위한 데이터 전처리

# join하기 전 dataframe 간 겹치는 이름 수정
planes = planes.withColumnRenamed("year", "plane_year")

# join
model_data = flights.join(planes, on="tailnum", how="leftouter")

# ML 위해 숫자형으로 변환
cols = ["arr_delay", "air_time", "month", "plane_year"]
for col in cols:
    model_data=model_data.withColumn(col, model_data[col].cast('integer'))
    
# 마지막 독립변수 
model_data = model_data.withColumn("plane_age", model_data.year - model_data.plane_year)

# spark ML에서 종속변수의 default name은 label
model_data = model_data.withColumn("is_late", model_data.arr_delay > 0)
model_data = model_data.withColumnRenamed("is_late", "label")

# label type을 boolean->int로
from pyspark.sql.functions import col, when
model_data = model_data.withColumn("label", 
                               when(col("label") == True, 0)\
                               .otherwise(1))

# # 결측치 제거
model_data = model_data.filter("arr_delay is not NULL and dep_delay is not NULL and air_time is not NULL and plane_year is not NULL")
```

---

### StringIndexer & OneHotEncoder

#### StringIndexer
* Member of this class are Estimator & Transformer
* Estimator takes a DataFrame column of strings and map each unique string to a number
* Then, the Estimator returns a Transformer that takes a DataFrame, attaches the mapping to it as metadata, and returns a new DataFrame with a numeric column corresponding to the string column


```python
from pyspark.ml.feature import StringIndexer

carr_indexer = StringIndexer(inputCol="carrier", outputCol="carrier_index")
dest_indexer = StringIndexer(inputCol="dest", outputCol="dest_index")
```

#### OneHotEncoder
* Member of this are Estimator & Transfomer
* The mechanism is similar to the StringIndexer(Estimator -> Transfomer)


```python
from pyspark.ml.feature import OneHotEncoder

carr_encoder = OneHotEncoder(inputCol="carrier_index", outputCol="carrier_fact")
dest_encoder = OneHotEncoder(inputCol="dest_index", outputCol="dest_fact")
```

---

### VectorAssembler() & Pipeline()

#### VectorAssembler()
* VectorAssembler combines all of the columns containing the features into a single column, since Spark modeling routine expects the data to be in this form


```python
from pyspark.ml.feature import VectorAssembler

vec_assembler = VectorAssembler(inputCols=["month", "air_time", "carrier_fact", "dest_fact", "plane_age"], outputCol="features")
```

#### Pipeline()
* Pipeline combines all the Estimators and Transformers created


```python
from pyspark.ml import Pipeline

flights_pipe = Pipeline(stages=[dest_indexer, dest_encoder, carr_indexer, carr_encoder, vec_assembler])
```

---

---

### .fit() & .transform() & .split()
* In Spark it's important to make sure you split the data after all the transformations, because operations like StringIndexer don't always produce the same index even when given the same list of strings.


```python
# Fit and transform the data
piped_data = flights_pipe.fit(model_data).transform(model_data)

# Split the data into training(0.6) and test sets(0.4)
training, test = piped_data.randomSplit([.6,.4])
```

---

### LogisticRegression()


```python
from pyspark.ml.classification import LogisticRegression

lr = LogisticRegression()
```


```python
import pyspark.ml.evaluation as evals

evaluator = evals.BinaryClassificationEvaluator(metricName="areaUnderROC")
```


```python
import pyspark.ml.tuning as tune
import numpy as np

# parameter grid
grid = tune.ParamGridBuilder()

# add hyperparameter
grid = grid.addGrid(lr.regParam, np.arange(0, .1, .01))
grid = grid.addGrid(lr.elasticNetParam, [0,1])

# build grid
grid = grid.build()
```


```python
# create CrossValidator
cv = tune.CrossValidator(estimator=lr,
               estimatorParamMaps=grid,
               evaluator=evaluator
               )
```


```python
# Fit cross validation models
models = cv.fit(training)
```


```python
# Extract best model
best_lr = models.bestModel
```


```python
# Call lr.fit()
best_lr = lr.fit(training)

# Print best_lr
print(best_lr)
```

    LogisticRegressionModel: uid=LogisticRegression_53627ec2be29, numClasses=2, numFeatures=81



```python
# Use model to predict the test set
test_results = best_lr.transform(test)

# Evaluate the predictions
print(evaluator.evaluate(test_results))
```

    0.688567890521795

