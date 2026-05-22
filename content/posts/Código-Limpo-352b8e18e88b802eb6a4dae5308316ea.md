---
title: "Código Limpo"
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
summary: "Uma explanação do meu entendimento sobre o Clean Code"
NOTION_METADATA:
  object: "page"
  id: "352b8e18-e88b-802e-b6a4-dae5308316ea"
  created_time: "2026-04-30T16:55:00.000Z"
  last_edited_time: "2026-05-13T20:24:00.000Z"
  created_by:
    object: "user"
    id: "7139b64c-7267-446b-aa5a-5024eba8323f"
  last_edited_by:
    object: "user"
    id: "00000000-0000-0000-0000-000000000003"
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
      checkbox: false
    Status:
      id: "X%7B%7CN"
      type: "status"
      status:
        id: "9c0b6961-37cf-4f7e-b24c-7e472f46e53d"
        name: "Done"
        color: "green"
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
      last_edited_time: "2026-05-13T20:24:00.000Z"
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


Ah quero entrar no contexto mais não, a partir de agora pressuponho eu que você acompanha, agora estou fazendo o conteúdo de forma mais simples para não ficar muito atrelado ao post anterior e acabar dificultando o entendimento. Assim, hoje nós vamos falar sobre código limpo, discutir sobre algumas ideias e filosofias no que tange esse a ideia de código limpo, trazendo paralelo do cotidiano pra tentar facilitar a compreensão.


# Reflexões filosóficas


No decorrer dos meus estudos percebi que o “Código limpo” é a filosofia de quem preza pela excelência em tudo que faz. Se você preza por algo bem feito, vai buscar fazer da melhor forma possível. No decorrer dos estudos, pensei em diversos paralelos com o mundo real, um deles é sobre que, se você preza pela qualidade ao adquirir um produto, o cliente que contrata seu serviço de desenvolvedor de software também vai prezar.


Seguindo essa ideia a gente começa a refletir sobre oque nós como desenvolvedor estamos entregando como produto. Vamos fazer um exercício mental, você se depara com um cliente (chefe, techlead, scrummaster) seu falando sobre seu produto (código), você acha que seriam elogios ou reclamações? Partindo desse principio, quando entendemos que o código limpo fala mais de você como profissional do que do código em si, quando colocamos esse ponto de vista começamos a nos tornar mais críticos quanto a qualidade do código que nós entregamos e te convido a levar essa filosofia para fora do âmbito profissional e ser aplicada em outras partes da sua vida. Dessa forma, parte do processo de ser crítico sobre seu próprio código é buscar conhecimento para entender o que é qualidade no que você está entregando. Assim, quando buscamos conhecimento sobre como escrever um bom código nos deparamos com o livro “**Código limpo”**(Clean Code), escrito por _Robert C. Martin, esse livro_ traz uma boa definição do que precisa ser contemplado para ser considerado um código de qualidade.


# Código limpo


Ao estudar sobre os conceitos que o livro trás, me faz pensar em diversas analogias e comparações com a realidade. Uma analogia que fez muito sentido pra mim foi, depois de entender melhor sobre como funciona o conceito de orientação a objetos, você percebe que um objeto do mundo real e um objeto de uma classe, ambos são objetos que estão dispersos em um espaço ou ambiente, e a depender das regras estabelecidas muda a forma como cada objeto fica organizado. Por exemplo, fazer um paralelo com meu quarto, eu posso chegar hoje tirar a calça e jogar no chão ou deixar prato de comida na comoda ou deixar de varrer, toda essas coisas vão deteriorando o meu quarto, o meu ambiente, na programação, é como se seu programa em execução fosse o ambiente, e cada objeto criado a partir de uma classe fosse um item em um canto do quarto.


Com essa analogia fica fácil entender o porque é importante a gente prezar pelo código de qualidade, é como quando você chega na casa de alguém que é bagunceiro, você vê o caos no ambiente, fica difícil até de arrumar a casa. Quando você chega numa casa de alguém organizado a casa está nos trincos, tudo em seu devido lugar. Dessa forma a gente consegue enxergar o código, O livro traz que a gente antes de querer saber fazer um código limpo vale você refletir sobre seus hábitos do dia a dia profissional, quais são suas rotinas atreladas a criação de código? aplicar o código limpo é entender que qualidade e excelência são construídas através de hábitos cotidianos.


