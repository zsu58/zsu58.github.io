---
title: "[NoSQL] Introduction to MongoDB(3)"
layout: single
date: '19/01/2022'
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
* Projection
* Sort
* Index

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

### Projection


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
# filter, and select firstname & surname
docs = db.laureates.find(
       filter= {"firstname" : {"$regex" : "^G"},
                "surname" : {"$regex" : "^S"}  },
   projection= ["firstname", "surname"]  )

# Iterate over docs and concatenate first name and surname
full_names = [doc["firstname"] + " " + doc["surname"]  for doc in docs]

# result
full_names
```




    ['Glenn T. Seaborg',
     'George D. Snell',
     'Gustav Stresemann',
     'George Bernard Shaw',
     'Giorgos Seferis',
     'George J. Stigler',
     'George F. Smoot',
     'George E. Smith',
     'George P. Smith',
     'Gregg Semenza']




```python
# Save documents, projecting out laureates share from prizes including laureates 
prizes = db.prizes.find({"laureates.0":{"$exists":True}}, ["laureates.share"])

shares = []
# Iterate over every prize
for prize in prizes:
    # Initialize total share
    total_share = 0
    n+=1
    
    # Iterate over laureates in every prize
    for laureate in prize["laureates"]:
        # add the share of the laureate to total_share
        total_share += 1 / float(laureate["share"])
    # add the total share to shares
    shares.append(total_share)

# result(every element should be 1)
print(sum(shares))
```

    609.0


### Sort
* 1) python의 `sorted`를 통해 가능
    * 이때 itemgetter를 통해 key의 value 가져 옴
* 2) find 함수 안에서 `sort`를 통해 가능


```python
from operator import itemgetter

def all_laureates(prize):  
  # sort the laureates by surname
  sorted_laureates = sorted(prize["laureates"], key=itemgetter("surname"))
  
  # extract surnames
  surnames = [laureate["surname"] for laureate in sorted_laureates]
  
  # concatenate surnames separated with " and " 
  all_names = " and ".join(surnames)
  
  return all_names

# filter physics prizes where laureates exists, project year and name, and sort by year
docs = db.prizes.find(
           filter= {"$and": [{"laureates.0":{"$exists":True}}, {"category": "physics"}]}, 
           projection= ["year", "laureates.firstname", "laureates.surname"], 
           sort= [("year", 1)])

# print the year and laureate names (from all_laureates)
for doc in docs:
  print("{year}: {names}".format(year=doc["year"], names=all_laureates(doc)))
```

    1901: Röntgen
    1902: Lorentz and Zeeman
    1903: Becquerel and Curie and Curie
    1904: Rayleigh
    1905: Lenard
    1906: Thomson
    1907: Michelson
    1908: Lippmann
    1909: Braun and Marconi
    1910: van der Waals
    1911: Wien
    1912: Dalén
    1913: Kamerlingh Onnes
    1914: von Laue
    1915: Bragg and Bragg
    1917: Barkla
    1918: Planck
    1919: Stark
    1920: Guillaume
    1921: Einstein
    1922: Bohr
    1923: Millikan
    1924: Siegbahn
    1925: Franck and Hertz
    1926: Perrin
    1927: Compton and Wilson
    1928: Richardson
    1929: de Broglie
    1930: Raman
    1932: Heisenberg
    1933: Dirac and Schrödinger
    1935: Chadwick
    1936: Anderson and Hess
    1937: Davisson and Thomson
    1938: Fermi
    1939: Lawrence
    1943: Stern
    1944: Rabi
    1945: Pauli
    1946: Bridgman
    1947: Appleton
    1948: Blackett
    1949: Yukawa
    1950: Powell
    1951: Cockcroft and Walton
    1952: Bloch and Purcell
    1953: Zernike
    1954: Born and Bothe
    1955: Kusch and Lamb
    1956: Bardeen and Brattain and Shockley
    1957: Lee and Yang
    1958: Cherenkov and Frank and Tamm
    1959: Chamberlain and Segrè
    1960: Glaser
    1961: Hofstadter and Mössbauer
    1962: Landau
    1963: Goeppert Mayer and Jensen and Wigner
    1964: Basov and Prokhorov and Townes
    1965: Feynman and Schwinger and Tomonaga
    1966: Kastler
    1967: Bethe
    1968: Alvarez
    1969: Gell-Mann
    1970: Alfvén and Néel
    1971: Gabor
    1972: Bardeen and Cooper and Schrieffer
    1973: Esaki and Giaever and Josephson
    1974: Hewish and Ryle
    1975: Bohr and Mottelson and Rainwater
    1976: Richter and Ting
    1977: Anderson and Mott and Van Vleck
    1978: Kapitsa and Penzias and Wilson
    1979: Glashow and Salam and Weinberg
    1980: Cronin and Fitch
    1981: Bloembergen and Schawlow and Siegbahn
    1982: Wilson
    1983: Chandrasekhar and Fowler
    1984: Rubbia and van der Meer
    1985: von Klitzing
    1986: Binnig and Rohrer and Ruska
    1987: Bednorz and Müller
    1988: Lederman and Schwartz and Steinberger
    1989: Dehmelt and Paul and Ramsey
    1990: Friedman and Kendall and Taylor
    1991: de Gennes
    1992: Charpak
    1993: Hulse and Taylor Jr.
    1994: Brockhouse and Shull
    1995: Perl and Reines
    1996: Lee and Osheroff and Richardson
    1997: Chu and Cohen-Tannoudji and Phillips
    1998: Laughlin and Störmer and Tsui
    1999: 't Hooft and Veltman
    2000: Alferov and Kilby and Kroemer
    2001: Cornell and Ketterle and Wieman
    2002: Davis Jr. and Giacconi and Koshiba
    2003: Abrikosov and Ginzburg and Leggett
    2004: Gross and Politzer and Wilczek
    2005: Glauber and Hall and Hänsch
    2006: Mather and Smoot
    2007: Fert and Grünberg
    2008: Kobayashi and Maskawa and Nambu
    2009: Boyle and Kao and Smith
    2010: Geim and Novoselov
    2011: Perlmutter and Riess and Schmidt
    2012: Haroche and Wineland
    2013: Englert and Higgs
    2014: Akasaki and Amano and Nakamura
    2015: Kajita and McDonald
    2016: Haldane and Kosterlitz and Thouless
    2017: Barish and Thorne and Weiss
    2018: Ashkin and Mourou and Strickland
    2019: Mayor and Peebles and Queloz
    2020: Genzel and Ghez and Penrose
    2021: Hasselmann and Manabe and Parisi



```python
# project year and category, sort year in descending order, then by category in ascending order
docs = db.prizes.find(
        filter={},
        projection={"year":1, "category":1, "_id":0},
        sort=[("year", -1), ("category", 1)]
)

