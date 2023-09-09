import { ShoesModel } from '@modules/shoes-model/infra/typeorm/entities/shoes-model.entity';

export interface FactoryProps {
  id: string;
  companyName: string;
  phone: string;
  shoesModels?: ShoesModel[];
  createdAt: Date;
  updatedAt: Date;
}
