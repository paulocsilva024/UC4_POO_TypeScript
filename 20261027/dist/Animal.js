"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
// Classe base (superclasse)
class Animal {
    nome;
    idade;
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    mover() {
        console.log(`${this.nome} está se movendo...`);
    }
    comer() {
        console.log(`${this.nome} está se comendo...`);
    }
}
exports.Animal = Animal;
