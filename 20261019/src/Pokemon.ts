import { Poder } from "./Poder"

export class Pokemon {
    nome:string
    vida:number
    ataque:number
    poder:Poder

    constructor(nome:string,vida:number,ataque:number,poder:Poder){
        this.nome = nome
        this.vida = vida
        this.ataque = ataque
        this.poder = poder
    }
    falar(n:number):void{
        console.log(`${this.nome} `.repeat(n))
    }
    atacar(pokemon:Pokemon):void {
        pokemon.vida -= this.ataque
        if (pokemon.vida < 0) {pokemon.vida = 0}
        console.log(`${this.nome} ataca...\n    Dano: ${this.ataque}`)
        console.log(`\n${pokemon.nome}(${pokemon.vida})`)
    }
    atacarComPoder(pokemon:Pokemon):void {
        pokemon.vida -= this.poder.ataque
        if (pokemon.vida < 0) {pokemon.vida = 0}
        console.log(`${this.nome} ataca com ${this.poder.nome}\n    Dano: ${this.poder.ataque}`)
        console.log(`\n${pokemon.nome}(${pokemon.vida})`)
    }
}
