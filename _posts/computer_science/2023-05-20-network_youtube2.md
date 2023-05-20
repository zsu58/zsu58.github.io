---
title: "[Computer Science] 네트워크 기초1 실습"
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
### 네트워크 기초1 실습
* 구글과의 연결
* Wireshark으로 프로토콜 확인

---
### 구글과의 연결
* 총 11개의 LAN 네트워크를 지나감
  * 192.168.0.1 -> 180.233.237.1 -> ... -> 8.8.8.8
```bash
traceroute 8.8.8.8
# traceroute to 8.8.8.8 (8.8.8.8), 64 hops max, 52 byte packets
#  1  192.168.0.1 (192.168.0.1)  22.893 ms  5.617 ms  11.039 ms
#  2  180.233.237.1 (180.233.237.1)  10.729 ms  7.556 ms  7.693 ms
#  3  180.233.255.1 (180.233.255.1)  7.629 ms  8.049 ms  11.970 ms
#  4  124.195.255.21 (124.195.255.21)  9.405 ms  7.232 ms  23.705 ms
#  5  211.61.160.25 (211.61.160.25)  9.433 ms  10.553 ms  8.019 ms
#  6  211.242.42.69 (211.242.42.69)  12.012 ms  8.397 ms  19.246 ms
#  7  211.242.0.66 (211.242.0.66)  8.946 ms  16.462 ms  9.576 ms
#  8  192.145.251.168 (192.145.251.168)  43.641 ms  51.184 ms  41.471 ms
#  9  108.170.242.97 (108.170.242.97)  38.861 ms  40.333 ms
#     108.170.242.161 (108.170.242.161)  43.930 ms
# 10  142.250.226.7 (142.250.226.7)  42.356 ms
#     142.250.226.61 (142.250.226.61)  41.880 ms
#     74.125.251.237 (74.125.251.237)  41.814 ms
# 11  dns.google (8.8.8.8)  42.030 ms  46.830 ms  41.139 ms
```

---

### Wireshark으로 프로토콜 확인
* https://www.wireshark.org/
* http://me.go.kr 접속시 1.1 200 OK html/text 패킷
  * 서버의 text/html 파일을 받아온 것
  * 총 4개의 프로토콜
    * IPv4
    * Ethernet
    * TCP

<p align="center">
    <img src="/img/computer_science/network/wireshark1.png" align="center">
</p>

---

### ref
* [🔗 영상1](https://www.youtube.com/watch?v=paJf7JbBWqY&list=PL0d8NnikouEWcF1jJueLdjRIC4HsUlULi&index=2)
* [🔗 영상2](https://www.youtube.com/watch?v=vBrQ3yzerMg&list=PL0d8NnikouEWcF1jJueLdjRIC4HsUlULi&index=3)
