---
title: "Getting Nuvemshop products with a background jobs on NestJS"
date: "2026-03-12T20:42:00.000Z"
lastmod: "2026-03-15T17:52:00.000Z"
draft: true
series: []
authors:
  - "Pedro Henrique Pinheiro Lemos"
tags:
  - "Test"
categories:
  - "Some categories"
NOTION_METADATA:
  object: "page"
  id: "321b8e18-e88b-80c7-8507-d0cb8d832881"
  created_time: "2026-03-12T20:42:00.000Z"
  last_edited_time: "2026-03-15T17:52:00.000Z"
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
        - id: "86fc872e-b643-424d-98ec-84dbe2222ac8"
          name: "Test"
          color: "brown"
    categories:
      id: "nbY%3F"
      type: "multi_select"
      multi_select:
        - id: "987987b8-de74-4d74-891a-013b35dd5723"
          name: "Some categories"
          color: "brown"
    Last edited time:
      id: "vbGE"
      type: "last_edited_time"
      last_edited_time: "2026-03-15T17:52:00.000Z"
    summary:
      id: "x%3AlD"
      type: "rich_text"
      rich_text: []
    Name:
      id: "title"
      type: "title"
      title:
        - type: "text"
          text:
            content: "Getting Nuvemshop products with a background jobs on NestJS"
            link: null
          annotations:
            bold: false
            italic: false
            strikethrough: false
            underline: false
            code: false
            color: "default"
          plain_text: "Getting Nuvemshop products with a background jobs on NestJS"
          href: null
  url: "https://www.notion.so/Getting-Nuvemshop-products-with-a-background-jobs-o\
    n-NestJS-321b8e18e88b80c78507d0cb8d832881"
  public_url: null
  archived: false
MANAGED_BY_NOTION_HUGO: true

---


## 1. The feature 


On current project where i’m working on backend stack, we need connect to API Provider in this case **Nuvemshop**, request all products based on costumers store and persist on our database some information’s about each product. Initially we think some way to create this feature. But when started i ran into some problems.

- Problem 1: The API of our provider have a rate limit where they uses Leak bucket algorithm, where bucket size is 40 requests and limited to 2 requests per second.
- Problem 2:
- **The Goal here:** Briefly hook the reader and explain _why_ this task exists.
- **What to write about:** * Introduce the feature: Integrating a platform (Nuvemshop) with your system.
	- The core problem: Fetching large amounts of data (products) during an installation process without locking up the backend or keeping the user waiting.
	- The tech stack spoiler: Mention you chose BullMQ, PostgreSQL, and background workers to handle it asynchronously.

## 2. The Architecture (Visualizing the Solution)

- **The Goal here:** Show, don't just tell. This is where your diagram shines.
- **What to write about:**
	- Present the diagram you are currently creating.
	- Explain the separation of concerns: Why the backend shouldn't do the heavy lifting and why the Worker/BullMQ is necessary for this type of API integration.

## 3. Step-by-Step Execution Flow

- **The Goal here:** Break down the complex task into digestible logical steps.
- **What to write about:**
	- **Step 1: The Trigger:** Explain how the backend simply drops a message (the Store ID) into the queue upon Nuvemshop installation and moves on.
	- **Step 2: The Worker in Action:** Explain how the worker picks up the ID, queries the local PostgreSQL database for credentials/details, and starts fetching the Nuvemshop products.
	- **Step 3: Persistence:** Briefly mention the batch insertion back into PostgreSQL.

## 4. Overcoming the Bottlenecks: Rate Limits & Pagination

- **The Goal here:** This is the "meat" of the post where you show your advanced engineering skills.
- **What to write about:**
	- **Pagination:** How you structured the worker to loop through pages of products without dropping data.
	- **Rate Limiting & Error Handling:** Explain your retry strategy. If the Nuvemshop API says "too many requests" or throws an error, explain how you instruct BullMQ to put the message back in the queue with a delayed retry (the X time limit).

## 5. Automating the Future (The Scheduler)

- **The Goal here:** Show that you think about the lifecycle of the data, not just the initial setup.
- **What to write about:**
	- Explain the 2 AM Cron Job/Scheduler.
	- Mention the database migration (`last_provider_sync`) you created to track stale data.
	- Explain how the scheduler simply drops jobs into the _existing_ BullMQ queue, reusing the exact same worker logic you built for the installation phase.

## 6. Conclusion & Takeaways

- **The Goal here:** Wrap it up and highlight the business value of your technical choices.
- **What to write about:**
	- Summarize why decoupling this process makes the software scalable and resilient.
	- A brief closing thought on how mapping this out visually (the diagram) made the coding phase much more predictable.

```mermaid
graph TD
    Start((Start)) --> ReadFiles[Read Batch Files]
    ReadFiles --> Validate[Validate Batch]
    Validate --> |Valid| Fork[("||")]
    Validate --> |Invalid| Error[Log Error]
    
    Fork --> Item1[Process Item 1]
    Fork --> Item2[Process Item 2]
    Fork --> Item3[Process Item N]
    
    Item1 --> Join[("||")]
    Item2 --> Join
    Item3 --> Join
    
    Join --> UpdateDB[Update Database]
    UpdateDB --> Report[Generate Report]
    Report --> End((End))
    Error --> End

```

