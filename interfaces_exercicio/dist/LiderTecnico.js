"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiderTecnico = void 0;
class LiderTecnico {
    nome;
    constructor(nome) {
        this.nome = nome;
    }
    trabalhar() {
        console.log(`${this.nome} está fazendo qualquer coisa no trabalho, menos gerenciar ou programar`);
    }
    programar() {
        console.log(`${this.nome} está programando.`);
    }
    gerenciar() {
        console.log(`${this.nome} está gerenciando tudo.`);
    }
}
exports.LiderTecnico = LiderTecnico;
