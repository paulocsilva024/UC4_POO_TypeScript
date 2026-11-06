"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Galeao = void 0;
const Navio_1 = require("./Navio");
class Galeao extends Navio_1.Navio {
    vidaMaxima = 100;
    resistencia = "alta";
    constructor(nome, tripulalMax, velocidade, canhoes) {
        super(nome, 50, tripulalMax, 50, 80);
        this.capacidadeTripulacao = 50;
    }
    navegar() {
        console.log(`${this.nome} avança lentamente pelo mar.`);
    }
    atacar() {
        console.log(`${this.nome} dispara uma poderosa salva de canhões.`);
    }
    repararNavio(pts) {
        this.vida = +pts;
        if (this.vida > this.vidaMaxima) {
            this.vida = this.vidaMaxima;
        }
    }
}
exports.Galeao = Galeao;
