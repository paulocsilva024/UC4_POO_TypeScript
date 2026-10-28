import { Animal } from "./Animal";

// Subclasse Ave
export class Ave extends Animal {
    voa:boolean
  constructor(nome: string, idade: number, voa:boolean) {
    super(nome, idade);
    this.voa = voa;
  }
}