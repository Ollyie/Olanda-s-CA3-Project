import { Module } from '@nestjs/common';
import { BioDataModule } from './bio-data/bio-data.module';
import { LinkedIdentityModule } from './linked-identity/linked-identity.module';

@Module({
  imports: [BioDataModule, LinkedIdentityModule]
})
export class NinRegistrationModule {}
