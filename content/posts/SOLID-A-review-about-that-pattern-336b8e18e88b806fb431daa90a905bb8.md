---
title: "SOLID - A review about that pattern"
date: "2026-04-02T14:37:00.000Z"
lastmod: "2026-04-02T16:15:00.000Z"
draft: true
series: []
authors:
  - "Pedro Henrique Pinheiro Lemos"
tags:
  - "SOLID"
  - "ARCHITECTURE"
  - "PATTERNS"
categories: []
summary: "Here we will fix some concepts to understand how implements that
  pattern on our coding habits"
NOTION_METADATA:
  object: "page"
  id: "336b8e18-e88b-806f-b431-daa90a905bb8"
  created_time: "2026-04-02T14:37:00.000Z"
  last_edited_time: "2026-04-02T16:15:00.000Z"
  created_by:
    object: "user"
    id: "7139b64c-7267-446b-aa5a-5024eba8323f"
  last_edited_by:
    object: "user"
    id: "7139b64c-7267-446b-aa5a-5024eba8323f"
  cover: null
  icon: null
  parent:
    type: "data_source_id"
    data_source_id: "1e6b8e18-e88b-8311-a61f-0775b643d0d5"
    database_id: "435b8e18-e88b-83ea-b069-013eca9bb0a9"
  in_trash: false
  is_archived: false
  is_locked: false
  properties:
    series:
      id: "B%3C%3FS"
      type: "multi_select"
      multi_select: []
    draft:
      id: "JiWU"
      type: "checkbox"
      checkbox: true
    authors:
      id: "bK%3B%5B"
      type: "people"
      people:
        - object: "user"
          id: "7139b64c-7267-446b-aa5a-5024eba8323f"
          name: "Pedro Henrique Pinheiro Lemos"
          avatar_url: "https://s3-us-west-2.amazonaws.com/public.notion-static.com/49a347\
            4c-15fe-4e11-afed-a15f491f9e7c/Profile_Pic.png"
          type: "person"
          person:
            email: "phplemos.dev@gmail.com"
    custom-front-matter:
      id: "c~kA"
      type: "rich_text"
      rich_text: []
    tags:
      id: "jw%7CC"
      type: "multi_select"
      multi_select:
        - id: "21ccd45e-1b48-4d24-923c-32e644c2f5c1"
          name: "SOLID"
          color: "default"
        - id: "af68a10b-3d47-416a-a0bf-448e79f7de59"
          name: "ARCHITECTURE"
          color: "purple"
        - id: "fc85eb6c-ed72-45c3-8b75-82f1acc267a1"
          name: "PATTERNS"
          color: "red"
    categories:
      id: "nbY%3F"
      type: "multi_select"
      multi_select: []
    Last edited time:
      id: "vbGE"
      type: "last_edited_time"
      last_edited_time: "2026-04-02T16:15:00.000Z"
    summary:
      id: "x%3AlD"
      type: "rich_text"
      rich_text:
        - type: "text"
          text:
            content: "Here we will fix some concepts to understand how implements that
              pattern on our coding habits"
            link: null
          annotations:
            bold: false
            italic: false
            strikethrough: false
            underline: false
            code: false
            color: "default"
          plain_text: "Here we will fix some concepts to understand how implements that
            pattern on our coding habits"
          href: null
    Name:
      id: "title"
      type: "title"
      title:
        - type: "text"
          text:
            content: "SOLID - A review about that pattern"
            link: null
          annotations:
            bold: false
            italic: false
            strikethrough: false
            underline: false
            code: false
            color: "default"
          plain_text: "SOLID - A review about that pattern"
          href: null
  url: "https://www.notion.so/SOLID-A-review-about-that-pattern-336b8e18e88b806fb\
    431daa90a905bb8"
  public_url: null
  archived: false
MANAGED_BY_NOTION_HUGO: true

---


## Principles


The name SOLID is an acronym of the five principles of OOP where Unclebob on research identify that patterns and unified on this five principles. Unclebob don’t create but they identify the most important principles used on OOP and unified.


When you use that Five principles on daily code they will be increase with that benefits:

- More easy to maintain and adapt to scope changes.
- Testable and easy to understand.
- Extensible for change with less effort.
- Provide maximum reuse.
- Remain in use for as long as possible.

And when you use solid you can avoid some common problems like:

- Difficult to testing and create unit tests
- Code without structure and patterns
- Difficult to isolate functions
- Code duplicated
- Fragile, you code don’t broke with some change

Understanding that benefits, lets deep understand what each principle of SOLID can talk to us.


## **SRP:** Single Responsibility Principle


> “A class should have one, and only one, reason to change”


To understand that principle we need understand what they want tell with “responsibility”. Responsibility is about what does this class have to do, if that class need to do more one thing, that principle crash. Example if you have a class to send emails, that class should not format the email because this is another responsibility and don’t have to do for them. This principle isn’t only about class but you can apply for layers too, example if you have a business layer that layer cant to do something about infra layers or repository layers.


## **OCP:** Open/Closed Principle

- This principle is about how the changes will be make  at this class, that class need be open to extensions and closed to

## **LSP: **Liskov Substitution Principle


## **ISP:** Interface Segregation Principle


## **DIP:** Dependency Inversion Principle