# result
for doc in docs:
  print(doc)
```

    {'year': '2021', 'category': 'chemistry'}
    {'year': '2021', 'category': 'economics'}
    {'year': '2021', 'category': 'literature'}
    {'year': '2021', 'category': 'medicine'}
    {'year': '2021', 'category': 'peace'}
    {'year': '2021', 'category': 'physics'}
    {'year': '2020', 'category': 'chemistry'}
    {'year': '2020', 'category': 'economics'}
    {'year': '2020', 'category': 'literature'}
    {'year': '2020', 'category': 'medicine'}
    {'year': '2020', 'category': 'peace'}
    {'year': '2020', 'category': 'physics'}
    {'year': '2019', 'category': 'chemistry'}
    {'year': '2019', 'category': 'economics'}
    {'year': '2019', 'category': 'literature'}
    {'year': '2019', 'category': 'medicine'}
    {'year': '2019', 'category': 'peace'}
    {'year': '2019', 'category': 'physics'}
    {'year': '2018', 'category': 'chemistry'}
    {'year': '2018', 'category': 'economics'}
    {'year': '2018', 'category': 'literature'}
    {'year': '2018', 'category': 'medicine'}
    {'year': '2018', 'category': 'peace'}
    {'year': '2018', 'category': 'physics'}
    {'year': '2017', 'category': 'chemistry'}
    {'year': '2017', 'category': 'economics'}
    {'year': '2017', 'category': 'literature'}
    {'year': '2017', 'category': 'medicine'}
    {'year': '2017', 'category': 'peace'}
    {'year': '2017', 'category': 'physics'}
    {'year': '2016', 'category': 'chemistry'}
    {'year': '2016', 'category': 'economics'}
    {'year': '2016', 'category': 'literature'}
    {'year': '2016', 'category': 'medicine'}
    {'year': '2016', 'category': 'peace'}
    {'year': '2016', 'category': 'physics'}
    {'year': '2015', 'category': 'chemistry'}
    {'year': '2015', 'category': 'economics'}
    {'year': '2015', 'category': 'literature'}
    {'year': '2015', 'category': 'medicine'}
    {'year': '2015', 'category': 'peace'}
    {'year': '2015', 'category': 'physics'}
    {'year': '2014', 'category': 'chemistry'}
    {'year': '2014', 'category': 'economics'}
    {'year': '2014', 'category': 'literature'}
    {'year': '2014', 'category': 'medicine'}
    {'year': '2014', 'category': 'peace'}
    {'year': '2014', 'category': 'physics'}
    {'year': '2013', 'category': 'chemistry'}
    {'year': '2013', 'category': 'economics'}
    {'year': '2013', 'category': 'literature'}
    {'year': '2013', 'category': 'medicine'}
    {'year': '2013', 'category': 'peace'}
    {'year': '2013', 'category': 'physics'}
    {'year': '2012', 'category': 'chemistry'}
    {'year': '2012', 'category': 'economics'}
    {'year': '2012', 'category': 'literature'}
    {'year': '2012', 'category': 'medicine'}
    {'year': '2012', 'category': 'peace'}
    {'year': '2012', 'category': 'physics'}
    {'year': '2011', 'category': 'chemistry'}
    {'year': '2011', 'category': 'economics'}
    {'year': '2011', 'category': 'literature'}
    {'year': '2011', 'category': 'medicine'}
    {'year': '2011', 'category': 'peace'}
    {'year': '2011', 'category': 'physics'}
    {'year': '2010', 'category': 'chemistry'}
    {'year': '2010', 'category': 'economics'}
    {'year': '2010', 'category': 'literature'}
    {'year': '2010', 'category': 'medicine'}
    {'year': '2010', 'category': 'peace'}
    {'year': '2010', 'category': 'physics'}
    {'year': '2009', 'category': 'chemistry'}
    {'year': '2009', 'category': 'economics'}
    {'year': '2009', 'category': 'literature'}
    {'year': '2009', 'category': 'medicine'}
    {'year': '2009', 'category': 'peace'}
    {'year': '2009', 'category': 'physics'}
    {'year': '2008', 'category': 'chemistry'}
    {'year': '2008', 'category': 'economics'}
    {'year': '2008', 'category': 'literature'}
    {'year': '2008', 'category': 'medicine'}
    {'year': '2008', 'category': 'peace'}
    {'year': '2008', 'category': 'physics'}
    {'year': '2007', 'category': 'chemistry'}
    {'year': '2007', 'category': 'economics'}
    {'year': '2007', 'category': 'literature'}
    {'year': '2007', 'category': 'medicine'}
    {'year': '2007', 'category': 'peace'}
    {'year': '2007', 'category': 'physics'}
    {'year': '2006', 'category': 'chemistry'}
    {'year': '2006', 'category': 'economics'}
    {'year': '2006', 'category': 'literature'}
    {'year': '2006', 'category': 'medicine'}
    {'year': '2006', 'category': 'peace'}
    {'year': '2006', 'category': 'physics'}
    {'year': '2005', 'category': 'chemistry'}
    {'year': '2005', 'category': 'economics'}
    {'year': '2005', 'category': 'literature'}
    {'year': '2005', 'category': 'medicine'}
    {'year': '2005', 'category': 'peace'}
    {'year': '2005', 'category': 'physics'}
    {'year': '2004', 'category': 'chemistry'}
    {'year': '2004', 'category': 'economics'}
    {'year': '2004', 'category': 'literature'}
    {'year': '2004', 'category': 'medicine'}
    {'year': '2004', 'category': 'peace'}
    {'year': '2004', 'category': 'physics'}
    {'year': '2003', 'category': 'chemistry'}
    {'year': '2003', 'category': 'economics'}
    {'year': '2003', 'category': 'literature'}
    {'year': '2003', 'category': 'medicine'}
    {'year': '2003', 'category': 'peace'}
    {'year': '2003', 'category': 'physics'}
    {'year': '2002', 'category': 'chemistry'}
    {'year': '2002', 'category': 'economics'}
    {'year': '2002', 'category': 'literature'}
    {'year': '2002', 'category': 'medicine'}
    {'year': '2002', 'category': 'peace'}
    {'year': '2002', 'category': 'physics'}
    {'year': '2001', 'category': 'chemistry'}
    {'year': '2001', 'category': 'economics'}
    {'year': '2001', 'category': 'literature'}
    {'year': '2001', 'category': 'medicine'}
    {'year': '2001', 'category': 'peace'}
    {'year': '2001', 'category': 'physics'}
    {'year': '2000', 'category': 'chemistry'}
    {'year': '2000', 'category': 'economics'}
    {'year': '2000', 'category': 'literature'}
    {'year': '2000', 'category': 'medicine'}
    {'year': '2000', 'category': 'peace'}
    {'year': '2000', 'category': 'physics'}
    {'year': '1999', 'category': 'chemistry'}
    {'year': '1999', 'category': 'economics'}
    {'year': '1999', 'category': 'literature'}
    {'year': '1999', 'category': 'medicine'}
    {'year': '1999', 'category': 'peace'}
    {'year': '1999', 'category': 'physics'}
    {'year': '1998', 'category': 'chemistry'}
    {'year': '1998', 'category': 'economics'}
    {'year': '1998', 'category': 'literature'}
    {'year': '1998', 'category': 'medicine'}
    {'year': '1998', 'category': 'peace'}
    {'year': '1998', 'category': 'physics'}
    {'year': '1997', 'category': 'chemistry'}
    {'year': '1997', 'category': 'economics'}
    {'year': '1997', 'category': 'literature'}
    {'year': '1997', 'category': 'medicine'}
    {'year': '1997', 'category': 'peace'}
    {'year': '1997', 'category': 'physics'}
    {'year': '1996', 'category': 'chemistry'}
    {'year': '1996', 'category': 'economics'}
    {'year': '1996', 'category': 'literature'}
    {'year': '1996', 'category': 'medicine'}
    {'year': '1996', 'category': 'peace'}
    {'year': '1996', 'category': 'physics'}
    {'year': '1995', 'category': 'chemistry'}
    {'year': '1995', 'category': 'economics'}
    {'year': '1995', 'category': 'literature'}
    {'year': '1995', 'category': 'medicine'}
    {'year': '1995', 'category': 'peace'}
    {'year': '1995', 'category': 'physics'}
    {'year': '1994', 'category': 'chemistry'}
    {'year': '1994', 'category': 'economics'}
    {'year': '1994', 'category': 'literature'}
    {'year': '1994', 'category': 'medicine'}
    {'year': '1994', 'category': 'peace'}
    {'year': '1994', 'category': 'physics'}
    {'year': '1993', 'category': 'chemistry'}
    {'year': '1993', 'category': 'economics'}
    {'year': '1993', 'category': 'literature'}
    {'year': '1993', 'category': 'medicine'}
    {'year': '1993', 'category': 'peace'}
    {'year': '1993', 'category': 'physics'}
    {'year': '1992', 'category': 'chemistry'}
    {'year': '1992', 'category': 'economics'}
    {'year': '1992', 'category': 'literature'}
    {'year': '1992', 'category': 'medicine'}
    {'year': '1992', 'category': 'peace'}
    {'year': '1992', 'category': 'physics'}
    {'year': '1991', 'category': 'chemistry'}
    {'year': '1991', 'category': 'economics'}
    {'year': '1991', 'category': 'literature'}
    {'year': '1991', 'category': 'medicine'}
    {'year': '1991', 'category': 'peace'}
    {'year': '1991', 'category': 'physics'}
    {'year': '1990', 'category': 'chemistry'}
    {'year': '1990', 'category': 'economics'}
    {'year': '1990', 'category': 'literature'}
    {'year': '1990', 'category': 'medicine'}
    {'year': '1990', 'category': 'peace'}
    {'year': '1990', 'category': 'physics'}
    {'year': '1989', 'category': 'chemistry'}
    {'year': '1989', 'category': 'economics'}
    {'year': '1989', 'category': 'literature'}
    {'year': '1989', 'category': 'medicine'}
    {'year': '1989', 'category': 'peace'}
    {'year': '1989', 'category': 'physics'}
    {'year': '1988', 'category': 'chemistry'}
    {'year': '1988', 'category': 'economics'}
    {'year': '1988', 'category': 'literature'}
    {'year': '1988', 'category': 'medicine'}
    {'year': '1988', 'category': 'peace'}
    {'year': '1988', 'category': 'physics'}
    {'year': '1987', 'category': 'chemistry'}
    {'year': '1987', 'category': 'economics'}
    {'year': '1987', 'category': 'literature'}
    {'year': '1987', 'category': 'medicine'}
    {'year': '1987', 'category': 'peace'}
    {'year': '1987', 'category': 'physics'}
    {'year': '1986', 'category': 'chemistry'}
    {'year': '1986', 'category': 'economics'}
    {'year': '1986', 'category': 'literature'}
    {'year': '1986', 'category': 'medicine'}
    {'year': '1986', 'category': 'peace'}
    {'year': '1986', 'category': 'physics'}
    {'year': '1985', 'category': 'chemistry'}
    {'year': '1985', 'category': 'economics'}
    {'year': '1985', 'category': 'literature'}
    {'year': '1985', 'category': 'medicine'}
    {'year': '1985', 'category': 'peace'}
    {'year': '1985', 'category': 'physics'}
    {'year': '1984', 'category': 'chemistry'}
    {'year': '1984', 'category': 'economics'}
    {'year': '1984', 'category': 'literature'}
    {'year': '1984', 'category': 'medicine'}
    {'year': '1984', 'category': 'peace'}
    {'year': '1984', 'category': 'physics'}
    {'year': '1983', 'category': 'chemistry'}
    {'year': '1983', 'category': 'economics'}
    {'year': '1983', 'category': 'literature'}
    {'year': '1983', 'category': 'medicine'}
    {'year': '1983', 'category': 'peace'}
    {'year': '1983', 'category': 'physics'}
    {'year': '1982', 'category': 'chemistry'}
    {'year': '1982', 'category': 'economics'}
    {'year': '1982', 'category': 'literature'}
    {'year': '1982', 'category': 'medicine'}
    {'year': '1982', 'category': 'peace'}
    {'year': '1982', 'category': 'physics'}
    {'year': '1981', 'category': 'chemistry'}
    {'year': '1981', 'category': 'economics'}
    {'year': '1981', 'category': 'literature'}
    {'year': '1981', 'category': 'medicine'}
    {'year': '1981', 'category': 'peace'}
    {'year': '1981', 'category': 'physics'}
    {'year': '1980', 'category': 'chemistry'}
    {'year': '1980', 'category': 'economics'}
    {'year': '1980', 'category': 'literature'}
    {'year': '1980', 'category': 'medicine'}
    {'year': '1980', 'category': 'peace'}
    {'year': '1980', 'category': 'physics'}
    {'year': '1979', 'category': 'chemistry'}
    {'year': '1979', 'category': 'economics'}
    {'year': '1979', 'category': 'literature'}
    {'year': '1979', 'category': 'medicine'}
    {'year': '1979', 'category': 'peace'}
    {'year': '1979', 'category': 'physics'}
    {'year': '1978', 'category': 'chemistry'}
    {'year': '1978', 'category': 'economics'}
    {'year': '1978', 'category': 'literature'}
    {'year': '1978', 'category': 'medicine'}
    {'year': '1978', 'category': 'peace'}
    {'year': '1978', 'category': 'physics'}
    {'year': '1977', 'category': 'chemistry'}
    {'year': '1977', 'category': 'economics'}
    {'year': '1977', 'category': 'literature'}
    {'year': '1977', 'category': 'medicine'}
    {'year': '1977', 'category': 'peace'}
    {'year': '1977', 'category': 'physics'}
    {'year': '1976', 'category': 'chemistry'}
    {'year': '1976', 'category': 'economics'}
    {'year': '1976', 'category': 'literature'}
    {'year': '1976', 'category': 'medicine'}
    {'year': '1976', 'category': 'peace'}
    {'year': '1976', 'category': 'physics'}
    {'year': '1975', 'category': 'chemistry'}
    {'year': '1975', 'category': 'economics'}
    {'year': '1975', 'category': 'literature'}
    {'year': '1975', 'category': 'medicine'}
    {'year': '1975', 'category': 'peace'}
    {'year': '1975', 'category': 'physics'}
    {'year': '1974', 'category': 'chemistry'}
    {'year': '1974', 'category': 'economics'}
    {'year': '1974', 'category': 'literature'}
    {'year': '1974', 'category': 'medicine'}
    {'year': '1974', 'category': 'peace'}
    {'year': '1974', 'category': 'physics'}
    {'year': '1973', 'category': 'chemistry'}
    {'year': '1973', 'category': 'economics'}
    {'year': '1973', 'category': 'literature'}
    {'year': '1973', 'category': 'medicine'}
    {'year': '1973', 'category': 'peace'}
    {'year': '1973', 'category': 'physics'}
    {'year': '1972', 'category': 'chemistry'}
    {'year': '1972', 'category': 'economics'}
    {'year': '1972', 'category': 'literature'}
    {'year': '1972', 'category': 'medicine'}
    {'year': '1972', 'category': 'peace'}
    {'year': '1972', 'category': 'physics'}
    {'year': '1971', 'category': 'chemistry'}
    {'year': '1971', 'category': 'economics'}
    {'year': '1971', 'category': 'literature'}
    {'year': '1971', 'category': 'medicine'}
    {'year': '1971', 'category': 'peace'}
    {'year': '1971', 'category': 'physics'}
    {'year': '1970', 'category': 'chemistry'}
    {'year': '1970', 'category': 'economics'}
    {'year': '1970', 'category': 'literature'}
    {'year': '1970', 'category': 'medicine'}
    {'year': '1970', 'category': 'peace'}
    {'year': '1970', 'category': 'physics'}
    {'year': '1969', 'category': 'chemistry'}
    {'year': '1969', 'category': 'economics'}
    {'year': '1969', 'category': 'literature'}
    {'year': '1969', 'category': 'medicine'}
    {'year': '1969', 'category': 'peace'}
    {'year': '1969', 'category': 'physics'}
    {'year': '1968', 'category': 'chemistry'}
    {'year': '1968', 'category': 'literature'}
    {'year': '1968', 'category': 'medicine'}
    {'year': '1968', 'category': 'peace'}
    {'year': '1968', 'category': 'physics'}
    {'year': '1967', 'category': 'chemistry'}
    {'year': '1967', 'category': 'literature'}
    {'year': '1967', 'category': 'medicine'}
    {'year': '1967', 'category': 'peace'}
    {'year': '1967', 'category': 'physics'}
    {'year': '1966', 'category': 'chemistry'}
    {'year': '1966', 'category': 'literature'}
    {'year': '1966', 'category': 'medicine'}
    {'year': '1966', 'category': 'peace'}
    {'year': '1966', 'category': 'physics'}
    {'year': '1965', 'category': 'chemistry'}
    {'year': '1965', 'category': 'literature'}
    {'year': '1965', 'category': 'medicine'}
    {'year': '1965', 'category': 'peace'}
    {'year': '1965', 'category': 'physics'}
    {'year': '1964', 'category': 'chemistry'}
    {'year': '1964', 'category': 'literature'}
    {'year': '1964', 'category': 'medicine'}
    {'year': '1964', 'category': 'peace'}
    {'year': '1964', 'category': 'physics'}
    {'year': '1963', 'category': 'chemistry'}
    {'year': '1963', 'category': 'literature'}
    {'year': '1963', 'category': 'medicine'}
    {'year': '1963', 'category': 'peace'}
    {'year': '1963', 'category': 'physics'}
    {'year': '1962', 'category': 'chemistry'}
    {'year': '1962', 'category': 'literature'}
    {'year': '1962', 'category': 'medicine'}
    {'year': '1962', 'category': 'peace'}
    {'year': '1962', 'category': 'physics'}
    {'year': '1961', 'category': 'chemistry'}
    {'year': '1961', 'category': 'literature'}
    {'year': '1961', 'category': 'medicine'}
    {'year': '1961', 'category': 'peace'}
    {'year': '1961', 'category': 'physics'}
    {'year': '1960', 'category': 'chemistry'}
    {'year': '1960', 'category': 'literature'}
    {'year': '1960', 'category': 'medicine'}
    {'year': '1960', 'category': 'peace'}
    {'year': '1960', 'category': 'physics'}
    {'year': '1959', 'category': 'chemistry'}
    {'year': '1959', 'category': 'literature'}
    {'year': '1959', 'category': 'medicine'}
    {'year': '1959', 'category': 'peace'}
    {'year': '1959', 'category': 'physics'}
    {'year': '1958', 'category': 'chemistry'}
    {'year': '1958', 'category': 'literature'}
    {'year': '1958', 'category': 'medicine'}
    {'year': '1958', 'category': 'peace'}
    {'year': '1958', 'category': 'physics'}
    {'year': '1957', 'category': 'chemistry'}
    {'year': '1957', 'category': 'literature'}
    {'year': '1957', 'category': 'medicine'}
    {'year': '1957', 'category': 'peace'}
    {'year': '1957', 'category': 'physics'}
    {'year': '1956', 'category': 'chemistry'}
    {'year': '1956', 'category': 'literature'}
    {'year': '1956', 'category': 'medicine'}
    {'year': '1956', 'category': 'peace'}
    {'year': '1956', 'category': 'physics'}
    {'year': '1955', 'category': 'chemistry'}
    {'year': '1955', 'category': 'literature'}
    {'year': '1955', 'category': 'medicine'}
    {'year': '1955', 'category': 'peace'}
    {'year': '1955', 'category': 'physics'}
    {'year': '1954', 'category': 'chemistry'}
    {'year': '1954', 'category': 'literature'}
    {'year': '1954', 'category': 'medicine'}
    {'year': '1954', 'category': 'peace'}
    {'year': '1954', 'category': 'physics'}
    {'year': '1953', 'category': 'chemistry'}
    {'year': '1953', 'category': 'literature'}
    {'year': '1953', 'category': 'medicine'}
    {'year': '1953', 'category': 'peace'}
    {'year': '1953', 'category': 'physics'}
    {'year': '1952', 'category': 'chemistry'}
    {'year': '1952', 'category': 'literature'}
    {'year': '1952', 'category': 'medicine'}
    {'year': '1952', 'category': 'peace'}
    {'year': '1952', 'category': 'physics'}
    {'year': '1951', 'category': 'chemistry'}
    {'year': '1951', 'category': 'literature'}
    {'year': '1951', 'category': 'medicine'}
    {'year': '1951', 'category': 'peace'}
    {'year': '1951', 'category': 'physics'}
    {'year': '1950', 'category': 'chemistry'}
    {'year': '1950', 'category': 'literature'}
    {'year': '1950', 'category': 'medicine'}
    {'year': '1950', 'category': 'peace'}
    {'year': '1950', 'category': 'physics'}
    {'year': '1949', 'category': 'chemistry'}
    {'year': '1949', 'category': 'literature'}
    {'year': '1949', 'category': 'medicine'}
    {'year': '1949', 'category': 'peace'}
    {'year': '1949', 'category': 'physics'}
    {'year': '1948', 'category': 'chemistry'}
    {'year': '1948', 'category': 'literature'}
    {'year': '1948', 'category': 'medicine'}
    {'year': '1948', 'category': 'peace'}
    {'year': '1948', 'category': 'physics'}
    {'year': '1947', 'category': 'chemistry'}
    {'year': '1947', 'category': 'literature'}
    {'year': '1947', 'category': 'medicine'}
    {'year': '1947', 'category': 'peace'}
    {'year': '1947', 'category': 'physics'}
    {'year': '1946', 'category': 'chemistry'}
    {'year': '1946', 'category': 'literature'}
    {'year': '1946', 'category': 'medicine'}
    {'year': '1946', 'category': 'peace'}
    {'year': '1946', 'category': 'physics'}
    {'year': '1945', 'category': 'chemistry'}
    {'year': '1945', 'category': 'literature'}
    {'year': '1945', 'category': 'medicine'}
    {'year': '1945', 'category': 'peace'}
    {'year': '1945', 'category': 'physics'}
    {'year': '1944', 'category': 'chemistry'}
    {'year': '1944', 'category': 'literature'}
    {'year': '1944', 'category': 'medicine'}
    {'year': '1944', 'category': 'peace'}
    {'year': '1944', 'category': 'physics'}
    {'year': '1943', 'category': 'chemistry'}
    {'year': '1943', 'category': 'literature'}
    {'year': '1943', 'category': 'medicine'}
    {'year': '1943', 'category': 'peace'}
    {'year': '1943', 'category': 'physics'}
    {'year': '1942', 'category': 'chemistry'}
    {'year': '1942', 'category': 'literature'}
    {'year': '1942', 'category': 'medicine'}
    {'year': '1942', 'category': 'peace'}
    {'year': '1942', 'category': 'physics'}
    {'year': '1941', 'category': 'chemistry'}
    {'year': '1941', 'category': 'literature'}
    {'year': '1941', 'category': 'medicine'}
    {'year': '1941', 'category': 'peace'}
    {'year': '1941', 'category': 'physics'}
    {'year': '1940', 'category': 'chemistry'}
    {'year': '1940', 'category': 'literature'}
    {'year': '1940', 'category': 'medicine'}
    {'year': '1940', 'category': 'peace'}
    {'year': '1940', 'category': 'physics'}
    {'year': '1939', 'category': 'chemistry'}
    {'year': '1939', 'category': 'literature'}
    {'year': '1939', 'category': 'medicine'}
    {'year': '1939', 'category': 'peace'}
    {'year': '1939', 'category': 'physics'}
    {'year': '1938', 'category': 'chemistry'}
    {'year': '1938', 'category': 'literature'}
    {'year': '1938', 'category': 'medicine'}
    {'year': '1938', 'category': 'peace'}
    {'year': '1938', 'category': 'physics'}
    {'year': '1937', 'category': 'chemistry'}
    {'year': '1937', 'category': 'literature'}
    {'year': '1937', 'category': 'medicine'}
    {'year': '1937', 'category': 'peace'}
    {'year': '1937', 'category': 'physics'}
    {'year': '1936', 'category': 'chemistry'}
    {'year': '1936', 'category': 'literature'}
    {'year': '1936', 'category': 'medicine'}
    {'year': '1936', 'category': 'peace'}
    {'year': '1936', 'category': 'physics'}
    {'year': '1935', 'category': 'chemistry'}
    {'year': '1935', 'category': 'literature'}
    {'year': '1935', 'category': 'medicine'}
    {'year': '1935', 'category': 'peace'}
    {'year': '1935', 'category': 'physics'}
    {'year': '1934', 'category': 'chemistry'}
    {'year': '1934', 'category': 'literature'}
    {'year': '1934', 'category': 'medicine'}
    {'year': '1934', 'category': 'peace'}
    {'year': '1934', 'category': 'physics'}
    {'year': '1933', 'category': 'chemistry'}
    {'year': '1933', 'category': 'literature'}
    {'year': '1933', 'category': 'medicine'}
    {'year': '1933', 'category': 'peace'}
    {'year': '1933', 'category': 'physics'}
    {'year': '1932', 'category': 'chemistry'}
    {'year': '1932', 'category': 'literature'}
    {'year': '1932', 'category': 'medicine'}
    {'year': '1932', 'category': 'peace'}
    {'year': '1932', 'category': 'physics'}
    {'year': '1931', 'category': 'chemistry'}
    {'year': '1931', 'category': 'literature'}
    {'year': '1931', 'category': 'medicine'}
    {'year': '1931', 'category': 'peace'}
    {'year': '1931', 'category': 'physics'}
    {'year': '1930', 'category': 'chemistry'}
    {'year': '1930', 'category': 'literature'}
    {'year': '1930', 'category': 'medicine'}
    {'year': '1930', 'category': 'peace'}
    {'year': '1930', 'category': 'physics'}
    {'year': '1929', 'category': 'chemistry'}
    {'year': '1929', 'category': 'literature'}
    {'year': '1929', 'category': 'medicine'}
    {'year': '1929', 'category': 'peace'}
    {'year': '1929', 'category': 'physics'}
    {'year': '1928', 'category': 'chemistry'}
    {'year': '1928', 'category': 'literature'}
    {'year': '1928', 'category': 'medicine'}
    {'year': '1928', 'category': 'peace'}
    {'year': '1928', 'category': 'physics'}
    {'year': '1927', 'category': 'chemistry'}
    {'year': '1927', 'category': 'literature'}
    {'year': '1927', 'category': 'medicine'}
    {'year': '1927', 'category': 'peace'}
    {'year': '1927', 'category': 'physics'}
    {'year': '1926', 'category': 'chemistry'}
    {'year': '1926', 'category': 'literature'}
    {'year': '1926', 'category': 'medicine'}
    {'year': '1926', 'category': 'peace'}
    {'year': '1926', 'category': 'physics'}
    {'year': '1925', 'category': 'chemistry'}
    {'year': '1925', 'category': 'literature'}
    {'year': '1925', 'category': 'medicine'}
    {'year': '1925', 'category': 'peace'}
    {'year': '1925', 'category': 'physics'}
    {'year': '1924', 'category': 'chemistry'}
    {'year': '1924', 'category': 'literature'}
    {'year': '1924', 'category': 'medicine'}
    {'year': '1924', 'category': 'peace'}
    {'year': '1924', 'category': 'physics'}
    {'year': '1923', 'category': 'chemistry'}
    {'year': '1923', 'category': 'literature'}
    {'year': '1923', 'category': 'medicine'}
    {'year': '1923', 'category': 'peace'}
    {'year': '1923', 'category': 'physics'}
    {'year': '1922', 'category': 'chemistry'}
    {'year': '1922', 'category': 'literature'}
    {'year': '1922', 'category': 'medicine'}
    {'year': '1922', 'category': 'peace'}
    {'year': '1922', 'category': 'physics'}
    {'year': '1921', 'category': 'chemistry'}
    {'year': '1921', 'category': 'literature'}
    {'year': '1921', 'category': 'medicine'}
    {'year': '1921', 'category': 'peace'}
    {'year': '1921', 'category': 'physics'}
    {'year': '1920', 'category': 'chemistry'}
    {'year': '1920', 'category': 'literature'}
    {'year': '1920', 'category': 'medicine'}
    {'year': '1920', 'category': 'peace'}
    {'year': '1920', 'category': 'physics'}
    {'year': '1919', 'category': 'chemistry'}
    {'year': '1919', 'category': 'literature'}
    {'year': '1919', 'category': 'medicine'}
    {'year': '1919', 'category': 'peace'}
    {'year': '1919', 'category': 'physics'}
    {'year': '1918', 'category': 'chemistry'}
    {'year': '1918', 'category': 'literature'}
    {'year': '1918', 'category': 'medicine'}
    {'year': '1918', 'category': 'peace'}
    {'year': '1918', 'category': 'physics'}
    {'year': '1917', 'category': 'chemistry'}
    {'year': '1917', 'category': 'literature'}
    {'year': '1917', 'category': 'medicine'}
    {'year': '1917', 'category': 'peace'}
    {'year': '1917', 'category': 'physics'}
    {'year': '1916', 'category': 'chemistry'}
    {'year': '1916', 'category': 'literature'}
    {'year': '1916', 'category': 'medicine'}
    {'year': '1916', 'category': 'peace'}
    {'year': '1916', 'category': 'physics'}
    {'year': '1915', 'category': 'chemistry'}
    {'year': '1915', 'category': 'literature'}
    {'year': '1915', 'category': 'medicine'}
    {'year': '1915', 'category': 'peace'}
    {'year': '1915', 'category': 'physics'}
    {'year': '1914', 'category': 'chemistry'}
    {'year': '1914', 'category': 'literature'}
    {'year': '1914', 'category': 'medicine'}
    {'year': '1914', 'category': 'peace'}
    {'year': '1914', 'category': 'physics'}
    {'year': '1913', 'category': 'chemistry'}
    {'year': '1913', 'category': 'literature'}
    {'year': '1913', 'category': 'medicine'}
    {'year': '1913', 'category': 'peace'}
    {'year': '1913', 'category': 'physics'}
    {'year': '1912', 'category': 'chemistry'}
    {'year': '1912', 'category': 'literature'}
    {'year': '1912', 'category': 'medicine'}
    {'year': '1912', 'category': 'peace'}
    {'year': '1912', 'category': 'physics'}
    {'year': '1911', 'category': 'chemistry'}
    {'year': '1911', 'category': 'literature'}
    {'year': '1911', 'category': 'medicine'}
    {'year': '1911', 'category': 'peace'}
    {'year': '1911', 'category': 'physics'}
    {'year': '1910', 'category': 'chemistry'}
    {'year': '1910', 'category': 'literature'}
    {'year': '1910', 'category': 'medicine'}
    {'year': '1910', 'category': 'peace'}
    {'year': '1910', 'category': 'physics'}
    {'year': '1909', 'category': 'chemistry'}
    {'year': '1909', 'category': 'literature'}
    {'year': '1909', 'category': 'medicine'}
    {'year': '1909', 'category': 'peace'}
    {'year': '1909', 'category': 'physics'}
    {'year': '1908', 'category': 'chemistry'}
    {'year': '1908', 'category': 'literature'}
    {'year': '1908', 'category': 'medicine'}
    {'year': '1908', 'category': 'peace'}
    {'year': '1908', 'category': 'physics'}
    {'year': '1907', 'category': 'chemistry'}
    {'year': '1907', 'category': 'literature'}
    {'year': '1907', 'category': 'medicine'}
    {'year': '1907', 'category': 'peace'}
    {'year': '1907', 'category': 'physics'}
    {'year': '1906', 'category': 'chemistry'}
    {'year': '1906', 'category': 'literature'}
    {'year': '1906', 'category': 'medicine'}
    {'year': '1906', 'category': 'peace'}
    {'year': '1906', 'category': 'physics'}
    {'year': '1905', 'category': 'chemistry'}
    {'year': '1905', 'category': 'literature'}
    {'year': '1905', 'category': 'medicine'}
    {'year': '1905', 'category': 'peace'}
    {'year': '1905', 'category': 'physics'}
    {'year': '1904', 'category': 'chemistry'}
    {'year': '1904', 'category': 'literature'}
    {'year': '1904', 'category': 'medicine'}
    {'year': '1904', 'category': 'peace'}
    {'year': '1904', 'category': 'physics'}
    {'year': '1903', 'category': 'chemistry'}
    {'year': '1903', 'category': 'literature'}
    {'year': '1903', 'category': 'medicine'}
    {'year': '1903', 'category': 'peace'}
    {'year': '1903', 'category': 'physics'}
    {'year': '1902', 'category': 'chemistry'}
    {'year': '1902', 'category': 'literature'}
    {'year': '1902', 'category': 'medicine'}
    {'year': '1902', 'category': 'peace'}
    {'year': '1902', 'category': 'physics'}
    {'year': '1901', 'category': 'chemistry'}
    {'year': '1901', 'category': 'literature'}
    {'year': '1901', 'category': 'medicine'}
    {'year': '1901', 'category': 'peace'}
    {'year': '1901', 'category': 'physics'}


### Index
* When to use index?
    * Queries with high specificity
    * Large documents & Large Collections
* index에 대한 정보 얻기
    * `.index_information()`
    * `cursor.explain()`

* For each prize category, report the most recent year that a single laureate(rather than several) received a prize in that category


```python
# Specify an index model for compound sorting
index_model = [("category", 1), ("year", -1)]
db.prizes.create_index(index_model)

