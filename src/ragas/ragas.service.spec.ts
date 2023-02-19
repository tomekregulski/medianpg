import { Test, TestingModule } from '@nestjs/testing';
import { RagasService } from './ragas.service';

describe('RagasService', () => {
  let service: RagasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RagasService],
    }).compile();

    service = module.get<RagasService>(RagasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
