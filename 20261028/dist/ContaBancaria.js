"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaBancaria = void 0;
class ContaBancaria {
    // private saldo:number
    safeSaldo = 0;
    constructor(saldo) {
        this.safeSaldo = saldo;
    }
    consultarSaldo() {
        console.log(`${this.safeSaldo.toFixed(2)}`);
    }
    // public depositar(val:number):void {
    //     if (val > 0) {this.saldo += val}
    // }
    atualizarSafeSaldo(valor) {
        if (valor > 0) {
            this.safeSaldo += valor;
        }
    }
}
exports.ContaBancaria = ContaBancaria;
