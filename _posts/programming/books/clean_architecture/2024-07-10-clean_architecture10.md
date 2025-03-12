---
title: "[Clean Architecture] CH10 ISP(인터페이스 분리 원칙)"
layout: single
date: '10/07/2024'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - BOOKS
tags:
  - BOOKS
---

---

### ISP와 언어
* 정적 타입 언어는 사용자가 `import`, `use`, `include`와 같은 타입 선언문을 사용하도록 강제함
* 파이썬 같은 동적 타입 언어에서는 소스 코드에 이러한 선언문이 존재하지 않으며 런타임에 추론이 발생하기에 소스 코드 의존성이 아예 없음
    * 즉, 재컴파일과 재배포가 필요 없음

---

### ISP와 아키텍처
* 일반적으로, 필요 이상으로 많은 걸 포함하는 모듈에 의존하는 것은 해로운 일임(재컴파일과 재배포를 강제하기에)

---

### 결론
* 불필요한 짐을 실은 무언가에 의존하면 예상치 못한 문제에 빠지게 됨

---