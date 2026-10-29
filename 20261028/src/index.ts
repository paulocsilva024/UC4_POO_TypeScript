import { Carro } from "./Carro";
import { ContaBancaria } from "./ContaBancaria";
import { ContaPoupanca } from "./ContaPoupanca";
import { Livro } from "./Livro";

const livro:Livro = new Livro("As mentiras que os homens contam")

console.log(`Exercício 1 - Título do livro\n`)
livro.exibirTitulo()

console.log(`\nExercício 2 - Conta/saldo\n`)

const conta:ContaBancaria = new ContaBancaria(100)
conta.consultarSaldo()
console.log(`\nVou depositar 1900,00 pra testar... \n`)
//conta.depositar(1900)
conta.consultarSaldo()

console.log(`\nExercício 3 - Acelerando o carro\n`)

const gol:Carro = new Carro("Gol", 0)
gol.exibirVelocidade()
console.log(`\nAcelerando +25 km/h`)
gol.acelerar(25)
gol.exibirVelocidade()
console.log(`\nAcelerando +25 km/h`)
gol.acelerar(25)
gol.exibirVelocidade()
console.log(`\nAcelerando +50 km/h`)
gol.acelerar(50)
gol.exibirVelocidade()

console.log(`\nExercício 4 - Comparando private e protected\n`)

const poupanca:ContaPoupanca = new ContaPoupanca(10)

poupanca.aplicarJuros(0.7)
poupanca.consultarSaldo()