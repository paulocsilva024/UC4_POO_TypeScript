"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personagem = void 0;
class Personagem {
    nome;
    vida;
    dinheiro;
    constructor(nome, vida, money) {
        this.nome = nome;
        this.vida = vida;
        this.dinheiro = money;
    }
    getNome() {
        return this.nome;
    }
    setNome(newName) {
        this.nome = newName;
    }
    getVida() {
        return this.vida;
    }
    setVida(novaVida) {
        this.vida = novaVida;
        if (this.vida < 0) {
            this.vida = 0;
        }
    }
    getMoney() {
        return this.dinheiro;
    }
    setMoney(money) {
        this.dinheiro = money;
    }
}
exports.Personagem = Personagem;
