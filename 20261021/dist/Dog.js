"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = void 0;
class Dog {
    nome;
    vida;
    breed;
    constructor(nome, vida, breed) {
        this.nome = nome;
        this.vida = vida;
        this.breed = breed;
    }
    getNome() {
        return this.nome;
    }
    setNome(newName) {
        this.nome = newName;
    }
    getVida() {
        return this.vida;
    }
    setVida(novaVida) {
        this.vida = novaVida;
        if (this.vida < 0) {
            this.vida = 0;
        }
    }
    getRaca() {
        return this.breed;
    }
    setRaca(newBreed) {
        this.breed = newBreed;
    }
    morder(qualquerCoisa) {
        console.log(`O cachorro mordeu o(a) ${qualquerCoisa}`);
    }
}
exports.Dog = Dog;
