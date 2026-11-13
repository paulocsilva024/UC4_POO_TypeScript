"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personagem = void 0;
class Personagem {
    nome;
    vida;
    vidaMaxima = 100;
    ataque;
    defesa;
    vivoh = true;
    constructor(nome, vida, ataque, defesa) {
        this.nome = nome;
        this.vida = vida;
        this.ataque = ataque;
        this.defesa = defesa;
        this.verificarVida(vida);
    }
    exibirStatus() {
        console.log(`
            Status de ${this.nome}
            Vida: ${this.vida}
            Ataque: ${this.ataque}
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
        let danoPos = Math.abs(valor);
        this.vida -= danoPos;
        //if (this.vida < 0) this.vida = 0
        //this.estaVivo()
        if (!this.estaVivo())
            this.vida = 0;
        console.log(`${this.nome} foi atacado e recebeu dano de ${danoPos}
            Vida atual: ${this.getVida()}/${this.getMaxVida()}`);
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
            console.log(`${this.nome} morreu!`);
        }
    }
    estaVivo() {
        this.vida <= 0 ? this.vivoh = false : this.vivoh = true;
        return this.vivoh;
    }
}
exports.Personagem = Personagem;
