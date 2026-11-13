// importa tudo (*) como 'rl' da biblioteca 'readline-sync'
// dentro de um objeto chamado 'rl' q terá todos os atributos e métodos da biblioteca
import * as rl from "readline-sync"
import { Personagem } from "./Personagem"

function exibirStatus(fulano: Personagem) {
    return fulano.exibirStatus();
}

const per1: Personagem = new Personagem("Seu Zé", 200, 30, 50)
const per2: Personagem = new Personagem("Fredo", 80, 30, 50)
const per3: Personagem = new Personagem("Samuel", 80, 30, 50)
const per4: Personagem = new Personagem("Diegolas", 80, 30, 50)

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
5 - Sair`)

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
            console.log("Saindo... ");
            menu = false;
            break;
        default:
            console.log("Digite uma opção do menu.");
            break;
    }
}
per1.receberDano(99)
per1.curar(-200)