# Collect the last single-laureate year for each category
report = ""
for category in sorted(db.prizes.distinct("category")):
    doc = db.prizes.find_one(
        {"category": category, "laureates.share": "1"},
        sort=[("year", -1)]
    )
    report += "{category}: {year}\n".format(**doc)

print(report)
```

    chemistry: 2011
    economics: 2017
    literature: 2021
    medicine: 2016
    peace: 2020
    physics: 1992
    


* find the five countries of birth with the highest counts of such laureates


```python
from collections import Counter

# Ensure an index on country of birth for efficient gathering of distinct values and counting of documents
db.laureates.create_index([("bornCountry", 1)])

# Collect a count of laureates for each country of birth
n_born_and_affiliated = {
    born_country: db.laureates.count_documents({
        "bornCountry": born_country,
        "prizes.affiliations.country": born_country
    })
    for born_country in db.laureates.distinct("bornCountry")
}

# result
Counter(n_born_and_affiliated).most_common(5)
```




    [('USA', 250),
     ('United Kingdom', 58),
     ('Germany', 39),
     ('France', 26),
     ('Japan', 18)]



* print the first two prizes with quarter-share laureate(s)


```python
from pprint import pprint

# Save a cursor to yield the first five prizes
cursor = db.prizes.find({"laureates.share": "4"}, 
                        ["category", "year", "laureates.motivation"]).sort("year").limit(2)
