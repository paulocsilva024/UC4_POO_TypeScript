export class Personagem {
    nome:string
    vida:number
    vidaMaxima:number = 100
    ataque:number
    defesa:number

    constructor(nome:string, vida:number, ataque:number, defesa:number){
        this.nome = nome
        this.vida = vida
        this.ataque = ataque
        this.defesa = defesa
    }

    exibirStatus():void {
        console.log(`
            Status de ${this.nome}
            Vida: ${this.vida}
            Ataque: ${this.ataque}
            Defesa: ${this.defesa}`)
    }
}