"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Poder_1 = require("./Poder");
const Pokemon_1 = require("./Pokemon");
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
const p1 = new Poder_1.Poder("Thunderbolt", 12);
const p2 = new Poder_1.Poder("Fireball", 10);
const pok1 = new Pokemon_1.Pokemon("Pikachu", 50, 7, p1);
const pok2 = new Pokemon_1.Pokemon("Charmander", 50, 7, p2);
console.log(`=================== BATALHA ===================\n`);
console.log(`Vamos apresentar os Pokémons`);
console.log(`\n${pok1.nome}(${pok1.vida}) fala...`);
pok1.falar(3);
console.log(`\n${pok2.nome}(${pok1.vida}) responde...`);
pok2.falar(2);
console.log(`\n${pok1.nome} ataca..`);
pok1.atacar(pok2);
pok2.atacarComPoder(pok1);
