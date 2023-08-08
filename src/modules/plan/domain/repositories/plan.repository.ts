import { CreatePlanProps } from '../models/create-plan.model';
import { PlanProps } from '../models/plan.model';

export abstract class PlanRepository {
  abstract create(data: CreatePlanProps): Promise<PlanProps>;
  abstract save(plan: PlanProps): Promise<PlanProps>;
  abstract remove(plan: PlanProps): Promise<void>;
  abstract findById(id: string): Promise<PlanProps | null>;
  abstract findAll(): Promise<PlanProps[]>;
}
