"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guardiao = void 0;
const Personagem_1 = require("./Personagem");
class Guardiao extends Personagem_1.Personagem {
    superDef;
    constructor(funcao, nome, vida, ataque, alcance, defesa, defesa_superior) {
        super(funcao, nome, vida, ataque, alcance, defesa);
        this.superDef = defesa_superior;
        this.vida = this.vida;
        this.defesa = this.defesa + this.superDef;
    }
    usarEscudo() {
        console.log(`${this.nome} usou o escudo para se defender`);
    }
    atacar(atacado) {
        atacado.receberDano(this.ataque);
        console.log(`${this.nome} ataca o seu inimigo para se defender`);
    }
    curar(valor) {
        if (this.estaVivo()) {
            let danoPos = Math.abs(valor);
            this.vida += danoPos;
            if (this.vida > this.vidaMaxima)
                this.vida = this.vidaMaxima;
            console.log(`${this.nome} tomou poção de cura
                Vida atual: ${this.getVida()}/${this.getMaxVida()}`);
        }
        else {
            console.log(`${this.nome} morreu! Compre uma nova ficha!`);
        }
    }
    HabilidadeEspecial() {
        console.log(`${this.nome} usou sua abilidade especial DEFESA DE DIAMANTE para aumentar sua defesa`);
        this.defesa += 20;
        this.superDef += 10;
    }
    equipe() {
        return this.nome + "estah com o equipamento lendário O CORTADOR DE PIZZA ENFERRUJADO";
    }
}
exports.Guardiao = Guardiao;
