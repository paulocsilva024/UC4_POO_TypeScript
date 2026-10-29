export class ContaBancaria {
    // private saldo:number
    protected safeSaldo:number = 0

    constructor(saldo:number){
        this.safeSaldo = saldo
    }

    public consultarSaldo ():void {
        console.log(`${this.safeSaldo.toFixed(2)}`)
    }

    // public depositar(val:number):void {
    //     if (val > 0) {this.saldo += val}
    // }

    protected atualizarSafeSaldo(valor: number):void{
        if (valor > 0) {this.safeSaldo += valor}
    }

}