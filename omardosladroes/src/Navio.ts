export class Navio {
    protected nome:string
    protected capacidadeTripulacao:number
    protected vida:number
    protected veloc:number
    protected canhoes:number

    constructor(nome:string, vida:number, tripulalMax:number, velocidade:number, canhoes:number){
        this.nome = nome
        this.capacidadeTripulacao = tripulalMax
        this.vida = vida
        this.veloc = velocidade
        this.canhoes = canhoes
    }

    navegar():void{
        console.log("O navio está navegando")
    }
    
    receberDano(dano:number):void{
        let danoPositivo = Math.abs(dano)
        this.vida -= danoPositivo
        if (this.vida < 0) {this.vida = 0}
    }
    exibirInformacoes():void{
        console.log(`
        Navio ${this.nome}
        Vida: ${this.vida}
        Velocidade: ${this.veloc}
        Canhões: ${this.canhoes}
        `)
    }
}