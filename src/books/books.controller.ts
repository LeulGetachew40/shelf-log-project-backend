import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseFilters,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { PaginateBooksDto } from './dto/pagination-dto';
import { HttpExceptionFilter } from 'src/filters/http-exception.filter';
import { NotesService } from 'src/notes/notes.service';
import { UpdateNoteDto } from 'src/notes/dto/update-note.dto';
import { CreateNoteDto } from 'src/notes/dto/create-note.dto';

@Controller('books')
@UseFilters(HttpExceptionFilter)
export class BooksController {
  constructor(
    private readonly booksService: BooksService,
    private readonly notesService: NotesService,
  ) {}

  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }

  @Get()
  async findAllBooks(@Query() paginationDto: PaginateBooksDto) {
    return await this.booksService.findAllBooks(paginationDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.booksService.findOneBook(+id);
  }

  @Patch(':id')
  updateBookStatus(
    @Param('id') id: string,
    @Body() updateBookDto: UpdateBookDto,
  ) {
    return this.booksService.updateBook(+id, updateBookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.booksService.removeBook(+id);
  }

  @Post(':bookId/notes')
  async createNoteByBookId(
    @Param('bookId') bookId: string,
    @Body() createNoteDto: CreateNoteDto,
  ) {
    return await this.notesService.createNoteByBookId(+bookId, createNoteDto);
  }

  @Get(':bookId/notes')
  async findAllNotesByBookId(@Param('bookId') bookId: string) {
    return await this.notesService.findAllNotes(+bookId);
  }

  @Patch(':bookId/notes/:noteId')
  async updateNoteById(
    @Param('bookId') bookId: string,
    @Param('noteId') noteId: string,
    @Body() updateNoteDto: UpdateNoteDto,
  ) {
    return await this.notesService.updateNote(+bookId, +noteId, updateNoteDto);
  }

  @Delete(':bookId/notes/:noteId')
  async removeNoteById(
    @Param('bookId') bookId: string,
    @Param('noteId') noteId: string,
  ) {
    return await this.notesService.removeNote(+bookId, +noteId);
  }
}
