---
title: "[PySpark] Big Data Fundamentals with PySpark(4)"
layout: single
date: '15/02/2022'
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
* Collaborative Filtering
* Classification
* Clustering

---


```python
from pyspark import SparkContext
from pyspark.sql import SparkSession
from pyspark import SparkFiles
sc = SparkContext('local', 'lernen2-4')
spark = SparkSession.builder.getOrCreate()
```

    22/03/13 12:58:23 WARN Utils: Service 'SparkUI' could not bind on port 4040. Attempting port 4041.


---

### Collaborative Filtering
* Collaborative filtering: finding users that share common interests
    * Commonly used for recommender system
* Approaches
    * User-User Collaborative filtering: Finds users that are similar to the target user
    * Item-Item Collaborative filtering: Finds and recommends items that are similar to items with the target user
* `ALS` algorithm has the following mandatory parameters 
    * rank: the number of latent factors in the model
    * iterations: number of iterations to run


```python
from pyspark.mllib.recommendation import ALS
from pyspark.mllib.recommendation import Rating
```


```python
url = 'https://raw.githubusercontent.com/zsu020958/data_base/main/Python/big_data_fundamentals/ratings.csv'
sc.addFile(url)

# Load the data into RDD
data = sc.textFile(SparkFiles.get('ratings.csv'))

# Split the RDD 
ratings = data.map(lambda l: l.split(','))

# Transform the ratings RDD 
ratings_final = ratings.map(lambda line: Rating(int(line[0]), int(line[1]), float(line[2])))

# Split the data into training and test
training_data, test_data = ratings_final.randomSplit([0.8, 0.2])
```

    22/03/13 11:14:20 WARN SparkContext: The path https://raw.githubusercontent.com/zsu020958/data_base/main/Python/big_data_fundamentals/ratings.csv has been added already. Overwriting of added paths is not supported in the current version.



```python
# Create the ALS model on the training data
model = ALS.train(training_data, rank=10, iterations=10)

# Drop the ratings column 
testdata_no_rating = test_data.map(lambda p: (p[0], p[1]))

# Predict the model  
predictions = model.predictAll(testdata_no_rating)

# Return the first 2 rows of the RDD
predictions.take(2)
```

    22/03/13 11:19:14 WARN BLAS: Failed to load implementation from: com.github.fommil.netlib.NativeSystemBLAS
    22/03/13 11:19:14 WARN BLAS: Failed to load implementation from: com.github.fommil.netlib.NativeRefBLAS
    22/03/13 11:19:14 WARN LAPACK: Failed to load implementation from: com.github.fommil.netlib.NativeSystemLAPACK
    22/03/13 11:19:14 WARN LAPACK: Failed to load implementation from: com.github.fommil.netlib.NativeRefLAPACK
                                                                                    




    [Rating(user=599, product=69069, rating=3.609241042910875),
     Rating(user=624, product=69069, rating=1.1686141693716956)]




```python
# Prepare ratings data
rates = ratings_final.map(lambda r: ((r[0], r[1]), r[2]))

# Prepare predictions data
preds = predictions.map(lambda r: ((r[0], r[1]), r[2]))

# Join the ratings data with predictions data
rates_and_preds = rates.join(preds)

# Calculate and print MSE
MSE = rates_and_preds.map(lambda r: (r[1][0] - r[1][1])**2).mean()
print("Mean Squared Error of the model for the test data = {:.2f}".format(MSE))
```

    [Stage 211:============================>                            (1 + 1) / 2]

    Mean Squared Error of the model for the test data = 1.37


                                                                                    

---

### Classification
* Spark MLlib contains specific data types for Vectors & LabelledPoint
* Vectors: 
    * Dense Vector: Store all their entities in an array of floating point numbers
    * Sparse Vector: Store only the nonzero values and their indices
* LabelledPoint: Wrapper for input features and predicted value
    * Binary Classification: Label is either 0 or 1
    * Multiple 
* `HashingTF()`: Algorithm used to map feature value to indices in the feature vector


```python
from pyspark.mllib.classification import LogisticRegressionWithLBFGS
from pyspark.mllib.feature import HashingTF, Vectors
from pyspark.mllib.regression import LabeledPoint
```


