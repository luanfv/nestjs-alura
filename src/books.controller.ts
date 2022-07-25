import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { Book } from './book.model';
import { BooksServices } from './books.service';

@Controller('books')
class BooksController {
  constructor(private booksService: BooksServices) {}

  @Get()
  async get(): Promise<Book[]> {
    return this.booksService.get();
  }

  @Get(':id')
  async getById(@Param() params): Promise<Book> {
    return this.booksService.getById(params.id);
  }

  @Post()
  async create(@Body() book: Book): Promise<void> {
    this.booksService.create(book);
  }

  @Put()
  async update(@Body() book: Book): Promise<void> {
    this.booksService.update(book);
  }

  @Delete(':id')
  async remove(@Param() params): Promise<void> {
    this.booksService.remove(params.id);
  }
}

export { BooksController };
