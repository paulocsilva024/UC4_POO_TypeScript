"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Navio = void 0;
class Navio {
    nome;
    capacidadeTripulacao;
    vida;
    veloc;
    canhoes;
    constructor(nome, vida, tripulalMax, velocidade, canhoes) {
        this.nome = nome;
        this.capacidadeTripulacao = tripulalMax;
        this.vida = vida;
        this.veloc = velocidade;
        this.canhoes = canhoes;
    }
    navegar() {
        console.log("O navio está navegando");
    }
    receberDano(dano) {
        let danoPositivo = Math.abs(dano);
        this.vida -= danoPositivo;
        if (this.vida < 0) {
            this.vida = 0;
        }
    }
    exibirInformacoes() {
        console.log(`
        Navio ${this.nome}
        Vida: ${this.vida}
        Velocidade: ${this.veloc}
        Canhões: ${this.canhoes}
        `);
    }
}
exports.Navio = Navio;
