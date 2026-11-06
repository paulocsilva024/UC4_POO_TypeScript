/*
    A interface define uma regra.
    Ela diz que, todos os que seguirem ela,
    precisam implementar TODOS os atributos
    e/ou métodos que criamos nesta interface.
*/

export interface IAtacante {
    nome:string;
    atacar():void; // sem a lógica, apenas o nome e o tipo de retorno
}