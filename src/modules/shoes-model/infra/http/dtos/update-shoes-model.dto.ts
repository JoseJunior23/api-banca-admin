import { Factory } from '@modules/factory/infra/typeorm/entities/factory.entity';

export class UpdateShoesModelDto {
  id: string;

  reference?: string;

  description?: string;

  pricePairsShoes?: number;

  pricePespontador?: number;

  priceColadeira?: number;

  factoryId?: Factory;
}
