---
title: "Injeção de Dependência"
date: "2026-04-28T16:06:00.000Z"
lastmod: "2026-04-30T20:29:00.000Z"
draft: true
series: []
Status: "In progress"
authors:
  - "Pedro Henrique Pinheiro Lemos"
tags: []
categories: []
NOTION_METADATA:
  object: "page"
  id: "350b8e18-e88b-809a-9e6f-cc407a1569eb"
  created_time: "2026-04-28T16:06:00.000Z"
  last_edited_time: "2026-04-30T20:29:00.000Z"
  created_by:
    object: "user"
    id: "7139b64c-7267-446b-aa5a-5024eba8323f"
  last_edited_by:
    object: "user"
    id: "7139b64c-7267-446b-aa5a-5024eba8323f"
  cover: null
  icon:
    type: "emoji"
    emoji: "💉"
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
    Status:
      id: "X%7B%7CN"
      type: "status"
      status:
        id: "5999515d-ba29-4885-9115-b5c104c63d07"
        name: "In progress"
        color: "blue"
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
      multi_select: []
    categories:
      id: "nbY%3F"
      type: "multi_select"
      multi_select: []
    Last edited time:
      id: "vbGE"
      type: "last_edited_time"
      last_edited_time: "2026-04-30T20:29:00.000Z"
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
            content: "Injeção de Dependência"
            link: null
          annotations:
            bold: false
            italic: false
            strikethrough: false
            underline: false
            code: false
            color: "default"
          plain_text: "Injeção de Dependência"
          href: null
  url: "https://app.notion.com/p/Inje-o-de-Depend-ncia-350b8e18e88b809a9e6fcc407a\
    1569eb"
  public_url: null
  archived: false
MANAGED_BY_NOTION_HUGO: true

---


# Contexto


Esse assunto é continuidade de uma serie de conteúdos elaborados como parte do processo de aprendizado do meu estágio como Desenvolvedor Fullstack Mobile. Para por em prática um novo hábito que tenho vontade a muito tempo, assim invés de apenas assistir o conteúdo, decidi fazer diferente utilizando esses conteúdos como guia programático para tirar meu blog do zero. Ou seja, estou descobrindo como vai ser o desenvolver da escrita e melhorando devagar. A medida que formos continuando na serie vou identificando melhor minha forma de comunicar e compilar meu conhecimento adquirido nesse processo. 


Vamos lá, esse post é sobre Injeção de dependência esse conteúdo vai ser meio que a implementação de alguns dos conceitos do SOLID. Como dito inicialmente esse conteúdo faz parte de uma trilha de aprendizado que o conhecimento é cumulativo, ou seja, para iniciar um é necessário ter compreendido os anteriores. No mais obrigado por acompanhar!


# Dependência


Olha, a partir de agora vo pressupor que você já ta conseguindo visualizar a melhor o que é classe, abstração, objeto, contrato pra garantir e ficar até fresco e entender o que vou passar daqui em diante, entendemos classe como um molde de um objeto, abstração a gente cria classes com contratos pre definidos que não precisam ser implementados apenas os seus filhos, objeto é uma instancia de uma classe, ou seja, o bolo da forma, o objeto é o resultado de se criar algo usando uma determinada classe e esse processo se chama instanciar, contrato é interface que disponibiliza alguns recursos desde que se cumpra as regras preestabelecidas. Ufa, foi difícil tentar resumir mas foi, então lembra do conceito da inversão de dependência do qual a gente desacopla nossa classe dependendo de um contrato e não de uma classe concreta. Como resultado da aplicação do SOLID, a injeção de dependência é um processo que se torna necessário. 


	> Meu parceiro até entendi a questão de dependência e tal, mas me da um exemplo rápido ai ta abstrato demais.


Calma filhão, antes de entrarmos na implementação precisamos entender algumas coisas antes. A escrita deste artigo é no decorrer do meu processo de estudo e durante algumas a

- “Se precisa injetar na hora que for instanciar a classe, em algum lugar precisa ser dito que classe que vai ser injetada, se precisa disso precisa de alguém para gerenciar, se precisa de alguém pra gerenciar pode ser um pacote”.

Pois, aí que a gente entra num negocio interessante, outro conceito base que você vai ver em todos grandes frameworks, _Dependency Injection Containers._


# Containers


Esse conceito é interessante, eu expandi a mente pq eu usava containers no Laravel, SpringBoot, NestJS, usava as notations e classes, inicializava os providers no boot do app e tipo sem saber que por trás de cada coisa dessa tava esse conceito aqui. Container é basicamente onde as instancias do seus objetos vão existir, cada objeto do seu código vai ser manipulado por um gerenciador e vão estar dentro desse ambiente (container). No curso que vi, o professor trouxe uma lista com diversos Gerenciador de Containers de Injeção de dependência, suas funcionalidades e performasse nos benchmarks .


![](https://notion-hugo.pages.dev/api?block_id=352b8e18-e88b-80e7-a2e3-cd0f1669cec5)


nesse grafico podemos ver a comparação de diversos tipos de Gerenciadores de container e sua performace em gerenciar cada tipo de injeção, nesse grafico vemos alguns nomes em baixo, sendo eles, singleton, transiente, combined e complex, esses nomes são para definir o escopo do objeto a ser criado,


# Ciclo de vida de um objeto


# Referencias


[https://www.palmmedia.de/Blog/2011/8/30/ioc-container-benchmark-performance-comparison](https://www.palmmedia.de/Blog/2011/8/30/ioc-container-benchmark-performance-comparison)


[https://www.devmedia.com.br/padrao-de-injecao-de-dependencia/18506](https://www.devmedia.com.br/padrao-de-injecao-de-dependencia/18506)


[https://medium.com/@eduardolanfredi/inje%C3%A7%C3%A3o-de-depend%C3%AAncia-ff0372a1672](https://medium.com/@eduardolanfredi/inje%C3%A7%C3%A3o-de-depend%C3%AAncia-ff0372a1672)

