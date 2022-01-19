---
title: "[NoSQL] Introduction to MongoDB(2)"
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
* `.distinct()` - get unique values
* `$elemMatch` - filter documents that matches all the specified query criteria
* `$regex` - filter documents matching regular expression

---


```python
# connect mongoDB
from pymongo import MongoClient
client = MongoClient(
    username="root",
    password="1234"
)

db = client.nobel
```

---

### .distinct()


```python
# example of prize document
db.prizes.find_one()
```




    {'_id': ObjectId('61e62ed9f373e66efa5b9694'),
     'year': '2021',
     'category': 'chemistry',
     'laureates': [{'id': '1002',
       'firstname': 'Benjamin',
       'surname': 'List',
       'motivation': '"for the development of asymmetric organocatalysis"',
       'share': '2'},
      {'id': '1003',
       'firstname': 'David',
       'surname': 'MacMillan',
       'motivation': '"for the development of asymmetric organocatalysis"',
       'share': '2'}]}




```python
# example of laureates document
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
# check whether category from "prizes" collection and category from "laureates" collection are same
# .distinct() returns a list, therefore using set is recommended for comparison
set(db.prizes.distinct("category")) == set(db.laureates.distinct("prizes.category"))
```




    True




```python
# get country recorded as countries of death but not as countries of birth
set(db.laureates.distinct("diedCountry")) - set(db.laureates.distinct("bornCountry"))
# 위와 같음
# set(db.laureates.distinct("diedCountry")).difference(set(db.laureates.distinct("bornCountry")))
```




    {'Barbados',
     'East Germany (now Germany)',
     'Gabon',
     'Greece',
     'Israel',
     'Jamaica',
     'Northern Rhodesia (now Zambia)',
     'Puerto Rico',
     'Singapore',
     'Tunisia',
     'Yugoslavia (now Serbia)'}




```python
# number of distinct countries of laureate affiliation for prizes
len(db.laureates.distinct("prizes.affiliations.country"))
```




    29




```python
# distinct value에서 조건을 주어 filter도 가능
# countries where USA-born laureates had affiliations for their prizes
db.laureates.distinct(
    "prizes.affiliations.country", {"bornCountry":"USA"}
)
```




    ['Australia', 'Denmark', 'USA', 'United Kingdom']




```python
# filter for prize documents with three or more laureates
criteria = {"laureates.2":{"$exists":True}}

# save set of distinct prize categories satisfying the criteria
triple_play_categories = set(db.prizes.distinct("category", criteria))

# confirm literature as the only category not satisfying the criteria
assert set(db.prizes.distinct("category")) - triple_play_categories == {"literature"}
```

---

### $elemMatch


```python
# one laureate who won a shared prize in physics before 1945.
db.laureates.find_one({
    "prizes": {"$elemMatch": {
        "category": "physics",
        "share": {"$ne": "1"},
        "year": {"$lt": "1945"}}}})
```




    {'_id': ObjectId('61e62ed9f373e66efa5b9927'),
     'id': '2',
     'firstname': 'Hendrik A.',
     'surname': 'Lorentz',
     'born': '1853-07-18',
     'died': '1928-02-04',
     'bornCountry': 'the Netherlands',
     'bornCountryCode': 'NL',
     'bornCity': 'Arnhem',
     'diedCountry': 'the Netherlands',
     'diedCountryCode': 'NL',
     'gender': 'male',
     'prizes': [{'year': '1902',
       'category': 'physics',
       'share': '2',
       'motivation': '"in recognition of the extraordinary service they rendered by their researches into the influence of magnetism upon radiation phenomena"',
       'affiliations': [{'name': 'Leiden University',
         'city': 'Leiden',
         'country': 'the Netherlands'}]}]}




```python
# Save a filter for laureates matching 3 criteria
# 1) won a prize excluding physics and chemistry and medicine
# 2) won a unshared prize
# 3) awared after or equals to 1945
unshared = {
    "prizes": {"$elemMatch": {
        "category": {"$nin": ["physics", "chemistry", "medicine"]},
        "share": "1",
        "year": {"$gte": "1945"},
    }}}

# Save a filter for laureates matching 3 criteria
# 1) won a prize excluding physics and chemistry and medicine
# 2) won a shared prize
# 3) awared after or equals to 1945
shared = {
    "prizes": {"$elemMatch": {
        "category": {"$nin": ["physics", "chemistry", "medicine"]},
        "share": {"$ne": "1"},
        "year": {"$gte": "1945"},
    }}}

# ratio of unsahred / shared
db.laureates.count_documents(unshared) / db.laureates.count_documents(shared)
```




    1.2982456140350878



---

### \$regex
* $options
    * i - insensitive


```python
from bson.regex import Regex

# number of laureates with a first name beginning with "G" and a surname beginning with "S"
db.laureates.count_documents({"firstname": {"$regex": "^G", "$options": "i"}, "surname":{"$regex":"^S", "$options": "i"}})

# 위와 같음
# db.laureates.count_documents({"firstname": Regex("^G", "i"), "surname": Regex("^S", "i")})
```




    10




```python
# laureates born in what was at the time Germany but is now another country
criteria = {"bornCountry": Regex("^Germany " + "\(" + "now")}
db.laureates.distinct("bornCountry", criteria)
```




    ['Germany (now France)', 'Germany (now Poland)', 'Germany (now Russia)']




```python
# laureates born in what is now Germany but at the time was another country
criteria = {"bornCountry": Regex("now" + " Germany\)" + "$")}
print(set(db.laureates.distinct("bornCountry", criteria)))
```

    {'East Friesland (now Germany)', 'Prussia (now Germany)', 'Württemberg (now Germany)', 'Bavaria (now Germany)', 'Mecklenburg (now Germany)', 'Hesse-Kassel (now Germany)', 'Schleswig (now Germany)', 'West Germany (now Germany)'}



```python
from bson.regex import Regex

# criteria for laureates with prize motivation values containing "transistor" as a substring
criteria = {"prizes.motivation": Regex("transistor")}

# Save the field names corresponding to a laureate's first name and last(sur) name as a list
[(laureate["firstname"], laureate["surname"]) for laureate in db.laureates.find(criteria)]
```




    [('William B.', 'Shockley'), ('John', 'Bardeen'), ('Walter H.', 'Brattain')]


