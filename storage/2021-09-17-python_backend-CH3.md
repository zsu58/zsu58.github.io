---
title: "[PYTHON BACKEND] 깔끔한 파이썬 탄탄한 백엔드 CH3"
layout: single
date: '17/9/2021'
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
### CH3 첫 API 개발 시작
* FLASK 설치
* API 기초적인 기능 구현(ping 엔드포인트 구현)
* API 실행

---

### Python Virtual  Environment 설치

```python
# terminal에 아래 명령어 입력하여 새로운 파이썬 가상 환경 생성
# 'api'에 희망하는 가상환경의 이름을 '3.9'에 희망하는 파이썬 버전을 입력
conda create --name api python=3.9 

# 입력 후 Proceed([y]/n)? 라는 질문에 y 입력
```
---

### Python Virtual  Environment  활성화 & 비활성화

```python
# terminal에 아래 명령어 입력하여 새로운 파이썬 가상 환경 활성화
# name_of_venv에 활성화 희망하는 가상환경 이름 입력
source activate name_of_venv

# terminal에 아래 명령어 입력하여 파이썬 가상 환경 비활성화
source deactivate

# terminal에 아래 명령어 입력하여 현재 존재하는 파이썬 가상환경 리스트 확인
conda env list
```
---

### Flask 설치

```python
# 파이썬 가상 환경 활성화 상태에서 아래 명령어 입력하여 flask 프레임워크 설치
pip install flask

# 설치 완료 후 python3 입력, python에서 다음 구문 입력하여 설치가 정상적으로 이루어졌는지 확인
from flask import Flask

app = Flask('test')
```
---

### ping 엔드포인트 구현

```python
# 폴더 만들기 (-p는 입력한 경로의 폴더를 모두 만들도록 함)
mkdir -p ~/Projects/api

# api 디렉터리로 이동
cd ~/Projects/api

# app.py 파일 생성
vim app.py

# app.py에 ping 엔드포인트 구현
# 1) vim으로 app.py 켜기
vim app.py

# 2) app.py을 다음과 같이 수정
from flask import Flask

app = Flask(__name__)

@app.route("/ping", methods=['GET'])
def ping():
    return "pong"
```
---

### API 실행
* 가상 환경 활성화한 상태에서 실행해야함!

```python
# terminal에 아래 명령어 입력하여 API 실행
FLASK_APP=app.py FLASK_DEBUG=1 flask run

# ping 엔드포인트가 제대로 작동하는지 실제 API에 접속해 테스트
# HOW? ➡️ ping 엔드포인트에 HTTP 요청을 보내기, 이를 위해 httpie 툴 사용
# terminal에 아래 명령어 입력하여 httpie 설치 
brew install httpie

# http라는 명령어를 통해 토미널에서 HTTP 요청 보내기
http -v GET http://localhost:5000/ping
        
# 설명
# 1)http 2)-v 3)GET 4)http://localhost:5000/ping
# 1)http 명령어 사용하여 HTTP 요청을 터미널에 보낼 수 있게 됨
# 2)-v옵션은 'verbose' 옵션으로 HTTP 요청과 응답에 관한 추가적인 정보 출력
# 3)해당 HTTP 요청의 HTTP 매소드를 'GET'으로 지정
# 4)해당 HTTP 요청이 전송되어야야 할 엔드포인트의 고유 주소를 지정, 즉 127.0.0.1 IP 주소의 포트(port) 5000번에서 실행되고 있는 API의 '/ping' 주소에 지정되어 있는 엔드포인트로 HTTP 요청을 보내라고 명령한 것
```
* 정상적으로 ping 엔드포인트 호출된 화면

![img](/img/backend/ch3_img1.png)

