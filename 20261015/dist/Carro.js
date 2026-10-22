"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
class Carro {
    marca;
    nome;
    ano;
    constructor(aMarca, oNome, oAno) {
        this.marca = aMarca;
        this.nome = oNome;
        this.ano = oAno;
    }
    ligar() {
        console.log(`${this.nome} ligado...`);
    }
    rodar() {
        console.log(`O ${this.nome} está andando...`);
    }
    buzinar() {
        //console.log(`BI BI BI`)
        // Cores no console (ANSI escape codes) + texto em negrito/pisca
        console.log("\x1b[33m\x1b[1m[🚗 BUZINA] Bi! Bi! Bi!\x1b[0m");
        process.stdout.write("\u0007");
        setTimeout(() => process.stdout.write("\u0007"), 200);
        setTimeout(() => process.stdout.write("\u0007"), 400);
        // Emitindo 3 beeps sonoros com intervalo de 200 milissegundos entre eles
        /* process.stdout.write("\x07"); // 1º beep
        setTimeout(() => {
        process.stdout.write("\x07"); // 2º beep
        }, 250);
        setTimeout(() => {
        process.stdout.write("\x07"); // 3º beep
        }, 400); */
    }
}
exports.Carro = Carro;
//# sourceMappingURL=Carro.js.map