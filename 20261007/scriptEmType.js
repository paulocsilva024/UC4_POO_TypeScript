"use strict";
// Em typescript, as variáveis e constantes
//Para transpilar => npx tsc nomeDoArquivo.ts
let meuNome = "Paulo";
let minhaIdade = 31;
let desligado = false;
function somar(a, b) {
    return a + b;
}
console.log(somar(10, 90));
// Arrays em Type
let compras = ["Pão", "Leite", "Manteiga"];
let numeros = [1, 2, 3, 4];
// Crie um array que contém x notas e depois calcule a média destas notas e mostre no terminal.
let soma = 0;
/* for(let n of numeros){
    soma += n
} */
for (let n = 0; n < numeros.length; n++) {
    soma += numeros[n];
}
let media = soma / numeros.length;
console.log(media);
// Objetos em javascript
let pessoa = {
    nome: "Laura",
    idade: 27
};
// Objetos em typescript
// atributos com '?' são opcionais, ou seja, eu posso ou não colocar valor para eles
let person1 = {
    nome: "Leo",
    cidade: "Canoas"
};
//console.log(person)
// Crie dois objetos representando pessoas (coloque nomes diferentes para os objetos)
// Estes objetos devem ter: nome, cidade, emprego (emprego deve ser opcional)
// Depois, faça um if que mostre duas frases diferentes
// Se a pessoa tem um emprego, mostra "Fulano, da cidade tal está trabalhando"
// Se não, mostra "Fulano, da cidade tal está desempregado"
let person2 = {
    nome: "Laura",
    cidade: "Sapucaia do Sul"
};
console.log(person1.emprego);
person1.emprego = true;
if (person1.emprego) {
    console.log(`${person1.nome}, da cidade ${person1.cidade} está trabalhando`);
}
else {
    console.log(`${person1.nome}, da cidade ${person1.cidade} está desempregado`);
}
