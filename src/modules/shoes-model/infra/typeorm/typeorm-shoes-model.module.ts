import { ShoesModelRepository } from '@modules/shoes-model/domain/repositories/shoes-model.repository';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ShoesModel } from './entities/shoes-model.entity';
import { TypeormShoesModelRepository } from './repositories/typeorm-shoes-model.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ShoesModel])],
  providers: [
    {
      provide: ShoesModelRepository,
      useClass: TypeormShoesModelRepository,
    },
  ],
  exports: [ShoesModelRepository],
})
export class TypeormShoesModelModule {}
