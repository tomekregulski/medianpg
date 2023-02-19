import { Module } from '@nestjs/common';
import { RagasService } from './ragas.service';
import { RagasController } from './ragas.controller';

@Module({
  controllers: [RagasController],
  providers: [RagasService]
})
export class RagasModule {}
