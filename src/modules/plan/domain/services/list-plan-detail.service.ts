import { Injectable } from '@nestjs/common';

import { PlanDetailProps } from '../models/plan-detail.model';
import { PlanDetailRepository } from '../repositories/plan-detail.repository';

@Injectable()
export class ListPlanDetailService {
  constructor(private readonly planDetailRepository: PlanDetailRepository) {}

  async execute(): Promise<PlanDetailProps[]> {
    const planDetails = await this.planDetailRepository.findAllWithShoesModel();
    return planDetails;
  }
}
