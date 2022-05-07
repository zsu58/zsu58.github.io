---
title: "[SQL] DELETE FROM vs TRUNCATE"
layout: single
date: '08/05/2022'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - SQL
tags:
  - SQL
---

### DELETE FROM vs TRUNCATE
* 공통적으로 record를 삭제
* DELETE FROM은 WHERE을 통해 특정 조건을 만족하는 record 삭제/ TRUNCATE는 모든 record 삭제
* DELETE FROM보다 TRUNCATE의 속도가 빠름
* TRUNCATE의 경우 transaction안에서 사용되어도(BEGIN, END/COMMIT) 바로 commit됨, 즉 rollback이 불가능함







