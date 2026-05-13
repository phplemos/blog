---
title: "Injeção de Dependência"
date: "2026-04-28T16:06:00.000Z"
lastmod: "2026-05-12T15:24:00.000Z"
draft: false
series:
  - "Roadmap CEPEDI"
Status: "Done"
authors:
  - "Pedro Henrique Pinheiro Lemos"
tags:
  - "PATTERNS"
  - "ARCHITECTURE"
  - "SOLID"
categories:
  - "article"
NOTION_METADATA:
  object: "page"
  id: "350b8e18-e88b-809a-9e6f-cc407a1569eb"
  created_time: "2026-04-28T16:06:00.000Z"
  last_edited_time: "2026-05-12T15:24:00.000Z"
  created_by:
    object: "user"
    id: "7139b64c-7267-446b-aa5a-5024eba8323f"
  last_edited_by:
    object: "user"
    id: "00000000-0000-0000-0000-000000000003"
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
        - id: "af68a10b-3d47-416a-a0bf-448e79f7de59"
          name: "ARCHITECTURE"
          color: "purple"
        - id: "21ccd45e-1b48-4d24-923c-32e644c2f5c1"
          name: "SOLID"
          color: "default"
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
      last_edited_time: "2026-05-12T15:24:00.000Z"
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
  url: "https://www.notion.so/Inje-o-de-Depend-ncia-350b8e18e88b809a9e6fcc407a156\
    9eb"
  public_url: null
  archived: false
MANAGED_BY_NOTION_HUGO: true

---


# Contexto


Esse assunto é continuidade de uma serie de conteúdos elaborados como parte do processo de aprendizado do meu estágio como Desenvolvedor Fullstack Mobile. Para por em prática um novo hábito que tenho vontade a muito tempo, assim invés de apenas assistir o conteúdo, decidi fazer diferente utilizando esses conteúdos como guia programático para tirar meu blog do zero. Ou seja, estou descobrindo como vai ser o desenvolver da escrita e melhorando devagar. A medida que formos continuando na serie vou identificando melhor minha forma de comunicar e compilar meu conhecimento adquirido nesse processo. 


Vamos lá, esse post é sobre Injeção de dependência esse conteúdo vai ser meio que a implementação de alguns dos conceitos do SOLID. Como dito inicialmente esse conteúdo faz parte de uma trilha de aprendizado que o conhecimento é cumulativo, ou seja, para iniciar um é necessário ter compreendido os anteriores. No mais obrigado por acompanhar!


# Dependência


Olha, a partir de agora vou pressupor que você já ta conseguindo visualizar a melhor o que é classe, abstração, objeto, contrato pra garantir e ficar até fresco e entender o que vou passar daqui em diante, entendemos classe como um molde de um objeto, abstração a gente cria classes com contratos pre definidos que não são obrigados a ser implementados, apenas os seus filhos tem a obrigação, objeto é uma instancia de uma classe, ou seja, o bolo da forma, o objeto é o resultado de se criar algo usando uma determinada classe e esse processo se chama instanciar, contrato é interface que disponibiliza alguns recursos desde que se cumpra as regras preestabelecidas. Ufa, foi difícil tentar resumir mas foi, então lembra do conceito da inversão de dependência do qual a gente desacopla nossa classe dependendo de um contrato e não de uma classe concreta. Como resultado da aplicação do SOLID, a injeção de dependência é um processo que se torna necessário. 


	> Meu parceiro até entendi a questão de dependência e tal, mas me da um exemplo rápido ai ta abstrato demais.


Calma filhão, antes de entrarmos na implementação precisamos entender algumas coisas antes. A escrita deste artigo é no decorrer do meu processo de estudo e durante algumas aulas me surgiu um questionamento, foi mais ou menos assim:

	- “Se precisa injetar na hora que for instanciar a classe, em algum lugar precisa ser dito que classe que vai ser injetada, se precisa disso precisa de alguém para gerenciar, se precisa de alguém pra gerenciar pode ser um pacote”.

Pois, aí que a gente entra num negocio interessante, o conceito base que você vai ver em todos grandes frameworks, _Dependency Injection Containers._


# Containers


Esse conceito de containers é bem interessante, eu tive uma explosão mental quando comecei a entender, pois eu já usava containers de injeção de dependência no Laravel, SpringBoot, NestJS, sem saber que por de baixo do funcionamento deles usavam os conceitos que vou apresentar.


Container é basicamente onde as instancias do seus objetos vão existir, cada objeto do seu código vai ser manipulado por um gerenciador e vão estar dentro desse ambiente (container). Ao assistir um curso sobre Injeção de dependências, o professor trouxe uma lista com diversos Gerenciador de Containers de Injeção de dependência, suas funcionalidades e performance nos benchmarks.


