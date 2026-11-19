export class Personagem {
    public funcao:string
    public nome:string
    protected vida:number
    protected vidaMaxima:number = 100
    protected ataque:number
    protected alcance:number
    protected defesa:number

    constructor(funcao:string, nome:string, vida:number, ataque:number, alcance:number, defesa:number) {
        this.funcao = funcao
        this.nome = nome
        this.vida = vida
        this.ataque = ataque
        this.alcance = alcance
        this.defesa = defesa
        this.verificarVida(vida)
    }

    exibirStatus():void {
        const porcentagem = this.vida / this.vidaMaxima
        const bloco = Math.round(porcentagem * 20)
        const HP = "█".repeat(bloco) + "░".repeat(20 - bloco)

        console.log(`
            Status de ${this.nome}
            Vida: ${this.vida}/${this.vidaMaxima}
            ${HP}
            Ataque: ${this.ataque}
            Alcance: ${this.alcance}
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
        //let danoPos = Math.abs(valor)
        //this.vida -= danoPos
        //if (this.vida < 0) this.vida = 0
        //this.estaVivo()
        this.vida = Math.max(0, Math.floor(this.vida-Math.abs(valor)))
        if (!this.estaVivo()) this.vida = 0
        console.log(`${this.nome} foi atacado e recebeu dano de ${Math.floor(this.vida-Math.abs(valor))}
            Vida atual: ${this.getVida()}/${this.getMaxVida()}`)
    }

    estaVivo():boolean{
        return this.vida > 0
    }

    atacar(atacado:Personagem, forca:number):void {
        if (!this.estaVivo() || !atacado.estaVivo()) return
        const dano = Math.max(0, Math.floor(forca) - atacado.defesa)
        
        console.log(`${this.nome} golpeou o alvo ${atacado.nome} e deu um dano de ${dano}!`)
    }
}

