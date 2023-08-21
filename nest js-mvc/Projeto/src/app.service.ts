import { Injectable } from '@nestjs/common';


export interface Produto {
  nome: string;
  status: string;
  destinacao: string;
  taxaRentabilidade: number;
  prazo: number;
  taxaAdm: number;
  vencimento: Date;
}

@Injectable()
export class AppService {
  private _products: Produtos;

  constructor() {
    this._products = new Produtos();
  }

  addProduct(input: Produto): void {
    this._products.addNewProduct(input);
  }

  listProducts(): void {
    console.log(this._products.getProducts());
  }

}

class Produtos {
  private _products: Produto[] = [];

  getProducts(): Produto[] {
    return this._products;
  }

  addNewProduct(product: Produto): void {
    this._products.push(product);
  }
}