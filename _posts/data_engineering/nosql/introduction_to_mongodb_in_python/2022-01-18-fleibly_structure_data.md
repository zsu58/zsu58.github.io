---
title: "[NoSQL] Introduction to MongoDB(1)"
layout: single
date: '18/1/2022'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - NOSQL
tags:
  - SQL
  - MONGODB
---

---
### MongoDB
* Mongoclient.my_database.my_collection - access database & collection
* `.count_documents()` - count documents in collection
* `.list_database_names()` & `.list_collection_names()` - list database/collection names 
* `.find_one()` - retrieve a single document
* `.keys()` - return keys(field names)
* `{[criteria]}` - filter data
* Substructure - reach substructure using dot(`.`)

---


```python
import sys
# install pymongo
!conda install --yes --prefix {sys.prefix} pymongo
```


```python
#dataset

import requests
from pymongo import MongoClient

# Connecting to MognoDB (default connection is "localhost")
client = MongoClient(
    username="root",
    password="1234"
)
# Crate "nobel" local database
db = client["nobel"]

# create collection & insert data
for collection_name in ["prizes", "laureates"]:
    # collect data from API
    response = requests.get("http://api.nobelprize.org/v1/{}.json".format(collection_name[:-1]))
    # convert the data to json
    documents = response.json()[collection_name]
    # Insert documents into collection
    db[collection_name].insert_many(documents)
```


```python
# connect mongoDB
from pymongo import MongoClient
client = MongoClient(
    username="root",
    password="1234"
)
```

---

### .count_documents()
* always need filter


```python
filter = {}
print(client.nobel.prizes.count_documents(filter))
print(client.nobel.laureates.count_documents(filter))
```

    658
    968


---

### .list_database_names() & .list_collection_names()


```python
print(client.list_database_names())
print(client.nobel.list_collection_names())
```

    ['admin', 'config', 'local', 'nobel', 'testDB']
    ['prizes', 'laureates']


---

### .find_one() & .keys()
* convenient to use when keys are saved as a list


```python
db = client.nobel
prize = db.prizes.find_one()
print(prize)
prize_fields = list(prize.keys())
print(prize_fields)
```

    {'_id': ObjectId('61e62ed9f373e66efa5b9694'), 'year': '2021', 'category': 'chemistry', 'laureates': [{'id': '1002', 'firstname': 'Benjamin', 'surname': 'List', 'motivation': '"for the development of asymmetric organocatalysis"', 'share': '2'}, {'id': '1003', 'firstname': 'David', 'surname': 'MacMillan', 'motivation': '"for the development of asymmetric organocatalysis"', 'share': '2'}]}
    ['_id', 'year', 'category', 'laureates']


---

### {}
* filter data
    * `$in`
    * `$ne` - not equal to
    * `$exists`


```python
# filter criterion for Germany-born laureates who died in the USA and with the first name "Albert"
criteria = {"diedCountry": "USA", 
            "bornCountry": "Germany",
            "firstname": "Albert"}
# result
db.laureates.count_documents(criteria)
```




    1




```python
# filter criterion for laureates born in the USA, Canada, or Mexico
criteria = { "bornCountry": 
                { "$in": ["Canada", "Mexico", "USA"]}
             }
# result
db.laureates.count_documents(criteria)
```




    305




```python
# filter criterion for laureates who died in the USA and were not born there
criteria = { "diedCountry": "USA",
               "bornCountry": { "$ne": "USA"}, 
             }
# result
db.laureates.count_documents(criteria)
```




    73




```python
# filter for documents without a "born" field
criteria = {"born": {"$exists": False}}

# result
db.laureates.count_documents(criteria)
```




    2



---

### Substructure
* can reach substructure using dot(.)


```python
# one example of document
db.laureates.find_one()
```




    {'_id': ObjectId('61e62ed9f373e66efa5b9926'),
     'id': '1',
     'firstname': 'Wilhelm Conrad',
     'surname': 'Röntgen',
     'born': '1845-03-27',
     'died': '1923-02-10',
     'bornCountry': 'Prussia (now Germany)',
     'bornCountryCode': 'DE',
     'bornCity': 'Lennep (now Remscheid)',
     'diedCountry': 'Germany',
     'diedCountryCode': 'DE',
     'diedCity': 'Munich',
     'gender': 'male',
     'prizes': [{'year': '1901',
       'category': 'physics',
       'share': '1',
       'motivation': '"in recognition of the extraordinary services he has rendered by the discovery of the remarkable rays subsequently named after him"',
       'affiliations': [{'name': 'Munich University',
         'city': 'Munich',
         'country': 'Germany'}]}]}




```python
# Filter laureates born in Austria with non-Austria prize affiliation
criteria = {"bornCountry": "Austria", 
            "prizes.affiliations.country": {"$ne": "Austria"}}
# result
db.laureates.count_documents(criteria)
```




    11




```python
# filter for laureates with at least 3 elements in "prizes" array
# javascript 처럼 array.[number]로 array 내의 값을 가져올 수 있음
criteria = {"prizes.2": {"$exists": True}}

# result
db.laureates.count_documents(criteria)
```




    1


