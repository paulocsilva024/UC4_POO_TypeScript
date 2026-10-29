//EXEMPLO DE POLIFORMISMO
// Classe base
export class Funcionario {
    calcularSalario(): number {
        return 1000; // salário base
    }
}

// Subclasse: Desenvolvedor
export class Desenvolvedor extends Funcionario {
    calcularSalario(): number {
        return 3000; // salário específico do desenvolvedor
    }
}

// Subclasse: Gerente
export class Gerente extends Funcionario {
    calcularSalario(): number {
        return 5000; // salário específico do gerente
    }
}

// Testando polimorfismo
const funcionarios: Funcionario[] = [
    new Funcionario(),
    new Desenvolvedor(),
    new Gerente()
];

funcionarios.forEach(func => {
    console.log(`Salário: R$ ${func.calcularSalario()}`);
});