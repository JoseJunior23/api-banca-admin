import { Module } from '@nestjs/common';

import { FactoryHttpModule } from './infra/http/factory-http.module';
import { FactoryTypeormModule } from './infra/typeorm/factory-typeorm.module';

@Module({
  imports: [FactoryHttpModule, FactoryTypeormModule],
})
export class FactoryModule {}
