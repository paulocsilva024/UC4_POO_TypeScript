import { Navio } from "./Navio";

export class Galeao extends Navio {

    vidaMaxima: number = 100
    protected resistencia:string = "alta"

    constructor(nome:string, tripulalMax:number, velocidade:number, canhoes:number){
        super(nome, 50, tripulalMax, 50, 80)
        this.capacidadeTripulacao = 50
    }

    navegar(): void {
        console.log(`${this.nome} avança lentamente pelo mar.`)
    }
    atacar():void{
        console.log(`${this.nome} dispara uma poderosa salva de canhões.`)
    }
    repararNavio(pts:number):void{
        this.vida =+ pts
        if (this.vida > this.vidaMaxima) {this.vida = this.vidaMaxima}
    }
}