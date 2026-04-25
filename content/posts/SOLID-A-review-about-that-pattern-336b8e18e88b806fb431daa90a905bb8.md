---
title: "SOLID - A review about that pattern"
date: "2026-04-02T14:37:00.000Z"
lastmod: "2026-04-24T13:46:00.000Z"
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
  last_edited_time: "2026-04-24T13:46:00.000Z"
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
      last_edited_time: "2026-04-24T13:46:00.000Z"
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


## **OCP:** Open/Closed Principle


Esse principio é de boa de entender também, no caso ele quer dizer que uma classe deve ta aberta para extensão e fechada para modificação.


> Falo Mandarim, tendi foi nada kkkk como assim fechada para modificação?


No primeiro momento que li sobre pensei tipo, “Oxe?!?! então quer dizer q terminei de fazer a classe não posso modificar mais ela?”, mas depois estudando mais e vendo sobre implementação eu compreendi que é sobre o domínio do que a classe faz, ou seja, se a modificação for feita no que tange o domínio da classe, por exemplo, a classe processar pagamentos, se a modificação foi em um comportamento ja existente e essa modificação não está fora do domínio, ou seja, processamento de pagamentos, você pode modificar, agora se você quer adicionar um novo comportamento à essa classe, pensamos ja na extensão dela para acrescentar esse novo comportamento. Meio confuso, mas com exemplos fica mais fácil de visualizar.


## **LSP: **Liskov Substitution Principle


Esse principio me pegou, a definição é muito matemática, então precisei ler algumas vezes para entender. Depois de muito insistir em realmente entender esse principio eu cheguei a um raciocínio e vou te explicar como se fosse explicar pra mim mesmo, afinal isso aqui é eu expondo meu conhecimento para firmá-lo.  


![](https://notion-hugo.pages.dev/api?block_id=34bb8e18-e88b-8020-b4b3-d107b9df1354)


O curso que vi, trouxe esse slide onde trouxe a definição matemática e um exemplo do pato, esse pato me quebrou.


`“Subclasses devem ser substituíveis por suas Superclasses.”` 


> Ai te pergunto, oque quer dizer com Subclasse e Superclasse?


Superclasse é qualquer classe que seja pai de outra, ou seja, se uma classe estende outra ela é uma Subclasse. O que ele quer dizer com essa substituição de Liskov é que se você criou uma abstração onde uma subclasse não pode ser substituída pela classe pai, essa sua abstração esta errada. No caso imaginando q a classe pai é o Pato verdadeiro e a classe filha é o pato de plastico, se eu não tiver um pato de plastico em tese eu posso usar um pato de verdade, mas se ao usar o pato de verdade eu tiver que usar bateria, ou seja, se na substituição o objeto que for ser criado com a Classe substituida precisar de uma bateria, quer dizer que tem alguma coisa errada, porque se for para seguir a logica se ambos são patos logo não deveria necessitar de algo para fazer funcionar, nesse caso a bateria.


## **ISP:** Interface Segregation Principle


## **DIP:** Dependency Inversion Principle2


## References:


[https://www.digitalocean.com/community/conceptual-articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design](https://www.digitalocean.com/community/conceptual-articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design)


[https://www.freecodecamp.org/news/solid-principles-explained-in-plain-english/](https://www.freecodecamp.org/news/solid-principles-explained-in-plain-english/)

