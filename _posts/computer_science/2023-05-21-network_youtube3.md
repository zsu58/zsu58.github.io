---
title: "[Computer Science] 따라學IT 네트워크의 기준 - 네트워크 모델"
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
### 네트워크 모델
* 네트워크 모델의 종류
* 두 모델 비교
* 네트워크를 통해 전달되는 데이터, 패킷
* 실습

---
### 네트워크 모델의 종류
#### TCP/IP 모델
* 4계층: 응용
* 3계층: 전송
* 2계층: 네트워크
* 1계층: 네트워크 인터페이스

#### OSI 7계층 모델 및 계층별 프로토콜
* 7계층: 응용(네트워크를 이용하는 소프트웨어, 사용자 인터페이스 담당)
  * `HTTP`, SMTP, IMAP, POP, SNMP, FTP, TELNET, SSH
* 6계층: 표현(Encoding, Decoding, 암호, 압축, 데이터의 포맷 결정)
  * SMB, AFP, XDR
* 5계층: 세션(프로그램 간 논리적인 연결)
  * NetBIOS
* 4계층: 전송(Process 간 통신)
  * `TCP`, `UDP`, SPX
* 3계층: 네트워크(라우팅 및 목적지까지 데이터를 전송)
  * `IP`, `ICMP`, X 25, CLNP, `ARP`, RARP, BGP, OSPF, RIP, IPX, DDP
* 2계층: 데이터 링크(물리적인 연결, Flow Control(흐름 제어), Error Control(에러 제어))
  *`Ethernet`, Token ring, PPP, HDLC, Frame Relay, ISDN, ATM, Wireless LAN, FDDI
* 1계층: 물리(bit 신호를 물리적인 전송매체로 전달, 배선, 커넥터 등과 같은 물리적인 연결구조)
  * 전선, 전파, 황섬유, 동측케이블, PSTN, 리피터, DSU, CSU, 모뎀

---

### 두 모델 비교
#### 공통점
* 계층적 네트워크 모델
* 계층간 역할 정의

#### 차이점
* 계층의 수
* TCP/IP는 프로토콜 기반 vs OSI는 역할 기반
* TCP/IP는 데이터 전송기술 특화 vs OSI는 통신 전반에 대한 표준
  * TCP/IP는 실무적 vs OSI는 논리적

---

### 네트워크를 통해 전달되는 데이터, 패킷
* `패킷`: 네트워크 상에서 전달되는 데이터
  * 블록 단위로 형식화된 데이터
    * 실제로는 0,1로만 이루어져 있지만, 블록 단위로 구분이 가능하다는 의미
  * 제어 정보와 사용자 데이터(페이로드)로 이루어져 있음
    * 헤더 / 페이로드 / 풋터
      * ex1. HTTP를 페이로드로 TCP를 헤더로 붙임
      * ex2. HTTP를 & TCP를 페이로드로 IPv4를 헤더로 붙임
      * ex3. HTTP & TCP & IPv4를 페이로드로 Ethernet을 헤더로 붙임
      * 풋터는 일반적으로 존재하지 않음
      * 예시를 통해 패킷은 여러 프로토콜들로 캡슐화되어 있는 것을 알 수 있음(상자 안의 상자 안의 상자 같은 형태)
  * `캡슐화`: 페이로드에 프로토콜을 페이로드로 붙이는 방식
    * 상위 계층의 프로토콜은 하위 프로토의 헤더가 될 수 없음, 동일한 계층은 가능
    * 데이터를 보낼 때 발생
  * `디캡슐화`: 하위 계층의 프로토콜부터 확인하면서 데이터를 확인하는 과정
  * 계층 별로 패킷의 이름은 상이할 수 있음
    * `PDU`: 4계층이며, `TCP + 데이터`로 이루어져 있음
    * `패킷`: 3계층이며, `IPv4 + TCP + 데이터`로 이루어져 있음
      * 네트워크 상에서 전달되는 데이터를 뜻하는 패킷과 동음이의어=
    * `프레임`: 2계층이며, `Ethernet + IPv4 + TCP + 데이터`로 이루어져 있음

---

### 실습 - 프로토콜의 캡슐화된 모습 및 계층 별 프로토콜 확인
#### ARP 프로토콜(3계층)
* ARP(3계층)
  * 페이로드만 있으며, 헤더가 없음
<p align="center">
    <img src="/img/computer_science/network/wireshark2.png" align="center">
</p>

* Ethernet(2계층)
  * ARP 프로토콜이 가운데 페이로드로 + 헤더까지 존재
<p align="center">
    <img src="/img/computer_science/network/wireshark3.png" align="center">
</p>

#### ICMP(3계층)
* ICMP(3계층)
<p align="center">
    <img src="/img/computer_science/network/wireshark4.png" align="center">
</p>

* IPv4(3계층)
  * IP는 언제나 ICMP 앞에 붙음
  * ARP는 IP와 쓰이지 않음
<p align="center">
    <img src="/img/computer_science/network/wireshark5.png" align="center">
</p>

* Ethernet(2계층)
<p align="center">
    <img src="/img/computer_science/network/wireshark6.png" align="center">
</p>

---

### ref
* [🔗 영상](https://www.youtube.com/watch?v=y9nlT52SAcg&list=PL0d8NnikouEWcF1jJueLdjRIC4HsUlULi&index=4)