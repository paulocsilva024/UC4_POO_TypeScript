import { Poder } from "./Poder";
import { Pokemon } from "./Pokemon";

/**
 1) Crie uma classe chamada Pokemon.
 O Pokemon deve ter um nome (string), vida(number), ataque(number) e um poder.
 O poder é uma classe que vamos criar também.

 Métodos do Pokemon:
 falar -> um método que repete o nome do pokémon algumas vezes

 atacar -> um método que recebe outro pokemon e ataca ele, tirando vida dele.

 atacarComPoder -> um método que recebe outro pokemon e ataca ele também, porém diz
 o nome do poder e usa o ataque do poder.

 2) Crie uma classe chamada Poder. Ela deve ter um nome(string) e ataque(number).
 Não precisa de nenhum método, exceto o constructor.

 3) Crie dois poderes e dois pokémon no index e simule uma pequena batalha entre eles.
 */
const p1:Poder = new Poder("Thunderbolt",22)
const p2:Poder = new Poder("Fireball",19)

const pok1:Pokemon = new Pokemon("Pikachu",50,7,p1)
const pok2:Pokemon = new Pokemon("Charizard",50,7,p2)

console.log(`=================== BATALHA ===================\n`)
console.log(`Vamos apresentar os Pokémons`)
console.log(`\n${pok1.nome}(${pok1.vida}) fala...`)
pok1.falar(3)
console.log(`\n${pok2.nome}(${pok1.vida}) responde...`)
pok2.falar(2)
console.log(`\n`)
pok1.atacar(pok2)
pok2.atacar(pok1)
pok1.atacarComPoder(pok2)
pok2.atacarComPoder(pok1)

/* Encapsulamento

Encapsulamento é o ato de proteger os dados dos nossos objetivos (tanto os atributos quanto os métodos)
e controlar como podem ser acessados ou modificados.

Exemplo: usando encapsulamento, podemos impedir que alguém deixe a vida do pokemon negativa.

Para utilizar encapsulamento nas nossas classes, precisamos colocar certas palavras antes dos atributos e antes dos métodos.
São elas:

    - public (que significa 'público')
    - private (que significa 'privado')
    - protected (que significa 'protegido')

Chamamos estes três de modificadores de acesso. O 'public' permite que o atributo ou método seja acessado
e modificado em qualquer arquivo do meu programa DIRETAMENTE. Exemplo:

Na classe -> public vida:number
No index: -> pokemon.vida = -999

O 'private' NÃO permite que o atributo ou método seja acessado e modificado de qualquer jeito.
Para poder fazer isso, precisamos chamar os métodos da classe.
*/
