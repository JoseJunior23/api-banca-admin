/* eslint-disable simple-import-sort/imports */
import { CreatePlanDetailService } from '@modules/plan/domain/services/create-plan-detail.service';
import { CreatePlanService } from '@modules/plan/domain/services/create-plan.service';
import { DeletePlanDetailService } from '@modules/plan/domain/services/delete-plan-detail.service';
import { DeletePlanService } from '@modules/plan/domain/services/delete-plan.service';
import { ListPlanDetailService } from '@modules/plan/domain/services/list-plan-detail.service';
import { ListPlanService } from '@modules/plan/domain/services/list-plan.service';
import { UpdatePlanDetailService } from '@modules/plan/domain/services/update-plan-detail.service';
import { UpdatePlanService } from '@modules/plan/domain/services/update-plan.service';
import { Module } from '@nestjs/common';

import { PlanTypeormModule } from '../typeorm/plan-typeorm.module';
import { PlanDetailController } from './controllers/plan-detail.controller';
import { PlanController } from './controllers/plan.controller';

@Module({
  imports: [PlanTypeormModule],
  controllers: [PlanController, PlanDetailController],
  providers: [
    CreatePlanService,
    ListPlanService,
    UpdatePlanService,
    DeletePlanService,
    CreatePlanDetailService,
    ListPlanDetailService,
    UpdatePlanDetailService,
    DeletePlanDetailService,
  ],
})
export class PlanHttpModule {}
