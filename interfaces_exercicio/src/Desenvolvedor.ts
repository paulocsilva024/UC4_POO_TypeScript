import { ITrabalhador } from "./ITrabalhador";
import { IProgramador } from "./IProgramador";

export class Desenvolvedor implements ITrabalhador, IProgramador {
    nome:string
    
    constructor(nome:string){
        this.nome = nome
    }

    trabalhar(): void {
        console.log(`${this.nome} está trabalhando, mas não programando.`)
    }

    programar(): void {
        console.log(`${this.nome} está programando.`)
    }
}