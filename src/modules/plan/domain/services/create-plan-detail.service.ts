import { ConflictException, Injectable } from '@nestjs/common';

import { CreatePlanDetailProps } from '../models/create-Plan-detail.model';
import { PlanDetailProps } from '../models/plan-detail.model';
import { PlanDetailRepository } from '../repositories/plan-detail.repository';

@Injectable()
export class CreatePlanDetailService {
  constructor(private readonly planDetailRepository: PlanDetailRepository) {}

  public async execute({
    entryDate,
    departureDate,
    productionSheet,
    numberPairs,
    billed,
    billedDate,
    paymentDate,
  }: CreatePlanDetailProps): Promise<PlanDetailProps> {
    const ProductionExists = await this.planDetailRepository.productionSheet(
      productionSheet,
    );
    if (ProductionExists) {
      throw new ConflictException(
        'There is a production sheet with this number !!!',
      );
    }

    const planDetail = this.planDetailRepository.create({
      entryDate,
      departureDate,
      productionSheet,
      numberPairs,
      billed,
      billedDate,
      paymentDate,
    });
    return planDetail;
  }
}
