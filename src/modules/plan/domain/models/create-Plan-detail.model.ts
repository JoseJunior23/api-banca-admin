import { ShoesModel } from '@modules/shoes-model/infra/typeorm/entities/shoes-model.entity';

export interface CreatePlanDetailProps {
  entryDate: Date;
  departureDate: Date;
  productionSheet: number;
  numberPairs: number;
  billed: number;
  billedDate: Date;
  paymentDate: Date;
  shoesModel: ShoesModel;
}
