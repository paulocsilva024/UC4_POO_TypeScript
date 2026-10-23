export class Personagem {
    protected nome:string
    protected vida:number
    //private dinheiro:number

    constructor (nome:string) {
        this.nome = nome
        this.vida = 100
        //this.dinheiro = money
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

    curar():void{
        this.vida += 10
        if(this.vida > 100){this.vida = 100}
    }
}