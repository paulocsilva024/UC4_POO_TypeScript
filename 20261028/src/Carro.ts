import { Veiculo } from "./Veiculo";

export class Carro extends Veiculo {
    public nome:string
    constructor(name:string, speed:number){
        super(speed)
        this.nome = name
    }

    public acelerar(val:number):void{
        if (val > 0) {this.speed += val}
    }
    public exibirVelocidade():void{
        console.log(`Velocidade atual: ${this.speed}`)
    }
}