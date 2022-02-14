---
title: "[Web Crawling] Crawling Children News by Scrapy"
layout: single
date: '31/1/2022'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - WEB_CRAWLING
tags:
  - SCRAPY
  - PYTHON
---

---
### Web Crawling
* 가상환경 및 scrapy 프로젝트 구축
* 사전 확인
* Requests
* Requests 한글 깨짐
* Code
    * items.py
    * spiders/kidnews_spider.py
    * pipelines.py
    * settings.py
* scrapy 실행

---

### 가상환경 및 scrapy 프로젝트 구축

```bash
# 가상환경 구축
python3 -m venv venv
source venv/bin/activate

# python library 설치
pip3 install scrapy
pip3 install ipykernel
pip3 install pymongo
pip3 install requests

# jupyter notebook kernel 구축
python3 -m ipykernel install --user --name venv --display-name "venv_scrapy"

# scrapy project 시작
scrapy startproject kidnewscrawling
```
---

### 사전 확인
* interested_url/robots.txt 를 통해 crawling 가능 여부 확인
    * 예) http://kid.chosun.com/robots.txt
    * 아래는 crawling 불가능한 영역
        * Disallow: /sv*
        * Disallow: /list*
        * Disallow: /cartoonlist*
        * Disallow: /priv*

---

### Requests
* Requests 라이브러리를 활용하여 xpath/css 찾기


```python
import scrapy
import requests
import re
request_object = requests.get('http://kid.chosun.com/site/data/html_dir/2022/01/31/2022013100293.html')

if 'charset' not in request_object.headers['content-type']:
    request_object.encoding = request_object.apparent_encoding

response_object = scrapy.Selector(request_object)

p = " ".join(response_object.xpath('//div[@class="Paragraph"]//div[not(contains(@class, "center_img"))]//text()').extract())
re.sub(r'[<사진>\xa0]', '', p).strip()
```




    '호주 정부가 코알라 생태계를 보전하기 위해 400억 원이 넘는 돈을 쏟아붓기로 했다. 29일(현지 시각) CNN에 따르면 호주 정부는 코알라 개체 수(數)를 보호하기 위해 앞으로 4년간 5000만 호주달러(약 422억 원)를 투자한다. 스콧 모리슨 호주 총리는 “코알라는 세계에서 랑받는 호주의 상징”이라며 “다음 세대를 위해 최선을 다해 코알라를 보호해야 한다”고 밝혔다. 정부 예산은 코알라 서식지 복원과 치료, 연구 등에 용된다. 지난해 9월 호주 코알라 재단이 발표한 내용에 따르면 2018년 이후 산불, 가뭄, 토지 개간(開墾) 등으로 호주에 서식하는 코알라의 약 30％가 라졌다. 특히 2019년 뉴우스웨일즈의 땅 4만8000㎢을 파괴한 대형 산불은 코알라 개체 감소에 치명적이었다. 현재 코알라는 세계 최대 환경보호 기구인 ‘세계자연보전연맹(IUCN)’이 정하는 ‘취약종(種)’ 목록에 올라있다. *코알라를 보호하는 방법을 정리해 알려주세요.'



---

### Requests 한글 깨짐
* `request.headers['content-type']` - text/html인 경우 인코딩 문제 발생
* 해결
    * 방법1 - request.encoding을 직접적으로 수정
    * 방법2 - request.encoding을 request.apparent_encoding으로 변환


```python
request = requests.get('http://kid.chosun.com/list_kj.html?catid=1')

print(request.headers['content-type']) 
print(request.apparent_encoding)
print(request.encoding)

request = requests.get('http://kid.chosun.com/list_kj.html?catid=1')
# 방법 1
# request.encoding = 'euc-kr'

# 방법 2
if 'charset' not in request.headers['content-type']:
    request.encoding = request.apparent_encoding

request = scrapy.Selector(request)
```

    text/html
    CP949
    ISO-8859-1


---

### Code

#### items.py


```python
# -*- coding: utf-8 -*-

import scrapy


class KidNewScrawlingItem(scrapy.Item):
    # define the fields for your item here like:
    url = scrapy.Field() # 기사 원문 URL
    title = scrapy.Field() # 제목
    subtitle = scrapy.Field() # 부제목
    author = scrapy.Field() # 기자
    date = scrapy.Field() # 날짜   
    article = scrapy.Field() # 기사 내용
    img_path = scrapy.Field() # 기사 img 경로
    source = scrapy.Field() # 신문사
#     category = scrapy.Field() # 카테고리
    pass
```

