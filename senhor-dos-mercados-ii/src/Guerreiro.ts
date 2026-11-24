import { IEquipavel } from "./IEquipavel"
import { IHabilidadeEspecial } from "./IHabilidadeEspecial"
import { Personagem } from "./Personagem"


export class Guerreiro extends Personagem implements IHabilidadeEspecial, IEquipavel{
    private superAtk:number = 8//aumenta o ataque em 30 pontos

    constructor (funcao:string, nome:string, vida:number, ataque:number, alcance:number, defesa:number){
        super(funcao, nome, vida, ataque, alcance, defesa)
        this.funcao = funcao
        this.ataque += this.superAtk
        this.vida = this.vida + this.defesa
    }
    atacar(atacado: Personagem): void {
        console.log(`${this.nome} atacou ${atacado.nome} com superAtack.`)
        atacado.receberDano(this.ataque)
    }

    HabilidadeEspecial(): void {
        console.log(`${this.nome} usou sua habilidade especial MOTIVACAO DO GUERREIRO para aumentar sua forca`)
        this.ataque += 40
        this.superAtk += 20
    }
    equipe():void{
        console.log(`Agora ${this.nome} está com um equipamento.`)
        
    }
}