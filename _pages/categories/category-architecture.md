---
title: "Programming - books"
layout: archive
permalink: categories/books
author_profile: true
sidebar_main: true
---


{% assign posts = site.categories.BOOKS %}
{% for post in posts %} {% include archive-single2.html type=page.entries_layout %} {%endfor %}
