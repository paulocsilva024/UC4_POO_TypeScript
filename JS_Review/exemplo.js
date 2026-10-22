const rl = require("readline-sync")

/* function limpaTela(x){
    console.clear();
    console.log(`TREINO PROGRAMAÇÃO DO LEO`);
    console.log(x);
} */

const limpaTela = (x) => {
    console.clear();
    console.log(`Exercícios de Revisão 🏋️‍♂️ (15 exercícios)`);
    console.log(x);
}
//Variáveis, operadores e entrada/saída

/* let title = "\n====== 1 - Peça o nome e idade do usuário e mostre uma mensagem personalizada. ======\n"
limpaTela(title)

let nome = rl.question("Digite seu nome: ")
let idade = rl.questionInt("Digite sua idade: ")
limpaTela(title)
console.log(`Welcome ${nome}! A idade ${idade} é boa :D`)

rl.question()
title = "\n====== 2 - Solicite dois números e mostre a soma, subtração, multiplicação e divisão. ======\n"
limpaTela(title)

n1 = rl.questionFloat("Primeiro: ")
n2 = rl.questionFloat("Segundo: ")
let soma = n1 + n2
let subt = n1 - n2
let mult = n1 * n2
let divi = n1 / n2

console.log(`
Soma (n1 + n2): ${soma}
Subt (n1 - n2): ${subt}
Mult (n1 * n2): ${mult}
Divi (n1 / n2): ${divi}
`)

rl.question()
title = "\n====== 3 - Peça uma nota e exiba “Aprovado” ou “Reprovado” usando operador ternário. ======\n"
limpaTela(title)

let nota = rl.questionFloat(`Digite a tal nota: `)
nota >= 6 ? console.log('Aprovado!') : console.log('Reprovado')

rl.question()
title = "\n====== 4 - Verifique se um número é par ou ímpar usando if/else. ======\n"
limpaTela(title)

let num = rl.questionInt(`Digite aqui: `)
if (num % 2 === 0) { console.log('\nÉ PAR!') } else { console.log('\nÉ ÍMPAR!') }

//Estruturas condicionais
rl.question()
title = "\n====== 5 - Peça o dia da semana (1-7) e use switch para mostrar o nome do dia. ======\n"
limpaTela(title)

let dia = rl.questionInt(`Digite aqui:`)

switch (dia) {
    case 1: console.log('Domingo'); break;
    case 2: console.log('Segunda'); break;
    case 3: console.log('Terça'); break;
    case 4: console.log('Quarta'); break;
    case 5: console.log('Quinta'); break;
    case 6: console.log('Sexta'); break;
    case 7: console.log('Sábado'); break;
    default: console.log("Opção inválida!!")
}

rl.question()
title = "\n====== 6 - Crie um mini-cardápio e use switch para mostrar o preço do item escolhido. ======\n"
limpaTela(title)

console.log(`Cardápio

1- Comida boa!
2- Bebida boa!
3- Sobremesa!
4- Outra coisa!
`)

let opt = rl.questionInt(`Qual sua escolha: `)

switch (opt) {
    case 1: console.log('\nChurrasco - R$ 40,00'); break;
    case 2: console.log('\nCerveja - R$ 15,00'); break;
    case 3: console.log('\nSorvete - R$ 10,00'); break;
    case 4: console.log('\nBuffet livre - R$ 65,00'); break;
    default: console.log("\nOpção inválida!!")
}

//Loops
rl.question()
title = "\n====== 7 - Crie um array de 5 números e calcule a soma usando for. ======\n"
limpaTela(title)

num = [1, 2, 3, 4, 5]
let somaNum = 0
for (let i = 0; i < 5; i++) {
    somaNum += num[i]
}
console.log(somaNum)

rl.question()
title = "\n====== 8 - Faça um loop while que exiba números de 1 a 10. ======\n"
limpaTela(title)

num = 1
while (num <= 10) {
    console.log(num)
    num++
}

rl.question()
title = "\n====== 9 - Use for...of para imprimir todos os elementos de um array de frutas. ======\n"
limpaTela(title)

let frutas = ['coconut', 'apple', 'lime', 'pear']
for (const fruta of frutas) {
    console.log(fruta)
}

rl.question()
title = "\n====== 10 - Use forEach para imprimir todos os elementos de um array de cores. ======\n"
limpaTela(title)

let cores = ['blue', 'black', 'white', 'green']
console.log('cores.forEach((cor) => console.log(cor))\n')
cores.forEach((cor) => console.log(cor))

rl.question()
title = "\n====== 11 - Crie um objeto pessoa com nome e idade e use for...in para imprimir cada propriedade. ======\n"
limpaTela(title)

let pessoa = {
    nome: 'Daniel',
    idade: 30,
}
for (const x in pessoa) {
    console.log(pessoa[x])
}

rl.question()
title = "\n====== 12 - Faça um loop que exiba todos os números pares de 0 a 20. ======\n"
limpaTela(title)

for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) console.log(i)
}

//Funções
rl.question()
title = "\n====== 13 - Crie uma função tradicional que receba 2 números e retorne o maior. ======\n"
limpaTela(title)

n1 = rl.questionInt('First number:')
n2 = rl.questionInt('Second number:')

function maiorEntreDois(x, y) {
    if (x > y) {
        return x;
    } else if (x < y) {
        return y;
    } else { return '\nSão iguais' }
}
console.log(maiorEntreDois(n1, n2))

rl.question() */
title = "\n====== 14 - Crie uma arrow function que receba um array e retorne a soma de todos os elementos. ======\n"
limpaTela(title)

const somatorio = (array) => {
    let soma = 0
    for (const numero of array) {
        soma += numero
    }
    return soma
}
const numeros = [1, 2, 3, 4, 5, 6]
console.log(somatorio(numeros))

/* const somaArray = (arr) => {
    // Validação: verificar se é um array
    if (!Array.isArray(arr)) {
        throw new TypeError("O parâmetro deve ser um array.");
    }

    // Validação: verificar se todos os elementos são números
    if (!arr.every(el => typeof el === "number" && !isNaN(el))) {
        throw new TypeError("Todos os elementos do array devem ser números válidos.");
    }

    // Reduz o array somando os elementos
    return arr.reduce((acumulador, valor) => acumulador + valor, 0);
};

// Exemplo de uso:
try {
    console.log(somaArray([1, 2, 3, 4, 5])); // 15
    console.log(somaArray([-10, 20, 30]));   // 40
    console.log(somaArray(10));  // 0
} catch (erro) {
    console.error("Erro:", erro.message);
} */

rl.question()
title = "\n====== 15 - Crie uma função que peça ao usuário seu nome e idade (usando readline) e exiba uma saudação personalizada. ======\n"
limpaTela(title)

const saudacao = () => {
    nome = rl.question("Digite seu nome: ")
    idade = rl.questionInt("Digite sua idade: ")
    limpaTela(title)
    console.log(`Welcome ${nome}! A idade ${idade} é boa :D`)
}
saudacao()