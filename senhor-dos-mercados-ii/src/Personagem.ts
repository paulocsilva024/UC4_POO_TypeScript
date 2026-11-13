export class Personagem {
    public nome:string
    protected vida:number
    private vidaMaxima:number = 100
    protected ataque:number
    protected defesa:number
    private vivoh:boolean = true

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

    receberDano(valor:number):void {
        let danoPos = Math.abs(valor)
        this.vida -= danoPos
        //if (this.vida < 0) this.vida = 0
        //this.estaVivo()
        if (!this.estaVivo()) this.vida = 0
        console.log(`${this.nome} foi atacado e recebeu dano de ${danoPos}
            Vida atual: ${this.getVida()}/${this.getMaxVida()}`)
    }

    curar(valor:number):void {
        if (this.estaVivo()) {
            let danoPos = Math.abs(valor)
            this.vida += danoPos
            if (this.vida > this.vidaMaxima) this.vida = this.vidaMaxima
            console.log(`${this.nome} tomou poção de cura
                Vida atual: ${this.getVida()}/${this.getMaxVida()}`)
        } else {console.log(`${this.nome} morreu!`)}
    }
    protected estaVivo():boolean{
        this.vida <= 0 ? this.vivoh = false : this.vivoh = true
        return this.vivoh
    }
}
