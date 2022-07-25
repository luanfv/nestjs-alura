import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { Product } from './product.model';

@Controller('products')
export class ProductsController {
  products: Product[] = [
    new Product('LIV01', 'Livro TDD e BDD na prática', 29.9),
    new Product('LIV02', 'Livro Iniciando com Flutter', 39.9),
    new Product('LIV03', 'Livro Inteligência artificial como serviço', 29.0),
  ];

  @Get()
  get(): Product[] {
    return this.products;
  }

  @Get(':id')
  getById(@Param() params): Product {
    console.log(params.id);

    return this.products[0];
  }

  @Post()
  create(@Body() product: Product): string {
    const newProduct = {
      ...product,
      id: 100,
    };
    this.products.push(newProduct);

    return 'Produto criado';
  }

  @Put()
  update(@Body() product: Product): Product {
    return product;
  }

  @Delete(':id')
  remove(): void {
    this.products.pop();
  }
}
