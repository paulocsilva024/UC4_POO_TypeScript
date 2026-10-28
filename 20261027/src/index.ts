import { Animal } from "./Animal";
import { Crocodile } from "./Crocodile";
import { Mamifero } from "./Mamifero";
import { Owl } from "./Owl";
import { Reptil } from "./Reptil";

// Criando objetos
const cachorro:Mamifero = new Mamifero("Rex", 5, true);
const cobra:Reptil = new Reptil("Naja", 2, "escamas lisas");
const croc:Crocodile = new Crocodile("Croc", 5,"escamosa");
const coruja:Owl = new Owl("Corujinha", 3, true)

cachorro.mover();      // herdado da classe Animal
cachorro.amamentar();  // método da classe Mamifero

cobra.mover();         // herdado da classe Animal
cobra.botarOvo();      // método da classe Reptil

croc.mover()
croc.botarOvo()
croc.swim() // método da classe Crocodilo


const meuArray:Animal[] = [cachorro, coruja, croc]

for (let pets of meuArray) {
    pets.comer()
}