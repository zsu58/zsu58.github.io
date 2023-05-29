---
title: "[Computer Science] 따라學IT 네트워크 기초1 - 2계층에서의 통신"
layout: single
date: '21/05/2023'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - NETWORK
tags:
  - NETWORK
---

---
### 2계층에서의 통신
* 2계층에서 하는 일
* 2계층에서 사용하는 주소
* 2계층 프로토콜
* MAC주소 및 Ethernet 프로토콜 캡처 및 분석


---
### 2계층에서 하는 일
#### 기능
* `흐름제어`: `하나의 네트워크 대역`, 즉 `같은 네트워크` 상에 존재하는 여러 장비 중에 `어떤 장비`가 `어떤 장비`에게 데이터를 전달하는지
* `오류제어`: 데이터에 오류가 있는지가 수행됨
#### 네트워크 크기
* 하나의 네트워크 대역(LAN)에서만 통신할 때 사용됨
* 다른 네트워크와 통신 시 항상 3계층이 필요(즉, 3계층의 주소와 프로토콜이 존재해야 다른 네트워크와 통신이 가능)

---

### 2계층에서 사용하는 주소
* MAC주소(물리적인 주소)
  * 총 12개의 16진수(c.f. 16진수 2 개당 1 byte이므로 MAC주소는 총 6byte)로 이루어져 있음
  * 앞의 총 6개의 16진수는 회사의 고유번호(OUI)
  * 모든 기계는 고유의 MAC주소를 가짐
  * en0의 ether 옆 주소
```bash
ifconfig
# ...
# en0: flags=8863<UP,BROADCAST,SMART,RUNNING,SIMPLEX,MULTICAST> mtu 1500
#         options=6463<RXCSUM,TXCSUM,TSO4,TSO6,CHANNEL_IO,PARTIAL_CSUM,ZEROINVERT_CSUM>
#         ether a0:a1:22:34:23:22 
# ...
```

---

### 2계층 프로토콜

<p align="center">
    <img src="/img/computer_science/network/ethernet1.png" align="center">
</p>

* ethernet 프로토콜의 총 길이: 14 byte(data 제외)
  * destination address: 받는 사람 MAC주소(길이: 6 byte)
    * 16진수는 2개당 1 byte
  * source address: 보내는 사람 MAC주소(길이: 6 byte)
  * ethernet type: 3계층 프로토콜 종류 정보(길이: 2 byte)
    * IP인 경우: 0800(16진수)
    * ARP인 경우: 0806(16진수)
* data: 페이로드
* preamble: 몰라도 됨

---

### MAC주소 및 Ethernet 프로토콜 캡처 및 분석

<p align="center">
    <img src="/img/computer_science/network/wireshark7.png" align="center">
</p>

* 맥북 -> 아이폰으로 ping 날림
* 46:08:c5:8d:7b:3c(아이폰 MAC)
* b0:be:83:--:--:--(맥북 MAC주소)
* 0800: 상위 프로토콜은 IP

---

### ref
* [🔗 영상](https://www.youtube.com/watch?v=HkiOygWMARs&list=PL0d8NnikouEWcF1jJueLdjRIC4HsUlULi&index=5)
* [🔗 ifconfig 종류](https://stackoverflow.com/questions/29958143/what-are-en0-en1-p2p-and-so-on-that-are-displayed-after-executing-ifconfig)
* [🔗 Iphone 맥주소](https://m.blog.naver.com/kangyh5/222566678630)
