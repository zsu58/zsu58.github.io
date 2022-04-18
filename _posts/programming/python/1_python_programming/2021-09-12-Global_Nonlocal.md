---
title: "[Python] 전역변수 지역변수"
date: '12/09/2021'
layout: single
# toc: true
# toc_sticky: true
# toc_label: Table of Contents
categories:
  - PYTHON
tags:
  - PYTHON
---


---
### 전역범수(Global Variable)
* 함수를 포함하여 스크립트 전체에서 접근할 수 있는 변수
* 전역 범위(Global Scope) - 전역 변수에 접근할 수 있는 범위
* 함수 안에서 전역변수 선언시 ```global``` 사용

### 지역변수(Local Variable)
* 변수를 만든 함수 안에서만 접근할 수 있는 변수
* 지역 범위(Local Scope) - 지역 변수에 접근할 수 있는 범위
* 함수의 지역 범위 바깥의 지역 변수 사용시 ```nonlocal``` 사용

---


```python
team = "teen titans"

def change_team():
    global team # 함수 안에서 (team을) 전역변수로 선언
    team = 'justice league'

print(team)
change_team()
print(team)
```

    teen titans
    justice league



```python
def echo_shout(word):
    echo_word = word * 2
    print(echo_word)

    def shout():
        nonlocal echo_word # 함수의 지역 범위 바깥의 지역 변수(echo_word) 를 사용
        echo_word = echo_word + '!!!'
    shout()
    print(echo_word)

echo_shout('hello')
```

    hellohello
    hellohello!!!

---