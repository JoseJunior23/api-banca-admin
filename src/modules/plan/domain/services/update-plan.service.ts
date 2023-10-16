import { FactoryRepository } from '@modules/factory/domain/repositories/factory.repository';
import { Injectable, NotFoundException } from '@nestjs/common';

import { PlanProps } from '../models/plan.model';
import { UpdatePlanProps } from '../models/update-plan.model';
import { PlanRepository } from '../repositories/plan.repository';

@Injectable()
export class UpdatePlanService {
  constructor(
    private readonly planRepository: PlanRepository,
    private readonly factoryRepository: FactoryRepository,
  ) {}

  async execute({
    planId,
    variation,
    description,
    entryDate,
    factoryPlan,
    factoryId,
  }: UpdatePlanProps): Promise<PlanProps> {
    const plan = await this.planRepository.findById(planId);
    if (!plan) {
      throw new NotFoundException('Plan not found');
    }

    const existsFactory = await this.factoryRepository.findById(factoryId);
    if (!existsFactory) {
      throw new NotFoundException('Factory not found.');
    }

    plan.variation = variation;
    plan.description = description;
    plan.factoryPlan = factoryPlan;
    plan.entryDate = entryDate;
    plan.factory = existsFactory;

    await this.planRepository.save(plan);

    return plan;
  }
}
