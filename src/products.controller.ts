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
import { ProductsServices } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsServices) {}

  @Get()
  get(): Product[] {
    return this.productsService.get();
  }

  @Get(':id')
  getById(@Param() params): Product {
    return this.productsService.getById(params.id);
  }

  @Post()
  create(@Body() product: Product) {
    this.productsService.create(product);
  }

  @Put()
  update(@Body() product: Product): Product {
    return this.productsService.update(product);
  }

  @Delete(':id')
  remove(@Param() params): void {
    this.productsService.remove(params.id);
  }
}
