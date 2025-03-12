---
title: "[Clean Architecture] CH9 LSP(리스코프 치환 원칙)"
layout: single
date: '07/07/2024'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - BOOKS
tags:
  - BOOKS
---

---

### 상속을 사용하도록 가이드하기
* 아래 코드에서 Billing 어플리케이션의 행위가 License 하위 타입 중 무엇을 사용하는지에 전혀 의존하기 떄문에 LSP를 준수함
* Licnese는 하위 타입(PersonalLicense or BusinessLicense으로 치환될 수 있음)

```python
class Billing:

    def get_license_fee(license: License):
        fee = license.calcFee()

class License:
    @abstractmethod
    def calcFee():
        pass

class PersonalLicense(License)
    def calcFee():
        pass

class BusinessLicense(License)
    def calcFee():
        pass
```

---

### 정사각형/직사각형 문제
* Square 클래스는 높이와 너비라는 속성이 독립적이지 않기에 Rectangle의 하위 타입으로 적합하지 않음

---

### LSP와 아키첵처
* 객체 지향 초창기에 LSP는 상속을 사용하도록 가이드하는 방법 정도로 간주됨
* 하지만 시간이 지나면서 LSP는 인터페이스와 구현체에도 적용되는 더 광범위한 소프트웨어 설계 원칙으로 변모해 옴

---

### LSP 위반 사례
* 인터페이스를 상속한 하위 컴포넌트에서 제대로 구현을 안하는 경우 예외 처리(e.g. if 문)을 추가해야 함
* 이러한 코드는 끔찍해질 뿐만 아니라, 에러의 발생 가능성을 높게 함
* 이에 대한 대응은 설정 데이터베이스(python의 경우라면 dictionary)를 활용하여 mapping을 시도해 볼 수 있음

---

### 결론
* LSP는 아키텍처 수준까지 확장할 수 있고, 반드시 확장해야 함
* 치환 가능성을 위배하면 별도 메커니즘을 추가해야 등, 시스템 아키텍처가 오염될 수 있음

---
