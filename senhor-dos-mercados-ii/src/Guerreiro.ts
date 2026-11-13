import { Personagem } from "./Personagem"

export class Guerreiro extends Personagem {
    private superAtk:number //aumenta o ataque

    constructor (nome:string, vida:number, ataque:number, defesa:number){
        super(nome:string, vida:number, ataque:number, defesa:number)
        this.armadura = armadura
    }

    usarEscudo():void{
        console.log(`${this.nome} usou o escudo para se defender`)
    }    
}