"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gerente = void 0;
class Gerente {
    nome;
    constructor(nome) {
        this.nome = nome;
    }
    trabalhar() {
        console.log(`${this.nome} está trabalhando, mas sem gerenciar qualquer equipe.`);
    }
    gerenciar() {
        console.log(`${this.nome} está gerenciando a equipe dele.`);
    }
}
exports.Gerente = Gerente;
