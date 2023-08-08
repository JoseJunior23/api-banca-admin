import { Injectable } from '@nestjs/common';

import { CreatePlanProps } from '../models/create-plan.model';
import { PlanProps } from '../models/plan.model';
import { PlanRepository } from '../repositories/plan.repository';

@Injectable()
export class CreatePlanService {
  constructor(private readonly planRepository: PlanRepository) {}

  async execute({
    description,
    entryDate,
    factoryPlan,
    variation,
  }: CreatePlanProps): Promise<PlanProps> {
    const plan = await this.planRepository.create({
      variation,
      description,
      entryDate,
      factoryPlan,
    });
    return plan;
  }
}
