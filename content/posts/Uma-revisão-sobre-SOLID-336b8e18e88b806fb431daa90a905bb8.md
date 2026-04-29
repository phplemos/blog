---
title: "Uma revisão sobre SOLID"
date: "2026-04-02T14:37:00.000Z"
lastmod: "2026-04-29T20:28:00.000Z"
draft: false
series:
  - "Roadmap CEPEDI"
authors:
  - "Pedro Henrique Pinheiro Lemos"
tags:
  - "SOLID"
  - "ARCHITECTURE"
  - "PATTERNS"
categories:
  - "article"
summary: "Here we will fix some concepts to understand how implements that
  pattern on our coding habits"
NOTION_METADATA:
  object: "page"
  id: "336b8e18-e88b-806f-b431-daa90a905bb8"
  created_time: "2026-04-02T14:37:00.000Z"
  last_edited_time: "2026-04-29T20:28:00.000Z"
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
      checkbox: false
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
      multi_select:
        - id: "a68c3a8e-8faf-4d33-bded-7afde47e7676"
          name: "article"
          color: "blue"
    Last edited time:
      id: "vbGE"
      type: "last_edited_time"
      last_edited_time: "2026-04-29T20:28:00.000Z"
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
            content: "Uma revisão sobre SOLID"
            link: null
          annotations:
            bold: false
            italic: false
            strikethrough: false
            underline: false
            code: false
            color: "default"
          plain_text: "Uma revisão sobre SOLID"
          href: null
  url: "https://app.notion.com/p/Uma-revis-o-sobre-SOLID-336b8e18e88b806fb431daa9\
    0a905bb8"
  public_url: null
  archived: false
MANAGED_BY_NOTION_HUGO: true

---


# Contexto


Antes de iniciar acho interessante eu dar um contexto, esse assunto é continuidade de uma serie de conteúdos elaborados como parte do processo de aprendizado do meu estágio como Desenvolvedor Fullstack Mobile. Para por em prática um novo hábito que tenho vontade a muito tempo, assim invés de apenas assistir o conteúdo, decidi fazer diferente utilizando esses conteúdos como guia programático para tirar meu blog do zero. Ou seja, estou descobrindo como vai ser o desenvolver da escrita e melhorando devagar. A medida que formos continuando na serie vou identificando melhor minha forma de comunicar e compilar meu conhecimento adquirido nesse processo. Vamos lá, Esse post é sobre o SOLID e para entendermos o SOLID é importante compreender bem POO, caso ainda haja alguma duvida volta lá no post anterior, lê novamente e tenta fazer analogias pra ver se compreendeu a ideia.


# SOLID


Por volta dos anos 90, a programação orientada à objetos já era popular e grandes desenvolvedores da época já tinham suas concepções do que seria alguns princípios fundamentais para o bom desenvolvimento de um software com POO, foi então que Robert C. Martin decidiu capturar todos os principais que faziam sentido para fazer um projeto com POO ser coeso e solido e então ele elencou os 5 Princípios fundamentais, a partir daí surgiu o acrônimo SOLID, breve falaremos mais sobre cada letra do acrônimo.


	> Ta, mas me diz, oque isso vai mudar no meu dia a dia como programador?


Olha a aplicação do SOLID ao meu ver é sobre entender a filosofia por traz de manter o ambiente arrumado, se você chega em um ambiente que é por padrão arrumado e tira algo do lugar fica bem visível que ta fora do lugar, pois tudo no ambiente ta seguindo um padrão e está no seu devido lugar, seguindo essa analogia, utilizar os princípios do SOLID no seu dia a dia como programador, é igual a manter uma casa arrumada, como a casa ta arrumada seguindo os princípios pre estabelecidos(SOLID) como por exemplo, armário so faz coisa de armário, não podemos guardar lixo no armário, mesa não é lugar de trambolho em cima, no código é você preservar o padrão seguindo os princípios(SOLID) ao implementar novas linhas de código. Assim cada coisa permanece organizado e fácil de localizar e visualizar. Acho que de ideia segue mais ou menos isso, mas agora trazendo alguns pontos claro de benefícios ao usar o SOLID.


