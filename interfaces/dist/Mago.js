"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mago = void 0;
class Mago {
    nome;
    constructor(nome) {
        this.nome = nome;
    }
    lancarMagia() {
        console.log(`${this.nome} lança uma bola de fogo!`);
    }
    atacar() {
        console.log(`${this.nome} ataca com um cajado!`);
    }
    curar(valorCura) {
        console.log(`${this.nome} cura ${valorCura} pontos de vida!`);
    }
}
exports.Mago = Mago;
