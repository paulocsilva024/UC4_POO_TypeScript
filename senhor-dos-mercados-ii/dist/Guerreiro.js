"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guerreiro = void 0;
const Personagem_1 = require("./Personagem");
class Guerreiro extends Personagem_1.Personagem {
    superAtk = 8; //aumenta o ataque em 30 pontos
    constructor(funcao, nome, vida, ataque, alcance, defesa) {
        super(funcao, nome, vida, ataque, alcance, defesa);
        this.funcao = funcao;
        this.ataque += this.superAtk;
        this.vida = this.vida + this.defesa;
    }
    atacar(atacado) {
        console.log(`${this.nome} atacou ${atacado.nome} com superAtack.`);
        atacado.receberDano(this.ataque);
    }
    HabilidadeEspecial() {
        console.log(`${this.nome} usou sua habilidade especial MOTIVACAO DO GUERREIRO para aumentar sua forca`);
        this.ataque += 40;
        this.superAtk += 20;
    }
    equipe() {
        console.log(`Agora ${this.nome} está com um equipamento.`);
    }
}
exports.Guerreiro = Guerreiro;
