import { Injectable } from '@nestjs/common';

import { PlanProps } from '../models/plan.model';
import { PlanRepository } from '../repositories/plan.repository';

@Injectable()
export class ListPlanService {
  constructor(private readonly planRepository: PlanRepository) {}

  async execute(): Promise<PlanProps[]> {
    const plans = await this.planRepository.findAll();
    return plans;
  }
}
