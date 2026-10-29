"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaPoupanca = void 0;
const ContaBancaria_1 = require("./ContaBancaria");
class ContaPoupanca extends ContaBancaria_1.ContaBancaria {
    /* constructor(){
        super(this.safeSaldo)
    } */
    aplicarJuros(val) {
        let juros = this.safeSaldo * (val / 100);
        this.atualizarSafeSaldo(juros);
    }
}
exports.ContaPoupanca = ContaPoupanca;
