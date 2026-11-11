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
function exibirStatus() {
    return exibirStatus();
}
// Menu de exemploa
// const menu:number = rl.questionInt("Escolha: ")
let menu = true;
while (menu) {
    console.log("=ATRIBUTOS-DO-MERCADINHO=\n1 - mostrar atributos \n2 - Sair");
    const acao = rl.questionInt("Escolha uma acao: ");
    switch (acao) {
        case 1:
            exibirStatus();
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
const seuZe = new Personagem_1.Personagem("Seu Zé", 200, 30, 50);
const fredo = new Personagem_1.Personagem("Fredo", 80, 30, 50);
const samuel = new Personagem_1.Personagem("Samuel", 80, 30, 50);
const diego = new Personagem_1.Personagem("Diegolas", 80, 30, 50);
