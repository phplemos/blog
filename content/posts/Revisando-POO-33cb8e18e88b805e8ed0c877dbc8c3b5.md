---
title: "Revisando POO"
date: "2026-04-08T19:10:00.000Z"
lastmod: "2026-04-10T23:23:00.000Z"
draft: true
series:
  - "Roadmap CEPEDI"
authors:
  - "Pedro Henrique Pinheiro Lemos"
tags:
  - "POO"
categories:
  - "article"
NOTION_METADATA:
  object: "page"
  id: "33cb8e18-e88b-805e-8ed0-c877dbc8c3b5"
  created_time: "2026-04-08T19:10:00.000Z"
  last_edited_time: "2026-04-10T23:23:00.000Z"
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
        - id: "74cb4f2c-bf1e-498b-9177-54e477a1f1bb"
          name: "POO"
          color: "pink"
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
      last_edited_time: "2026-04-10T23:23:00.000Z"
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


Orientação à objetos é um tipo de paradigma de programação que traz conceitos do mundo real para o mundo digital. Esse paradigma surgiu na Noruega nos anos 60, desde então a orientação à objetos vem sendo melhorada até os dias de hoje. Hoje em dia diversas linguagens de programação implementam POO, podendo ser de de forma parcial ou total. Uma das linguagens mais conhecidas por implementar totalmente POO é o JAVA, no java tudo é um objeto exceto os tipos primitivos. Tá, mas e ai, o que isso quer dizer? oque torna uma linguagem de programação ser orientada a objetos? Antes de respondermos essas perguntas vamos entender os principais conceitos e princípios envolta desse paradigma. 


# Base da Orientação à Objetos


Como dito anteriormente, a orientação a objetos surge com o intuito de trazer os objetos do mundo real para o mundo digital. No mundo real se nós observamos, temos objetos em tudo ao nosso redor, cadeira, relógio, copo e etc, agora te trago um questionamento, o que é um objeto? o que define que um copo ou relógio ser um objeto? 


Na disciplina de L.P. II, meu professor  trouxe essa reflexão para entender melhor POO. Nesse processo podemos pensar um objeto como algo que tem características, propriedades e funcionalidades, por exemplo, um copo é um objeto pois ele tem características como formato, matéria prima (plástico, porcelana), cor, capacidade de líquidos, tem funções como reter algum liquido para ser bebido, capturando essas características e funções conseguimos representar o copo do mundo real no mundo digital.


## Classe


> Ta, entendi que um objeto tem características e funções, mas até agora não entendi como diabos eu vou conseguir criar um objeto dentro do digital? Calma bonitão, é ai que entra o principal conceito da orientação à objetos, agora vamos falar sobre **Classe**.


Uma classe é como se fosse uma forma de bolo ou um molde de alguma peça, onde você define as propriedades e funções, onde toda vez que o computador precisar de um objeto com características do qual você definiu, ele utiliza essa classe para criar um objeto, esse processo de criar um objeto a partir de uma classe se chama **instanciar **uma classe, nas linguagens de programação esse processo ocorre através do operador `**new**`**.** Lembra quando você ver uma linha de código que está mais ou menos assim:


```typescript
// No exemplo estou usando typescript
const copo = new Copo();
// Estou criando uma variável chamada copo e com o operador de atribuição 
// Passando um novo objeto da classe Copo, criado através do operador new
```


Pois é sua linguagem criando um objeto a partir de uma classe. Sua linguagem vai criar um objeto a partir da classe após o operador new. Agora vamos ver como seria esse “molde”, abaixo segue o exemplo de uma classe de copo.


```typescript
class Copo {
	public cor: string;
	public capacidade_mililitros: number;
	public nivel:number = 0;
	
	function encher(qnt_ml:number): boolean {
			if((this.nivel + qnt_ml) <= capacidade_mililitros){
				this.nivel += qnt_ml;
				return true
			}
			return false;
	} 

	function esvaziar(): void {
		if(this.nivel == 0){
			console.log("Copo vazio");
			return;
		}
		this.nivel == 0;
	} 
}
```


Essa classe tem como propriedades a cor, capacidade em mililitros e nível e tem dois métodos ou funções para encher ou esvaziar o copo. A partir dessa classe conseguimos criar objetos seguindo o mesmo “molde” mas com características diferentes. Resumo rápido, Classe é uma forma ou molde, essa volta toda pra resumir a isso KKKKKK.


## Estado e comportamento


Tá, agora que você entendeu o que é classe, vamos entender um conceito atrelado à classe, que são os conceitos de estado e comportamento. Após você instanciar uma classe ou seja, criar um objeto, esse objeto tem um estado que é basicamente as propriedades do objeto, ou seja, imaginando no copo o estado seria os valores definidos ao instanciá-lo. 


