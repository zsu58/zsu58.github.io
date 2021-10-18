---
title: "[PYTHON BACKEND] 깔끔한 파이썬 탄탄한 백엔드 CH4"
layout: single
date: '20/9/2021'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - BACKEND
tags:
  - PYTHON
  - BACKEND
---

---
<b>깔끔한 파이썬 탄탄한 백엔드</b>
### CH4 HTTP의 구조 및 핵심 요소
* HTTP 핵심 요소
* HTTP 구조
* 자주 사용되는 HTTP 매소드와 Status Code

---

### HTTP 통신 방식
* 요청(request)과 응답(response) 방식
    * Web Client가 request ➡️ Web Server가 response
* stateless
    * 각각의 HTTP통신은 독립적이며 그 전에 처리된 HTTP통신에 대해서 전혀 알지 못하기에, 해당 요청을 처리하기 위해 필요한 모든 데이터를 매번 포함시켜야함
    * 이로 인해 발생하는 문제를 해결하기 위해 cookie, session이 존재
        * cookie를 통해 Web Client(Browser)는 필요한 정보를 저장
        * session을 통해 Web Server는 필요한 정보를 저장
---

### HTTP 요청 구조
* 1) Start Line
    * HTTP 매소드
        * GET/ POST/ PUT/ DELETE/ OPTIONS/ Etc
    * Request target
        * 해당 HTTP 요청이 전송되는 목표 주소 ex) 'ping' 엔드포인트에 보내는 HTTP 요청의 request target ➡️ /ping
    * HTTP version
* 2) Headers
    * HTTP 요청 그 자체에 대한 정보 담고 있음 ex) HTTP 요청 메세지의 전체 크기(Content-length)
    * dictionary 형태로 되어 있음
    * 자주 사용되는 header은 아래와 같음
        * Host - 요청이 전송되는 target 호스트의 URL 주소
        * User-Agent - 요청을 보내는 Client에 대한 정보(ex) 웹 브라우저에 대한 정보)
        * Accept - 해당 요청이 받을 수 있는 응답 데이터 타입을 알려주며, MIME(Multipurpose Internet Mail Extenions) type이 value로 지정됨 ex) application/json, text/html
        * Connection - 해당 요청 후 Client-Web 간 네트워크 연결을 유지할 것인지 끊을 것인지 알려줌
        * Content-Type - HTTP 요청이 보내는 메시지 body의 타입을 알려주며 MIME type이 사용됨
        * Content-Length - HTTP 요청이 보내는 메시지 body의 총 사이즈 알려줌
* 3) Body
    * HTTP 요청이 전송하는 데이터를 담고 있으며, 전송하는 데이터가 없으면 비어 있음

```python
# startline
GET /search HTTP/1.1
```

```python
# Headers example
HOST: google.com
```
---

### 자주 사용되는 HTTP 매소드
* GET
    * 데이터를 서보로부터 요청(GET)할 떄 주로 사용
* POST
    * GET과 다륵5ㅔ 데이터를 생성하거나 수정 및 삭제 요청을 할 떄 주로 사용
* OPTIONS
    * 특정 엔드포인트에서 허용하는 메소드들이 무엇이 있는지 알고자 하는 요청에서 사용되는 HTTP 메소드
---

### 자주 사용되는 SHTTP Status Code & Text
* 200 OK
* 301 Moved Permanently - 엔드포인트의 URL 주소가 바뀌었다는 것을 나타냄
* 400 Bad Request - HTTP 요청이 잘못된 요청일 경우에 발생, 주로 input 값이 잘못된 경우에 사용됨
* 401 Unauthorized - HTTP 요청을 처리하기 위 해당 요청을 하는 주체의 신분이 확인되지 않는 경우 사용됨
* 403 Forbidden - HTTP 요청을 보내는 주체가 해당 요청에 대한 권한이 없음을 나타내는 응답 코드
* 404 Not Found - HTTP 요청을 보내고하자 하는 URI가 존재하지 않을 때 사용됨
* 500 Internal Server Error - HTTP 요청을 받은 서버에서 해당 요청을 처리하는 과정에서 서버 오류가 나서 해당 요청을 처리할 수 없을 때 사용됨
---

### API 엔드포인트 아키텍처 패턴
* REST Api
    * API에서 전송하는 리소스를 URI로 표현하고 해당 리소스에 행하고자 하는 의도를 HTTP 메소드로 정의하는 방식
    * 각 엔드포인트는 처리하는 리소스를 표헌하는 고유의 URI 주소를 가지며, 해당 리소스에 행할 수 있는 행위를 표현하는 HTTP 메소드를 처리함
    * 자기 설명력(self-descriptiveness)이 높아, 엔드포인트의 구조만으로도 해당 엔드포인트가 제공하는 리소스와 기능을 파악할 수 있음
    * 구조가 직관적이며 간단해짐
* GraphQL
    * REST 방식의 API에서는 이미 구현해놓은 틀에 맞추어 사용해야된다는 단점이 존재
    * GraphQL에서는 엔드포인트가 오직 하나이며, 엔드포인트에 클라이언트가 필요한 것을 정의해서 요청함