#### spiders/kidnews_spider.py


```python
# -*- coding: utf-8 -*-

import scrapy
from kidnewscrawling.items import KidNewScrawlingItem
import re

class KidNewsSpider(scrapy.Spider):
    name = "kidNewsCrawler"
    
    def start_requests(self):
        for page in range(1,3):
            url = 'http://kid.chosun.com/list_kj.html?catid=1&pn={page}'.format(page=page)
            yield scrapy.Request(url=url, callback=self.parse_url)
        
    def parse_url(self, response):
        # 인코딩 변환
        if response.encoding == 'cp1252':
            response = response.replace(encoding='euc-kr')
        
        default_url = 'http://kid.chosun.com'
        urls = list(map(lambda x: default_url + x, response.xpath('//div[@class="subject"]/a/@href').extract()))
        
        for url in urls:
            yield response.follow(url=url, callback = self.parse_article)
            
    def parse_article(self, response):
        item = KidNewScrawlingItem()
        
        # 기사 url
        item["url"] = response.url
        
        # 기사 제목
        item["title"] = response.xpath('//title/text()').extract_first()

        # 기사 부제목, 없는 경우도 존재
        item["subtitle"] = response.xpath('//h3/text()').extract_first()

        # 기자, 기자가 아닌 경우도 존재
        author = response.xpath('//span[@class="author"]/text()').extract_first()
        item["author"] = re.sub(r'[\r\n\t정리=]', '', author).strip()

        # 입력날짜
        date = response.xpath('//span[@class="date"]/text()').extract_first()
        item["date"] = re.sub(r'[\r\n\t]', '', date).strip()[5:21]
        
        # 본문
        p = " ".join(response.xpath('//div[@class="Paragraph"]//text()[normalize-space() \
                                                    and not(ancestor::*/@class="center_img") \
                                                    and not(ancestor::*/@class="right_img")]').extract())
        item["article"] = re.sub(r'[\r\n\t<사진>\xa0]', '', p).strip()

        # 기사 첫 사진 이미지 url
        item["img_path"] = response.xpath('//img[@id="artImg0"]/@src').extract_first()
        
        # 신문지
        item["source"] = "어린이조선일보"

        yield item
```

#### settings.py

```python
BOT_NAME = 'kidnewscrawling'

SPIDER_MODULES = ['kidnewscrawling.spiders']
NEWSPIDER_MODULE = 'kidnewscrawling.spiders'

# 한글깨짐
FEED_EXPORT_ENCODING = 'utf-8'

...

# Obey robots.txt rules
ROBOTSTXT_OBEY = False

# mongodb setting
LOG_LEVEL='ERROR'

ITEM_PIPELINES = {'kidnewscrawling.pipelines.MongoPipeline': 300,}

MONGO_URI = 'mongodb://root:1234@localhost:27017'
MONGO_DATABASE = 'newsDB'
```

#### pipelines.py


```python
# -*- coding: utf-8 -*-

import pymongo
from itemadapter import ItemAdapter

class MongoPipeline:

    collection_name = 'news'

    def __init__(self, mongo_uri, mongo_db):
        self.mongo_uri = mongo_uri
        self.mongo_db = mongo_db

    @classmethod
    def from_crawler(cls, crawler):
        return cls(
            mongo_uri=crawler.settings.get('MONGO_URI'),
            mongo_db=crawler.settings.get('MONGO_DATABASE', 'items')
        )

    def open_spider(self, spider):
        self.client = pymongo.MongoClient(self.mongo_uri)
        self.db = self.client[self.mongo_db]

    def close_spider(self, spider):
        self.client.close()

    def process_item(self, item, spider):
        print(item["title"])
        self.db[self.collection_name].insert_one(ItemAdapter(item).asdict())
        return item
```

### scrapy 실행
* spiders/kidnews_spider.py의 클래스 내 이름

```bash
scrapy crawl kidNewsCrawler
```

### ref
* [🔗 Scrapy 공식문서-몽고DB](https://docs.scrapy.org/en/latest/topics/item-pipeline.html)
* [🔗 참고 블로그1](https://excelsior-cjh.tistory.com/86)
* [🔗 참고 블로그2](https://dev-jacob.tistory.com/entry/Python-Requests-한글-깨짐-문제-해결하기)
