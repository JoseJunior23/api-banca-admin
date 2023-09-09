import { Module } from '@nestjs/common';

import { HttpFactoryModule } from './infra/http/factory-http.module';
import { TypeormFactoryModule } from './infra/typeorm/factory-typeorm.module';

@Module({
  imports: [HttpFactoryModule, TypeormFactoryModule],
})
export class FactoryModule {}
