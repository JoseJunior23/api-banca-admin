// eslint-disable-next-line simple-import-sort/imports
import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { TeamRepository } from '@modules/team/domain/repositories/team.repository';
import { PlanDetailProps } from '../models/plan-detail.model';
import { RequestCreatePlanDetailProps } from '../models/request-create-Plan-detail.model';
import { PlanDetailRepository } from '../repositories/plan-detail.repository';
import { PlanRepository } from '../repositories/plan.repository';

@Injectable()
export class CreatePlanDetailService {
  constructor(
    private readonly planDetailRepository: PlanDetailRepository,
    private readonly planRepository: PlanRepository,
    private readonly teamRepository: TeamRepository,
  ) {}

  public async execute({
    entryDate,
    departureDate,
    productionSheet,
    numberPairs,
    billed,
    billedDate,
    paymentDate,
    planId,
    teamId,
  }: RequestCreatePlanDetailProps): Promise<PlanDetailProps> {
    const ProductionExists = await this.planDetailRepository.productionSheet(
      productionSheet,
    );
    if (ProductionExists) {
      throw new ConflictException(
        'There is a production sheet with this number !!!',
      );
    }

    const existsPlan = await this.planRepository.findById(planId);
    if (!existsPlan) {
      throw new NotFoundException('Plan not found.');
    }

    const existsTeam = await this.teamRepository.findById(teamId);
    if (!existsTeam) {
      throw new NotFoundException('Team not found.');
    }

    const planDetail = this.planDetailRepository.create({
      entryDate,
      departureDate,
      productionSheet,
      numberPairs,
      billed,
      billedDate,
      paymentDate,
      plan: existsPlan,
      team: existsTeam,
    });
    return planDetail;
  }
}
