export class Personagem {
    private nome:string
    private vida:number
    private dinheiro:number

    constructor (nome:string, vida:number, money:number) {
        this.nome = nome
        this.vida = vida
        this.dinheiro = money
    }

    public getNome():string{
        return this.nome
    }

    public setNome(newName):void{
        this.nome = newName
    }

    public getVida():number {
        return this.vida   
    }

    public setVida(novaVida:number):void{
        this.vida = novaVida
        if(this.vida < 0){this.vida = 0}
    }

    public getMoney():number {
        return this.dinheiro
    }

    public setMoney(money:number):void {
        this.dinheiro = money
    }
}