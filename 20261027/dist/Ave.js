"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ave = void 0;
const Animal_1 = require("./Animal");
// Subclasse Ave
class Ave extends Animal_1.Animal {
    voa;
    constructor(nome, idade, voa) {
        super(nome, idade);
        this.voa = voa;
    }
}
exports.Ave = Ave;
