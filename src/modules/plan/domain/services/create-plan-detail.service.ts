// eslint-disable-next-line simple-import-sort/imports
import { ShoesModelRepository } from '@modules/shoes-model/domain/repositories/shoes-model.repository';
import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { PlanDetailProps } from '../models/plan-detail.model';
import { RequestCreatePlanDetailProps } from '../models/request-create-Plan-detail.model';
import { PlanDetailRepository } from '../repositories/plan-detail.repository';
import { PlanRepository } from '../repositories/plan.repository';

@Injectable()
export class CreatePlanDetailService {
  constructor(
    private readonly planDetailRepository: PlanDetailRepository,
    private readonly shoesModelRepository: ShoesModelRepository,
    private readonly planRepository: PlanRepository,
  ) {}

  public async execute({
    entryDate,
    departureDate,
    productionSheet,
    numberPairs,
    billed,
    billedDate,
    paymentDate,
    shoesModelId,
    plan,
  }: RequestCreatePlanDetailProps): Promise<PlanDetailProps> {
    const ProductionExists = await this.planDetailRepository.productionSheet(
      productionSheet,
    );
    if (ProductionExists) {
      throw new ConflictException(
        'There is a production sheet with this number !!!',
      );
    }

    const existsShoesModel = await this.shoesModelRepository.findById(
      shoesModelId,
    );
    if (!existsShoesModel) {
      throw new NotFoundException('Shoes model not found.');
    }

    const existsPlan = await this.planRepository.findById(plan);
    if (!existsPlan) {
      throw new NotFoundException('Plan not found.');
    }

    const planDetail = this.planDetailRepository.create({
      entryDate,
      departureDate,
      productionSheet,
      numberPairs,
      billed,
      billedDate,
      paymentDate,
      shoesModel: existsShoesModel,
      plan: existsPlan,
    });
    return planDetail;
  }
}
