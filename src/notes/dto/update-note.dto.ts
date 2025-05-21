import { MaxLength } from 'class-validator';

export class UpdateNoteDto {
  @MaxLength(2500, { message: 'A note must be less than 2500 characters long' })
  content: string;
}
