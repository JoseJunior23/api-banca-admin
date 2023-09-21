import { ProfessionRepository } from '@modules/profession/domain/repositories/profession.repository';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Profession } from './entities/profession.entity';
import { TypeormProfessionRepository } from './repositories/typeorm-profession.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Profession])],
  providers: [
    {
      provide: ProfessionRepository,
      useClass: TypeormProfessionRepository,
    },
  ],
  exports: [ProfessionRepository],
})
export class TypeormProfessionModule {}
