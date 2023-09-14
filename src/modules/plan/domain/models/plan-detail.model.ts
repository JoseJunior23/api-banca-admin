import { Plan } from '@modules/plan/infra/typeorm/entities/plan.entity';
import { ShoesModel } from '@modules/shoes-model/infra/typeorm/entities/shoes-model.entity';

export interface PlanDetailProps {
  id: string;
  entryDate: Date;
  departureDate: Date;
  productionSheet: number;
  numberPairs: number;
  billed: number;
  billedDate: Date;
  paymentDate: Date;
  shoesModel: ShoesModel;
  plan: Plan;
  createdAt: Date;
  updatedAt: Date;
}
