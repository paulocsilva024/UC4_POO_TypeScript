"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Crocodile_1 = require("./Crocodile");
const Mamifero_1 = require("./Mamifero");
const Owl_1 = require("./Owl");
const Reptil_1 = require("./Reptil");
// Criando objetos
const cachorro = new Mamifero_1.Mamifero("Rex", 5, true);
const cobra = new Reptil_1.Reptil("Naja", 2, "escamas lisas");
const croc = new Crocodile_1.Crocodile("Croc", 5, "escamosa");
const coruja = new Owl_1.Owl("Corujinha", 3, true);
cachorro.mover(); // herdado da classe Animal
cachorro.amamentar(); // método da classe Mamifero
cobra.mover(); // herdado da classe Animal
cobra.botarOvo(); // método da classe Reptil
croc.mover();
croc.botarOvo();
croc.swim(); // método da classe Crocodilo
const meuArray = [cachorro, coruja, croc];
for (let pets of meuArray) {
    pets.comer();
}
