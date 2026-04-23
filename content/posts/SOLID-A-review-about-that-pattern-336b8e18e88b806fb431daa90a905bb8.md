---
title: "SOLID - A review about that pattern"
date: "2026-04-02T14:37:00.000Z"
lastmod: "2026-04-22T20:52:00.000Z"
draft: true
series:
  - "Roadmap CEPEDI"
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
  last_edited_time: "2026-04-22T20:52:00.000Z"
  created_by:
    object: "user"
    id: "7139b64c-7267-446b-aa5a-5024eba8323f"
  last_edited_by:
    object: "user"
    id: "7139b64c-7267-446b-aa5a-5024eba8323f"
  cover: null
  icon:
    type: "emoji"
    emoji: "🪨"
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
      multi_select:
        - id: "02a4eb89-2f55-40be-ab7e-4489df020e63"
          name: "Roadmap CEPEDI"
          color: "orange"
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
      last_edited_time: "2026-04-22T20:52:00.000Z"
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


## Referencias:


# Contexto


Antes de iniciar acho interessante eu dar um contexto, esse assunto é continuidade de uma serie de conteúdos elaborados como parte do processo de aprendizado do meu estágio como Desenvolvedor Fullstack Mobile. Para por em prática um novo hábito que tenho vontade a muito tempo, assim invés de apenas assistir o conteúdo, decidi fazer diferente utilizando esses conteúdos como guia programático para tirar meu blog do zero. Ou seja, estou descobrindo como vai ser o desenvolver da escrita e melhorando devagar. A medida que formos continuando na serie vou identificando melhor minha forma de comunicar e compilar meu conhecimento adquirido nesse processo. Vamos lá, Esse post é sobre o SOLID e para entendermos o SOLID é importante compreender muito bem POO, caso ainda haja alguma duvida vai no post anterior que ta bem detalhadinho.


Decidi fazer diferente,  as referencias no inicio, a final eu não to tirando tudo isso do nada, to tomando como base artigos e cursos sobre esse conteúdo


## SOLID


Na programação ja se tinha alguns princípios que se entendiam como corretos ao se utilizar o paradigma orientado a objetos, mas Robert C. Martin decidiu capturar todos os princípios que faziam sentido para fazer um projeto com POO ser coeso e solido e elencou os 5 principais, a partir daí surgiu o acrônimo SOLID, breve falaremos mais sobre cada letra do acrônimo.


> Ta, mas me diz, oque isso vai mudar no meu dia a dia como programador?


Olha, é a aplicação do SOLID ao meu ver é um pouco de entender a filosofia por manter o ambiente arrumado, se você chega numa casa arrumada e tira algo do lugar fica bem escancarado que ta fora do lugar, seguindo essa analogia, utilizar os princípios do SOLID no seu dia a dia como programador, é igual a manter uma casa arrumada, como a casa ta arrumada seguindo os princípios pre estabelecidos(SOLID) como por exemplo, roupas dentro do armário e não em cima da cama, mesa apenas com computador sem trambolho em cima, no código é você preservar o padrão seguindo os princípios(SOLID) ao implementar novas linhas de código. Assim cada coisa permanece organizado e fácil de localizar e visualizar. Acho que de ideia segue mais ou menos isso, mas agora trazendo alguns pontos claro de benefícios ao usar o SOLID.


> 📈 ### Benefícios

> 🤩 ### Evita problemas


## Principio da Responsabilidade Única 

- **SRP - Single Responsibility Principle**

Esse principio ele começa com a ideia de que uma classe so deve ser modificada se o motivo da modificação tiver a ver com sua responsabilidade. Ou seja, se eu to com uma classe que vai processar o pagamento, ela tem que fazer coisas referente ao processo de pagamento e não ao envio de notificações por email, ou seja, a responsabilidade da classe é processar o pagamento, o envio de notificação é uma outra responsabilidade que não compete a classe de processar pagamento, ou seja, essa situação há uma violação nesse principio.


To understand that principle we need understand what they want tell with “responsibility”. Responsibility is about what does this class have to do, if that class need to do more one thing, that principle crash. Example if you have a class to send emails, that class should not format the email because this is another responsibility and don’t have to do for them. This principle isn’t only about class but you can apply for layers too, example if you have a business layer that layer cant to do something about infra layers or repository layers.


## **OCP:** Open/Closed Principle


This principle is about how the changes will be make at class, that class need be open to extensions and closed for modifications.


## **LSP: **Liskov Substitution Principle


## **ISP:** Interface Segregation Principle


## **DIP:** Dependency Inversion Principle


## References:


[https://www.digitalocean.com/community/conceptual-articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design](https://www.digitalocean.com/community/conceptual-articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design)


[https://www.freecodecamp.org/news/solid-principles-explained-in-plain-english/](https://www.freecodecamp.org/news/solid-principles-explained-in-plain-english/)

