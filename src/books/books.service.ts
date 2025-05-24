import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { PrismaClient, ReadStatus } from 'generated/prisma';
import { PaginateBooksDto } from './dto/pagination-dto';
import { paginate } from 'src/utils/pagination';

@Injectable()
export class BooksService {
  constructor(private readonly prismaClient: PrismaClient) {}

  private isValidReadStatus(status: ReadStatus | undefined): boolean {
    const readStatuses = Object.values(ReadStatus);

    return readStatuses.includes(status);
  }

  async bookFound(id: number) {
    return Object.keys(await this.findOneBook(id)).length !== 0;
  }

  async create(createBookDto: CreateBookDto) {
    return await this.prismaClient.books.create({ data: { ...createBookDto } });
  }

  async findAllBooks({ page, limit, status, category }: PaginateBooksDto) {
    if (status && !this.isValidReadStatus(status))
      throw new BadRequestException(`Read Status - ${status} is invalid!`);

    return await paginate(
      this.prismaClient.books,
      {
        where: {
          readStatus: status,
          ...(category && { categories: { has: category } }),
        },
        include: { notes: true },
      },
      { page, perPage: limit },
    );
  }

  async findOneBook(id: number) {
    const data = await paginate(
      this.prismaClient.books,
      { where: { id }, include: { notes: true } },
      { perPage: 1 },
    );

    if (data.data.length === 0)
      throw new NotFoundException(`Book ${id} Not Found!`);
    // handle error if the book is not found by the id
    return data;
  }

  async updateBook(id: number, updateBookDto: UpdateBookDto) {
    if (!this.bookFound(id))
      throw new NotFoundException(`Book with id #${id} was not found`);
    return await this.prismaClient.books.update({
      where: { id },
      data: { ...updateBookDto },
    });
  }

  async removeBook(id: number) {
    return await this.prismaClient.books.delete({ where: { id } });
  }
}
