export class Livro {
    public titulo:string
     constructor(tit:string){
        this.titulo = tit
     }

     public exibirTitulo():void {
        console.log(`${this.titulo}`)
     }
}