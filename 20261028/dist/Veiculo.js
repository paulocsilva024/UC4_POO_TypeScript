"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veiculo = void 0;
class Veiculo {
    speed;
    constructor(speed) {
        speed > 0 ? this.speed = speed : this.speed = 0;
    }
}
exports.Veiculo = Veiculo;
