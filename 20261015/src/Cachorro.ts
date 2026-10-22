// Toda classe sempre começa com letra maiúscula
// a palavra 'export' permite que outros arquivos importem e usem esta Classe
// a palavra 'class' inicia a declaração da classe
// depois colocamos o nome da classe que deve ser IGUAL o nome do arquivo, seguido de chaves

export class Cachorro {
    // todo o código da classe vai aqui dentro
    // A seguir os ATRIBUTOS - as coisas que o cachorro têm
    // são como variáveis, só que sem CONST ou LET

    nome:string
    peso:number
    raca:string

    // Toda classe precisa de um método especial chamado 'constructor'
    // Este recebe os valores de nome, peso, raca, etc e cria o objeto.
    constructor(meuNome:string, meuPeso:number, minhaRaca:string){
        this.nome = meuNome
        this.peso = meuPeso
        this.raca = minhaRaca
    }

    // Métodos são funções. Elas são as coisas que o cachorro faz
    latir():void {
        console.log(`${this.nome}: au au au!`)
    }
    comer():void {
        console.log(`${this.nome}: nham nham!`)
    }
}