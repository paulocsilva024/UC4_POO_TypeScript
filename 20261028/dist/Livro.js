"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
class Livro {
    titulo;
    constructor(tit) {
        this.titulo = tit;
    }
    exibirTitulo() {
        console.log(`${this.titulo}`);
    }
}
exports.Livro = Livro;
