import { FactoryRepository } from '@modules/factory/domain/repositories/factory.repository';
import { Injectable, NotFoundException } from '@nestjs/common';

import { PlanProps } from '../models/plan.model';
import { RequestCreatePlanProps } from '../models/request-create-Plan.model';
import { PlanRepository } from '../repositories/plan.repository';

@Injectable()
export class CreatePlanService {
  constructor(
    private readonly planRepository: PlanRepository,
    private readonly factoryRepository: FactoryRepository,
  ) {}

  async execute({
    description,
    entryDate,
    factoryPlan,
    variation,
    factoryId,
  }: RequestCreatePlanProps): Promise<PlanProps> {
    const existsFactoryPlan = await this.factoryRepository.findById(factoryId);
    if (!existsFactoryPlan) {
      throw new NotFoundException('Factory not found.');
    }

    const plan = await this.planRepository.create({
      variation,
      description,
      entryDate,
      factoryPlan,
      factoryId: existsFactoryPlan,
    });
    return plan;
  }
}
