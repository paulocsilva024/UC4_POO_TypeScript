// importa tudo (*) como 'rl' da biblioteca 'readline-sync'
// dentro de um objeto chamado 'rl' q terá todos os atributos e métodos da biblioteca
import * as rl from "readline-sync"
import { Personagem } from "./Personagem"
import { Guerreiro } from "./Guerreiro";
import { Arqueiro } from "./Arqueiro";
import { Guardiao } from "./Guardiao";

function exibirStatus(fulano: Personagem) {
    return fulano.exibirStatus();
}

const per1: Guardiao = new Guardiao("Dono do mercadinho", "Seu Zé", 200, 30, 2, 50, 100)
const per2: Personagem = new Personagem("Funcionario do mercadinho", "Fredo", 80, 30, 1, 50)
const per3: Arqueiro = new Arqueiro("Funcionario do mercadinho", "Samuel", 80, 30, 3, 50, 5)
const per4: Guerreiro = new Guerreiro("Funcionario do mercadinho", "Diegolas", 80, 70, 2, 50)

const mercadinho: Personagem[] = [
    per1,
    per2,
    per3,
    per4]

// INIMIGOS
const exercito: Personagem[] = [
    new Personagem("lacaio", "Jilsberto", 0, 15, 8, 2),
    new Personagem("lacaio", "Clarsonso", 80, 20, 30, 1),
    new Personagem("lacaio", "Mauricio", 0, 40, 5, 3),
    new Personagem("Gerente da Rede Omega", "Gerente da Rede Omega", 200, 50, 70, 5),
    new Personagem("Gerente da Rede Alfa", "Gerente da Rede Alfa", 150, 120, 50, 5),
    new Personagem("Chefao", "Balrog do Boleto", 300, 150, 200, 10)
]
function combate(): void {
    console.log(`\nOs seus HEROIS!
1 - ${per1.nome}
2 - ${per2.nome}
3 - ${per3.nome}
4 - ${per4.nome}
`)

    const combatente: number = rl.questionInt("escolha um desses lendarios herois para lutar: ")
    let lutador1: Personagem
    let lutador2: Personagem
    if (combatente == 1) {
        lutador1 = per1
    } else if (combatente == 2) {
        lutador1 = per2
    } else if (combatente == 3) {
        lutador1 = per3
    } else if (combatente == 4) {
        lutador1 = per4
    } else {
        console.log("Este heroi nao esta disponivel")
    }

    const kinderOvo = Math.floor(Math.random() * 6)
    if (kinderOvo == 0) {
        lutador2 = exercito[0]
    } else if (kinderOvo == 1) {
        lutador2 = exercito[1]
    } else if (kinderOvo == 2) {
        lutador2 = exercito[2]
    } else if (kinderOvo == 3) {
        lutador2 = exercito[3]
    } else if (kinderOvo == 4) {
        lutador2 = exercito[4]
    } else if (kinderOvo == 5) {
        lutador2 = exercito[5]
    } else {
        lutador2 = exercito[5]
    }

    let luta: boolean = true

    while (luta) {
        console.clear()
        console.log(`
=== A RESISTENCIA DO MERCADINHO ===
       Escolha uma opcao . . . \n
1 - ATACAR
2 - TROCAR DE HEROI
3 - FUGIR`)

        const opcao: number = rl.questionInt("Escolha uma acao: ")


        if (opcao == 1) {
            const pegou = Math.floor(Math.random() * 3)
            if (pegou == 1) {
                console.log("Voceh errou o ataque e seu inimigo aproveita para atacar!")
                lutador1.receberDano()
            } else {
                atacar()
                console.log("voceh ataca feroz mente!")
                receberDano()
            }

        } else if (opcao == 2) {
            console.log(`\nOs seus HEROIS!
1 - ${per1.nome}
2 - ${per2.nome}
3 - ${per3.nome}
4 - ${per4.nome}
`)

            const combatente: number = rl.questionInt("escolha um novo lendarios herois para lutar: ")
            if (combatente == 1) {
                per1
            } else if (combatente == 2) {
                per2
            } else if (combatente == 3) {
                per3
            } else if (combatente == 4) {
                per4
            } else {
                console.log("Este heroi nao esta disponivel")
            }
            receberDano()

        } else if (opcao == 3) {
            console.log("Fugindo da batalha ...")
            luta = false;
        } else {
            console.log("este movimento ainda nao foi dominado pelo nosso heroi!")
        }
    }
}
let menu: boolean = true

