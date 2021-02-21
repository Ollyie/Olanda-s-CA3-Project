import { Module } from '@nestjs/common';
import { BioDataService } from './bio-data.service';
import { BioDataController } from './bio-data.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BioDatum} from './entities/bio-datum.entity'; 



@Module({
  imports: [TypeOrmModule.forFeature([BioDatum])],
  controllers: [BioDataController],
  providers: [BioDataService]
})
export class BioDataModule { }
