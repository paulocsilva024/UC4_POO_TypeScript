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

const per1: Guardiao = new Guardiao("Dono do mercadinho", "Seu Zé", 200, 30, 2, 50, 100)
const per2: Personagem = new Personagem("Funcionario do mercadinho", "Fredo", 80, 30, 1, 50)
const per3: Arqueiro = new Arqueiro("Funcionario do mercadinho", "Samuel", 80, 30, 3, 50, 5)
const per4: Guerreiro = new Guerreiro("Funcionario do mercadinho", "Diegolas", 80, 70, 2, 50, 100)
// const armor1:Armadura = new Armadura("Minha Armadura")

const mercadinho: Personagem[] = [
    per1, 
    per2, 
    per3, 
    per4]

// Menu de exemploa

// const menu:number = rl.questionInt("Escolha: ")

// INIMIGOS
const exercito: Personagem[] = [
    new Personagem("lacaio", "Jilsberto", 0, 15, 8, 2),
    new Personagem("lacaio", "Clarsonso", 80, 20, 30, 1),
    new Personagem("lacaio", "Mauricio", 0, 40, 5, 3),
    new Personagem("Gerente da Rede Omega", "Gerente da Rede Omega", 200, 50, 70, 5),
    new Personagem("Gerente da Rede Alfa", "Gerente da Rede Alfa", 150, 120, 50, 5),
    new Personagem("Chefao", "Balrog do Boleto", 300, 150, 200, 10)
]

let menu: boolean = true

while (menu) {
    console.clear()
    console.log(`
=== A RESISTÊNCIA DO MERCADINHO ===
       Escolha uma opicao . . . \n
1 - Ver Sociedade
2 - Escolher herói
3 - Enfrentar inimigo
4 - Ver jornada
5 - Sair`)

    const acao: number = rl.questionInt("Escolha uma acao: ")
    switch (acao) {

        case 1:
console.log(`\nOs seus HEROIS!
Funcao:${per1.funcao} do ${per1.nome}\n
${per1.exibirStatus}\n
Funcao:${per2.funcao} do ${per2.nome}\n
${per2.exibirStatus}\n
Funcao:${per3.funcao} do ${per3.nome}\n
${per3.exibirStatus}\n
Funcao:${per1.funcao} do ${per4.nome}\n
${per4.exibirStatus}\n
`)
            break
        case 2:
    console.log(`\nOs seus HEROIS!
1 - ${per1.nome}
2 - ${per2.nome}
3 - ${per3.nome}
4 - ${per4.nome}
5 - Sair`)

        const escolhido: number = rl.questionInt("escolha um desses lendarios herois: ")

            if ( escolhido == 1) {
                console.log(`Heroi escolhido ${per1.nome}!`)
                exibirStatus(per1)
                rl.question()
            } else if ( escolhido == 2) {
                console.log(`Heroi escolhido ${per2.nome}!`)
                exibirStatus(per2)
                rl.question()
            } else if ( escolhido == 3) {
                console.log(`Heroi escolhido ${per3.nome}!`)
                exibirStatus(per3)
                rl.question()
            } else if ( escolhido == 4) {
                console.log(`Heroi escolhido ${per4.nome}!`)
                exibirStatus(per4)
                rl.question()
            } else if ( escolhido == 5) {
                console.log("Saindo... ")
                menu = false
            } else {
                console.log("Este heroi ainda nao estah disponivel, escolha outro HEROI!")
            }

            break;
        case 3:
    console.log(`\nOs seus INIMIGOS!
1 - ${exercito[0].nome}
2 - ${exercito[1].nome}
3 - ${exercito[2].nome}
4 - ${exercito[3].nome}
5 - ${exercito[4].nome}
6 - ${exercito[5].nome}
7 - Sair`)

        const inimigo: number = rl.questionInt("escolha um desses lendarios herois: ")

            if ( inimigo == 1) {
                console.log(`Inimigo a tentar te desafiar ${exercito[0].nome}!`)
                exibirStatus(exercito[0])
                rl.question()
            } else if ( inimigo == 2) {
                console.log(`Inimigo a tentar te desafiar ${exercito[1].nome}!`)
                exibirStatus(exercito[1])
                rl.question()
            } else if ( inimigo == 3) {
                console.log(`Inimigo a tentar te desafiar ${exercito[2].nome}!`)
                exibirStatus(exercito[2])
                rl.question()
            } else if ( inimigo == 4) {
                console.log(`O grande ${exercito[3].nome} estah a te desafiar!`)
                exibirStatus(exercito[3])
                rl.question()
            } else if ( inimigo == 5) {
                console.log(`O grande ${exercito[4].nome} estah a te desafiar!`)
                exibirStatus(exercito[4])
                rl.question()
            } else if ( inimigo == 6) {
                console.log(`O grande ${exercito[5].nome} estah a te desafiar!`)
                exibirStatus(exercito[5])
                rl.question()
            } else if ( inimigo == 7) {
                console.log("Saindo... ")
                menu = false
            } else {
                console.log("Este inimigo ainda nao estah disponivel, escolha outro inimigo!")
            }
            
            break;
        case 4:

        let derrotados:number = 0

        // crie um array que contém todos os inimigos
        // leia o array usando um for
        // todo inimigo dentro desse array tem o método 'estaVivo()', certo?
        // dentro do for, toda vez que um inimigo estiver morto, ou seja, estaVivo == false, ele soma +1 em derrotados
        // se quiser informar qual inimigo que foi derrotado, pode criar uma variavel fora desse laço para cada um (exemplo: inimigoUmMorto) que recebe true ou false
        // ai, durante a luta mesmo, quando o inimigo morrer deixe inimigoUmMorto = true
        console.log(`Exército:`)
        for (let i = 0; i < exercito.length; i++) {
            if(!exercito[i].estaVivo()) derrotados++
            console.log(`${exercito[i].nome} (${exercito[i].getVida()}/${exercito[i].getMaxVida()})`)
        }
        console.log(`Derrotados: ${derrotados}`)

        
console.log(`\nINIMIGOS MORTOS: 
Quantidade de ${exercito[0].nome} derrotados:
Quantidade de ${exercito[1].nome} derrotados: 
Quantidade de ${exercito[2].nome} derrotados: 
Quantidade de ${exercito[3].nome} derrotados: 
Quantidade de ${exercito[4].nome} derrotados:
Quantidade de ${exercito[5].nome} derrotados: 
Quantidade total de inimigos derrotados:${exercito}
            
`)
        rl.question()
            break;
        case 5:
            console.log("Saindo... ")
            menu = false;
            break

        default:
            console.log("Digite uma opçao do menu.")
            break
    }
}
console.log(Math.ceil(1.75))
console.log(Math.round(1.75))
console.log(Math.floor(1.75))