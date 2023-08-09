import { Injectable, NotFoundException } from '@nestjs/common';

import { PlanDetailProps } from '../models/plan-detail.model';
import { UpdatePlanDetailProps } from '../models/update-plan-detail.model';
import { PlanDetailRepository } from '../repositories/plan-detail.repository';

@Injectable()
export class UpdatePlanDetailService {
  constructor(private readonly planDetailRepository: PlanDetailRepository) {}

  async execute({
    billed,
    billedDate,
    departureDate,
    entryDate,
    numberPairs,
    paymentDate,
    planDetailId,
    productionSheet,
  }: UpdatePlanDetailProps): Promise<PlanDetailProps> {
    const planDetail = await this.planDetailRepository.findById(planDetailId);
    if (!planDetail) {
      throw new NotFoundException('Plan not found');
    }

    planDetail.entryDate = entryDate;
    planDetail.departureDate = departureDate;
    planDetail.productionSheet = productionSheet;
    planDetail.numberPairs = numberPairs;
    planDetail.billed = billed;
    planDetail.billedDate = billedDate;
    planDetail.paymentDate = paymentDate;

    await this.planDetailRepository.save(planDetail);

    return planDetail;
  }
}
