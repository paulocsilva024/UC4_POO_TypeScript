// importa tudo (*) como 'rl' da biblioteca 'readline-sync'
// dentro de um objeto chamado 'rl' q terá todos os atributos e métodos da biblioteca
import * as rl from "readline-sync"
import { Personagem } from "./Personagem"

// Menu de exemplo

// const menu:number = rl.questionInt("Escolha: ")

const seuZe:Personagem = new Personagem("Seu Zé", 200, 30, 50)
const fredo:Personagem = new Personagem("Fredo", 80, 30, 50)
const samuel:Personagem = new Personagem("Samuel", 80, 30, 50)
const diego:Personagem = new Personagem("Diegolas", 80, 30, 50)

seuZe.exibirStatus()
fredo.exibirStatus()
samuel.exibirStatus()
diego.exibirStatus()