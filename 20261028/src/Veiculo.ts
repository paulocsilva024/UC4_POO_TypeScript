export class Veiculo {
    protected speed:number

    constructor(speed:number){
        speed > 0 ? this.speed = speed : this.speed = 0
    }
}