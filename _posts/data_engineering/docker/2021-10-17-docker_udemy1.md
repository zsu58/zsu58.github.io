---
title: "[Docker] Docker 명령어 & 기본 설정"
layout: single
date: '17/10/2021'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - DOCKER
tags:
  - CLI
  - BACKEND
  - DOCKER
---

---
### Docker 기본 명령어
* Docker 관련 기본 명령어
* Docker bash-completion 설정

---

### Docker 기본 명령어

```bash
# see version
docker version

# see info of docer
docker info

# create container w(docker container run -d(background) -p[host:container] [image_name] --name [container_name])
docker container run -d -p 80:80 nginx --name webserver

# list of running containers (give option -a to sell all containers)
docker container ls -a

# show logs of container (docker container logs [container_name(id)])
docker container logs webserver1

# show process list of one container (docker container top [container_name(id)])
docker container top webserver1

# show details of one container config (docker container inspect [container_name(id)])
docker container inspect webserver1

# show live performance data for all containers
docker container stats

# stop container (docker stop [container_name(id)])
docker stop webserver1

# remove container (docker rm [container_name(id)])
docker rm webserver1
```

---

### bash-completion

```bash
# install bash-completion by homebrew
brew install bash-completion

# activate completion for Docker commands
etc=/Applications/Docker.app/Contents/Resources/etc
ln -s $etc/docker.zsh-completion /usr/local/share/zsh/site-functions/_docker
ln -s $etc/docker-compose.zsh-completion /usr/local/share/zsh/site-functions/_docker-compose

# go into ./zshrc

# add docker & docker-compose in plugin
plugin=(
docker
docker-compose
...

# don't forget to apply
source ~/.zshrc
```

### ref
* [🔗 공식 문서](https://docs.docker.com/desktop/mac/)