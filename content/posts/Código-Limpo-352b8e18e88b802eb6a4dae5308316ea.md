---
title: "Código Limpo"
date: "2026-04-30T16:55:00.000Z"
lastmod: "2026-05-07T16:53:00.000Z"
draft: true
series:
  - "Roadmap CEPEDI"
Status: "Not started"
authors:
  - "Pedro Henrique Pinheiro Lemos"
tags:
  - "PATTERNS"
categories:
  - "article"
summary: "Uma explanação do meu entendimento sobre o Clean Code"
NOTION_METADATA:
  object: "page"
  id: "352b8e18-e88b-802e-b6a4-dae5308316ea"
  created_time: "2026-04-30T16:55:00.000Z"
  last_edited_time: "2026-05-07T16:53:00.000Z"
  created_by:
    object: "user"
    id: "7139b64c-7267-446b-aa5a-5024eba8323f"
  last_edited_by:
    object: "user"
    id: "7139b64c-7267-446b-aa5a-5024eba8323f"
  cover: null
  icon:
    type: "emoji"
    emoji: "🧹"
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
    Status:
      id: "X%7B%7CN"
      type: "status"
      status:
        id: "a8e87de2-5341-4d6d-b651-cac601b85252"
        name: "Not started"
        color: "default"
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
        - id: "fc85eb6c-ed72-45c3-8b75-82f1acc267a1"
          name: "PATTERNS"
          color: "red"
    categories:
      id: "nbY%3F"
      type: "multi_select"
      multi_select:
        - id: "a68c3a8e-8faf-4d33-bded-7afde47e7676"
          name: "article"
          color: "blue"
    Last edited time:
      id: "vbGE"
      type: "last_edited_time"
      last_edited_time: "2026-05-07T16:53:00.000Z"
    summary:
      id: "x%3AlD"
      type: "rich_text"
      rich_text:
        - type: "text"
          text:
            content: "Uma explanação do meu entendimento sobre o Clean Code"
            link: null
          annotations:
            bold: false
            italic: false
            strikethrough: false
            underline: false
            code: false
            color: "default"
          plain_text: "Uma explanação do meu entendimento sobre o Clean Code"
          href: null
    Name:
      id: "title"
      type: "title"
      title:
        - type: "text"
          text:
            content: "Código Limpo"
            link: null
          annotations:
            bold: false
            italic: false
            strikethrough: false
            underline: false
            code: false
            color: "default"
          plain_text: "Código Limpo"
          href: null
  url: "https://www.notion.so/C-digo-Limpo-352b8e18e88b802eb6a4dae5308316ea"
  public_url: null
  archived: false
MANAGED_BY_NOTION_HUGO: true

---


# Contexto


Ah quero entrar no contexto mais não, a partir de agora pressuponho eu que você acompanha, a partir de agora estou fazendo o conteúdo de forma mais simples para não ficar muito atrelado um post ao outro e acabar dificultando o entendimento pois não pegou o conteúdo anterior. Assim, a gente vai falar hoje sobre código limpo, discutir sobre algumas ideias e filosofias em volta do código limpo, trazendo paralelo do cotidiano pra facilitar a compreensão.


# Código limpo


{{< notion-unsupported-block type=synced_block >}}


A final o que é um código limpo? Quando a gente pensa em algo limpo pode se dizer que é algo que não tem sujeira, partindo desse pressuposto me diga, o que você entende por sujeira em um código? Bom, depois de entender melhor sobre como funciona o conceito de orientação a objetos, você percebe que um objeto do mundo real e um objeto de uma classe, esses objetos estão dispersos pelo espaço ou ambiente onde ele foi criado, onde esse ambiente a depender de quem esteja programando pode ter todos os objetos organizadinhos, eu tenho em minha mente um paralelo com meu quarto, eu posso chegar hoje tirar a calça e jogar no chão, ou deixar o prato na comoda, ou deixar de varrer, toda essas coisas vão deteriorando o meu quarto, ou seja o meu ambiente, em paralelo com a programação, é como se seu menu explorer fosse o ambiente, e cada classe, interface criada fosse um objeto em um canto do quarto. 


# References


[https://www.gov.br/governodigital/pt-br/estrategias-e-governanca-digital/startupgovbr/guia-gps/pages/5-saiba-mais/praticas-de-engenharia-de-software/clean-code](https://www.gov.br/governodigital/pt-br/estrategias-e-governanca-digital/startupgovbr/guia-gps/pages/5-saiba-mais/praticas-de-engenharia-de-software/clean-code)


[https://medium.com/@FilipeDeschamps/clean-code-2-o-que-%C3%A9-c%C3%B3digo-limpo-869047c1492a](https://medium.com/@FilipeDeschamps/clean-code-2-o-que-%C3%A9-c%C3%B3digo-limpo-869047c1492a)

