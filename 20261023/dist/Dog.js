"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = void 0;
const Mamifero_1 = require("./Mamifero");
// usando a palavra 'extends',
// informamos que a classe Dog herda da classe Mamifero
class Dog extends Mamifero_1.Mamifero {
    breed;
    constructor(breed, nome, patas, pelo) {
        // super vem de 'superclass', que é a classe pai
        // super() nada mais é do que o constructor da classe pai
        super(nome, patas, pelo);
        this.breed = breed;
    }
    correr() {
        console.log(`${this.getNome()} está correndo!`);
    }
}
exports.Dog = Dog;
