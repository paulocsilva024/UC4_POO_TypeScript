import { Navio } from "./Navio";

export class Chalupa extends Navio {

    protected resistencia:string = "baixa"

    constructor(nome:string, vida:number, tripulalMax:number, velocidade:number, canhoes:number){
        super(nome, vida, tripulalMax, velocidade, canhoes)
        this.capacidadeTripulacao = 10
    }

    navegar(): void {
        console.log(`${this.nome} utiliza sua agilidade para realizar manobras rápidas.`)
    }
    atacar():void{
        console.log(`${this.nome} dispara seus poucos canhões e tenta escapar rapidamente.`)
    }
    explorarIlha():void{
        console.log(`A tripulação está explorando uma ilha em busca de tesouros.`)
    }
}