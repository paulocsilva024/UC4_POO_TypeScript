import { Personagem } from "./Personagem"
import { IHabilidadeEspecial } from "./IHabilidadeEspecial"

export class Arqueiro extends Personagem implements IHabilidadeEspecial {
    superPre:number

    constructor (funcao:string, nome:string, vida:number, ataque:number,alcance:number, defesa:number, mira_superior:number) {
        super(funcao, nome, vida, ataque, alcance, defesa)
        this.funcao = funcao
        this.superPre = mira_superior
        this.alcance = this.alcance + this.superPre
        this.vida = this.vida + this.defesa
    }

    atacar(per1:Personagem){
        per1.receberDano(this.ataque)
        console.log(`${this.nome} ataca o seu inimigo a uma distancia de ${this.alcance}`)
    }

    HabilidadeEspecial(): void {
        console.log(`${this.nome} usou sua abilidade especial INTEPRETACAO DO GAVIAO para aumentar sua forca`)
        this.ataque += 80
        this.alcance += 3
    }
}