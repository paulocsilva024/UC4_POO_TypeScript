"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personagem = void 0;
class Personagem {
    nome;
    vida;
    //private dinheiro:number
    constructor(nome) {
        this.nome = nome;
        this.vida = 100;
        //this.dinheiro = money
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
    curar() {
        this.vida += 10;
        if (this.vida > 100) {
            this.vida = 100;
        }
    }
}
exports.Personagem = Personagem;
