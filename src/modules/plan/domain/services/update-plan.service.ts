import { Injectable, NotFoundException } from '@nestjs/common';

import { PlanProps } from '../models/plan.model';
import { UpdatePlanProps } from '../models/update-plan.model';
import { PlanRepository } from '../repositories/plan.repository';

@Injectable()
export class UpdatePlanService {
  constructor(private readonly planRepository: PlanRepository) {}

  async execute({
    planId,
    variation,
    description,
    entryDate,
    factoryPlan,
  }: UpdatePlanProps): Promise<PlanProps> {
    const plan = await this.planRepository.findById(planId);
    if (!plan) {
      throw new NotFoundException('Plan not found');
    }

    plan.variation = variation;
    plan.description = description;
    plan.factoryPlan = factoryPlan;
    plan.entryDate = entryDate;

    await this.planRepository.save(plan);

    return plan;
  }
}
