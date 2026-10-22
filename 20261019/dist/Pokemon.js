"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokemon = void 0;
class Pokemon {
    nome;
    vida;
    ataque;
    poder;
    constructor(nome, vida, ataque, poder) {
        this.nome = nome;
        this.vida = vida;
        this.ataque = ataque;
        this.poder = poder;
    }
    falar(n) {
        console.log(`${this.nome} `.repeat(n));
    }
    atacar(pokemon) {
        pokemon.vida -= this.ataque;
        if (pokemon.vida < 0) {
            pokemon.vida = 0;
        }
        console.log(`${this.nome} ataca...\n    Dano: ${this.ataque}`);
        console.log(`\n${pokemon.nome}(${pokemon.vida})`);
    }
    atacarComPoder(pokemon) {
        pokemon.vida -= this.poder.ataque;
        if (pokemon.vida < 0) {
            pokemon.vida = 0;
        }
        console.log(`${this.nome} ataca com ${this.poder.nome}\n    Dano: ${this.poder.ataque}`);
        console.log(`\n${pokemon.nome}(${pokemon.vida})`);
    }
}
exports.Pokemon = Pokemon;
