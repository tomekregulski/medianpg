import { ApiProperty } from '@nestjs/swagger';

export class CreateEventDto {
  @ApiProperty()
  name: string;

  @ApiProperty({ required: false })
  date: string;

  @ApiProperty()
  notes: string;
}
