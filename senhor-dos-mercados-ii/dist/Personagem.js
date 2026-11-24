"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personagem = void 0;
class Personagem {
    funcao;
    nome;
    vida;
    vidaMaxima = 100;
    ataque;
    alcance;
    defesa;
    constructor(funcao, nome, vida, ataque, alcance, defesa) {
        this.funcao = funcao;
        this.nome = nome;
        this.vida = vida;
        this.ataque = ataque;
        this.alcance = alcance;
        this.defesa = defesa;
        this.verificarVida(vida);
    }
    exibirStatus() {
        const porcentagem = this.vida / this.vidaMaxima;
        const bloco = Math.round(porcentagem * 20);
        const HP = "█".repeat(bloco) + "░".repeat(20 - bloco);
        console.log(`
            Status de ${this.nome}
            Vida: ${this.vida}/${this.vidaMaxima}
            ${HP}
            Ataque: ${this.ataque}
            Alcance: ${this.alcance}
            Defesa: ${this.defesa}`);
    }
    verificarVida(vida) {
        if (vida > 100)
            this.vida = 100;
        if (vida < 0)
            this.vida = 0;
    }
    getVida() {
        return this.vida;
    }
    getMaxVida() {
        return this.vidaMaxima;
    }
    receberDano(valor) {
        //let danoPos = Math.abs(valor)
        //this.vida -= danoPos
        //if (this.vida < 0) this.vida = 0
        //this.estaVivo()
        this.vida = Math.max(0, Math.floor(this.vida - Math.abs(valor)));
        if (!this.estaVivo())
            this.vida = 0;
        console.log(`${this.nome} foi atacado e recebeu dano de ${Math.floor(this.vida - Math.abs(valor))}
            Vida atual: ${this.getVida()}/${this.getMaxVida()}`);
    }
    estaVivo() {
        return this.vida > 0;
    }
    atacar(atacado, forca) {
        if (!this.estaVivo() || !atacado.estaVivo())
            return;
        const dano = Math.max(0, Math.floor(forca));
        console.log(`${this.nome} golpeou o alvo ${atacado.nome} e deu um dano de ${dano}!`);
    }
}
exports.Personagem = Personagem;
