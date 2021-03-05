import { Module } from '@nestjs/common';
import { LinkedIdentityController } from './linked-identity.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LinkedIdentityService } from './entities/linked-identity.entity';


@Module({
  imports: [TypeOrmModule.forFeature([LinkedIdentityService])],
  controllers: [LinkedIdentityController],
  providers: [LinkedIdentityService]
})
export class LinkedIdentityModule { }
