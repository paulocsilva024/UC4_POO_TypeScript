"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guerreiro = void 0;
const Personagem_1 = require("./Personagem");
class Guerreiro extends Personagem_1.Personagem {
    armadura; //de ferro, de ouro, de aço
    constructor(nome, armadura) {
        super(nome);
        this.armadura = armadura;
    }
    usarEscudo() {
        console.log(`${this.nome} usou o escudo para se defender`);
    }
}
exports.Guerreiro = Guerreiro;
