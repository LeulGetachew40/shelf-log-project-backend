import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { NotesService } from 'src/notes/notes.service';
import { PrismaClient } from 'generated/prisma/client';

@Module({
  controllers: [BooksController],
  providers: [BooksService, NotesService, PrismaClient],
})
export class BooksModule {}