> 📈 ## Benefícios  
>   
> - Mais fácil de manter e se adaptar a mudança de escopo.  
>   
> - Código fica testável e fácil de entender  
>   
> - O código fica aberto a extensão sem muito esforço  
>   
> - Prover o máximo de reúso  
>   
> - Aumenta a longevidade do código produzidor

> 🤩 ## Evita problemas  
>   
> - Dificuldades em testar a aplicação ou criar testes unitários  
>   
> - Código sem estrutura ou padrão  
>   
> - Dificuldade em isolar funções  
>   
> - Duplicação de código-  
>   
> - Fragilidade, onde seu código quebra em qualquer mudança


## Principio da Responsabilidade Única 

- _SRP - Single Responsibility Principle_

Esse principio ele começa com a ideia de que uma classe so deve ser modificada se o motivo da modificação tiver a ver com sua responsabilidade. Ou seja, se eu to com uma classe que vai processar o pagamento, ela tem que fazer coisas referente ao processo de pagamento e não ao envio de notificações por email, ou seja, a responsabilidade da classe é processar o pagamento, o envio de notificação é uma outra responsabilidade que não compete a classe de processar pagamento, ou seja, essa situação há uma violação nesse principio.


## Principio Aberto/Fechado 

- _OCP - Open/Closed Principle_

Esse principio é de boa de entender também, no caso ele quer dizer que uma classe deve ta aberta para extensão e fechada para modificação.


	> Falo Mandarim, tendi foi nada kkkk como assim fechada para modificação?


No primeiro momento que li sobre pensei tipo, “Oxe?!?! então quer dizer q terminei de fazer a classe não posso modificar mais ela?”, mas depois estudando mais e vendo sobre implementação eu compreendi que é sobre o domínio do que a classe faz, ou seja, se a modificação for feita no que tange o domínio da classe, por exemplo, a classe processar pagamentos, se a modificação foi em um comportamento ja existente e essa modificação não está fora do domínio, ou seja, processamento de pagamentos, você pode modificar, agora se você quer adicionar um novo comportamento à essa classe, pensamos ja na extensão dela para acrescentar esse novo comportamento. Meio confuso, mas com exemplos fica mais fácil de visualizar.

- _LSP__** - **__Liskov Substitution Principle_

Esse principio me pegou, a definição é muito matemática, então precisei ler algumas vezes para entender. Depois de muito insistir em realmente entender esse principio eu cheguei a um raciocínio e vou te explicar como se fosse explicar pra mim mesmo, afinal isso aqui é eu expondo meu conhecimento para firmá-lo.  


