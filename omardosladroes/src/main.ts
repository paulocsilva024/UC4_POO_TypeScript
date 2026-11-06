import { Bergantim } from "./Bergantim";
import { Chalupa } from "./Chalupa";
import { Galeao } from "./Galeao";
import { Navio } from "./Navio";

const chalupa2:Chalupa = new Chalupa("Chalupa 2",100, 50, 80,1)
const Bergantim2:Bergantim = new Bergantim("Bergantim 2", 50)
const galeao2:Galeao = new Galeao("Galeão", 50, 20, 90)


chalupa2.navegar()
chalupa2.atacar()

Bergantim2.navegar()
Bergantim2.atacar()

galeao2.navegar()
galeao2.atacar()

chalupa2.receberDano(12)
Bergantim2.receberDano(10)
galeao2.receberDano(7)

//
chalupa2.explorarIlha()

galeao2.repararNavio(5)
galeao2.exibirInformacoes()

const navios:Navio[] = [
    new Chalupa("Chalupa",100, 50, 80,1),
    chalupa2,
    new Bergantim("Bergantim", 5),
    new Galeao("Galeão", 50, 20, 90)
];

navios.forEach(ship => {
    //console.log();
    ship.exibirInformacoes()
});