import { CreatePlanDetailProps } from '../models/create-Plan-detail.model';
import { PlanDetailProps } from '../models/plan-detail.model';

export abstract class PlanDetailRepository {
  abstract create(data: CreatePlanDetailProps): Promise<PlanDetailProps>;
  abstract save(planDetail: PlanDetailProps): Promise<PlanDetailProps>;
  abstract remove(planDetail: PlanDetailProps): Promise<void>;
  abstract findAll(): Promise<PlanDetailProps[]>;
  abstract findById(id: string): Promise<PlanDetailProps | null>;
  abstract findAllWithShoesModel(): Promise<PlanDetailProps[]>;
  abstract findAllWithPlan(): Promise<PlanDetailProps[]>;
  abstract productionSheet(
    productionSheet: number,
  ): Promise<PlanDetailProps | null>;
}
