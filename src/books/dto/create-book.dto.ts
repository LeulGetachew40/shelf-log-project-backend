import {
  IsArray,
  IsDate,
  IsEnum,
  IsString,
  Length,
  MaxLength,
} from 'class-validator';
import { ReadStatus } from './../../../generated/prisma/client';

export class CreateBookDto {
  @IsString()
  @Length(3, 100, {
    message: 'The title must be between 3 to 100 characters long',
  })
  title: string;

  @IsString()
  @Length(3, 50, {
    message: 'An authors name must be between 3 to 50 characters long',
  })
  author: string;

  @IsString()
  @MaxLength(2500, {
    message: 'Description cannot exceed above 2500 characters',
  })
  description?: string;

  @IsArray()
  categories: string[];

  @IsDate()
  publishDate?: Date;

  @IsEnum(ReadStatus)
  readStatus: ReadStatus;
}
