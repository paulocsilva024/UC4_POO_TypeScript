"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Armadura = void 0;
class Armadura {
    durabilidade;
    tempo;
    constructor(durabilidade, anos) {
        this.durabilidade = durabilidade;
        this.tempo = anos;
        this.durabilidade = this.durabilidade - this.tempo;
    }
}
exports.Armadura = Armadura;
