import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RagasService } from './ragas.service';
import { CreateRagasDto } from './dto/create-ragas.dto';
import { UpdateRagasDto } from './dto/update-ragas.dto';

@Controller('ragas')
export class RagasController {
  constructor(private readonly ragasService: RagasService) {}

  @Post()
  create(@Body() createRagasDto: CreateRagasDto) {
    return this.ragasService.create(createRagasDto);
  }

  @Get()
  findAll() {
    return this.ragasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ragasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRagasDto: UpdateRagasDto) {
    return this.ragasService.update(+id, updateRagasDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ragasService.remove(+id);
  }
}
