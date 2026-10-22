/*
Classes sempre começam com letras maiúscula
export significa 'exportar'. Ou seja, outros arquivos podem 'importar' esta classe e usar ela depois,
usamos a palavra 'class' para indicar que estamos criando uma classe e depois,
colocamos o exato mesmo nome que demos para o arquivo
*/

export class Pessoa {
    // Atributos
    // O que uma pessoa tem
    nome:string
    email:string
    senha:string

    // Método construtor (quando uma função está dentro de uma classe, chamamos de método)
    // ele serve para criar o objeto Pessoa

    constructor(meuNome:string, meuEmail:string, minhaSenha:string) {
        this.nome = meuNome
        this.email = meuEmail
        this.senha = minhaSenha
    }

    //Criando um método para esta classe

    andar():void{
        console.log(`${this.nome} está andando!`)
    }
}