import { IsEnum } from 'class-validator';
import { ReadStatus } from 'generated/prisma';

export class UpdateBookDto {
  @IsEnum(ReadStatus)
  readStatus: ReadStatus;
}
