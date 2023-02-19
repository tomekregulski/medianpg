import { Test, TestingModule } from '@nestjs/testing';
import { RagasController } from './ragas.controller';
import { RagasService } from './ragas.service';

describe('RagasController', () => {
  let controller: RagasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RagasController],
      providers: [RagasService],
    }).compile();

    controller = module.get<RagasController>(RagasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
