"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cachorro_1 = require("./Cachorro");
const Carro_1 = require("./Carro");
// para criar um objeto, criamos uma variável que deve ser do tipo da classe (Cachorro)
// depois, usamos a palavra 'new' para criar um novo Cachorro
// dentro dos parênteses, precisamos colocar todas as informações que o constructor pede
const meuCachorro = new Cachorro_1.Cachorro("Tobby", 10.5, "Vira-lata");
// agora podemos acessar as informações do cachorro. Por exemplo, para ver o nome:
console.log(`Meu cão se chama ${meuCachorro.nome}`);
meuCachorro.latir();
const Carro1 = new Carro_1.Carro("CAOA", "Tiggo8", 2025);
const Carro2 = new Carro_1.Carro("JAC", "J5", 2015);
const Carro3 = new Carro_1.Carro("Ferrari", "Testarossa", 1989);
console.log(`\nEle anda de carro...
    Marca: ${Carro1.marca}
    Nome: ${Carro1.nome}
    Ano: ${Carro1.ano}\n`);
Carro1.rodar();
Carro1.buzinar();
/* console.log(`\nEle anda de carro...
    Marca: ${Carro2.marca}
    Nome: ${Carro2.nome}
    Ano: ${Carro2.ano}\n`)

Carro2.rodar()
Carro2.buzinar()

console.log(`\nEle anda de carro...
    Marca: ${Carro3.marca}
    Nome: ${Carro3.nome}
    Ano: ${Carro3.ano}\n`)

Carro3.rodar()
Carro3.buzinar() */ 
//# sourceMappingURL=index.js.map