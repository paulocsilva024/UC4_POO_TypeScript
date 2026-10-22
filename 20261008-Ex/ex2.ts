/*Exercício 2:
Seu Zé também está no ramo do Jogo do Bicho no mercadinho dele.
Ele precisa agora de um sistema que identifique os nomes dos animais a partir dos números que os clientes escolhem.

Para isso, você deve:
- Solicitar o nome do cliente;
- Solicitar um número de 1 a 20;
- Criar uma função chamada 'descobrirBicho' que recebe esse número
- Utilizando if, else if, e else, essa função identifica que animal a pessoa escolheu.
- A função retorna o nome do cliente, o número escolhido e o nome do animal escolhido, tudo em uma frase só!

// Animais:
Avestruz: 01 a 04 | Águia: 05 a 08 | Burro: 09 a 12 | Borboleta: 13 a 16 | Cachorro: 17 a 20
*/
import * as rl from 'readline-sync'
let title:string = `    =======================
    JOGO DO BICHO DO SEU ZÉ
    =======================
    `
console.log(title)
let nome:string = rl.question('Digite seu nome: ')
let jogo:number = rl.questionInt('Qual seu palpite (1-20): ')
let animais:string[] = ['Avestruz','Águia','Burro','Borboleta','Cachorro']

function descobrirBicho(nome:string, jogo:number):string {
    let i:number
    if(jogo < 1 || jogo > 20) {
        return `Número inválido`
    }
    else if (jogo <= 4) {i = 0}
    else if (jogo <= 8) {i = 1}
    else if (jogo <= 12){i = 2}
    else if (jogo <= 16){i = 3}
    else {i = 4}
    
    return `Jogo registrado\n\n${nome}, ${jogo}-${animais[i]}.`
}
console.clear()
console.log(title)
console.log(descobrirBicho(nome,jogo))