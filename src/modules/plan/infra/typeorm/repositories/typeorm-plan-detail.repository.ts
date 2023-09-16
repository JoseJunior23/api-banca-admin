import { CreatePlanDetailProps } from '@modules/plan/domain/models/create-Plan-detail.model';
import { PlanDetailProps } from '@modules/plan/domain/models/plan-detail.model';
import { PlanDetailRepository } from '@modules/plan/domain/repositories/plan-detail.repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { PlanDetail } from '../entities/plan-detail.entity';

@Injectable()
export class TypeormPlanDetailRepository implements PlanDetailRepository {
  constructor(
    @InjectRepository(PlanDetail)
    private readonly ormPlanDetailRepository: Repository<PlanDetail>,
  ) {}

  async create({
    billed,
    billedDate,
    departureDate,
    entryDate,
    numberPairs,
    paymentDate,
    productionSheet,
    shoesModel,
    plan,
    team,
  }: CreatePlanDetailProps): Promise<PlanDetail> {
    const planDetail = this.ormPlanDetailRepository.create({
      billed,
      billedDate,
      departureDate,
      entryDate,
      numberPairs,
      paymentDate,
      productionSheet,
      shoesModel,
      plan,
      team,
    });
    await this.ormPlanDetailRepository.save(planDetail);
    return planDetail;
  }

  async save(planDetail: PlanDetail): Promise<PlanDetail> {
    await this.ormPlanDetailRepository.save(planDetail);
    return planDetail;
  }

  async remove(planDetail: PlanDetail): Promise<void> {
    await this.ormPlanDetailRepository.delete({ id: planDetail.id });
  }

  async findById(id: string): Promise<PlanDetail | null> {
    const planDetail = await this.ormPlanDetailRepository.findOne({
      where: { id },
    });
    return planDetail;
  }

  async findAll(): Promise<PlanDetail[]> {
    const planDetails = await this.ormPlanDetailRepository
      .createQueryBuilder('planDetail')
      .leftJoinAndSelect('planDetail.shoesModel', 'shoesModels')
      .leftJoinAndSelect('planDetail.plan', 'plans')
      .leftJoinAndSelect('planDetail.team', 'teams')
      .getMany();
    return planDetails;
  }

  async productionSheet(productionSheet: number): Promise<PlanDetailProps> {
    const registeredProductionSheet =
      await this.ormPlanDetailRepository.findOne({
        where: { productionSheet },
      });

    return registeredProductionSheet;
  }
}
