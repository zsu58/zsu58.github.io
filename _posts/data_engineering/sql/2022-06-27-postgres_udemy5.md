---
title: "[PostgreSQL] Polymorphic Association"
layout: single
date: '27/05/2022'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - SQL
tags:
  - SQL
  - POSTGRESQL
---

### Polymorphic Association
* Definition
* Solution1
* Solution2
* Solution3

---

### Definition
* 모델이 하나 이상의 모델과 관련될 수 있는 경우
* 예를 들어, 인스타그램에 대한 DB를 만들고 '좋아요'에 대한 정보를 저장해야할 때, 게시글에 대해서, 그리고 댓글에 대해서 좋아요를 할 수 있음

---

### Solution1
* liked_type column을 통해 post인지, comment인지 구분하도록 함
* 장점: 확장성의 측면에서 좋음
* 단점: liked_id는 FK가 될 수 없음(한 COLUMN이 comments, posts의 두개의 테이블과 연관이 있으므로)

```sql
CREATE TABLE comments (
	id SERIAL PRIMARY KEY,
	contents VARCHAR(240) NOT NULL
);

CREATE TABLE posts (
	id SERIAL PRIMARY KEY,
	url VARCHAR(200) NOT NULL
);

CREATE TABLE likes (
	id SERIAL PRIMARY KEY,
	user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  -- FK to posts & comments's id
	liked_id INTEGER NOT NULL,
	comment_id INTEGER REFERENCES comments(id) ON DELETE CASCADE,
  -- 'post' or 'comment
  liked_type VARCHAR(20)
);
```

---

### Solution2
* comment와 posts와 연결되는 FK를 각각 만들기
* 장점: FK 충족, CHECK도 가능
* 단점: 확장성 측면에서 like 기능을 하는 table이 많아질수록 column이 계속 늘어나는 한계를 지님

```sql
CREATE TABLE comments (
	id SERIAL PRIMARY KEY,
	contents VARCHAR(240) NOT NULL
);

CREATE TABLE posts (
	id SERIAL PRIMARY KEY,
	url VARCHAR(200) NOT NULL
);

CREATE TABLE likes (
	id SERIAL PRIMARY KEY,
	user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
	post_id INTEGER REFERENCES posts(id) ON DELETE CASCADE,
	comment_id INTEGER REFERENCES comments(id) ON DELETE CASCADE,
	-- either post_id or comment_id should exist
	CHECK(
		COALESCE((post_id)::BOOLEAN::INTEGER, 0)
		+
		COALESCE((comment_id)::BOOLEAN::INTEGER, 0)
		= 1
	)
);
```

---

### Solution3
* 모두 독립적인 테이블로 만들기
* 단점: 테이블이 많아짐

```sql
CREATE TABLE comments (
	id SERIAL PRIMARY KEY,
	contents VARCHAR(240) NOT NULL
);

CREATE TABLE posts (
	id SERIAL PRIMARY KEY,
	url VARCHAR(200) NOT NULL
);

CREATE TABLE comments_likes (
	id SERIAL PRIMARY KEY,
	user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
	comment_id INTEGER REFERENCES comments(id) ON DELETE CASCADE,
);

CREATE TABLE posts_likes (
	id SERIAL PRIMARY KEY,
	user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
	post_id INTEGER REFERENCES posts(id) ON DELETE CASCADE,
);
```

---