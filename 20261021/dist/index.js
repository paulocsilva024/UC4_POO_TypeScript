"use strict";
/* Encapsulamento

Encapsulamento é o ato de proteger os dados dos nossos objetos (tanto os atributos quanto os métodos)
e controlar como podem ser acessados ou modificados.

Exemplo: usando encapsulamento, podemos impedir que alguém deixe a vida do pokemon negativa.

Para utilizar encapsulamento nas nossas classes, precisamos colocar certas palavras antes dos atributos e antes dos métodos.
São elas:

    - public (que significa 'público')
    - private (que significa 'privado')
    - protected (que significa 'protegido')

Chamamos, estes três, de modificadores de acesso.

O 'public' permite que o atributo ou método seja acessado e modificado em qualquer arquivo do meu programa DIRETAMENTE.
Exemplo:

Na classe -> public vida:number
No index: -> pokemon.vida = -999

O 'private' NÃO permite que o atributo ou método seja acessado e modificado de qualquer jeito.
Para poder fazer isso, precisamos chamar os métodos da classe.
*/
Object.defineProperty(exports, "__esModule", { value: true });
const Dog_1 = require("./Dog");
const Personagem_1 = require("./Personagem");
// EXERCÍCIOS
// Criem uma classe Personagem que tenha:
// nome, vida, dinheiro
// coloque todos os atributos como 'private'
// crie um método que mostra a vida (exemplo: mostrarVida())
// crie um método que modifica a vida (exemplo: mudarVida(vida:number))
const char = new Personagem_1.Personagem("Laura", 100, 15000);
/* console.log(char.getVida())
char.setVida(112)
console.log(char.getVida()) */
const dog1 = new Dog_1.Dog("Zac", 0.66, "Pug");
const dog2 = new Dog_1.Dog("Alice", 5, "SRD");
const dog3 = new Dog_1.Dog("Flor", 8, "Golden");
console.log(`Estes são os cães que eu criei
    ${dog1.getNome()}, Idade: ${dog1.getVida()}, Raça: ${dog1.getRaca()}
    ${dog2.getNome()}, idade: ${dog2.getVida()}, Raça: ${dog2.getRaca()}
    ${dog3.getNome()}, idade: ${dog3.getVida()}, Raça: ${dog3.getRaca()}`);
console.log(`\nAgora vou alterar a raça => ${dog3.getNome()}`);
dog3.setRaca("Golden Retriever");
console.log(`\nRaça certa: ${dog3.getRaca()}`);
console.log(`\nE a raça da ${dog2.getNome()}:`);
dog2.setRaca("Vira-lata");
console.log(`\nNova Raça: ${dog2.getRaca()}`);
