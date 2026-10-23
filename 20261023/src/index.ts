import { Dog } from "./Dog";
import { Guerreiro } from "./Guerreiro";
/*
Exercício - Herança e protected
Crie uma classe chamada Personagem com:
- Os atributos protected nome:string e protected vida:number;
- Um construtor que receba o nome e inicie a vida em 100;
- Um método curar(), que aumente a vida em 10;
- Um método mostrarDados(), que exiba o nome e a vida.

Crie a classe Guerreiro, que herda de Personagem (lembre-se de suar o 'extends')

- Crie um atributo "armadura:string" que mostra o tipo de armadura (ex: de ferro, de ouro, de aço)
- Crie o constructor:

    constructor (armadura:string, nome:string, vida:number){
        super(nome, vida)
        this.armadura = armadura
    }

- Crie o método usarEscudo() que retorna uma frase "Fulano usou o escudo para se defender"
*/
const dog:Dog = new Dog("Golden Retriever", "Flor", 7, "Amarelo")
dog.fazerSom()

const char1:Guerreiro = new Guerreiro("Xablau", "Golden Armor")

char1.usarEscudo()