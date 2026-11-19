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
const per1 = new Guardiao_1.Guardiao("Seu Zé", 200, 30, 2, 50, 100);
const per2 = new Personagem_1.Personagem("Fredo", 80, 30, 1, 50);
const per3 = new Arqueiro_1.Arqueiro("Samuel", 80, 30, 3, 50, 5);
const per4 = new Guerreiro_1.Guerreiro("Diegolas", 80, 50, 2, 50, 100);
const atacado = new Personagem_1.Personagem("Atacado", 100, 10, 2, 20);
// Menu de exemploa
// const menu:number = rl.questionInt("Escolha: ")
let menu = true;
while (menu) {
    console.clear();
    console.log(`
=== A RESISTÊNCIA DO MERCADINHO ===
Escolha um para ver seus atributos...
1 - ${per1.nome}
2 - ${per2.nome}
3 - ${per3.nome}
4 - ${per4.nome}
5 - Informar Acao
6 - Sair`);
    const acao = rl.questionInt("Escolha uma acao: ");
    switch (acao) {
        case 1:
            exibirStatus(per1);
            rl.question();
            break;
        case 2:
            exibirStatus(per2);
            rl.question();
            break;
        case 3:
            exibirStatus(per3);
            rl.question();
            break;
        case 4:
            exibirStatus(per4);
            rl.question();
            break;
        case 5:
            per4.atacar(per1);
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
