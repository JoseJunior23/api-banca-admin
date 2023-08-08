import { PlanRepository } from '@modules/plan/domain/repositories/plan.repository';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Plan } from './entities/plan.entity';
import { TypeormPlanRepository } from './repositories/typeorm-plan.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Plan])],
  providers: [
    {
      provide: PlanRepository,
      useClass: TypeormPlanRepository,
    },
  ],
  exports: [PlanRepository],
})
export class PlanTypeormModule {}
