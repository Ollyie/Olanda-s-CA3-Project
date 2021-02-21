import { Test, TestingModule } from '@nestjs/testing';
import { BioDataService } from './bio-data.service';

describe('BioDataService', () => {
  let service: BioDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BioDataService],
    }).compile();

    service = module.get<BioDataService>(BioDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
