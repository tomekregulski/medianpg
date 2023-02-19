import { Injectable } from '@nestjs/common';
import { CreateRagasDto } from './dto/create-ragas.dto';
import { UpdateRagasDto } from './dto/update-ragas.dto';

@Injectable()
export class RagasService {
  create(createRagasDto: CreateRagasDto) {
    return 'This action adds a new ragas';
  }

  findAll() {
    return `This action returns all ragas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ragas`;
  }

  update(id: number, updateRagasDto: UpdateRagasDto) {
    return `This action updates a #${id} ragas`;
  }

  remove(id: number) {
    return `This action removes a #${id} ragas`;
  }
}
