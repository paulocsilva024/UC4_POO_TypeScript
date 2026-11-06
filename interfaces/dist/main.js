"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Guerreiro_1 = require("./Guerreiro");
const Mago_1 = require("./Mago");
const guerreiro = new Guerreiro_1.Guerreiro("Xablau");
const mago = new Mago_1.Mago("Merlin");
// guerreiro.atacar();
// mago.lancarMagia();
function luta(personagem, inimigo) {
    personagem.atacar();
    inimigo.atacar();
}
luta(guerreiro, mago);