## Hábito


Quando você entende que o código limpo está atrelado a sua forma de pensar e executar sua rotina, você busca entender como pode melhorar o processo esse processo. Assim, podemos exercitar o processo de desenvolver um código de qualidade através de hábitos, como reflexo desses hábitos gradativamente inclusos no seu dia a dia, você tem a produção de código simples, direto, eficiente e fácil de ler. Eu li um livro chamado “O Poder do Hábito”, esse livro trata o hábito em 3 esferas, indivíduos, organizações e sociedades. Minha ideia de hábito vem a partir do conhecimento obtido nesse livro, espero que faça sentido para você, de qualquer forma fica aí a recomendação de leitura. 


Para fazer qualquer coisa como tomar banho, escovar os dentes e etc, nosso cérebro gasta energia para executar os passos necessários daquela atividade, para facilitar daqui em diante vamos entender rotina como “os passos necessários”. Quando você faz a mesma atividade muitas vezes em seu dia a dia seu cérebro constrói o que chamamos de hábito, ou seja, aquela atividade que você faz no “automático”, quanto mais você faz essa atividade, menor é custo energético para seu cérebro fazer novamente, assim a atividade devagar se torna um hábito e ao se tornar um hábito seu corpo aprende a responder toda vez que esse hábito é gatinhado. 


Entender como é a estrutura de um hábito é essencial para você entender como moldar racionalmente seu dia a dia e incrementar em suas rotinas coisas que saudáveis e te agregam valor, como os conceitos do Código Limpo para suas rotinas de desenvolvedor. O autor do livro traz que o hábito é constituído por três partes.

1. **Gatilho**

    O que gera o impulso/energia para executar uma determinada atividade.

1. **Rotina**

    Conjunto de passos ou tarefas para executar determinada atividade.

1. **Recompensa**

    Produto da final da execução completa da rotina, o que reforça ao cérebro que quando encontrar o gatilho novamente execute aquela rotina para receber recompensa


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


No exemplo vemos como há atividades no nosso dia a dia que são hábitos, assim com a programação não seria diferente, as atividades que você faz como desenvolvedor existe uma rotina onde você segue passos para começar a codificar, se você faz a atividade de programar todo dia, você tem hábitos atrelado a atividade de programar. Assim a gente começa a rastrear nosso hábitos como programador, recomendo como exercício pegar uma atividade que você executa ao escrever código e detalhar a rotina até a conclusão dessa atividade. Agora que temos essa visão geral, entendemos que não é simplesmente ler, há um processo de reflexão ao redor desse tema, vamos ver as boas práticas e como exercício sugiro identificar onde em sua as rotinas de programação você pode aplicar as recomendações que vamos ver a seguir. 


> 📢 **Sobre esse tema**


## Boas Práticas


No decorrer dos estudos me deparei com uma aula onde o professor passava por cada item do que o livro traz como boas práticas em codificação. A partir daqui vou ser mais direto, desde que você tenha entendido sobre os conceitos filosóficos em volta da ideia de excelência aplicadas aos hábitos, é so pegar essas boas práticas e inserir em sua rotina de programar. A ideia que o _Clean Code_ traz sobre oque é um código de qualidade, quando contempla esses princípios a seguir


### Nomes

- Revela intenção

    Ao você escrever os nomes das variáveis, métodos e afins, pensar em nomes que demonstram a intenção do que aquilo vai representar dentro do bloco de codigo

- Revela o porque existe

    O nome deve ser sugestivo e estar claro o porque da existência dele

- Mostra o que faz

    Mesma ideia do tópico anterior

- Pronunciável

    Quando falo pronunciável falo de palavras concretas e não siglas ou acrônimos

- Evitar mistura de idiomas

    Se você iniciou uma classe em português não tem o porque você misturar para inglês e vice-versa

