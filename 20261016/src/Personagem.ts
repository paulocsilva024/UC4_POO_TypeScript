import { Arma } from "./Arma"

export class Personagem {
    // Atributos
    nome:string
    vida:number = 50
    forca:number
    arma:Arma

    constructor(nome:string, forca:number, arma?:Arma){
        this.nome = nome
        this.forca = forca
        this.arma = arma
    }

    curar(cura:number):void {
        this.vida += cura
        if (this.vida > 100) {this.vida = 100}
    }

    damage(dano:number):void {
        this.vida -= dano
        if (this.vida < 0) {this.vida = 0}
    }

    curarOutroPersonagem(per:Personagem):void {
        per.vida += 10
        if (per.vida > 100) {per.vida = 100}
    }

    atacar(per:Personagem):void {
        per.vida -= this.arma.ataque
        if (per.vida < 0) {per.vida = 0}
    }
}