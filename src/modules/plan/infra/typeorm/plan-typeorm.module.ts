/* eslint-disable simple-import-sort/imports */
import { PlanDetailRepository } from '@modules/plan/domain/repositories/plan-detail.repository';
import { PlanRepository } from '@modules/plan/domain/repositories/plan.repository';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PlanDetail } from './entities/plan-detail.entity';
import { Plan } from './entities/plan.entity';
import { TypeormPlanDetailRepository } from './repositories/typeorm-plan-detail.repository';
import { TypeormPlanRepository } from './repositories/typeorm-plan.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Plan, PlanDetail])],
  providers: [
    {
      provide: PlanRepository,
      useClass: TypeormPlanRepository,
    },
    {
      provide: PlanDetailRepository,
      useClass: TypeormPlanDetailRepository,
    },
  ],
  exports: [PlanRepository, PlanDetailRepository],
})
export class TypeormPlanModule {}
