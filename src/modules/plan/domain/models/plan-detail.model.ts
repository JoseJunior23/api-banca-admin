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
  createdAt: Date;
  updatedAt: Date;
}