```python
# Dense Vector
Vectors.dense([1.0, 2.0, 3.0])
```




    DenseVector([1.0, 2.0, 3.0])




```python
# Sparse Vector
Vectors.sparse(4,{1: 1.0, 3: 5.5})
```




    SparseVector(4, {1: 1.0, 3: 5.5})




```python
# LabeledPoint(label, [features])
LabeledPoint(1.0, [1.0, 0.0, 3.0])
```




    LabeledPoint(1.0, [1.0,0.0,3.0])




```python
url = 'https://raw.githubusercontent.com/zsu020958/data_base/main/Python/big_data_fundamentals/spam.txt'
sc.addFile(url)
url = 'https://raw.githubusercontent.com/zsu020958/data_base/main/Python/big_data_fundamentals/ham.txt'
sc.addFile(url)

# load the data into RDD
spam_rdd = sc.textFile(SparkFiles.get("spam.txt"))
non_spam_rdd = sc.textFile(SparkFiles.get("ham.txt"))

# split the email messages into words
spam_words = spam_rdd.flatMap(lambda email: email.split(' '))
non_spam_words = non_spam_rdd.flatMap(lambda email: email.split(' '))

# check
print("The first element in spam_words is", spam_words.first())
print("The first element in non_spam_words is", non_spam_words.first())
```

    [Stage 0:>                                                          (0 + 1) / 1]

    The first element in spam_words is You
    The first element in non_spam_words is Rofl.


                                                                                    


```python
tf = HashingTF(numFeatures=200)
```


```python
spam_features = tf.transform(spam_words)
non_spam_features = tf.transform(non_spam_words)
```


```python
# create a HashingTf instance with 200 features
tf = HashingTF(numFeatures=200)

# map each word to one feature
# 총 200개의 단어가 1~200의 index에 mapping되며, index 별로 몇개가 있는지 반환
spam_features = tf.transform(spam_words)
non_spam_features = tf.transform(non_spam_words)

# check
print(spam_features.take(5))
print(non_spam_features.take(5))
```

    [SparseVector(200, {103: 1.0, 111: 1.0, 119: 1.0}), SparseVector(200, {14: 1.0, 89: 1.0, 193: 1.0, 199: 1.0}), SparseVector(200, {82: 1.0}), SparseVector(200, {83: 1.0, 149: 1.0, 193: 1.0}), SparseVector(200, {1: 1.0, 64: 2.0, 89: 1.0, 162: 1.0, 168: 1.0, 193: 2.0})]
    [SparseVector(200, {103: 2.0, 136: 1.0, 162: 2.0}), SparseVector(200, {64: 1.0, 163: 2.0}), SparseVector(200, {104: 1.0, 111: 1.0, 163: 1.0, 193: 1.0}), SparseVector(200, {103: 1.0, 163: 1.0}), SparseVector(200, {64: 1.0, 144: 1.0, 163: 1.0})]


                                                                                    


```python
# label the features: 1 for spam, 0 for non-spam
spam_samples = spam_features.map(lambda features:LabeledPoint(1, features))
non_spam_samples = non_spam_features.map(lambda features:LabeledPoint(0, features))

# check
print(spam_samples.take(5))
print(non_spam_samples.take(5))
```

    [LabeledPoint(1.0, (200,[103,111,119],[1.0,1.0,1.0])), LabeledPoint(1.0, (200,[14,89,193,199],[1.0,1.0,1.0,1.0])), LabeledPoint(1.0, (200,[82],[1.0])), LabeledPoint(1.0, (200,[83,149,193],[1.0,1.0,1.0])), LabeledPoint(1.0, (200,[1,64,89,162,168,193],[1.0,2.0,1.0,1.0,1.0,2.0]))]
    [LabeledPoint(0.0, (200,[103,136,162],[2.0,1.0,2.0])), LabeledPoint(0.0, (200,[64,163],[1.0,2.0])), LabeledPoint(0.0, (200,[104,111,163,193],[1.0,1.0,1.0,1.0])), LabeledPoint(0.0, (200,[103,163],[1.0,1.0])), LabeledPoint(0.0, (200,[64,144,163],[1.0,1.0,1.0]))]



```python
# combine the two datasets
# samples = spam_samples.join(non_spam_samples)
samples = spam_samples.union(non_spam_samples)

# split the data into training and testing
train_samples,test_samples = samples.randomSplit([0.8, 0.2])
```


