import { Mamifero } from "./Mamifero";

// usando a palavra 'extends',
// informamos que a classe Dog herda da classe Mamifero
export class Dog extends Mamifero {
    breed:string

    constructor(breed:string, nome:string, patas:number, pelo:string){
        // super vem de 'superclass', que é a classe pai
        // super() nada mais é do que o constructor da classe pai
        super(nome, patas, pelo);
        this.breed = breed
    }

    correr():void {
        console.log(`${this.getNome()} está correndo!`)
    }
}