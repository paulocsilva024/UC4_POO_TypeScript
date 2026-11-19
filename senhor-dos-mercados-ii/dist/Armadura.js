"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Armadura = void 0;
class Armadura {
    nome;
    durabilidade;
    tempo = 20;
    constructor(nome, durabilidade = 200) {
        this.nome = nome;
        //this.durabilidade = durabilidade
        //this.tempo = tempo
        this.durabilidade = durabilidade - this.tempo;
    }
}
exports.Armadura = Armadura;
