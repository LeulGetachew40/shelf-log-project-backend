import { MaxLength } from 'class-validator';

export class CreateNoteDto {
  @MaxLength(2500, { message: 'A note must be less than 2500 characters long' })
  content: string;
}
