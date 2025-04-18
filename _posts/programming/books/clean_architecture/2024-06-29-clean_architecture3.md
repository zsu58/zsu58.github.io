---
title: "[Clean Architecture] CH3 패러다임 개요"
layout: single
date: '29/06/2024'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - BOOKS
tags:
  - BOOKS
---

---

### 구조적 프로그래밍
* 1968년 Edsger Wybe Dikstra가 발견
* 그는 무분별한 점프(goto 문장)이 해롭기에 이를 if/then/else와 do/while/until과 같이 더 익숙한 구조로 대체함
* `구조적 프로그래밍은 제어흐름의 직접적인 전환에 대한 규칙을 부과한다`

---

### 객체 지향 프로그래밍
* 1966년 Ole Johan Dahl과 Kristen Nygaard에 의해 등장
* 이들은 함수 호출 스택 프레임을 힙으로 옮기면, 함수 호출이 반환된 이후에도 함수에서 선언한 지역 변수가 오랫동안 유지할 수 있음을 발견
    * 이러한 함수가 클래스의 생성자가 되었으며, 지역 변수는 인스턴스 변수, 중첩 함수는 매서드가 됨
    * 함수 포인터를 특정 규칙에 따라 사용하는 과정을 통해 필연적으로 다형성이 등장함
* `객체 지향 프로그래밍은 제어흐름의 간접적인 전환에 대한 규칙을 부과한다`

---

### 함수형 프로그래밍
* Alonzon Church는 수학 문제를 해결하는 과정에서 람다 계산법을 발명, 함수형 프로그래밍은 이러한 연구 결과에 직접적인 영향을 받음
* 람다 계산법은 1958년 John McCarthy가 만든 LISP 언어의 근간이 되는 개념
* 람다 계산법의 기초가 되는 개념은 불변셩(immutability)으로, 심볼(symbol)의 값이 변경되지 않는다는 개념임
    * 즉, 함수형 언어에는 할당문이 전혀 없다는 뜻(사실 대다수는 제공하긴 함)
* `함수형 프로그래밍은 할당문에 대한 규칙을 부과`

---

### 생각할 거리
* 각 패러다임은 프로그래머에게서 권한을 박탈하며, 일종의 추작어니 규칙을 부과함
    * 즉, 패러다임은 무엇을 해야 할지를 말하기보다는 무엇을 해서는 안 되는지를 말해줌
* 각 패러다임이 1958 ~ 1968년에 걸친 10년 동안 만들어진 점과 더 이상 박탈할 수 없는 것을 고려하면, 앞으로 새로운 패러다임은 존재하지 않을 것임
    * 적어도 권한을 박탈(규칙을 부과)하는 패러다임의 경우

---

### 결론
* 아키텍처 경계를 넘나들기 위한 메커니즘으로 다형성이 이용됨
* 함수형 프로그래밍을 이용하여 데이터의 위치와 접근 방법에 대한 규칙을 부과함
* 모듈의 기반 알고리즘으로 구조적 프로그래밍을 사용
    * 즉, 세가지 패러다임과 아키텍처의 세가지 큰 관심사(함수, 컴포넌트 분리, 데이터 관리)가 어떻게 서로 연관되는지에 주목

---