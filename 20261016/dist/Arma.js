"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Arma = void 0;
/*
1) Crie uma nova classe chamada Arma que deve ter nome e ataque. Não esqueça do constructor
2) Dentro da classe Personagem, crie o atributo arma (do tipo Arma) e chame ele no constructor do Personagem também
3) Modifique o método 'atacar' da classe Personagem para usar o dano da arma
*/
class Arma {
    tipo;
    nome;
    ataque;
    constructor(tipo, nome, ataque) {
        this.tipo = tipo;
        this.nome = nome;
        this.ataque = ataque;
    }
}
exports.Arma = Arma;
