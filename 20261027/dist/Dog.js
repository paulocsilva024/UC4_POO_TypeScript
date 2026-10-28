"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = void 0;
const Mamifero_1 = require("./Mamifero");
class Dog extends Mamifero_1.Mamifero {
    breed;
    constructor(nome, idade, breed, temPelo) {
        // super vem de 'superclass', que é a classe pai
        // super() nada mais é do que o constructor da classe pai
        super(nome, idade, temPelo);
        this.breed = breed;
    }
    correr() {
        console.log(`${this.nome} está correndo!`);
    }
}
exports.Dog = Dog;
