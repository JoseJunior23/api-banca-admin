/* eslint-disable simple-import-sort/imports */
import { ShoesModelRepository } from '@modules/shoes-model/domain/repositories/shoes-model.repository';
import { TeamRepository } from '@modules/team/domain/repositories/team.repository';
import { Injectable, NotFoundException } from '@nestjs/common';

import { PlanDetailProps } from '../models/plan-detail.model';
import { UpdatePlanDetailProps } from '../models/update-plan-detail.model';
import { PlanDetailRepository } from '../repositories/plan-detail.repository';
import { PlanRepository } from '../repositories/plan.repository';

@Injectable()
export class UpdatePlanDetailService {
  constructor(
    private readonly planDetailRepository: PlanDetailRepository,
    private readonly shoesModelRepository: ShoesModelRepository,
    private readonly planRepository: PlanRepository,
    private readonly teamRepository: TeamRepository,
  ) {}

  async execute({
    billed,
    billedDate,
    departureDate,
    entryDate,
    numberPairs,
    paymentDate,
    planDetailId,
    productionSheet,
    planId,
    shoesModelId,
    teamId,
  }: UpdatePlanDetailProps): Promise<PlanDetailProps> {
    const planDetail = await this.planDetailRepository.findById(planDetailId);
    if (!planDetail) {
      throw new NotFoundException('Plan not found');
    }

    const existsShoesModel = await this.shoesModelRepository.findById(
      shoesModelId,
    );
    if (!existsShoesModel) {
      throw new NotFoundException('Shoes model not found.');
    }

    const existsPlan = await this.planRepository.findById(planId);
    if (!existsPlan) {
      throw new NotFoundException('Plan not found.');
    }

    const existsTeam = await this.teamRepository.findById(teamId);
    if (!existsTeam) {
      throw new NotFoundException('Team not found.');
    }

    planDetail.entryDate = entryDate;
    planDetail.departureDate = departureDate;
    planDetail.productionSheet = productionSheet;
    planDetail.numberPairs = numberPairs;
    planDetail.billed = billed;
    planDetail.billedDate = billedDate;
    planDetail.paymentDate = paymentDate;
    planDetail.shoesModel = existsShoesModel;
    planDetail.plan = existsPlan;
    planDetail.team = existsTeam;

    await this.planDetailRepository.save(planDetail);

    return planDetail;
  }
}
