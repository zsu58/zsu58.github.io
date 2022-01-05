---
title: "[Docker] Docker Network1"
layout: single
date: '02/01/2022'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - DOCKER
tags:
  - DOCKER
---

---
### Docker Network1
* Priate & Pulbic Comms in Containers
* CLI Management of Virtual Networks
* Docker DNS(Domain Name System) & How Containers Find Each Other

---

### Priate & Pulbic Comms in Containers

```bash
{% raw %}
docker container run -p 80:80 --name webhost -d nginx

# 어떤 host port에서 container port으로 forward되는지 확인 (docker container port [container_name(id)])
docker container port webhost

# get container IP (docker container inspect --format '{{ NetWorkSettings.IPAddress }}' [container_name(id)])
docker container inspect --format '{{ .NetworkSettings.IPAddress }}' webhost

# check my ip
ipconfig getifaddr en0

# container IP and my IP is different!
{% endraw %}
```
---

### CLI Management of Virtual Networks
```bash
# show network list
docker network ls

# inspect a network (docker container inspect [network_name])
docker network inspect bridge

# create a network (docker network create --driver), default driver == bridge
docker network create my_app_net

# my_app_net network에 container 생성 (--network option을 통해 지정)
docker container run -d --name new_nginx --network my_app_net nginx

# 확인
docker network inspect my_app_net

# attach a network to container (docker container connect [network_name(id)] [container_name(id)])
docker network connect a123acbd7d0a webhost

# detach a network from container (docker container disconnect [network_name(id)] [container_name(id)])
docker network disconnect a123acbd7d0a webhost
```
---

### Docker DNS(Domain Name System) & How Containers Find Each Other
```bash
# 현재 my_app_net이라는 network에 new_nginx이라는 container만 존재

# create my_nginx container in my_app_net network
docker container run -d --name my_nginx --network my_app_net nginx:alpine

# send ping from my_nginx to new_nginx (available cuz they are in the same network my_app_net)
docker container exec -it my_nginx ping new_nginx

# recommended to create custom network, docker compose makes this easier
```
---
