---
title: "Design Patterns"
date: "2026-05-13T17:04:00.000Z"
lastmod: "2026-05-19T19:15:00.000Z"
draft: true
series:
  - "Roadmap CEPEDI"
Status: "In progress"
authors:
  - "Pedro Henrique Pinheiro Lemos"
tags:
  - "PATTERNS"
  - "DESIGN PATTERNS"
categories:
  - "article"
summary: "An intuitive introduction to Gang of Four (GoF) design patterns: Creational, Structural, and Behavioral."
---

# Context

Continuing our room/environment analogy, this post explores patterns for organizing objects based on their roles and lifecycles. While there are dozens of software design patterns, we will focus on the most widely adopted in the industry: the **GoF (Gang of Four)** patterns, defined by four pioneer software engineers whose work underpins modern object-oriented design.

We will look at the core principles across the three foundational categories. This post aims to be conceptual and straightforward, focusing on intuition rather than lengthy implementations.

---

# What are Design Patterns?

Returning to our environment analogy: think of design patterns as conventions for how items should behave and fit within a given space. Rules for crafting objects from a mold that dictates exactly where they belong — organized, clean, with zero clutter, just like a well-arranged room where everything has its designated spot.

![](https://notion-hugo.pages.dev/api?block_id=363b8e18-e88b-80f1-8a05-f0ca78b585bf)

This image represents an organized environment adhering to intentional design patterns — a visual parallel that helps us internalize the concept.

---

## Pattern Categories

Just as different objects in a room serve different functions and are organized accordingly, programming features distinct categories of recurring architectural challenges with battle-tested solutions. The Gang of Four classifies these patterns into three primary families:

![](https://notion-hugo.pages.dev/api?block_id=365b8e18-e88b-8053-87d0-f4cfb0e52f7a)

### 1. Creational Patterns
Creational patterns handle the instantiation and lifecycle of objects, decoupling a system from how its objects are created, composed, and represented.

Think of them like a specialized factory: need an object of a particular type? Instead of manually instantiating it with `new` all over your codebase, you delegate creation to a mechanism designed specifically for that purpose.

### 2. Structural Patterns
Structural patterns focus on object composition, explaining how classes and objects can be assembled into larger, flexible structures using inheritance and interfaces while keeping the system efficient and maintainable.

### 3. Behavioral Patterns
Behavioral patterns deal with algorithms, communication, and the assignment of responsibilities between objects, ensuring loose coupling while allowing seamless interaction.

---

# Conclusion

Design patterns aren't copy-paste templates; they are proven mental models for solving architectural problems. Understanding the three categories — Creational, Structural, and Behavioral — gives you a common vocabulary and a solid foundation for writing scalable, maintainable software.

