import { Injectable, NotFoundException } from '@nestjs/common';

import { PlanIdProps } from '../models/plan-id.model';
import { PlanRepository } from '../repositories/plan.repository';

@Injectable()
export class DeletePlanService {
  constructor(private readonly planRepository: PlanRepository) {}

  async execute({ planId }: PlanIdProps): Promise<void> {
    const plan = await this.planRepository.findById(planId);
    if (!plan) {
      throw new NotFoundException('Plan not found');
    }

    await this.planRepository.remove(plan);
  }
}
