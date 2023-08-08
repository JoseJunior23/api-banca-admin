import { CreatePlanService } from '@modules/plan/domain/services/create-plan.service';
import { DeletePlanService } from '@modules/plan/domain/services/delete-plan.service';
import { ListPlanService } from '@modules/plan/domain/services/list-plan.service';
import { UpdatePlanService } from '@modules/plan/domain/services/update-plan.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { Plan } from '../../typeorm/entities/plan.entity';
import { CreatePlanDto } from '../dtos/create-plan.dto';
import { UpdatePlanDto } from '../dtos/update-plan.dto';
import { PlanViewModel } from '../view-models/plan.view-model';

@Controller('plans')
export class PlanController {
  constructor(
    private createPlan: CreatePlanService,
    private listPlan: ListPlanService,
    private updatePlan: UpdatePlanService,
    private deletePlan: DeletePlanService,
  ) {}

  @Post()
  async create(
    @Body() { variation, description, factoryPlan, entryDate }: CreatePlanDto,
  ) {
    const plan = await this.createPlan.execute({
      variation,
      description,
      factoryPlan,
      entryDate,
    });
    return { plan: PlanViewModel.toHTTP(plan) };
  }

  @Get()
  async list() {
    const plans = await this.listPlan.execute();
    return { plans: plans.map(PlanViewModel.toHTTP) };
  }

  @Put(':id/update')
  async update(
    @Param('id') id: string,
    @Body() { variation, description, factoryPlan, entryDate }: UpdatePlanDto,
  ): Promise<Plan> {
    const newPlan = await this.updatePlan.execute({
      planId: id,
      variation,
      description,
      factoryPlan,
      entryDate,
    });
    return newPlan;
  }

  @Delete(':id/delete')
  async remove(@Param('id') id: string) {
    await this.deletePlan.execute({ planId: id });
  }
}
