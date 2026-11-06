"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Bergantim_1 = require("./Bergantim");
const Chalupa_1 = require("./Chalupa");
const Galeao_1 = require("./Galeao");
const chalupa2 = new Chalupa_1.Chalupa("Chalupa 2", 100, 50, 80, 1);
const Bergantim2 = new Bergantim_1.Bergantim("Bergantim 2", 50);
const galeao2 = new Galeao_1.Galeao("Galeão", 50, 20, 90);
chalupa2.navegar();
chalupa2.atacar();
Bergantim2.navegar();
Bergantim2.atacar();
galeao2.navegar();
galeao2.atacar();
chalupa2.receberDano(12);
Bergantim2.receberDano(10);
galeao2.receberDano(7);
//
chalupa2.explorarIlha();
galeao2.repararNavio(5);
galeao2.exibirInformacoes();
const navios = [
    new Chalupa_1.Chalupa("Chalupa", 100, 50, 80, 1),
    chalupa2,
    new Bergantim_1.Bergantim("Bergantim", 5),
    new Galeao_1.Galeao("Galeão", 50, 20, 90)
];
navios.forEach(ship => {
    //console.log();
    ship.exibirInformacoes();
});
