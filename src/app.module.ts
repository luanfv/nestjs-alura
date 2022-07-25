import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksController } from './books.controller';
import { BooksServices } from './books.service';

@Module({
  imports: [],
  controllers: [AppController, BooksController],
  providers: [AppService, BooksServices],
})
export class AppModule {}
