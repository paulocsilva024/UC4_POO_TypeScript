/*
1) Crie uma nova classe chamada Arma que deve ter nome e ataque. Não esqueça do constructor
2) Dentro da classe Personagem, crie o atributo arma (do tipo Arma) e chame ele no constructor do Personagem também
3) Modifique o método 'atacar' da classe Personagem para usar o dano da arma
*/
export class Arma {
    tipo:string
    nome:string
    ataque:number
    
    constructor(tipo:string, nome:string, ataque:number){
        this.tipo = tipo
        this.nome = nome
        this.ataque = ataque
    }


}