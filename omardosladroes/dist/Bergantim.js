"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bergantim = void 0;
const Navio_1 = require("./Navio");
class Bergantim extends Navio_1.Navio {
    resistencia = "intermediária";
    constructor(nome, canhoes) {
        super(nome, 50, 20, 100, canhoes);
    }
    navegar() {
        console.log(`${this.nome} aproveita seus ventos favoráveis para navegar rapidamente.`);
    }
    atacar() {
        console.log(`${this.nome} realiza uma sequência rápida de disparos.`);
    }
}
exports.Bergantim = Bergantim;
