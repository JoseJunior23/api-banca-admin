import { FactoryProps } from '@modules/factory/domain/models/factory.model';

export interface CreateShoesModelProps {
  reference: string;
  description?: string;
  pricePairsShoes: number;
  pricePespontador: number;
  priceColadeira: number;
  factory: FactoryProps;
}
