import { Desenvolvedor } from "./Desenvolvedor";
import { Gerente } from "./Gerente";
import { LiderTecnico } from "./LiderTecnico";

const dev:Desenvolvedor = new Desenvolvedor("Paulo")
const ger:Gerente = new Gerente("Miriam")
const head:LiderTecnico = new LiderTecnico("Leo")

dev.trabalhar()
dev.programar()
console.log(`\n============================\n`)
ger.trabalhar()
ger.gerenciar()
console.log(`\n============================\n`)
head.trabalhar()
head.programar()
head.gerenciar()