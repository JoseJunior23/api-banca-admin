import { FactoryRepository } from '@modules/factory/domain/repositories/factory.repository';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Factory } from './entities/factory.entity';
import { TypeormFactoryRepository } from './repositories/typeorm-factory.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Factory])],
  providers: [
    {
      provide: FactoryRepository,
      useClass: TypeormFactoryRepository,
    },
  ],
  exports: [FactoryRepository],
})
export class FactoryTypeormModule {}
