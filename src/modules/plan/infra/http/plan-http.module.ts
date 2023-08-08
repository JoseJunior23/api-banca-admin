import { CreatePlanService } from '@modules/plan/domain/services/create-plan.service';
import { DeletePlanService } from '@modules/plan/domain/services/delete-plan.service';
import { ListPlanService } from '@modules/plan/domain/services/list-plan.service';
import { UpdatePlanService } from '@modules/plan/domain/services/update-plan.service';
import { Module } from '@nestjs/common';

import { PlanTypeormModule } from '../typeorm/plan-typeorm.module';
import { PlanController } from './controllers/plan.controller';

@Module({
  imports: [PlanTypeormModule],
  controllers: [PlanController],
  providers: [
    CreatePlanService,
    ListPlanService,
    UpdatePlanService,
    DeletePlanService,
  ],
})
export class PlanHttpModule {}
