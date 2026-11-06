"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guerreiro = void 0;
// eu estou dizendo ue qualquer Guerreiro deve seguir as regras que a interface IAtacante manda
class Guerreiro {
    nome;
    constructor(nome) {
        this.nome = nome;
    }
    atacar() {
        console.log(`${this.nome} ataca com a espada!`);
    }
}
exports.Guerreiro = Guerreiro;
