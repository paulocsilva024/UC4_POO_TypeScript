export class Personagem {
    public nome:string
    protected vida:number
    private vidaMaxima:number = 100
    protected ataque:number
    protected defesa:number

    constructor(nome:string, vida:number, ataque:number, defesa:number){
        this.nome = nome
        this.vida = vida
        this.ataque = ataque
        this.defesa = defesa
        this.verificarVida(vida)
    }

    exibirStatus():void {
        console.log(`
            Status de ${this.nome}
            Vida: ${this.vida}
            Ataque: ${this.ataque}
            Defesa: ${this.defesa}`)
    }

    private verificarVida(vida:number) {
        if (vida > 100)
            this.vida = 100
        if (vida < 0)
            this.vida = 0
    }

    getVida():number {
        return this.vida
    }

    getMaxVida():number {
        return this.vidaMaxima
    }

    
}
