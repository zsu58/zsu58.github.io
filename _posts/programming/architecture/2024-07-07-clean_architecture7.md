---
title: "[Clean Architecture] CH7 SRP(단일 책임 원칙)"
layout: single
date: '07/07/2024'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - CLEAN_ARCHITECTURE
tags:
  - CLEAN_ARCHITECTURE
---

---

### SRP(단일 책임 원칙)
* 모든 모듈은 단 하나의 일만 해야한다는 뜻이 아님
    * 이는 오히려 함수가 반드시 하나의, 단 하나의 일만 해야 한다는 원칙에 가까움
* `하나의 모듈은 하나의, 오직 하나의 액터에 대해서만 책임져야 함`
    * 모듈: 소스 파일 혹은 함수와 데이터 구조로 구성된 응집된 집합

---

### 징후1: 우발적 중복

```python
class Employee:
    def calculatePay:
        rh = self.regularHours()
        pass

    def reportHours:
        rh = self.regularHours()
        pass

    def save:
        pass

    def regularHours:
        pass
```

* 이 클래스는 세 가지 메서드가 매우 다른 세명의 액터를 책임지기 때문에 SRP를 위반함
    * calculatePay: 회계팀
    * reportHours: 인사팀
    * save: 개발팀
* 만약 regularHours와 같이 액터가 다르지만 두 함수가 동시에 호출하는 메소드가 존재하고, 한 액터에서 이 함수를 수정하면, 다른 액터에게까지 영향이 미침

---

### 징후2: 병합
* regularHours를 동시에 다른 액터들이 수정한다면 병합이 발생할 확률이 높음
* 따라서 서로 다른 액터를 뒷받침하는 코드를 서로 분리하는 것이 좋음
---

### 해결책
* 해결책은 다양하지만, 그 모두가 메서드를 각기 다른 클래스로 이동시키는 방식임
* 한 가지 해결 방법은 아래와 같음

```python
class EmployeeData:
    pass

class PayCalculator:
    def calculatePay:
        pass

class HourReporter:
    def reportHours:
        pass

class EmployeeSaver:
    def saveEmployee:
        pass
```
* 각 클래스는 자신의 메서드에 반드시 필요한 소스 코드만을 포함하고 세 클래스는 서로의 존재를 몰라 '우연한 중복'을 피할 수 있음
* 다만, 세 가지 클래스를 인스턴스화하고 추적해야한다는 단점이 존재
* 이를 해결하기 위해 흔히 쓰는 패턴으로는 퍼사드(Facade) 패턴이 존재

```python
class EmployeeData:
    pass

class EmployeeFacade:
    def calculatePay:
        PayCalculator.calculatePay()

    def reportHours:
        HourReporter.reportHours()

    def save:
        EmployeeSaver.saveEmployee()

class PayCalculator:
    def calculatePay:
        pass

class HourReporter:
    def reportHours:
        pass

class EmployeeSaver:
    def saveEmployee:
        pass
```
* EmployeeFacade 클래스는 세 클래스의 객체를 생성, 요청된 메서드를 가지는 객체로 위임하는 일을 책임짐
* 어떤 개발자는 중요한 업무 규칙을 데이터와 가깝게 배치하는 방식을 선호함
    * 이 경우 가장 중요한 메서드는 Employee 클래스에 그대로 유지하되, Employee 클래스를 덜 중요한 나머지 메서드들에 대한 퍼사드로 사용할 수 있음

```python
class Employee:
    def calculatePay:
        pass

    def reportHours:
        HourReporter.reportHours()

    def save:
        EmployeeSaver.saveEmployee()

class HourReporter:
    def reportHours:
        pass

class EmployeeSaver:
    def saveEmployee:
        pass
```

---
