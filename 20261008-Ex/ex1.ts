/*
Primeiro, crie o package.json (npm init -y)
Depois, crie o script do npm start
"start": "npx tsc index.ts && node index.js"
Aí, instale a biblioteca com readline-sync e também os tipos
npm i readline-sync
npm i @types/readline-sync
E npm i @types/node
Verifique se os dois aparecem no package.json. Se não aparecem, não foram instalados.
*/

/*
Exercício 1:
Crie uma função chamada 'somar' que pede dois números.
Estes números devem ser passsados pelo usuário através do readline-sync.
Mostre a soma destes dois números. Não esqueça de tipar o retorno corretamente.
*/
import * as rl from 'readline-sync'
let a = rl.questionInt("Digite num1: ")
let b = rl.questionInt("Digite num2: ")
function somar(a:number, b:number):number{
    return a + b
}

console.log(`\nA soma de ${a} + ${b} = ` + somar(a, b))