- Não ser genérico

    So em o nome mostrar o que faz ele já não é genérico, se soar genérico repense sobre o que você está nomeando faz

- Numero de caracteres por linha ≤ 100

    é isso ai.


### Classes

- Devem ser substantivos

    Esse é legal, deve ter a ideia de que classes são objetos e objetos são substantivos, objetos

- Numero de linhas ≤ 500

    Mesmo role que o numero de linhas por metodo


### Métodos

- Devem conter verbo no infinitivo

    Métodos dão comportamento ao objeto de nossas classes, então ele deve denotar ação, ou seja verbo, aqui no infinitivo, adicionar, visualizar, editar, deletar. 

- Extraia trechos em métodos privados

    Se você tem uma parte grande de código dentro de seu método mas aquela parte faz uma coisa só, você pode extrair esse trecho em método privado e declarar um nome que contemple os requisitos que o _Clean Code _sobre nomes, assim seus métodos ficam fácil de se ler

- Devem fazer apenas uma coisa

    S do Solid, preciso falar mais nada

- Evitar parâmetros

    DTO’s entram aí, a camada de DTO é um estudo a parte que vou colocar na lista de próximas publicações.

- O método não pode dizer que faz algo e fazer outra coisa nas espreitas

    Isso é sobre como se o nome de seu método é `ProcessarCompra()` e dentro desse método ta processando a compra e disparando email, no nome não diz nada sobre processar email, um nesse exemplo se quiser poderia ser direto `ProcessarCompraComEnvioEmail()`

- Quando ler o método ele deve ser congruente e fazer sentido.
- Numero de linhas ≤ 20

    Mesmo role do numero de caracteres por linha


### Comentários


Comentário é complicado porque se você precisa explicar seu código é porque ele é ruim, fim. Mas há casos que há uma necessidade de se fazer comentários, sendo algum deles quando você precisa:

- Alertar sobre problemas a surgir
- Atribuir direito de licença
- Regras de negócio complexas
- `TODO:` para sugerir próximas tarefas

### Erros


Aqui a ideia é que, se há parte que vá dar erro, você tem que prever e já lidar com esse erro, simples, você tem o controle sobre seu código então você sabe onde pode dar erro.

- Tratar e prever é função do dev
- Sempre que puder use exceptions, evite erro code, crie meios eficiente de capturar exceptions
- Em suas Exceptions seja o mais específico que você puder
- Caso necessário crie uma Exception específica
- Evite textos genéricos
- Nunca retorne null

# Conclusão


Nesse post concentrei mais minhas energias em trazer a ideia de enxergar o seu código como parte do seu mundo, torna mais fácil visualizar conceitos arquiteturais que vão vir de agora em diante. Entender que um código limpo é sobre dentro de suas rotinas de programar lembrar dessas boas práticas e presar sempre em seguir, e não se permitir não fazer um código bom so por que o que você ta mexendo já não é bom então não vai mudar em nada. Prezar pela qualidade é prezar pelo seu ambiente, então propagar a palavra da boa organização é parte do processo de melhorar o nosso ambiente.


> 🚨 **Informação**  
> Esse conteúdo foi embasado em pesquisa e estudo de artigos sobre o livro Clean Code e os principais pontos que ele aborda. Ainda não tive a oportunidade de ler o livro e tirar minhas conclusões sem ser por intermédio de entendimento de terceiros. Breve irei ler e trago um novo artigo abordando agora com base em meu entendimento.


# References


[https://www.gov.br/governodigital/pt-br/estrategias-e-governanca-digital/startupgovbr/guia-gps/pages/5-saiba-mais/praticas-de-engenharia-de-software/clean-code](https://www.gov.br/governodigital/pt-br/estrategias-e-governanca-digital/startupgovbr/guia-gps/pages/5-saiba-mais/praticas-de-engenharia-de-software/clean-code)


[https://medium.com/@FilipeDeschamps/clean-code-2-o-que-%C3%A9-c%C3%B3digo-limpo-869047c1492a](https://medium.com/@FilipeDeschamps/clean-code-2-o-que-%C3%A9-c%C3%B3digo-limpo-869047c1492a)

