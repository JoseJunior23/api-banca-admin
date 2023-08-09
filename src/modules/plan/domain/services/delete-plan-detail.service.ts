import { Injectable, NotFoundException } from '@nestjs/common';

import { PlanDetailIdProps } from '../models/plan-detail-id.model';
import { PlanDetailRepository } from '../repositories/plan-detail.repository';

@Injectable()
export class DeletePlanDetailService {
  constructor(private readonly planDetailRepository: PlanDetailRepository) {}

  async execute({ planDetailId }: PlanDetailIdProps): Promise<void> {
    const planDetail = await this.planDetailRepository.findById(planDetailId);
    if (!planDetail) {
      throw new NotFoundException('Detail not found');
    }

    await this.planDetailRepository.remove(planDetail);
  }
}
