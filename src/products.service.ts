import { Injectable } from '@nestjs/common';

import { Product } from './product.model';

@Injectable()
export class ProductsServices {
  products: Product[] = [
    new Product('LIV01', 'Livro TDD e BDD na prática', 29.9),
    new Product('LIV02', 'Livro Iniciando com Flutter', 39.9),
    new Product('LIV03', 'Livro Inteligência artificial como serviço', 29.0),
  ];

  get(): Product[] {
    return this.products;
  }

  getById(id: number): Product {
    console.log(id);

    return this.products[0];
  }

  create(product: Product): void {
    this.products.push(product);
  }

  update(product: Product): Product {
    return product;
  }

  remove(id: number) {
    console.log(id);

    this.products.pop();
  }
}
