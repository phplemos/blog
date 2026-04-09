---
title: "Revisando POO"
date: "2026-04-08T19:10:00.000Z"
lastmod: "2026-04-09T00:04:00.000Z"
draft: true
series: []
authors:
  - "Pedro Henrique Pinheiro Lemos"
tags:
  - "POO"
categories: []
NOTION_METADATA:
  object: "page"
  id: "33cb8e18-e88b-805e-8ed0-c877dbc8c3b5"
  created_time: "2026-04-08T19:10:00.000Z"
  last_edited_time: "2026-04-09T00:04:00.000Z"
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
        - id: "74cb4f2c-bf1e-498b-9177-54e477a1f1bb"
          name: "POO"
          color: "pink"
    categories:
      id: "nbY%3F"
      type: "multi_select"
      multi_select: []
    Last edited time:
      id: "vbGE"
      type: "last_edited_time"
      last_edited_time: "2026-04-09T00:04:00.000Z"
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
            content: "Revisando POO"
            link: null
          annotations:
            bold: false
            italic: false
            strikethrough: false
            underline: false
            code: false
            color: "default"
          plain_text: "Revisando POO"
          href: null
  url: "https://www.notion.so/Revisando-POO-33cb8e18e88b805e8ed0c877dbc8c3b5"
  public_url: null
  archived: false
MANAGED_BY_NOTION_HUGO: true

---


> Esse post tem por objetivo consolidar meu conhecimento sobre orientação à objetos.


# Contexto


Orientação à objetos é um tipo de paradigma de programação, onde trás conceitos do mundo real para o mundo digital. Esse paradigma surgiu na Noruega nos anos 60, desde então a orientação à objetos vem sendo melhorada até os dias de hoje. Hoje em dia diversas linguagens de programação implementam POO, podendo ser de de forma parcial ou total. Uma das linguagens mais conhecidas por implementar totalmente POO é o JAVA, no java tudo é um objeto exceto os tipos primitivos. Tá, mas e ai, o que isso quer dizer? oque torna uma linguagem de programação ser orientada a objetos? Antes de respondermos essas perguntas vamos entender os principais conceitos e princípios envolta desse paradigma. 


# Base da Orientação à Objetos


Como dito anteriormente, a orientação a objetos surge com o intuito de trazer os objetos do mundo real para o mundo digital. No mundo real se nós observamos, temos objetos em tudo ao nosso redor, cadeira, relógio, copo e etc, agora te trago um questionamento, o que é um objeto? o que define que um copo ou relógio ser um objeto? Na disciplina de L.P. II, meu professor  trouxe esse questionamento e iniciamos o processo de tentar definir um objeto, nesse processo podemos pensar um objeto como algo que tem características, propriedades e funcionalidades, exemplo um copo é um objeto pois ele tem características como formato, matéria prima (plástico, porcelana), tem propriedades como cor, capacidade de líquidos, tem funções como reter algum liquido para ser bebido, dessa forma conseguimos representar o copo do mundo real no mundo digital.


## Classe


> Ta, entendi que um objeto tem características, propriedades e funções, mas até agora não entendi como diabos eu vou conseguir criar um objeto dentro do digital? Calma bonitão, é ai que entra o principal conceito da orientação à objetos, agora vamos falar sobre **Classe**.


Uma classe é como se fosse uma forma de bolo ou um molde de alguma peça, onde você define as propriedades e funções, onde toda vez que o computador precisar de um objeto com características do qual você definiu, ele utiliza essa classe para criar um objeto, esse processo de criar um objeto a partir de uma classe se chama **“instanciar”** uma classe, nas linguagens de programação esse processo ocorre através do operador **new.** Lembra quando você ver uma linha de código que está mais ou menos assim:


```typescript
// No exemplo estou usando javascript
const copo = new Copo();
// Estou criando uma variável chamada copo e com o operador de atribuição 
// Passando um novo objeto da classe Copo, criado através do operador new
```


Sua linguagem vai criar um objeto a partir da classe após o operador new. Agora vamos ver como seria o exemplo de uma classe de copo.


```typescript
class Copo {
	public cor: string;
	public capacidade_mililitros: number;
	public nivel:number;
	
	function encher(qnt_ml:number): void {} 

	function esvaziar(): void {} 
}
```


Essa classe tem como propriedades a cor, capacidade em mililitros e nível e tem dois métodos ou funções para encher ou esvaziar o copo. A partir dessa classe conseguimos criar objetos seguindo o mesmo “molde” mas com características diferentes. Resumo rápido, Classe é uma forma ou molde, essa volta toda pra resumir a isso KKKKKK.


## Estado e comportamento