![](https://notion-hugo.pages.dev/api?block_id=352b8e18-e88b-80e7-a2e3-cd0f1669cec5)


Esse gráfico traz uma comparação dos principais Gerenciadores de containers de injeção de dependência do .NET esse gráfico podemos ver a comparação de diversos tipos de Gerenciadores de container e sua performance em gerenciar cada tipo de injeção, nesse gráfico vemos alguns nomes em baixo, sendo eles, singleton, transiente, combined e complex, esses nomes são para definir o escopo do objeto a ser criado. O objetivo de trazer esse gráfico é mais sobre mostrar que apesar do conceito ser o mesmo, há diversas implementações cada uma focada em uma dor em específico. Nosso objetivo é entender os conceitos por traz para toda vez que você ver alguém discutir sobre qual container vai usar em um projeto que você vai participar, você entender o que ta acontecendo por traz dos panos. Agora vamos entender sobre o ciclo de vida de um objeto e como isso afeta nosso o uso em nosso container.


# Ciclo de vida de um objeto


Quando me pergunto sobre o que é um ciclo de vida, penso em algo que siga o padrão de um inicio, meio e fim, como se fosse um recorte da linha do tempo. O ciclo de vida de um objeto é sobre isso, sobre você dizer como que vai ser comportamento do objeto enquanto uma aplicação estiver rodando. Para tentar ilustrar melhor vamos fazer uma analogia com uma padaria, onde essa padaria seria a aplicação e todo dia é produzido diversos itens(objetos de classes) lá, para facilitar os exemplos vamos levar em consideração a padaria funciona das 07:00 às 20:00, ou seja, nesse intervalo essa aplicação/padaria esta rodando, essa padaria cria vários itens(objetos) podendo ser, bolo, pão e outros itens baseado em suas formas(classe). 


Pronto, entendemos o cenário agora vamos fazer um paralelo, um ciclo de vida de um objeto pode ser entendido como o tempo de duração de um objeto dentro da aplicação enquanto ela ta em execução, ou seja, enquanto a padaria ta aberta, faz-se bolo, pão, esses itens tem um ciclo de vida que pode ser visto da seguinte forma, produção(Inicio), exposição(Meio) e venda(Fim). Fazendo paralelo à uma aplicação, quando a gente injeta uma dependência em uma classe, nós temos como dizer para o nosso container qual é o ciclo de vida desse objeto, como ele vai se comportar no inicio, meio e fim. Para isso as linguagens de programação que implementam o POO as classes tem métodos responsáveis por definir esses comportamentos, métodos como construtor e destrutor lidam com o comportamento do objeto quando são criadas e encerradas.


	> Porra, agora foi que deu o caraio mesmo, peraí, beleza entendi que tem inicio meio e fim, mas o que isso tem a ver com containers e Injeção de Dependência?


É ai que entra o a ideia por traz dos tipos de ciclo de vida meu parceiro, quando você sabe que existem ciclos de vidas diferentes para seu objeto dentro do container, você consegue definir quais dependências vão ser criadas e assim que a classe que usou a dependência terminar você pode excluir o objeto da memoria, ou casos que quando você injetar um objeto de dependência ele seja o mesmo para qualquer objeto que deseje utilizar aquela classe.


> 💡 **Coisa que você provavelmente vai ignorar mas ajuda**




# Tipos de ciclo de vida no .NET


Um dos conteúdos que vi, trouxe exemplos de tipos de ciclo de vida no .NET, o .NET usa por padrão esses 3 tipos.

	- **Transient:**
		- Um serviço com um tempo de vida _transitório_ é criado sempre que é solicitado do contêiner de serviço.
	- **Scoped:**
		- Para aplicações web, um tempo de vida _com escopo_ indica que os serviços são criados uma vez por solicitação de cliente (conexão).
	- **Singleton:**
		- Cada requisição subsequente da implementação do serviço, a partir do contêiner de injeção de dependência, utiliza a mesma instância.

Agora a hora boa, hora de fazer paralelo com nosso exemplo da padaria. Em uma padaria existem produtos e cada um com o seu ciclo de vida, por exemplo a produção de pão o tempo de vida dentro da padaria é curto, ou seja, produz, expõe e vende, já uma torta por exemplo é um outro tipo de ciclo de vida, eu sei que pode durar mais tempo, mas pra nossa analogia imagine que essa torta tem o prazo de validade de 24 horas após produzida, ela so existe enquanto a padaria estiver aberta(Aplicação rodando) todo dia dentro do intervalo do expediente, então quando o pessoal fecha a padaria, caso não tenha sido vendida é jogada fora. Nesse exemplo a torta é como um objeto/serviço singleton, e os demais podem variar entre transient e scoped.


De inicio esse ciclo de vida scoped foi meio complexo de entender, pois antes eu entendi que escopo era o mesmo que os tipos de ciclo de vida, mas ao consultar a documentação da Microsoft li que o scoped é sobre o controle “escopando” o serviço/objeto para cada requisição(web) se eu usar o mesmo serviço/objeto em varias partes da minha rotina, enquanto estiver na requisição o objeto vai ser o mesmo, assim o escopo do objeto é a requisição, se houver 15 requisições simultâneas cada requisição recebe um objeto “escopado”, esse objeto so tem o contexto da própria request. 


# Conclusão


Tá, eu falei muito mas dando um resumo, tentei trazer pra você um paralelo com diversos com coisas concretas do nosso dia a dia, conteúdo teórico é ruim e chato quando você não observa ele no seu dia a dia, tenho gostado de escrever conteúdo teórico pois consigo enxergar melhor a necessidade de determinada parte do meu código, o processo de externalizar o que você entende auxilia muito no aprendizado, me falaram isso e to descobrindo que é verdade.


# Referencias


[https://learn.microsoft.com/pt-br/dotnet/core/extensions/dependency-injection/overview#scope-validation:~:text=Dica-,Na,Web,-%2E](https://learn.microsoft.com/pt-br/dotnet/core/extensions/dependency-injection/overview#scope-validation:~:text=Dica-,Na,Web,-%2E)


[https://www.palmmedia.de/Blog/2011/8/30/ioc-container-benchmark-performance-comparison](https://www.palmmedia.de/Blog/2011/8/30/ioc-container-benchmark-performance-comparison)


[https://www.devmedia.com.br/padrao-de-injecao-de-dependencia/18506](https://www.devmedia.com.br/padrao-de-injecao-de-dependencia/18506)


[https://medium.com/@eduardolanfredi/inje%C3%A7%C3%A3o-de-depend%C3%AAncia-ff0372a1672](https://medium.com/@eduardolanfredi/inje%C3%A7%C3%A3o-de-depend%C3%AAncia-ff0372a1672)

