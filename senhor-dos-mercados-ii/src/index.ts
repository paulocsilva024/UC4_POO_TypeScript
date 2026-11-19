// importa tudo (*) como 'rl' da biblioteca 'readline-sync'
// dentro de um objeto chamado 'rl' q terá todos os atributos e métodos da biblioteca
import * as rl from "readline-sync"
import { Personagem } from "./Personagem"
import { Guerreiro } from "./Guerreiro";
import { Arqueiro } from "./Arqueiro";
import { Guardiao } from "./Guardiao";
import { Armadura } from "./Armadura";

function exibirStatus(fulano: Personagem) {
    return fulano.exibirStatus();
}

const per1: Guardiao = new Guardiao("Seu Zé", 200, 30, 2, 50, 100)
const per2: Personagem = new Personagem("Fredo", 80, 30, 1, 50)
const per3: Arqueiro = new Arqueiro("Samuel", 80, 30, 3, 50, 5)
const per4: Guerreiro = new Guerreiro("Diegolas", 80, 70, 2, 50, 100)
const atacado: Personagem = new Personagem("Atacado", 100, 10, 2, 20)
const armor1:Armadura = new Armadura("Minha Armadura")

// Menu de exemploa

// const menu:number = rl.questionInt("Escolha: ")

let menu: boolean = true

while (menu) {
    console.clear()
    console.log(`
=== A RESISTÊNCIA DO MERCADINHO ===
Escolha um para ver seus atributos...
1 - ${per1.nome}
2 - ${per2.nome}
3 - ${per3.nome}
4 - ${per4.nome}
5 - Informar Acao
6 - Sair`)

    const acao: number = rl.questionInt("Escolha uma acao: ");

    switch (acao) {
        case 1:
            exibirStatus(per1)
            rl.question()
            break;
        case 2:
            exibirStatus(per2)
            rl.question()
            break;
        case 3:
            exibirStatus(per3)
            rl.question()
            break;
        case 4:
            exibirStatus(per4)
            rl.question()
            break;
        case 5:
            per4.atacar(per1)
            menu = false;
            break;
        case 6:
            console.log("Saindo... ");
            menu = false;
            break;
        default:
            console.log("Digite uma opcao do menu.");
            break;
    }
}
//per1.receberDano(99)
//per1.curar(-200)