```python
# Train the model
model = LogisticRegressionWithLBFGS.train(train_samples)

# Create a prediction label from the test data
predictions = model.predict(test_samples.map(lambda x: x.features))

# Combine original labels with the predicted labels
labels_and_preds = test_samples.map(lambda x: x.label).zip(predictions)
```

    22/03/13 13:31:50 WARN Instrumentation: [c9c63204] Initial coefficients will be ignored! Its dimensions (1, 200) did not match the expected size (1, 200)



```python
# Combine original labels with the predicted labels
labels_and_preds = test_samples.map(lambda x: x.label).zip(predictions)

# Check the accuracy of the model on the test data
accuracy = labels_and_preds.filter(lambda x: x[0] == x[1]).count() / float(test_samples.count())
print("Model accuracy : {:.2f}".format(accuracy))
```

    [Stage 152:============================>                            (1 + 1) / 2]

    Model accuracy : 0.82


                                                                                    

---

### Clustering
* Clustering: Unsupervised learning task to organize a collection of data into groups
* PySpark MLlib currently supports the following
    * K-Means
    * Gaussian mixture
    * Power iteration clustering(PIC)
    * Bisecting k-means
    * Streaming k-means


```python
from pyspark.mllib.clustering import KMeans
```


```python
url = 'https://raw.githubusercontent.com/zsu020958/data_base/main/Python/big_data_fundamentals/5000_points.txt'
sc.addFile(url)

# load the data into RDD
clusterRDD = sc.textFile(SparkFiles.get("5000_points.txt"))

# split the RDD based on tab
rdd_split = clusterRDD.map(lambda x: x.split('\t'))

# transform the split RDD by creating a list of integers
rdd_split_int = rdd_split.map(lambda x: [int(x[0]), int(x[1])])

# count the number of rows in RDD 
print("There are {} rows in the rdd_split_int dataset".format(rdd_split_int.count()))
```

    There are 5000 rows in the rdd_split_int dataset



```python
# train the model with clusters from 13 to 16 and compute WSSSE
# Within Set Sum of Squared Error (WSSSE)을 사용해 K-Means가 몇 개일 떄 가장 적합한지(WSSSE가 많이 떨어질 때) 계산
# WSSE 계산 위한 함수
from math import sqrt
def error(point):
    center = model.centers[model.predict(point)]
    return sqrt(sum([x**2 for x in (point-center)]))

# ref: https://bl.ocks.org/rpgove/0060ff3b656618e9136b
for clst in range(13, 17):
    model = KMeans.train(rdd_split_int, clst, seed=1)
    WSSSE = rdd_split_int.map(lambda point: error(point)).reduce(lambda x, y: x + y)
    print("The cluster {} has Within Set Sum of Squared Error {}".format(clst, WSSSE))
```

                                                                                    

    The cluster 13 has Within Set Sum of Squared Error 251787626.51713783


                                                                                    

    The cluster 14 has Within Set Sum of Squared Error 257469943.64057225


                                                                                    

    The cluster 15 has Within Set Sum of Squared Error 215235374.39950493


    [Stage 300:>                                                        (0 + 1) / 1]

    The cluster 16 has Within Set Sum of Squared Error 167785881.85891667


                                                                                    


```python
# train the model again with the best k
model = KMeans.train(rdd_split_int, k=15, seed=1)

# get cluster centers
cluster_centers = model.clusterCenters
```


```python
import matplotlib.pyplot as plt
import pandas as pd

# convert rdd_split_int RDD into Spark DataFrame and then to Pandas DataFrame
rdd_split_int_df_pandas = spark.createDataFrame(rdd_split_int, schema=["col1", "col2"]).toPandas()

# convert cluster_centers to a pandas DataFrame
cluster_centers_pandas = pd.DataFrame(cluster_centers, columns=["col1", "col2"])

# create an overlaid scatter plot of clusters and centroids
plt.scatter(rdd_split_int_df_pandas["col1"], rdd_split_int_df_pandas["col2"])
plt.scatter(cluster_centers_pandas["col1"], cluster_centers_pandas["col2"], color="red", marker="x")
plt.show()
```


    
![png](output_28_0.png)
    

