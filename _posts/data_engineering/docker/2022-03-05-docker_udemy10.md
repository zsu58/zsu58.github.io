---
title: "[Docker] Docker Swarm"
layout: single
date: '05/03/2022'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - DOCKER
tags:
  - DOCKER
---

---
### Docker Swarm
* Initialize Docker Swarm
* 



---

### Initialize Docker Swarm
* Creates root certificate for the swarm used for establishing trust and sign certificates for all nodes and managers
* Creates a special certificate for this first manager node
* Creates a token that can be used when other nodes join this swarm
* Done in the Background
  * Creates Raft Consensus Databases on disk which ensures consistency across multiple nodes by storing configuration of the swarm, first manager(also encrypts them)

```bash
# check current status of docker swarm
docker info | grep Swarm

# lots of PKI & security automation
docker swarm init

# Swarm initialized: current node (kw8l8nof3mith3y47yxt2pvox) is now a manager.

# To add a worker to this swarm, run the following command:

#     docker swarm join --token SWMTKN-1-2kcpbjx7mbboet9sca6w7hz2b2zsy80jj6xn5hrm0ikvec4ixf-6n55505nodbpri0bkn0zw9o6o 192.168.65.3:2377

# To add a manager to this swarm, run 'docker swarm join-token manager' and follow the instructions.
```
---

### 
* 

```bash
#
docker node ls

# replaces the docker run command for swarm
docker service

docker service create alpine ping 8.8.8.8

# replicas number means: actually_running/specified_to_run
docker service ls

# 
docker service ps great_nightingale.1

# docker service update [service_name/service_id] [command]
docker service update 6y447v5fee1g --replicas 3

```
---

