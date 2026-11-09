import { IGerente } from "./IGerente";
import { IProgramador } from "./IProgramador";
import { ITrabalhador } from "./ITrabalhador";

export class LiderTecnico implements ITrabalhador, IProgramador, IGerente {
    nome:string

    constructor(nome:string){
        this.nome = nome
    }
    
    trabalhar(): void {
        console.log(`${this.nome} está fazendo qualquer coisa no trabalho, menos gerenciar ou programar`)
    }

    programar(): void {
        console.log(`${this.nome} está programando.`)
    }

    gerenciar(): void {
        console.log(`${this.nome} está gerenciando tudo.`)
    }
}