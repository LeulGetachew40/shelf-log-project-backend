import { PartialType } from '@nestjs/mapped-types';
import { PaginationDto } from 'src/utils/pagination';
import { ApiProperty } from '@nestjs/swagger';
import { ReadStatus } from './../../../generated/prisma/client';

export class PaginateBooksDto extends PartialType(PaginationDto) {
  @ApiProperty({
    description: 'A query parameter for filtering books by reading status',
    examples: ['toRead', 'reading', 'completed'],
  })
  status?: ReadStatus;

  @ApiProperty({
    description: 'A query parameter for filtering books by reading status',
    examples: ['Crime', 'Fantasy', 'SciFi'],
  })
  category?: string;
}