while (menu) {
    console.clear()
    console.log(`
=== A RESISTÊNCIA DO MERCADINHO ===
       Escolha uma opção . . . \n
1 - Ver Sociedade
2 - Escolher herói
3 - Enfrentar inimigo
4 - Ver jornada
5 - Sair`)

    const acao: number = rl.questionInt("Escolha uma acao: ")
    switch (acao) {

        case 1:
            console.log(`\nOs HEROIS da Sociedade!\n
${per1.nome} - ${per1.funcao}
${per2.nome} - ${per2.funcao}
${per3.nome} - ${per3.funcao}
${per4.nome} - ${per4.funcao}`)
            rl.question()
            break
        case 2:
            console.log(`\nOs seus HEROIS!
1 - ${per1.nome}
2 - ${per2.nome}
3 - ${per3.nome}
4 - ${per4.nome}
`)
            const escolhido: number = rl.questionInt("escolha um desses lendarios herois para ver o estatus: ")

            if (escolhido == 1) {
                console.log(`Heroi escolhido ${per1.nome}!`)
                exibirStatus(per1)
                rl.question()
            } else if (escolhido == 2) {
                console.log(`Heroi escolhido ${per2.nome}!`)
                exibirStatus(per2)
                rl.question()
            } else if (escolhido == 3) {
                console.log(`Heroi escolhido ${per3.nome}!`)
                exibirStatus(per3)
                rl.question()
            } else if (escolhido == 4) {
                console.log(`Heroi escolhido ${per4.nome}!`)
                exibirStatus(per4)
                rl.question()
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
`)

            const inimigo: number = rl.questionInt("Qual desses inimigos voceh quer observar: ")

            if (inimigo == 1) {
                console.log(`Inimigo ${exercito[0].nome}!`)
                exibirStatus(exercito[0])
                rl.question()
            } else if (inimigo == 2) {
                console.log(`Inimigo ${exercito[1].nome}!`)
                exibirStatus(exercito[1])
                rl.question()
            } else if (inimigo == 3) {
                console.log(`Inimigo ${exercito[2].nome}!`)
                exibirStatus(exercito[2])
                rl.question()
            } else if (inimigo == 4) {
                console.log(`Inimigo grande ${exercito[3].nome}!`)
                exibirStatus(exercito[3])
                rl.question()
            } else if (inimigo == 5) {
                console.log(`Inimigo grande ${exercito[4].nome}!`)
                exibirStatus(exercito[4])
                rl.question()
            } else if (inimigo == 6) {
                console.log(`Inimigo grande ${exercito[5].nome}!`)
                exibirStatus(exercito[5])
                rl.question()
            } else {
                console.log("Este inimigo ainda nao estah disponivel, escolha outro inimigo!")
            }

            break;
        case 4:


            let derrotados: number = 0

            // crie um array que contém todos os inimigos
            // leia o array usando um for
            // todo inimigo dentro desse array tem o método 'estaVivo()', certo?
            // dentro do for, toda vez que um inimigo estiver morto, ou seja, estaVivo == false, ele soma +1 em derrotados
            // se quiser informar qual inimigo que foi derrotado, pode criar uma variavel fora desse laço para cada um (exemplo: inimigoUmMorto) que recebe true ou false
            // ai, durante a luta mesmo, quando o inimigo morrer deixe inimigoUmMorto = true

            console.log(`Exército:`)
            for (let i = 0; i < exercito.length; i++) {
                if (!exercito[i].estaVivo()) derrotados++
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
Quantidade total de inimigos derrotados:${derrotados}    
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

function atacar() {
    throw new Error("Function not implemented.");
}
function receberDano() {
    throw new Error("Function not implemented.");
}

