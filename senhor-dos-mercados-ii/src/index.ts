// importa tudo (*) como 'rl' da biblioteca 'readline-sync'
// dentro de um objeto chamado 'rl' q terá todos os atributos e métodos da biblioteca
import * as rl from "readline-sync"
import { Personagem } from "./Personagem"

function exibirStatus() {
    return exibirStatus();
}

// Menu de exemploa

// const menu:number = rl.questionInt("Escolha: ")

let menu:boolean = true

while (menu) {

    console.log("=ATRIBUTOS-DO-MERCADINHO=\n1 - atributos dos funcionarios \n2 - Sair")

    const acao: number = rl.questionInt("Escolha uma acao: ");

    switch(acao) {
        case 1:
            // if e else mostrando os atributos
            break;

        case 2:
        console.log("Saindo... ");
            menu = false;
            break;

        default:
            console.log("Voceh escolheu uma acao invalida");
            break;
    }
}


const seuZe:Personagem = new Personagem("Seu Zé", 200, 30, 50)
const fredo:Personagem = new Personagem("Fredo", 80, 30, 50)
const samuel:Personagem = new Personagem("Samuel", 80, 30, 50)
const diego:Personagem = new Personagem("Diegolas", 80, 30, 50)



