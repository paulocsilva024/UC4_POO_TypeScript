export class Guerreiro {
    public nome:string

    constructor(nome: string) {
        this.nome = nome
    }
    
    atacar(): void {
    console.log(`${this.nome} ataca com a espada!`);
}
}