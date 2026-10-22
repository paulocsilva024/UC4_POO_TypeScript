// Importações em Typescript são parecidas com este comando
// A seguir dizermos: Importe tudo (*) com o nome 'readline' (ele já cria um objeto com este nome) da biblioteca 'readline-sync'
import * as rl from 'readline-sync';
let nome = rl.question("Qual o seu nome? ");
let idade = rl.questionInt("Qual a sua idade? ");
console.log(`Olá ${nome}! Você tem ${idade} anos.`);
