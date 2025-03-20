---
title: "[Software Engineering at Google] CH1 What Is Software Engineering?"
layout: single
date: '14/03/2025'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - BOOKS
tags:
  - BOOKS
---

---

### Three critical differences between programming and software engineering
* Time
    * Your project is sustainable if, for the expected life span of your software, you are capable of reacting to whatever valuable change comes along, for either technical or business reasons
* Scale
    * A programming task is often an act of individual creation, but a software engineering task is a team effort
* Trade-offs at play
    * The job of a software engineer, or a software engineering leader, is to aim for sustainability and
management of the scaling costs for the organization, the product, and the development workflow

---

### Time and Change
* Getting through not only that first big upgrade, but getting to the point at which you can reliably stay current going forward, is the essence of long-term sustainability for your project
* Sustainability requires planning and managing the impact of required change
* Over time, we need to be much more aware of the difference between "happens to work" and "is maintainable"
* Code that depends on brittle and unpublished features of its dependencies is likely to be described as "hacky" or "clever," whereas code that follows best practices and has planned for the future is more likely to be described as "clean" and "maintainable."
* Change is not inherently good. We shouldn’t change just for the sake of change. But we do need to be capable of change

### Scale and Efficiency
* Codebase sustainability: "Your organization’s codebase is sustainable when you are able to change all of the things that you ought to change, safely, and can do so for the life of your codebase."
* Everything your organization must do repeatedly should be scalable in terms of human effort
* Expertise and shared communication forums offer great value as an organization scales
* Factors that affect the flexibility of a codebase
    * Expertise: Know what it's about, and how to do it
    * Stability: Regulary adopting releases to lower the changes between versions
    * Conformity: Regulary adopting releases to lower the changes of having codes that haven't been through
    * Familiarity: Regulary adopting releases to spot redundancies in the process of performing an upgrade and attempt to automate
    * Policy: policies like the Beyoncé Rule(it should be in the CI test if it shouldn't be affected)
* The underlying lesson is not about the frequency or difficulty of compiler upgrades, but that as soon as we became aware that compiler upgrade tasks were necessary, we found ways to make sure to perform those tasks with a constant number of engineers, even as the codebase grew

### Trade-offs and Costs
* Whenever it is efficient to do so, we should be able to explain our work when deciding between the general costs for two engineering options
* Costs include these factors
    * Financial
    * Resource
    * Personnel
    * Transaction
    * Opportunity
    * Societal
* Making good engineering decisions is all about weighing all of the available inputs and making informed decisions about the trade-offs
* In the end, decisions in an engineering group should come down to very few things
    * We are doing this because we must (legal requirements, customer requirements)
    * We are doing this because it is the best option (as determined by some appropriate decider) we can see at the time, based on current evidence
* Forks are less risky, if the project life span is short or is limited in scope, but avoid forks for interfaces that could operate across time or project-time boundaries (data structures, serialization formats, networking protocols).
* For long-lived projects, it’s often critical to have the ability to change directions after an initial decision is made
* Software Engineering and Programming are just two different problem domains with distinct constraints, values, and best practices
    * Programming is the immediate act of producing code
    * Software engineering is the set of policies, practices, and tools that are necessary to make that code useful for as long as it needs to be used and allowing collaboration across a team

### TL;DR
* Software engineering differs from Programming in dimensionality: programming is about producing code. Software engineering extends that to include the maintenance of that code for its useful life span.
* There is a factor of at least 100,000 times between the life spans of short-lived code and long-lived code. It is silly to assume that the same best practices apply universally on both ends of that spectrum
* Software is sustainable when, for the expected life span of the code, we are capable of responding to changes in dependencies, technology, or product requirements. We may choose to not change things, but we need to be capable
* Every task your organization has to do repeatedly should be scalable (linear or better) in terms of human input. Policies are a wonderful tool for making process scalable
* Being data driven is a good start, but in reality, most decisions are based on a mix of data, assumption, precedent, and argument. It’s best when objective data makes up the majority of those inputs, but it can rarely be all of them
* Being data driven over time implies the need to change directions when the data changes (or when assumptions are dispelled). Mistakes or revised plans are inevitable

---
