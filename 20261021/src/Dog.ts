export class Dog {
    private nome:string
    private vida:number
    private breed:string

    constructor (nome:string, vida:number, breed:string, ) {
        this.nome = nome
        this.vida = vida
        this.breed = breed
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
    public getRaca():string{
        return this.breed
    }
    public setRaca(newBreed):void{
        this.breed = newBreed
    }
    public morder(qualquerCoisa:string):void {
        console.log(`O cachorro mordeu o(a) ${qualquerCoisa}`)
    }
}