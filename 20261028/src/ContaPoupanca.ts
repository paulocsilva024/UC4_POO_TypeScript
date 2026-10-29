import { ContaBancaria } from "./ContaBancaria";

export class ContaPoupanca extends ContaBancaria {

    /* constructor(){
        super(this.safeSaldo)
    } */
    public aplicarJuros(val:number):void{
        let juros = this.safeSaldo * (val/100)
        this.atualizarSafeSaldo(juros)
    }
}