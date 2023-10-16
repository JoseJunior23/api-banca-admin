/* eslint-disable simple-import-sort/imports */
import { Injectable, NotFoundException } from '@nestjs/common';

import { PlanDetailProps } from '../models/plan-detail.model';
import { UpdatePlanDetailProps } from '../models/update-plan-detail.model';

import { TeamRepository } from '@modules/team/domain/repositories/team.repository';
import { PlanDetailRepository } from '../repositories/plan-detail.repository';
import { PlanRepository } from '../repositories/plan.repository';

@Injectable()
export class UpdatePlanDetailService {
  constructor(
    private readonly planDetailRepository: PlanDetailRepository,
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
    teamId,
  }: UpdatePlanDetailProps): Promise<PlanDetailProps> {
    const planDetail = await this.planDetailRepository.findById(planDetailId);
    if (!planDetail) {
      throw new NotFoundException('Plan not found');
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
    planDetail.plan = existsPlan;
    planDetail.team = existsTeam;

    await this.planDetailRepository.save(planDetail);

    return planDetail;
  }
}
