---
title: "[Docker] Docker Compose"
layout: single
date: '04/01/2022'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - DOCKER
tags:
  - DOCKER
---

---
### Docker Compose
* Basic Docker compose commands
* Build a Compose File For a Multi-Container Service
* Compose for Run-Time Building and Multi-Container Development

---

### Basic Docker compose commands
```bash
# pwd에 docker-compose.yml 존재, docker-compose 시작 (docker compose up)
docker-compose up

# docker compose 종료 (docker-compose down)
docker-compose down
```
---

### Build a Compose File FOr a Multi-Container Service
* build a drupal content management system

```bash
# use Drupal image along with postgres image
# use ports to expose Drupal on 8060 for localhost:8060
# set POSTGRES_PASSWORD for postgres
version: '2'

services:
  drupal:
    image: drupal
    ports:
      - 8050:80
    volumes:
      - /var/www/html/modules
      - /var/www/html/profiles
      - /var/www/html/themes
      - /var/www/html/sites

  postgres:
    image: postgres
    environment: 
       - POSTGRES_PASSWORD=1234
```

* Drupal DB

```bash
# walk through Drupal via browser
# Drupal assumes DB is localhost so it has to be changed to 'postgres'

# volume까지 삭제
docker-compose down -v
```
---

### Compose for Run-Time Building and Multi-Container Development
* Build custom drupal image for local testing

```bash
# assignment instruction
## Dockerfile
- First you need to build a custom Dockerfile in this directory, `FROM drupal:8.8.2` NOTE: if it fails to build, try the latest 8 branch version with `FROM drupal:8`
- Then RUN apt package manager command to install git: `apt-get update && apt-get install -y git`
- Remember to cleanup after your apt install with `rm -rf /var/lib/apt/lists/*` and use `\` and `&&` properly. You can find examples of them in drupal official image. More on this below under Compose file.
- Then change `WORKDIR /var/www/html/themes`
- Then use git to clone the theme with: `RUN git clone --branch 8.x-3.x --single-branch --depth 1 https://git.drupalcode.org/project/bootstrap.git`
- Combine that line with this line, as we need to change permissions on files and don't want to use another image layer to do that (it creates size bloat). This drupal container runs as www-data user but the build actually runs as root, so often we have to do things like `chown` to change file owners to the proper user: `chown -R www-data:www-data bootstrap`. Remember the first line needs a `\` at end to signify the next line is included in the command, and at start of next line you should have `&&` to signify "if first command succeeds then also run this command"
- Then, just to be safe, change the working directory back to its default (from drupal image) at `/var/www/html`

## Compose File
- We're going to build a custom image in this compose file for drupal service. Use Compose file from previous assignment for Drupal to start with, and we'll add to it, as well as change image name.
- Rename image to `custom-drupal` as we want to make a new image based on the official `drupal:8.8.2`.
- We want to build the default Dockerfile in this directory by adding `build: .` to the `drupal` service. When we add a build + image value to a compose service, it knows to use the image name to write to in our image cache, rather then pull from Docker Hub.
- For the `postgres:12.1` service, you need the same password as in previous assignment, but also add a volume for `drupal-data:/var/lib/postgresql/data` so the database will persist across Compose restarts.

## Start Containers, Configure Drupal
- Start containers like before, configure Drupal web install like before.
- After website comes up, click on `Appearance` in top bar, and notice a new theme called `Bootstrap` is there. That's the one we added with our custom Dockerfile.
- Click `Install and set as default`. Then click `Back to site` (in top left) and the website interface should look different. You've successfully installed and activated a new theme in your own custom image without installing anything on your host other than Docker!
- If you exit (ctrl-c) and then `docker-compose down` it will delete containers, but not the volumes, so on next `docker-compose up` everything will be as it was.
- To totally clean up volumes, add `-v` to `down` command.
```

```bash
# Dockerfile
FROM drupal:8.8.2

RUN apt-get update && apt-get install -y git \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /var/www/html/themes

RUN git clone --branch 8.x-3.x --single-branch --depth 1 https://git.drupalcode.org/project/bootstrap.git \
    && chown -R www-data:www-data bootstrap

WORKDIR /var/www/html
```

```bash
# docker-compose.yml
version: '2'

services:
  drupal:
    image: custom-drupal
    build: .
    ports:
      - 8050:80
    volumes:
      - /var/www/html/modules
      - /var/www/html/profiles
      - /var/www/html/themes
      - /var/www/html/sites


  postgres:
    image: postgres:12.1
    environment: 
      - POSTGRES_PASSWORD=1234
    volumes:
      - drupal-data:/var/lib/postgresql/data

volumes:
  drupal-data:
  drupal-modules:
  drupal-profiles:
  drupal-themes:
  drupal-sites:
```