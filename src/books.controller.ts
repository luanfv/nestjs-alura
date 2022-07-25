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
  get(): Book[] {
    return this.booksService.get();
  }

  @Get(':id')
  getById(@Param() params): Book {
    return this.booksService.getById(params.id);
  }

  @Post()
  create(@Body() book: Book) {
    this.booksService.create(book);
  }

  @Put()
  update(@Body() book: Book): Book {
    return this.booksService.update(book);
  }

  @Delete(':id')
  remove(@Param() params): void {
    this.booksService.remove(params.id);
  }
}

export { BooksController };
