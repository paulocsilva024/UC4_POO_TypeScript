"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Arma_1 = require("./Arma");
const Personagem_1 = require("./Personagem");
const espada = new Arma_1.Arma("espada", "Katana", 9);
const faca = new Arma_1.Arma("faca", "Canivete", 2);
const pistola = new Arma_1.Arma("pistola", "Novemilímetros", 25);
const per1 = new Personagem_1.Personagem("Xablau", 20, pistola);
const per2 = new Personagem_1.Personagem("Fulano", 10, espada);
const per3 = new Personagem_1.Personagem("Ciclano", 8, faca);
// string é um tipo. Logo, podemos criar um array deste tipo
const nomes = ["Miriam", "Ester", "Laura"];
// number é um tipo. Logo, também podemos criar um array deste tipo
const numeros = [99, 108, 59];
// Se "Personagem" também é um tipo, podemos criar um array de Personagem? Y
const personagens = [per1, per2, per3];
console.log(`Neste código, temos alguns personagens. São:
    ${per1.nome}
        vida: ${per1.vida}
        arma: ${per1.arma.tipo} (${per1.arma.nome})
    ${per2.nome}
        vida: ${per2.vida}
        arma: ${per2.arma.tipo} (${per2.arma.nome})
    ${per3.nome}
        vida: ${per3.vida}
        arma: ${per3.arma.tipo} (${per3.arma.nome})`);
console.log(`\nCliclano atacou Xablau com a arma dele e causou ${per3.arma.ataque} de dano`);
per3.atacar(per1);
console.log(`\n${per1.nome} - vida: ${per1.vida}`); //50
console.log(`\nXablau revidou com dois tiros e causou ${per1.arma.ataque * 2} de dano.`);
per1.atacar(per3);
per1.atacar(per3);
console.log(`\n${per3.nome} - vida: ${per3.vida}`); //50
per1.curar(55);
console.log(per1.vida); // seria 135, mas deve aparecer 100
per1.damage(77);
per1.damage(77);
console.log(per1.vida); //ficaria menos que 0, mas deve aparecer 0
