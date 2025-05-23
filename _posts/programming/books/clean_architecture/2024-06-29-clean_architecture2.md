---
title: "[Clean Architecture] CH2 두 가지 가치에 대한 이야기"
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

### 두 가지 가치
* 모든 소프트웨어 시스템은 `행위`와 `구조`라는 가치를 제공
* 소프트웨어 개발자는 두 가치를 모두 반드시 높게 유지해야하는 책임을 짐

---

### 행위(behavior)
* 소프트웨어가 가지고 있는 기능
    * 이를 통해 이해관계자는 수익을 창출하거나 비용을 절약함

---

### 구조(architecture)
* 소프트웨어(software)는 기계(ware)가 부드러워/유연해야(soft)한다는 의미를 함축
    * 즉, 기계의 행위를 쉽게 변경할 수 있어야함
    * 변경사항을 적용하는데 드는 어려움은 변경되는 범위(scope)에 비례하며, 변경사항의 형태(shape)와는 관련이 없어야 함
* 아키텍처가 특정 형태를 다른 형태보다 선호할수록, 새로운 기능을 기존 구조에 맞추기 힘들어짐
    * 따라서 아키텍처는 형태에 독립적이어야하며, 그럴수록 더 실용적임

---

### 더 높은 가치
* `행위 < 구조`
    * 변경이 어려운 프로그램은 점차 쓸모가 없어지지만, 그 반대는 계속 유용함

---

### 아키텍처를 위해 투쟁하라
* `소프트웨어 개발자인 당신도 이해관계자임을 명시하라`
    * 개발자는 소프트웨어를 안전하게 보호해야할 책임(역할/책무)이 있음

---
