import { CreatePlanProps } from '@modules/plan/domain/models/create-plan.model';
import { PlanRepository } from '@modules/plan/domain/repositories/plan.repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Plan } from '../entities/plan.entity';

@Injectable()
export class TypeormPlanRepository implements PlanRepository {
  constructor(
    @InjectRepository(Plan)
    private readonly ormPlanRepository: Repository<Plan>,
  ) {}

  async create({
    variation,
    description,
    factoryPlan,
    entryDate,
    factoryId,
  }: CreatePlanProps): Promise<Plan> {
    const plan = this.ormPlanRepository.create({
      variation,
      description,
      factoryPlan,
      entryDate,
      factory: factoryId,
    });
    await this.ormPlanRepository.save(plan);
    return plan;
  }

  async save(plan: Plan): Promise<Plan> {
    await this.ormPlanRepository.save(plan);
    return plan;
  }

  async remove(plan: Plan): Promise<void> {
    await this.ormPlanRepository.delete({ id: plan.id });
  }

  async findById(id: string): Promise<Plan | null> {
    const plan = await this.ormPlanRepository.findOne({
      where: { id },
    });
    return plan;
  }

  async findAll(): Promise<Plan[]> {
    const plans = await this.ormPlanRepository
      .createQueryBuilder('plan')
      .leftJoinAndSelect('plan.factory', 'factories')
      .getMany();
    return plans;
  }
}
