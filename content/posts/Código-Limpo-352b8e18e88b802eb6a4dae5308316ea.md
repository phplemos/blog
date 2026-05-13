---
title: "Código Limpo"
date: "2026-04-30T16:55:00.000Z"
lastmod: "2026-05-12T21:12:00.000Z"
draft: true
series:
  - "Roadmap CEPEDI"
Status: "In progress"
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
  last_edited_time: "2026-05-12T21:12:00.000Z"
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
      last_edited_time: "2026-05-12T21:12:00.000Z"
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


Ah quero entrar no contexto mais não, a partir de agora pressuponho eu que você acompanha, agora estou fazendo o conteúdo de forma mais simples para não ficar muito atrelado um post ao outro e acabar dificultando o entendimento pois não pegou o conteúdo anterior. Assim, a gente vai falar hoje sobre código limpo, discutir sobre algumas ideias e filosofias em volta do código limpo, trazendo paralelo do cotidiano pra facilitar a compreensão.


# Reflexões filosóficas


No decorrer dos meus estudos percebi que o clean code é basicamente a filosofia de quem presa pela excelência em tudo que faz, pois se você presa por algo bem feito você verifica basicamente se esse algo esta dentro das ideias apresentadas. No decorrer do estudo fiz diversos paralelos com o mundo real, um deles é pensar sobre como você presa pela qualidade em um profissional ou produto, quando adquire um produto pressupõe que você quer qualidade, o mesmo pode ser aplicado a um código, como desenvolvedor de software seu produto é o código, se alguém comprar seu produto esse cliente vai estar satisfeito ou vai estar puto querendo o dinheiro de volta?


Seguindo essa ideia a gente começa a refletir sobre oque nós como desenvolvedor estamos entregando. Se você visse um cliente seu, falando sobre seu código e como foi a experiência com o uso de seu código, com base na hipótese anterior você acha que seriam elogios ou reclamações? Partindo desse principio, quando entendemos que o código limpo fala mais de você do que do código em si, começamos a nos tornar mais críticos à qualidade do produto que nós entregamos, parte do processo de melhorar a qualidade de seu produto é buscar conhecimento sobre o que é considerado um produto(código) de qualidade, o que seria a ideia por trás de um **Código limpo**, o que a comunidade ou pelo menos o _Robert C. Martin_ entende por um código limpo, e assim buscar responder essas perguntas para aumentar seu conhecimento paralelamente a qualidade de seu produto.


# Código limpo


A final o que é um código limpo? Quando a gente pensa em algo limpo pode se pensar “algo que não tem sujeira”, partindo desse pressuposto, o que você entende por sujeira em um código? Bom, depois de entender melhor sobre como funciona o conceito de orientação a objetos, você percebe que um objeto do mundo real e um objeto de uma classe, esses objetos estão dispersos pelo espaço ou ambiente onde ele foi criado, onde esse ambiente a depender de quem esteja programando pode ter todos os objetos organizadinhos, eu tenho em minha mente um paralelo com meu quarto, eu posso chegar hoje tirar a calça e jogar no chão, ou deixar o prato na comoda, ou deixar de varrer, toda essas coisas vão deteriorando o meu quarto, ou seja o meu ambiente, em paralelo com a programação, é como se seu menu explorer fosse o ambiente, e cada classe, interface criada fosse um objeto em um canto do quarto. 


## Hábito


Quando você entende que o código limpo está atrelado a sua forma de codificar, você busca entender como pode melhorar o processo de codificar. Assim, podemos exercitar o processo de desenvolver um código de qualidade através de hábitos e o reflexo desses hábitos será a produção de código simples, direto, eficiente e fácil de ler. Eu li um livro chamado “O Poder do Hábito”, esse livro trata o hábito em 3 esferas, indivíduos, organizações e sociedades. Minha ideia de hábito vem a partir do conhecimento obtido nesse livro, espero que faça sentido para você, de qualquer forma fica aí a recomendação de leitura. 