pprint(list(cursor))
```

    [{'_id': ObjectId('61e62ed9f373e66efa5b991a'),
      'category': 'physics',
      'laureates': [{'motivation': '"in recognition of the extraordinary services '
                                   'he has rendered by his discovery of '
                                   'spontaneous radioactivity"'},
                    {'motivation': '"in recognition of the extraordinary services '
                                   'they have rendered by their joint researches '
                                   'on the radiation phenomena discovered by '
                                   'Professor Henri Becquerel"'},
                    {'motivation': '"in recognition of the extraordinary services '
                                   'they have rendered by their joint researches '
                                   'on the radiation phenomena discovered by '
                                   'Professor Henri Becquerel"'}],
      'year': '1903'},
     {'_id': ObjectId('61e62ed9f373e66efa5b9840'),
      'category': 'chemistry',
      'laureates': [{'motivation': '"for his discovery that enzymes can be '
                                   'crystallized"'},
                    {'motivation': '"for their preparation of enzymes and virus '
                                   'proteins in a pure form"'},
                    {'motivation': '"for their preparation of enzymes and virus '
                                   'proteins in a pure form"'}],
      'year': '1946'}]


* present these laureates one page at a time, with three laureates per page. 
* order the laureates chronologically by award year. 
* when there is a "tie" in ordering (i.e. two laureates were awarded prizes in the same year), order them alphabetically by surname.


```python
from pprint import pprint

