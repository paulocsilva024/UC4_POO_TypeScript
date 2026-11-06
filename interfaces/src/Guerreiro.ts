import { IAtacante } from "./IAtacante";

// eu estou dizendo ue qualquer Guerreiro deve seguir as regras que a interface IAtacante manda
export class Guerreiro implements IAtacante {
    public nome:string

    constructor(nome: string) {
        this.nome = nome
    }
    
    atacar(): void {
    console.log(`${this.nome} ataca com a espada!`);
}
}