import { Guerreiro } from "./Guerreiro";
import { IAtacante } from "./IAtacante";
import { Mago } from "./Mago";

const guerreiro = new Guerreiro("Xablau");
const mago = new Mago("Merlin");

// guerreiro.atacar();
// mago.lancarMagia();

// Função para verificar a classe de um objeto
function obterClasse(obj: unknown): string {
    if (obj && typeof obj === "object") {
        // Retorna o nome da classe
        return (obj as Object).constructor.name;
    }
    return "Não é um objeto válido";
}

function luta(personagem:IAtacante, inimigo:IAtacante):void {
    
    personagem.atacar()
    inimigo.atacar()
}

luta(guerreiro, mago)