# function to retrieve a page of data
def get_particle_laureates(page_number=1, page_size=3):
    if page_number < 1 or not isinstance(page_number, int):
        raise ValueError("Pages are natural numbers (starting from 1).")
    particle_laureates = list(
        db.laureates.find(
            {"prizes.motivation": {"$regex": "particle"}},
            ["firstname", "surname", "prizes"])
        .sort([("prizes.year", 1), ("surname", 1)])
        .skip(page_size * (page_number - 1))
        .limit(page_size))
    return particle_laureates

# Collect and save the first nine pages
pages = [get_particle_laureates(page_number=page) for page in range(1,9)]
pprint(pages[0])
```

    [{'_id': ObjectId('61e62ed9f373e66efa5b9946'),
      'firstname': 'C.T.R.',
      'prizes': [{'affiliations': [{'city': 'Cambridge',
                                    'country': 'United Kingdom',
                                    'name': 'University of Cambridge'}],
                  'category': 'physics',
                  'motivation': '"for his method of making the paths of '
                                'electrically charged particles visible by '
                                'condensation of vapour"',
                  'share': '2',
                  'year': '1927'}],
      'surname': 'Wilson'},
     {'_id': ObjectId('61e62ed9f373e66efa5b995c'),
      'firstname': 'John',
      'prizes': [{'affiliations': [{'city': 'Harwell, Berkshire',
                                    'country': 'United Kingdom',
                                    'name': 'Atomic Energy Research '
                                            'Establishment'}],
                  'category': 'physics',
                  'motivation': '"for their pioneer work on the transmutation of '
                                'atomic nuclei by artificially accelerated atomic '
                                'particles"',
                  'share': '2',
                  'year': '1951'}],
      'surname': 'Cockcroft'},
     {'_id': ObjectId('61e62ed9f373e66efa5b995d'),
      'firstname': 'Ernest T.S.',
      'prizes': [{'affiliations': [{'city': 'Dublin',
                                    'country': 'Ireland',
                                    'name': 'Trinity College'}],
                  'category': 'physics',
                  'motivation': '"for their pioneer work on the transmutation of '
                                'atomic nuclei by artificially accelerated atomic '
                                'particles"',
                  'share': '2',
                  'year': '1951'}],
      'surname': 'Walton'}]

