export class Armadura {
    nome:string
    durabilidade:number
    tempo:number = 20

    constructor(nome:string, durabilidade:number = 200 ) {
        this.nome = nome
        //this.durabilidade = durabilidade
        //this.tempo = tempo
        this.durabilidade = durabilidade - this.tempo 
    }
}