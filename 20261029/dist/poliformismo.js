"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gerente = exports.Desenvolvedor = exports.Funcionario = void 0;
//EXEMPLO DE POLIFORMISMO
// Classe base
class Funcionario {
    calcularSalario() {
        return 1000; // salário base
    }
}
exports.Funcionario = Funcionario;
// Subclasse: Desenvolvedor
class Desenvolvedor extends Funcionario {
    calcularSalario() {
        return 3000; // salário específico do desenvolvedor
    }
}
exports.Desenvolvedor = Desenvolvedor;
// Subclasse: Gerente
class Gerente extends Funcionario {
    calcularSalario() {
        return 5000; // salário específico do gerente
    }
}
exports.Gerente = Gerente;
// Testando polimorfismo
const funcionarios = [
    new Funcionario(),
    new Desenvolvedor(),
    new Gerente()
];
funcionarios.forEach(func => {
    console.log(`Salário: R$ ${func.calcularSalario()}`);
});
