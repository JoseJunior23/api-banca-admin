import { ShoesModelRepository } from '@modules/shoes-model/domain/repositories/shoes-model.repository';
import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { PlanDetailProps } from '../models/plan-detail.model';
import { RequestCreatePlanDetailProps } from '../models/request-create-Plan-detail.model';
import { PlanDetailRepository } from '../repositories/plan-detail.repository';

@Injectable()
export class CreatePlanDetailService {
  constructor(
    private readonly planDetailRepository: PlanDetailRepository,
    private readonly shoesModelRepository: ShoesModelRepository,
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

    const planDetail = this.planDetailRepository.create({
      entryDate,
      departureDate,
      productionSheet,
      numberPairs,
      billed,
      billedDate,
      paymentDate,
      shoesModel: existsShoesModel,
    });
    return planDetail;
  }
}
