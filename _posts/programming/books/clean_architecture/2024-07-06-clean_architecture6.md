---
title: "[Clean Architecture] CH6 함수형 프로그래밍"
layout: single
date: '06/07/2024'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - BOOKS
tags:
  - BOOKS
---

---

### 정수의 제곱
* 함수형 언어에서 변수는 변경되지 않음

---

### 불변성과 아키텍처
* 경합(race) 조건, 교착상태(deadlock) 조건, 동시 업데이트(concurrency update) 문제가 모두 가변 변수로 인해 발생함
* 따라서 어떠한 변수도 갱신되지 않는다면 동시성 어플리케이션에서 마주치는 모든 문제, 즉 다수의 스레드와 프로세스를 사용하는 애플리케이션에서 마주치는 모든 문제가 생기지 않음
* 다만, 저장 공간이 무한하지 않으므로 불변성은 실현 가능하지만 타협이 필요함

---

### 가변성의 분리
* 불변성과 관련하여 가장 주요한 타협은 애플리케이션 내부의 서비스를 가변 컴포넌트와 불변 컴포너트로 분리하는 일임
* 불변 컴포너틑에서는 순수하게 함수형 방식으로만 작업이 처리되며, 어떤 가변 변수도 사용되지 않음
* 가변 변수을 적절한 수단(대표적으로 트랜잭션 메모리)을 사용하여 동시 업데이트와 경합 조건 문제로부터 보호

---

### 이벤트 소싱
* 점차 저장공간이 늘어나고 처리 능력이 우수해짐에 따라 상태가 아닌 트랙잭션을 저장할 수 있게 됨
* 상태가 필요해지면 단순히 상태의 시작점부터 모든 트랙잭션을 처리하면 됨
    * 필요 시, 매일 자정에 상태를 계산한 후 저장할 수 있음

---

### 결론
* 구조적 프로그래밍: 제어흐름의 직접적인 전환에 부과되는 규율
* 객체 지향 프로그래밍: 제어흐름의 간접적인 전환에 부과되는 규율
* 함수형 프로그래밍: 변수 할당에 부과되는 규율
* 이들 세 패러다임은 코드를 작성하는 방식의 형태를 한정하며, 결국 무엇을 해서는 안 되는지에 대한 것임
* 도구가 달라지고 하드웨어도 발전했지만, 소프트웨어의 핵심은 여전히 순차, 분기, 반복, 참조로 구성된다는 핵심은 변하지 않음

---