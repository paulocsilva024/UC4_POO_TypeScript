import { Personagem } from "./Personagem"
import { ICuravel } from "./ICuravel"
import { IHabilidadeEspecial } from "./IHabilidadeEspecial"
import { IEquipavel } from "./IEquipavel"
import { Armadura } from "./Armadura"

export class Guardiao extends Personagem implements ICuravel, IHabilidadeEspecial{
    private superDef:number

    constructor (funcao:string, nome:string, vida:number, ataque:number, alcance:number, defesa:number, defesa_superior:number) {
        super(funcao, nome, vida, ataque, alcance, defesa)
        this.superDef = defesa_superior
        this.vida = this.vida
        this.defesa = this.defesa + this.superDef
    }

    usarEscudo():void{
        console.log(`${this.nome} usou o escudo para se defender`)
    }

    atacar(per1:Personagem){
        per1.receberDano(this.ataque)
        console.log(`${this.nome} ataca o seu inimigo para se defender`)
    }

    curar(valor:number):void {
        if (this.estaVivo()) {
            let danoPos = Math.abs(valor)
            this.vida += danoPos
            if (this.vida > this.vidaMaxima) this.vida = this.vidaMaxima
            console.log(`${this.nome} tomou poção de cura
                Vida atual: ${this.getVida()}/${this.getMaxVida()}`)
        } else {console.log(`${this.nome} morreu! Compre uma nova ficha!`)}
    }

    HabilidadeEspecial(): void {
        console.log(`${this.nome} usou sua abilidade especial DEFESA DE DIAMANTE para aumentar sua defesa`)
        this.defesa += 20
        this.superDef += 10
    }

    // equip(equip:Armadura): void {
    //     console.log(`Agora ${this.nome} está com um equipamento.`)
    //     this.defesa += equip.durabilidade
    // }
}