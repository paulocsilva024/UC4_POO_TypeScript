"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personagem = void 0;
class Personagem {
    // Atributos
    nome;
    vida = 50;
    forca;
    arma;
    constructor(nome, forca, arma) {
        this.nome = nome;
        this.forca = forca;
        this.arma = arma;
    }
    curar(cura) {
        this.vida += cura;
        if (this.vida > 100) {
            this.vida = 100;
        }
    }
    damage(dano) {
        this.vida -= dano;
        if (this.vida < 0) {
            this.vida = 0;
        }
    }
    curarOutroPersonagem(per) {
        per.vida += 10;
        if (per.vida > 100) {
            per.vida = 100;
        }
    }
    atacar(per) {
        per.vida -= this.arma.ataque;
        if (per.vida < 0) {
            per.vida = 0;
        }
    }
}
exports.Personagem = Personagem;
