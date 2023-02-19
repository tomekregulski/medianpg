import { PartialType } from '@nestjs/swagger';
import { CreateRagasDto } from './create-ragas.dto';

export class UpdateRagasDto extends PartialType(CreateRagasDto) {}
