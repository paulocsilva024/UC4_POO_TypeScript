"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// importa tudo (*) como 'rl' da biblioteca 'readline-sync'
// dentro de um objeto chamado 'rl' q terá todos os atributos e métodos da biblioteca
const rl = __importStar(require("readline-sync"));
const Personagem_1 = require("./Personagem");
const Guerreiro_1 = require("./Guerreiro");
const Arqueiro_1 = require("./Arqueiro");
const Guardiao_1 = require("./Guardiao");
function exibirStatus(fulano) {
    return fulano.exibirStatus();
}
function combate() {
    console.log(`\nOs seus HEROIS!
1 - ${per1.nome}
2 - ${per2.nome}
3 - ${per3.nome}
4 - ${per4.nome}
`);
    const combatente = rl.questionInt("escolha um desses lendarios herois para lutar: ");
    let luta = true;
    while (luta) {
        console.clear();
        console.log(`
=== A RESISTENCIA DO MERCADINHO ===
       Escolha uma opcao . . . \n
1 - ATACAR
2 - TROCAR DE HEROI
3 - FUGIR`);
        const opcao = rl.questionInt("Escolha uma acao: ");
        if (opcao == 1) {
            const pegou = Math.floor(Math.random() * 5);
            if (pegou == 1) {
                console.log("Voceh errou o ataque e seu inimigo aproveita para atacar!");
                receberDano();
            }
            else {
                atacar();
                console.log("voceh ataca feroz mente!");
                receberDano();
            }
        }
        else if (opcao == 2) {
            console.log(`\nOs seus HEROIS!
1 - ${per1.nome}
2 - ${per2.nome}
3 - ${per3.nome}
4 - ${per4.nome}
`);
            const combatente = rl.questionInt("escolha um novo lendarios herois para lutar: ");
            receberDano();
        }
        else if (opcao == 3) {
            console.log("Fugindo da batalha ...");
            luta = false;
        }
        else {
            console.log("este movimento ainda nao foi dominado pelo nosso heroi!");
        }
    }
}
const per1 = new Guardiao_1.Guardiao("Dono do mercadinho", "Seu Zé", 200, 30, 2, 50, 100);
const per2 = new Personagem_1.Personagem("Funcionario do mercadinho", "Fredo", 80, 30, 1, 50);
const per3 = new Arqueiro_1.Arqueiro("Funcionario do mercadinho", "Samuel", 80, 30, 3, 50, 5);
const per4 = new Guerreiro_1.Guerreiro("Funcionario do mercadinho", "Diegolas", 80, 70, 2, 50);
// const armor1:Armadura = new Armadura("Minha Armadura")
const mercadinho = [
    per1,
    per2,
    per3,
    per4
];
// Menu de exemplo
// const menu:number = rl.questionInt("Escolha: ")
// INIMIGOS
const exercito = [
    new Personagem_1.Personagem("lacaio", "Jilsberto", 0, 15, 8, 2),
    new Personagem_1.Personagem("lacaio", "Clarsonso", 80, 20, 30, 1),
    new Personagem_1.Personagem("lacaio", "Mauricio", 0, 40, 5, 3),
    new Personagem_1.Personagem("Gerente da Rede Omega", "Gerente da Rede Omega", 200, 50, 70, 5),
    new Personagem_1.Personagem("Gerente da Rede Alfa", "Gerente da Rede Alfa", 150, 120, 50, 5),
    new Personagem_1.Personagem("Chefao", "Balrog do Boleto", 300, 150, 200, 10)
];
let menu = true;
while (menu) {
    console.clear();
    console.log(`
=== A RESISTÊNCIA DO MERCADINHO ===
       Escolha uma opção . . . \n
1 - Ver Sociedade
2 - Escolher herói
3 - Enfrentar inimigo
4 - Ver jornada
5 - Sair`);
    const acao = rl.questionInt("Escolha uma acao: ");
    switch (acao) {
        case 1:
            console.log(`\nOs HEROIS da Sociedade!\n
${per1.nome} - ${per1.funcao}
${per2.nome} - ${per2.funcao}
${per3.nome} - ${per3.funcao}
${per4.nome} - ${per4.funcao}`);
            rl.question();
            break;
        case 2:
            console.log(`\nOs seus HEROIS!
1 - ${per1.nome}
2 - ${per2.nome}
3 - ${per3.nome}
4 - ${per4.nome}
`);
            const escolhido = rl.questionInt("escolha um desses lendarios herois para ver o estatus: ");
            if (escolhido == 1) {
                console.log(`Heroi escolhido ${per1.nome}!`);
                exibirStatus(per1);
                combate;
                rl.question();
            }
            else if (escolhido == 2) {
                console.log(`Heroi escolhido ${per2.nome}!`);
                exibirStatus(per2);
                rl.question();
            }
            else if (escolhido == 3) {
                console.log(`Heroi escolhido ${per3.nome}!`);
                exibirStatus(per3);
                rl.question();
            }
            else if (escolhido == 4) {
                console.log(`Heroi escolhido ${per4.nome}!`);
                exibirStatus(per4);
                rl.question();
            }
            else {
                console.log("Este heroi ainda nao estah disponivel, escolha outro HEROI!");
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
`);
            const inimigo = rl.questionInt("Qual desses inimigos voceh vai ousar desafiar: ");
            if (inimigo == 1) {
                console.log(`O inimigo ${exercito[0].nome} tentar te desafiar !`);
                exibirStatus(exercito[0]);
                combate();
                rl.question();
            }
            else if (inimigo == 2) {
                console.log(`O inimigo ${exercito[1].nome} tentar te desafiar !`);
                exibirStatus(exercito[1]);
                combate();
                rl.question();
            }
            else if (inimigo == 3) {
                console.log(`O inimigo ${exercito[2].nome} tentar te desafiar !`);
                exibirStatus(exercito[2]);
                combate();
                rl.question();
            }
            else if (inimigo == 4) {
                console.log(`O grande ${exercito[3].nome} estah a te desafiar!`);
                exibirStatus(exercito[3]);
                combate();
                rl.question();
            }
            else if (inimigo == 5) {
                console.log(`O grande ${exercito[4].nome} estah a te desafiar!`);
                exibirStatus(exercito[4]);
                combate();
                rl.question();
            }
            else if (inimigo == 6) {
                console.log(`O grande ${exercito[5].nome} estah a te desafiar!`);
                exibirStatus(exercito[5]);
                combate();
                rl.question();
            }
            else {
                console.log("Este inimigo ainda nao estah disponivel, escolha outro inimigo!");
            }
            break;
        case 4:
            let derrotados = 0;
            // crie um array que contém todos os inimigos
            // leia o array usando um for
            // todo inimigo dentro desse array tem o método 'estaVivo()', certo?
            // dentro do for, toda vez que um inimigo estiver morto, ou seja, estaVivo == false, ele soma +1 em derrotados
            // se quiser informar qual inimigo que foi derrotado, pode criar uma variavel fora desse laço para cada um (exemplo: inimigoUmMorto) que recebe true ou false
            // ai, durante a luta mesmo, quando o inimigo morrer deixe inimigoUmMorto = true
            console.log(`Exército:`);
            for (let i = 0; i < exercito.length; i++) {
                if (!exercito[i].estaVivo())
                    derrotados++;
                console.log(`${exercito[i].nome} (${exercito[i].getVida()}/${exercito[i].getMaxVida()})`);
            }
            console.log(`Derrotados: ${derrotados}`);
            console.log(`\nINIMIGOS MORTOS: 
Quantidade de ${exercito[0].nome} derrotados:
Quantidade de ${exercito[1].nome} derrotados:
Quantidade de ${exercito[2].nome} derrotados: 
Quantidade de ${exercito[3].nome} derrotados: 
Quantidade de ${exercito[4].nome} derrotados:
Quantidade de ${exercito[5].nome} derrotados: 
Quantidade total de inimigos derrotados:${derrotados}    
`);
            rl.question();
            break;
        case 5:
            console.log("Saindo... ");
            menu = false;
            break;
        default:
            console.log("Digite uma opçao do menu.");
            break;
    }
}
console.log(Math.ceil(1.75));
console.log(Math.round(1.75));
console.log(Math.floor(1.75));
function atacar() {
    throw new Error("Function not implemented.");
}
function receberDano() {
    throw new Error("Function not implemented.");
}
