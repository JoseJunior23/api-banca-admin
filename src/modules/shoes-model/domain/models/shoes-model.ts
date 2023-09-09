import { FactoryProps } from '@modules/factory/domain/models/factory.model';

export interface ShoesModelProps {
  id: string;
  reference: string;
  description?: string;
  pricePairsShoes: number;
  pricePespontador: number;
  priceColadeira: number;
  factory: FactoryProps;
  createdAt: Date;
  updatedAt: Date;
}
