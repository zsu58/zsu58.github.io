---
title: "[Computer Science] 따라學IT 네트워크란 무엇인가?"
layout: single
date: '20/05/2023'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - NETWORK
tags:
  - NETWORK
---

---
### 네트워크 기초1
* 네트워크란 무엇인가?
* 네트워크의 분류
* 네트워크의 통신 방식
* 네트워크의 프로토콜

---
### 네트워크란 무엇인가?
* `네트워크`: 노드들이 데이터를 공유할 수 있게 하는 디지털 전기통신망의 하나
* `인터넷`: 네트워크의 종류 중 하나로, 전 세계의 컴퓨터를 연결한 거대한 네트워크

---

### 네트워크의 분류
#### 크기에 따른 분류
* `LAN(Local Area Network)`: 가까운 지역을 하나로 묶은 네트워크
* `WAN(Wide Area Network)`: 멀리 있는 지역을 한데 묶은 네트워크
  * 즉 가까운 지역끼리 묶인 LAN과 LAN을 다시 하나로 묶은 것
* 그 외 기타: (`MAN` `VLAN`, `CAN`, `PAN` 등)

#### 연결 형태에 따른 분류
* `Star형`: 중앙 장비에 모든 노드가 연결된 형태(e.g. 일반 가정집의 공유기)
* `Mesh형`: 여러 노드들이 서로 그물처럼 연결된 형태(e.g. 나라 간 인터넷 연결 https://www.submarinecablemap.com)
* `Tree형`: 계층 구조로 연결된 형태
* 그 외 기타: (`링형`, `버스형`, `혼합형` 등)

---

### 네트워크의 통신 방식
* `유니 캐스트`: 특정 대상이랑만 1:1로 통신
* `멀티 캐스트`: 특정 다수와 1:N으로 통신
* `브로드 캐스트`: 네트워크에 있는 모든 대상과 통신

---

### 네트워크의 프로토콜
* `프로토콜`: 노드와 노드 간 통신 시 `어떤 노드`가 `어느 노드`에게 `어떤 데이터`를 `어떻게`보내는지의 양식 
* 종류(대표적인 것 몇 개)
  * 가까운 곳: Ethernet 프로토콜 (MAC 주소)
  * 멀리 있는 곳: ICMP / IPv4 / ARP (IP 주소)
  * 여러가지 프로그램 연락 시: TCP, UDP (포트 번호)
* `패킷`: 이런 프토콜들을 캡슐화한 것

---

### ref
* [🔗 영상](https://www.youtube.com/watch?v=Av9UFzl_wis&list=PL0d8NnikouEWcF1jJueLdjRIC4HsUlULi&index=1)
