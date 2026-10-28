import { Mamifero } from "./Mamifero";

export class Dog extends Mamifero {
    breed:string

    constructor(nome:string, idade:number, breed:string, temPelo:boolean){
        // super vem de 'superclass', que é a classe pai
        // super() nada mais é do que o constructor da classe pai
        super(nome, idade, temPelo);
        this.breed = breed
    }

    correr():void {
        console.log(`${this.nome} está correndo!`)
    }
}