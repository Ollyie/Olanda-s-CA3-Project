import { Test, TestingModule } from '@nestjs/testing';
import { BioDataController } from './bio-data.controller';
import { BioDataService } from './bio-data.service';

describe('BioDataController', () => {
  let controller: BioDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BioDataController],
      providers: [BioDataService],
    }).compile();

    controller = module.get<BioDataController>(BioDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
