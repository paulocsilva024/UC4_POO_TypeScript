"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personagem = void 0;
class Personagem {
    nome;
    vida;
    vidaMaxima = 100;
    ataque;
    defesa;
    constructor(nome, vida, ataque, defesa) {
        this.nome = nome;
        this.vida = vida;
        this.ataque = ataque;
        this.defesa = defesa;
        this.verificarVida(vida);
    }
    exibirStatus() {
        console.log(`
            Status de ${this.nome}
            Vida: ${this.vida}
            Ataque: ${this.ataque}
            Defesa: ${this.defesa}`);
    }
    verificarVida(vida) {
        if (vida > 100)
            this.vida = 100;
        if (vida < 0)
            this.vida = 0;
    }
    getVida() {
        return this.vida;
    }
    getMaxVida() {
        return this.vidaMaxima;
    }
}
exports.Personagem = Personagem;
