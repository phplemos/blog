---
title: "Object-Oriented Programming"
date: "2026-04-08T19:10:00.000Z"
lastmod: "2026-05-28T16:45:00.000Z"
draft: false
series:
  - "Roadmap CEPEDI"
Status: "Need to be reviewed"
authors:
  - "Pedro Henrique Pinheiro Lemos"
tags:
  - "POO"
categories:
  - "article"
summary: "Consolidating the four pillars of Object-Oriented Programming (OOP) — Inheritance, Abstraction, Polymorphism, Encapsulation — through relatable real-world analogies."
---

> *This post aims to consolidate foundational knowledge of Object-Oriented Programming (OOP).*

# Context

**Object-Oriented Programming (OOP)** is a paradigm that maps real-world entities into digital software models. Conceived in Norway during the 1960s (Simula 67), the paradigm has continually evolved. Today, countless programming languages implement OOP either partially or comprehensively. Java, for instance, famously treats almost everything as an object.

Before jumping straight into code, let's explore the core concepts that define this paradigm.

---

# The Foundation: Objects & Classes

In the physical world, we are surrounded by objects: chairs, watches, coffee mugs.

> *"What actually defines something as an object?"*

In computer science, an object is defined by two fundamental aspects: **properties (state)** and **behaviors (functionality)**. 

Consider a coffee mug:
- **Properties:** Cylinder shape, ceramic or plastic material, color, maximum capacity (ml), current liquid level.
- **Behaviors:** Storing liquid, being filled, being emptied.

By capturing these attributes and actions, we can faithfully represent a real-world object digitally.

---

## What is a Class?

If an object is the tangible instance, what is a **Class**?

Think of a class as a **cake mold** or **blueprint**. You define the properties and behaviors once. Whenever the computer needs an object with those exact characteristics, it uses the class to instantiate a new instance using the `new` operator.

Here is a TypeScript representation of our mug:

```typescript
class Cup {
  public color: string;
  public capacityMl: number;
  public levelMl: number = 0;

  constructor(color: string, capacityMl: number) {
    this.color = color;
    this.capacityMl = capacityMl;
  }

  public fill(amountMl: number): boolean {
    if (this.levelMl + amountMl <= this.capacityMl) {
      this.levelMl += amountMl;
      return true;
    }
    return false;
  }

  public empty(): void {
    if (this.levelMl === 0) {
      console.log("Cup is already empty");
      return;
    }
    this.levelMl = 0;
  }
}
```

A **Class** is the blueprint; an **Object** is the concrete instance created from that blueprint.

---

## State and Behavior

Once instantiated, an object holds a **State** — represented by the current values assigned to its properties (e.g., `levelMl = 250`).

**Behavior** refers to the methods on that object that read or modify its state. For instance, invoking `fill(100)` updates the internal `levelMl` property, transitioning the object to a new state.

---

# The Four Pillars of OOP

---

## 1. Inheritance
Just as you inherit genetic traits from your parents, a child class in programming can inherit attributes and methods from a parent (base) class.

In the animal kingdom:
```typescript
// Base Parent Class
class Animal {
  public species: string;
  public family: string;

  constructor(species: string, family: string) {
    this.species = species;
    this.family = family;
  }

  public eat(): void {
    console.log("Eating...");
  }
}

// Derived Child Class
class Dog extends Animal {
  public name: string;

  constructor(name: string) {
    super("Canis lupus familiaris", "Canidae");
    this.name = name;
  }

  public bark(): string {
    return "Woof!";
  }
}
```

`Dog` inherits `species`, `family`, and `eat()` from `Animal`, while introducing its own specific method, `bark()`.

---

## 2. Abstraction
Abstraction hides internal complexity and presents only the essential interface to the consumer. In OOP, this is often expressed through **Abstract Classes** or **Interfaces**.

An abstract class cannot be instantiated directly — it acts as a contract that subclasses must fulfill.

```typescript
abstract class Person {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public printName(): void {
    console.log(this.name);
  }

  // Contract: must be implemented by concrete child classes
  abstract getRole(): string;
}

class Employee extends Person {
  public employeeId: number;

  constructor(name: string, employeeId: number) {
    super(name);
    this.employeeId = employeeId;
  }

  public getRole(): string {
    return "Software Engineer";
  }
}
```

---

## 3. Polymorphism
From the Greek *polýs* (many) and *morphé* (forms), polymorphism allows objects of different classes to respond to the same interface in distinct, specialized ways.

All mammals breathe, but a dog breathes through lungs on land while a whale breathes via specialized adaptations surfacing from the ocean.

```typescript
abstract class Mammal {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract breathe(): string;
}

class Dog extends Mammal {
  public breathe(): string {
    return "Panting with lungs on land";
  }
}

class Seal extends Mammal {
  public breathe(): string {
    return "Surfacing from water to inhale air";
  }
}
```

Both share the `breathe()` signature, but execute distinct behavioral logic.

---

## 4. Encapsulation
Encapsulation shields the internal state of an object from arbitrary external mutation, restricting direct access through visibility modifiers:
- `public`: Accessible from anywhere.
- `protected`: Accessible within the class and its subclasses.
- `private`: Accessible exclusively inside the declaring class.

By controlling access via getter and setter methods or domain operations, you ensure the object maintains internal integrity at all times.

---

# Conclusion

Mastering OOP fundamentals — Classes, State & Behavior, Inheritance, Abstraction, Polymorphism, and Encapsulation — provides the indispensable architectural vocabulary needed to understand design patterns, clean code, and scalable enterprise architectures.

