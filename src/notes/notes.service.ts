import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClient } from 'generated/prisma';
import { BooksService } from 'src/books/books.service';
import { UpdateBookDto } from 'src/books/dto/update-book.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { CreateNoteDto } from './dto/create-note.dto';

@Injectable()
export class NotesService {
  constructor(
    private readonly prismaClient: PrismaClient,
    private readonly booksService: BooksService,
  ) {}

  async createNoteByBookId(bookId: number, createNoteDto: CreateNoteDto) {
    return await this.prismaClient.notes.create({
      data: { ...createNoteDto, bookId },
    });
  }

  async findAllNotes(bookId: number) {
    return this.prismaClient.notes.findMany({ where: { bookId } });
  }
  async updateNote(
    bookId: number,
    noteId: number,
    updateNoteDto: UpdateNoteDto,
  ) {
    if (!this.booksService.bookFound(bookId))
      throw new NotFoundException(`Book with id #${bookId} was not found`);

    return this.prismaClient.notes.update({
      where: { id: noteId },
      data: { ...updateNoteDto },
    });
  }

  async removeNote(bookId: number, noteId: number) {
    if (!this.booksService.bookFound(bookId))
      throw new NotFoundException(`Book with id #${bookId} was not found`);
    return await this.prismaClient.notes.delete({ where: { id: noteId } });
  }
}