E oque seria o comportamento? O comportamento é quando você tem métodos da própria classe que alterem algum estado (valores das propriedades do objeto), por exemplo o método encher, ele recebe o valor referente a quantidade de liquido a ser colocado no copo à variável nível, isso significa que essa função tem o comportamento que altera a propriedade nível, ou seja, altera o estado do objeto. Assim a gente compreende que um Objeto de uma classe tem estados e comportamentos baseado nas suas propriedades e funções.


## Herança


Após a gente entender sobre classe e objeto e que eles tem estados e comportamentos a gente pode ir mais afundo sobre essa ideia e trazer mais coisas do mundo real para o mundo digital. Dentro da POO a gente tem um conceito bem legal chamado **Herança**, da para a gente fazer uma analogia bem fácil de entender. 


O conceito de herança é similar a herança que a gente entende da vida, por exemplo, você herdou caracteristicas de seus pais ou seja imagine que eles são como uma classe pai/mãe. Na programação uma classe pode herdar atributos ou métodos de outra, Vamos fazer uma analogia com o mundo animal, imagine uma classe animal Animal, como sabemos existem diversos tipos de animais podendo ser herbívoros, carnívoros, formas de andar podendo ser bípede, quadrupede, mas todos no final são animais e tem as mesmas propriedades base. 


Com isso em mente, podemos criar uma classe Cachorro que herda as propriedades de Animal. Assim ao criar a classe Cachorro ele vai ter os mesmos atributos e métodos que a classe pai(Animal) e seus atributos e métodos únicos. Para facilitar o entendimento vamos utilizar como classificação de animais o conteúdo publicado no seguinte site .


Vamos tentar ver isso no código:


```typescript
// Classe Pai
class Animal {
	// Propriedades que todo animal tem
	public classe: string;
	public ordem: string;
	public família: string;
	
	// Comportamentos que toda animal faz
	public alimentar(){}
}

// Classe filho que herda propriedades e metodos da classe pai
class Cachorro extends Animal {
	// Propriedades da classe pai
	public nome: string;
	public idade: string;
	// Necessário chamar o metodo super() para poder trazer as propriedades da classe pai
	constructor(){
		super();
	}
	
	// Método único da classe filho
	public latir(){
		return "auau"
	}
}
```


Agora vamos entender melhor, nós criamos uma classe pai chamada animal, essa classe pai tem propriedades e métodos que definem um animal. Todo animal tem uma classe, por exemplo os cachorros são animais da classe dos mamíferos, nós seres humanos também, sendo assim podemos criar novas classes que herdam essas propriedades, como no exemplo a classe `Cachorro` que herda ou estende de `Animal`. Essa classe `Cachorro` herda todas as propriedades e cria suas próprias, como a propriedade nome e o método latir. De forma resumida isso seria o conceito de herança. Mais pra frente vamos discutir mais sobre herança.


## Abstração


Após entender sobre classe e como essas classes podem herdar propriedades e comportamentos de outras classes, agora vamos falar de um outro conceito muito importante dentro da POO, o conceito de abstração. Abstração é um dos conceitos que inicialmente mais me confundiu, era difícil conseguir enxergar a aplicação desse conceito, mas a medida que você estuda e começa a ver códigos e projetos você começa a entender a real necessidade. Esse conceito está em volta do que chamamos de “Classe Abstrata”, oque é uma classe abstrata? Basicamente é uma classe que você não é obrigado a implementar o comportamento e essa classe não pode ser instanciada, ela é uma classe que apenas pode ser herdada ou estendida ou seja, apenas a classe que herda essa classe pode instanciar e assim implementar o comportamento esperado dos metodos dessa classe. Vamos ver um exemplo abaixo:


```typescript
abstract class Pessoa {
    nome: string;
    
    constructor(nome: string) {
        this.nome = nome;
    }

    display(): void{
        console.log(this.nome);
    }

    abstract buscar(string): Pessoa;
}

class Employee extends Person { 
    empCode: number;
    
    constructor(name: string, code: number) { 
        super(name); // must call super()
        this.empCode = code;
    }

    find(name:string): Person { 
        // execute AJAX request to find an employee from a db
        return new Employee(name, 1);
    }
}

let emp: Person = new Employee("James", 100);
emp.display(); //James

let emp2: Person = emp.find('Steve');
```


## Polimorfismo


Polimorfismo a gente entra um pouco no comportamento de uma classe, onde ao extender uma classe cada uma pode se comportar de muitas formas, daí o nome polimorfismo. Para entender melhor vamos utilizar o mesmo conceito de animais


## Encapsulamento


Encapsulamento a gente ja trata de como quem pode ver as propriedades de uma classe, existem 3 tipos de encapsulamento, public, private and protected;


# Interface x Implementação


# Herança x Composição

