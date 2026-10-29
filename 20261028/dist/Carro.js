"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
const Veiculo_1 = require("./Veiculo");
class Carro extends Veiculo_1.Veiculo {
    nome;
    constructor(name, speed) {
        super(speed);
        this.nome = name;
    }
    acelerar(val) {
        if (val > 0) {
            this.speed += val;
        }
    }
    exibirVelocidade() {
        console.log(`Velocidade atual: ${this.speed}`);
    }
}
exports.Carro = Carro;
