import { ITrabalhador } from "./ITrabalhador";
import { IGerente } from "./IGerente";

export class Gerente implements ITrabalhador, IGerente {
    nome:string

    constructor(nome:string){
        this.nome = nome
    }

    trabalhar(): void {
        console.log(`${this.nome} está trabalhando, mas sem gerenciar qualquer equipe.`)
    }

    gerenciar(): void {
        console.log(`${this.nome} está gerenciando a equipe dele.`)
    }
}