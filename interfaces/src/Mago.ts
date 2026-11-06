export class Mago {

    public nome:string
    constructor(nome: string) {
        this.nome = nome
    }

    lancarMagia(): void {
        console.log(`${this.nome} lança uma bola de fogo!`);
    }
}