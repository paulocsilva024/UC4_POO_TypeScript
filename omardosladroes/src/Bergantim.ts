import { Navio } from "./Navio";

export class Bergantim extends Navio {

    protected resistencia:string = "intermediária"

    constructor(nome:string, canhoes:number){
        super(nome, 50, 20, 100, canhoes)
        
    }

    navegar(): void {
        console.log(`${this.nome} aproveita seus ventos favoráveis para navegar rapidamente.`)
    }
    atacar():void{
        console.log(`${this.nome} realiza uma sequência rápida de disparos.`)
    }
}