![](https://notion-hugo.pages.dev/api?block_id=34bb8e18-e88b-8020-b4b3-d107b9df1354)


O curso que vi, trouxe esse slide onde trouxe a definição matemática e um exemplo do pato, esse pato me quebrou. `“Subclasses devem ser substituíveis por suas Superclasses.”`.


> Ai te pergunto, oque quer dizer com Subclasse e Superclasse?


Superclasse é qualquer classe que seja pai de outra, ou seja, se uma classe estende outra ela é uma Subclasse. O que ele quer dizer com essa substituição de Liskov é que se você criou uma abstração onde uma subclasse não pode ser substituída pela classe pai, essa sua abstração esta errada. No caso imaginando q a classe pai é o Pato verdadeiro e a classe filha é o pato de plástico, se eu não tiver um pato de plástico em tese eu posso usar um pato de verdade, mas se ao usar o pato de verdade eu tiver que usar bateria, ou seja, se na substituição o objeto que for ser criado com a Classe substituída precisar de uma bateria, quer dizer que tem alguma coisa errada, porque se for para seguir a logica se ambos são patos logo não deveria necessitar de algo para fazer funcionar, nesse caso a bateria.


```java
class Classe { // Classe pai
	private String nome = "Nova Classe";
}

public class SubClasse extends Classe { // Classe filha ou subclasse
	public SubClasse(){
		super();
	}
}
```


Ou seja, se ao usar a `Classe` no lugar de uma `SubClasse` seu código tem que funcionar corretamente, se não funcionar é porque tem um problema na abstração ou seja, no contrato que foi definido, ou seja, alguém ta fazendo algo que não deveria ou não compete a ele. Ao identificar algo parecido no desenvolvimento, esse é o momento de parar e repensar sobre como o código está sendo desenvolvido.


	> **Pausa técnica:**  
	> <u>Se tu chegou até aqui recomendo você da uma pausa, descansa o raciocínio e depois volta, conceitos assim são simples de descrever, mas complexos de entender e conseguir visualizar, nosso objetivo aqui é tentar trazer uma visualização um pouco clara utilizando paralelos cotidianas.</u>


## Princípio da segregação de interfaces

- _ISP - Interface Segregation Principle_

Esse princípio traz um pouco dos princípios anteriores mas do ponto de vista de contratos, no caso esse principio fala que:


	> O cliente nunca deve ser forçado a implementar uma interface que ele não vai user, ou clientes nunca deveriam ser forçados a depender de métodos que ele não irá utilizar.


Nesse caso cliente quer dizer a classe que implementa a interface, agora imagine que eu quero criar uma classe que aceite o contrato de uma interface, mas esse contrato me obriga a implementar recursos que não vou utilizar, exatamente nesse ponto que o principio da segregação de interface entra. Se a classe que implementar esse contrato precisar implementar coisas que não precise, nesse momento a hora de pensar em quebrar esses contratos em partes menores.


Para tentar entender vou usar um exemplo que vi em um post em um blog da DigitalOcean, link vai ta nas referencias. Daqui em diante quando eu falar sobre contratos imaginem que estou falando de interfaces. 


Nós temos um contrato `ShapeInterface` que representa uma Forma bidimensional e precisamos manipular uma nova forma, uma forma tridimensional. Para essa nova forma precisamos saber o volume, vamos adicionar ao nosso contrato o método `volume()` 


```java
interface ShapeInterface {
    public function area();
    // Adicionamos esse metodo volume()
    public function volume();
}
```


Classes que implementavam esse contrato, mesmo sendo relacionados a formas 2D, agora tem que implementar comportamentos (métodos) que não são necessários. Assim surge a idea de “quebrar” essa interface em interfaces específicas ou especializadas, criando uma interface `ThreeDimensionalShapeInterface` para o comportamento que deseja adicionar. Assim, caso minha classe precise dos 2 comportamentos, implementamos os 2 contratos. Vamos ver melhor no código.


```java
interface ShapeInterface
{
    public function area();
}
interface ThreeDimensionalShapeInterface
{
    public function volume();
}
```


O contrato `ShapeInterface` permanece o mesmo, o que fizemos foi criar um novo contrato `ThreeDimensionalShapeInterface` com o comportamento desejado.


	> Mas como diabos eu vou usar isso agora?


Ai que entra a ideia, você cria novas interfaces, implementa elas na classe a medida que necessita do comportamento, vamos um exemplo da implementação desses contratos.


Aqui temos contratos para Formas 2D


```java
class Square implements ShapeInterface { // Implementa apenas o contrato area()
    public $length;

    public function __construct($length) {
        $this->length = $length;
    }

    public function area() {
        return pow($this->length, 2);
    }
}
```


No exemplo podemos ver a classe `Square`  que implementa o contrato `ShapeInterface`, Assim a classe pode implementar o comportamento de calcular area em paz. 


	> Ta mas e se quisermos calcular a area e o volume de uma forma 3D? Não vi a solução aplicada não.


Agora vamos ver a implementação dos dois comportamentos em uma classe.


```java
class Cuboid implements ShapeInterface, ThreeDimensionalShapeInterface
{
    public function area()
    {
        // calculate the surface area of the cuboid
    }

    public function volume()
    {
        // calculate the volume of the cuboid
    }
}
```


A classe `Cuboid` implementa duas interfaces, `ShapeInterface` e `TreeDimensionalShapeInterface`, Assim a classe cubo pode ter os 2 comportamentos e a classe `Square` não precisa implementar um comportamento que não faz parte dela.


Eu sinto que ficou de boa de entender, quando se deparar com uma situação de implementar um novo comportamento à uma interface exercitar tentar lembrar que se o contrato precisa fazer muita coisa, então melhor ter contratos menores.


## **DIP:** Dependency Inversion Principle


A inversão de dependência é um principio interessante, esse principio faz a gente construir códigos com baixo acoplamento, pois suas classes não vão necessitar exatamente de uma classe e sim de um contrato ou abstração, com isso você pode aplicar técnicas de código como injeção de dependência que produzem um código performático e organizado.


	> As entidades devem depender de abstrações, não de concretizações. Isso significa que o módulo de alto nível não deve depender do módulo de baixo nível, mas sim de abstrações.


Essa definição é meio difícil de interpretar mas com exemplo fica simples, vamos usar o exemplo uma conexão à um banco de dados.


```java
class MySQLConnection
{
    public function connect()
    {
        // handle the database connection
        return 'Database connection';
    }
}

class PasswordReminder
{
    private $dbConnection;

    public function __construct(MySQLConnection $dbConnection)
    {
        $this->dbConnection = $dbConnection;
    }
}
```


No exemplo temos a classe `MySQLConnection`  é o modulo baixo nível, pois lida diretamente com a base de dados, e a classe `PasswordReminder` é o modulo de alto nível pois lida apenas com a abstração e não sabe direito sobre a implementação. Nesse caso a classe `PasswordReminder` está violando o principio pois ela está dependendo de uma Classe no caso da classe `MySQLConnection` essa Classe é uma “Concretização” e não uma abstração. Agora que entendemos como violar fica fácil de visualizar a forma correta.


```java
interface DBConnectionInterface
{
    public function connect();
}

class MySQLConnection implements DBConnectionInterface
{
    public function connect()
    {
        // handle the database connection
        return 'Database connection established';
    }
}

class PasswordReminder{
    private $dbConnection;

    public function __construct(DBConnectionInterface $dbConnection) // Type-hinting the interface
    {
        $this->dbConnection = $dbConnection;
    }

    public function remind() {
        $connectionStatus = $this->dbConnection->connect();
        return "Password reminder process initiated. Connection status: " . $connectionStatus;
    }
}
```


No exemplo trouxe como seria a uma forma de aplicar esse principio. Criamos um contrato `DBConnectionInterface`, dessa forma quem implementar esse contrato sabe o que é necessário para cumpri-lo. Com isso nossas regras de negocio se desacoplam da forma como as classes são implementadas facilitando a manutenção do comportamento da classe. A Classe `MySQLConnection` implementa o contrato de `DBConnectionInterface` e cria o comportamento necessário para cumprir o contrato. Já a classe `PasswordReminder` agora invés de depender diretamente da classe `MySQLConnection` ela depende do contrato, assim a classe `PasswordReminder` deixa de depender de uma classe concreta e depende de uma abstração, em outra palavras, ela não depende de uma classe, mas sim de quem implementar o contrato.


é meio confuso de inicio mas a medida que o tempo passa você vai visualizando, é muito conceitual mas faz muito sentido quando você faz analogia ao mundo real, o SOLID pra mim é sinônimo de organizado, arrumado e padronizado. O SOLID tem por intuito tornar o caos dos códigos em um ambiente arrumado e prático para quem for estar lá, quem passa por la e pretende mexer em algo tem que manter tudo no seu devido lugar, assim preservando o ambiente em sua organização. Agradeço por ter lido até aqui e espero você no próximo post da serie, Próximo post vamos dar continuidade ao assunto e tratar sobre Injeção de dependência, vai ser legal!


## References:


[https://www.digitalocean.com/community/conceptual-articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design](https://www.digitalocean.com/community/conceptual-articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design)


[https://www.freecodecamp.org/news/solid-principles-explained-in-plain-english/](https://www.freecodecamp.org/news/solid-principles-explained-in-plain-english/)

