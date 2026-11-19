"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Arqueiro = void 0;
const Personagem_1 = require("./Personagem");
class Arqueiro extends Personagem_1.Personagem {
    superPre;
    constructor(nome, vida, ataque, alcance, defesa, mira_superior) {
        super(nome, vida, ataque, alcance, defesa);
        this.superPre = mira_superior;
        this.alcance = this.alcance + this.superPre;
        this.vida = this.vida = this.defesa;
    }
    atacar(per1) {
        per1.receberDano(this.ataque);
        console.log(`${this.nome} ataca o seu inimigo a uma distancia de ${this.alcance}`);
    }
    HabilidadeEspecial() {
        console.log(`${this.nome} usou sua abilidade especial INTEPRETACAO DO GAVIAO para aumentar sua forca`);
        this.ataque += 80;
        this.alcance += 3;
    }
}
exports.Arqueiro = Arqueiro;