Para fazer qualquer coisa como tomar banho, escovar os dentes e etc, nosso cérebro gasta energia para executar os passos necessários daquela atividade, para facilitar daqui em diante vamos entender rotina como “os passos necessários”. Quando você faz a mesma atividade muitas vezes em seu dia a dia seu cérebro constrói o que chamamos de hábito, aquela atividade que você faz no “automático” e quanto mais você faz essa atividade, menor é custo energético para seu cérebro fazer a mesma rotina, pois essa atividade está se tornando um hábito e ao se tornar um hábito seu corpo aprende a responder toda vez que esse hábito é gatinhado. 


Entender como é a estrutura de um hábito é essencial para você entender como moldar racionalmente seu dia a dia para coisas que saudáveis e te agregam valor, ou seja, no nosso caso trazer os conceitos do Código Limpo como algo que agrega valor à você como desenvolvedor. O autor do livro traz que o hábito é constituído por três partes.

	1. **Gatilho**

		O que gera o impulso/energia para executar a rotina de uma determinada atividade e receber sua recompensa.

	1. **Rotina**

		Passos ou tarefas necessárias para poder entender como completa aquela atividade receber a recompensa

	1. **Recompensa**

		Produto da final da rotina, o que reforça ao cérebro que quando encontrar o gatilho novamente execute aquela rotina para receber essa recompensa


Se você observar seu dia a dia há diversas atividades que são hábitos e você nem percebe. Por exemplo, tenho o hábito de tomar banho antes de dormir, essa atividade é tão cotidiana que não sinto esforço em executá-la, vamos observar esse habito na estrutura de gatilho, rotina e recompensa.

	- **Tomar banho antes de dormir:**
		1. **Gatilho**
			- Hora se aproximando das 21:30
		1. **Rotina**
			- Pegar toalha
			- Ir ao banheiro
			- Conferir se os itens de higiene estão no banheiro
			- Tomar banho
			- Se Secar com toalha
			- Ir ao quarto
			- Me vestir
			- Ir ao quintal
			- Estender toalha
			- Ir para quarto
		1. **Recompensa**

			Dormir confortável e fresco


No exemplo vemos de maneira clara como há atividades no nosso dia a dia que são hábitos, assim com a programação não seria diferente, as atividades que você faz como desenvolvedor, existe uma rotina onde você segue passos para começar a codificar, ou seja, se você faz a atividade de programar todo dia, você já tem instaurado hábitos atrelado a atividade de programar. Assim a gente começa a rastrear nosso hábitos como programador, recomendo como exercício pegar uma atividade que você executa ao escrever código e detalhar a rotina até a conclusão dessa atividade, em sequência você vai identificar onde nessa rotina você pode aplicar as recomendações que vamos ver a seguir. 


	> 📢 **Sobre esse tema**


## Boas Práticas


### Nomes


### Classes


### Métodos


### Comentários


### Erros


## Conclusão


> 🚨 **Informação**  
> Esse conteúdo foi embasado em pesquisa e estudo de artigos sobre o livro Clean Code e os principais pontos que ele aborda. Ainda não tive a oportunidade de ler o livro e tirar minhas conclusões sem ser por intermédio de entendimento de terceiros. Breve irei ler e trago um novo artigo abordando agora com base em meu entendimento.


# References


[https://www.gov.br/governodigital/pt-br/estrategias-e-governanca-digital/startupgovbr/guia-gps/pages/5-saiba-mais/praticas-de-engenharia-de-software/clean-code](https://www.gov.br/governodigital/pt-br/estrategias-e-governanca-digital/startupgovbr/guia-gps/pages/5-saiba-mais/praticas-de-engenharia-de-software/clean-code)


[https://medium.com/@FilipeDeschamps/clean-code-2-o-que-%C3%A9-c%C3%B3digo-limpo-869047c1492a](https://medium.com/@FilipeDeschamps/clean-code-2-o-que-%C3%A9-c%C3%B3digo-limpo-869047c1492a)

