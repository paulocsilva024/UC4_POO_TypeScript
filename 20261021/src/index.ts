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

import { Dog } from "./Dog";
import { Personagem } from "./Personagem";

// EXERCÍCIOS
// Criem uma classe Personagem que tenha:
// nome, vida, dinheiro

// coloque todos os atributos como 'private'
// crie um método que mostra a vida (exemplo: mostrarVida())
// crie um método que modifica a vida (exemplo: mudarVida(vida:number))

const char:Personagem = new Personagem ("Laura", 100, 15000)

console.log(char.getVida())
char.setVida(112)
console.log(char.getVida())

const dog1:Dog = new Dog ("Zac", )