import { IEquipavel } from "./IEquipavel"
import { IHabilidadeEspecial } from "./IHabilidadeEspecial"
import { Personagem } from "./Personagem"
import { Armadura } from "./Armadura"

export class Guerreiro extends Personagem implements IHabilidadeEspecial, IEquipavel{
    private superAtk:number = 30//aumenta o ataque em 30 pontos

    constructor (nome:string, vida:number, ataque:number, alcance:number, defesa:number, ataque_superior:number){
        super(nome, vida, ataque, alcance, defesa)
        this.superAtk = ataque_superior
        this.ataque = this.ataque + this.superAtk
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
    equip():void{
        console.log(`Agora ${this.nome} está com um equipamento.`)
        
    }
}