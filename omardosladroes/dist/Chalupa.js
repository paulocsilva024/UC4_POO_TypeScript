"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chalupa = void 0;
const Navio_1 = require("./Navio");
class Chalupa extends Navio_1.Navio {
    resistencia = "baixa";
    constructor(nome, vida, tripulalMax, velocidade, canhoes) {
        super(nome, vida, tripulalMax, velocidade, canhoes);
        this.capacidadeTripulacao = 10;
    }
    navegar() {
        console.log(`${this.nome} utiliza sua agilidade para realizar manobras rápidas.`);
    }
    atacar() {
        console.log(`${this.nome} dispara seus poucos canhões e tenta escapar rapidamente.`);
    }
    explorarIlha() {
        console.log(`A tripulação está explorando uma ilha em busca de tesouros.`);
    }
}
exports.Chalupa = Chalupa;
