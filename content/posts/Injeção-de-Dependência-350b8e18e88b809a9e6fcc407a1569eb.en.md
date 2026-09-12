---
title: "Dependency Injection"
date: "2026-04-28T16:06:00.000Z"
lastmod: "2026-05-12T15:24:00.000Z"
draft: false
series:
  - "Roadmap CEPEDI"
Status: "Done"
authors:
  - "Pedro Henrique Pinheiro Lemos"
tags:
  - "PATTERNS"
  - "ARCHITECTURE"
  - "SOLID"
categories:
  - "article"
summary: "Understanding Dependency Injection, IoC Containers, and Object Lifecycles (Transient, Scoped, Singleton) through intuitive real-world analogies."
---

# Context

This article continues a series of technical study notes written during my software engineering journey. To build the habit of writing and sharing knowledge publicly — rather than passively watching tutorials — I decided to turn my learning roadmaps into technical blog posts. As we continue this series, I'm finding my voice and discovering how to distill engineering concepts clearly.

Today's topic is **Dependency Injection (DI)**. This concept builds directly on the principles of **SOLID** (specifically, the Dependency Inversion Principle). Knowledge here is cumulative: understanding object-oriented fundamentals makes this click naturally. Thanks for following along!

---

# What is a Dependency?

Before we dive in, let's establish a shared baseline:
- **Class:** The mold or blueprint for an object.
- **Abstraction:** Contracts and interfaces that define capabilities without mandating a specific concrete implementation.
- **Object:** An instantiated instance of a class (the cake baked from the mold).
- **Contract/Interface:** A specification guaranteeing certain behaviors if rules are respected.

Remember the **Dependency Inversion Principle (DIP)**? We decouple high-level classes by having them depend on abstractions (interfaces) rather than concrete implementations. 

As a direct consequence of applying DIP, **Dependency Injection** becomes essential: if our class depends on an interface, *something* needs to provide the concrete instance at runtime.

> *"I get the concept of dependencies, but give me a quick concrete example — it still feels too abstract."*

Hold on — before we write code, we need to understand a core architectural piece:
*"If dependencies must be injected when a class is instantiated, who decides which implementation to inject? If something needs to coordinate and manage that lifecycle, can we delegate it to a centralized manager?"*

That brings us to the foundational mechanism found across modern frameworks: **Dependency Injection Containers (IoC Containers)**.

---

# Containers

Understanding DI Containers was an eye-opener for me. I had already used them extensively in **Laravel**, **Spring Boot**, and **NestJS**, without fully grasping the underlying mechanics coordinating everything under the hood.

A **Container** is essentially the registry and runtime environment where your object instances are created, wired together, and managed. Every managed object in your application lives inside and is resolved through this container.

![](https://notion-hugo.pages.dev/api?block_id=352b8e18-e88b-80e7-a2e3-cd0f1669cec5)

The benchmark above compares major IoC Containers in the .NET ecosystem across scopes such as **Singleton**, **Transient**, **Combined**, and **Complex**. While implementations differ in performance and optimization targets, the conceptual foundation remains identical. Understanding the fundamentals allows you to comfortably navigate any framework's DI system.

---

# Object Lifecycles

When we think about a lifecycle, we envision a beginning, a middle, and an end — a bounded timeline. An object's lifecycle in software represents how an instance is instantiated, how long it persists in memory, and when it is disposed of while the application runs.

### The Bakery Analogy 🥖
Imagine a bakery as our running application. The bakery operates from 07:00 to 20:00. Throughout the day, it produces various items (objects) based on recipes and molds (classes): bread, cakes, pastries.

These items have distinct lifecycles:
- **Production (Beginning)**: The item is baked/instantiated.
- **Display/Serving (Middle)**: The item is available and utilized.
- **Sale/Disposal (End)**: The item is consumed or cleared from memory.

In object-oriented programming, constructors initialize objects, and garbage collectors or destructors clean them up. By configuring the DI container, you declare the lifecycle strategy for each dependency.

---

# Lifecycle Types (The .NET / Modern Standard)

Most modern frameworks (.NET, NestJS, Spring) standardize around three primary lifecycle scopes:

### 1. Transient
A **Transient** service is freshly created **every single time** it is requested from the container. It has a short lifespan: used immediately by the calling class and promptly garbage collected once the work finishes.

*Bakery parallel:* Fresh rolls baked on demand for an individual order.

### 2. Scoped
In web applications, a **Scoped** service is created **once per client request (connection)**. All components participating in the processing of that specific HTTP request share the exact same instance. Once the request completes and the response is sent, the instance is disposed of.

*Bakery parallel:* A shopping basket assigned to a specific customer while they browse the store.

### 3. Singleton
A **Singleton** instance is created **only once** (either on startup or upon first request) and shared across the **entire application** for all subsequent requests throughout the process's lifetime.

*Bakery parallel:* The cash register or the main display shelf — there is only one, and everyone uses the same instance.

---

# Conclusion

Theoretical concepts can feel dry and abstract until you map them to concrete engineering daily workflows. Externalizing knowledge through writing and analogies cements understanding like nothing else.

Whenever you configure services in Spring (`@Scope`), NestJS (`Scope.DEFAULT / Scope.REQUEST / Scope.TRANSIENT`), or .NET (`AddTransient`, `AddScoped`, `AddSingleton`), you now understand the exact mechanics governing their lifecycles.

---

# References

- [Microsoft Learn: Dependency Injection in .NET](https://learn.microsoft.com/en-us/dotnet/core/extensions/dependency-injection)
- [IoC Container Benchmark Performance Comparison](https://www.palmmedia.de/Blog/2011/8/30/ioc-container-benchmark-performance-comparison)
- [Design Patterns: Dependency Injection](https://www.devmedia.com.br/padrao-de-injecao-de-dependencia/18506)

