---
title: "Clean Code"
date: "2026-04-30T16:55:00.000Z"
lastmod: "2026-05-13T20:24:00.000Z"
draft: false
series:
  - "Roadmap CEPEDI"
Status: "Done"
authors:
  - "Pedro Henrique Pinheiro Lemos"
tags:
  - "PATTERNS"
categories:
  - "article"
summary: "An exploration of Clean Code through the lens of daily habits, real-world analogies, and engineering craftsmanship."
---

# Context

From here on out, I'm keeping post introductions straightforward so each article can stand on its own feet. Today we're diving into **Clean Code** — discussing the philosophy, mental models, and daily habits behind writing clean software, paired with real-world analogies to make the concepts stick.

---

# Philosophical Reflections

Throughout my studies, I've come to realize that **Clean Code** is the philosophy of someone who pursues excellence in whatever they do. If you genuinely care about quality, you seek to craft things in the best possible way. 

Consider this mental exercise: when you buy a product or service, you demand quality and care from the maker. Naturally, the stakeholders hiring you as a software engineer (clients, tech leads, managers) expect that exact same standard from your product: your code.

Clean code reflects more on who you are as a professional than on the lines of text themselves. Once you adopt that mindset, you develop a sharper, healthier critical eye regarding your own deliverables. And cultivating that eye begins with studying what constitutes true quality — famously distilled in Robert C. Martin's classic book, *Clean Code*.

---

# Clean Code as an Environment

After learning Object-Oriented Programming, an analogy really clicked for me: both real-world objects and programming objects exist within a defined space or environment, governed by rules of organization.

Think of your bedroom: you could kick your shoes into a corner, leave dirty plates on the desk, or skip sweeping the floor. Gradually, those small oversights degrade the entire living space. In programming, your running application is that environment, and every class and object is an item inside it.

When you walk into an untidy room, the clutter creates friction — just trying to find something feels exhausting. In an organized room, everything is in its designated place and maintenance is effortless. Clean Code is built on the same foundation: quality and excellence are formed through daily, deliberate habits.

---

## The Role of Habit

When you realize clean code is tied to how you think and execute your daily routine, you look at how to refine the underlying process. Over time, healthy habits produce code that is simple, direct, efficient, and easy to read.

In *The Power of Habit* by Charles Duhigg, the author outlines the three components of a habit loop:
1. **Cue (Trigger):** What sparks the impulse or energy to execute an action.
2. **Routine:** The sequence of steps or tasks performed.
3. **Reward:** The payoff that signals to the brain that this loop is worth remembering.

Consider a simple routine like taking a shower before bed:
- **Cue:** The clock approaching 21:30.
- **Routine:** Grab a towel, head to the bathroom, shower, dry off, hang the towel to dry.
- **Reward:** Going to bed feeling comfortable and refreshed.

Programming works the same way. The steps you take when opening an editor form an ingrained routine. If you identify and refine those steps, integrating clean code practices into your daily loop becomes automatic rather than a chore.

---

## Core Best Practices

Let's break down the practical conventions recommended by Clean Code:

### 1. Meaningful Names
- **Reveal Intent:** Variable and method names should clearly communicate what they represent within the block.
- **Explain Why It Exists:** Names should be self-documenting.
- **Pronounceable:** Use real, natural words rather than cryptic acronyms or shorthand.
- **Consistent Language:** If you write a class in English, stick to English throughout — avoid language mixing.
- **Avoid Generic Labels:** If a name feels generic (like `data` or `info`), pause and clarify what it actually holds.
- **Line Length:** Keep lines around ≤ 100 characters for comfortable readability.

### 2. Classes
- **Use Nouns:** Classes represent objects and entities, so their names should be nouns (`Invoice`, `UserManager`, `SpaceBooking`).
- **File Length:** Keep class files focused and modular (aim for ≤ 500 lines).

### 3. Methods
- **Use Verbs in the Infinitive:** Methods define actions and behavior (`calculateTotal`, `sendNotification`, `cancelBooking`).
- **Extract Private Helper Methods:** If a method contains a large block that performs a distinct sub-task, extract it into a descriptive private method.
- **Do One Thing:** The Single Responsibility Principle in action.
- **Minimize Parameters:** Where many arguments are needed, group them into descriptive DTOs (Data Transfer Objects).
- **No Side Effects:** A method named `processPayment()` shouldn't secretly email the accounting department without that being part of its explicit contract.
- **Method Length:** Aim to keep methods concise (≤ 20 lines where possible).

### 4. Comments
Comments should be the exception, not the rule: if code requires an explanation to be understood, the code itself is usually asking for a refactor. Legitimate use cases include:
- Warning of subtle traps or non-obvious constraints.
- Legal and licensing notices.
- Expressing complex mathematical formulas or domain rules.
- Actionable `TODO:` items for immediate follow-ups.

### 5. Error Handling
- Anticipating and gracefully handling errors is a developer's core responsibility.
- Favor domain-specific exceptions over generic error codes.
- Be explicit in exception messages.
- Avoid returning `null` where an empty collection or `Optional` pattern makes the flow safer.

---

# Conclusion

Clean code is not about perfectionism for its own sake — it's about respecting your teammates, your future self, and the environment in which your system lives. Leaving code slightly cleaner than you found it keeps projects maintainable and enjoyable to work on.

---

# References

- [Gov.br: Clean Code & Software Engineering Practices](https://www.gov.br/governodigital/pt-br/estrategias-e-governanca-digital/startupgovbr/guia-gps/pages/5-saiba-mais/praticas-de-engenharia-de-software/clean-code)
- [Clean Code: What is Clean Code? by Filipe Deschamps](https://medium.com/@FilipeDeschamps/clean-code-2-o-que-%C3%A9-c%C3%B3digo-limpo-869047c1492a)

