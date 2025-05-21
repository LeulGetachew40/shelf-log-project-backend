import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { NotesService } from './notes/notes.service';
import { PrismaClient } from 'generated/prisma';
import { BooksService } from './books/books.service';

@Module({
  imports: [BooksModule],
  controllers: [AppController],
  providers: [AppService, NotesService, BooksService, PrismaClient],
})
export class AppModule {}
