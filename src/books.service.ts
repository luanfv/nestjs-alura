import { Injectable } from '@nestjs/common';

import { Book } from './book.model';

@Injectable()
class BooksServices {
  books: Book[] = [
    // new Book('LIV01', 'Livro TDD e BDD na prática', 29.9),
    // new Book('LIV02', 'Livro Iniciando com Flutter', 39.9),
    // new Book('LIV03', 'Livro Inteligência artificial como serviço', 29.0),
  ];

  get(): Book[] {
    return this.books;
  }

  getById(id: number): Book {
    console.log(id);

    return this.books[0];
  }

  create(book: Book): void {
    this.books.push(book);
  }

  update(book: Book): Book {
    return book;
  }

  remove(id: number) {
    console.log(id);

    this.books.pop();
  }
}

export { BooksServices };
