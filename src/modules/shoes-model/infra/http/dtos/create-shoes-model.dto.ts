import { CreateShoesModelProps } from '@modules/shoes-model/domain/models/create-shoes-model';
import { IsNotEmpty } from 'class-validator';

export class CreateShoesModelDto implements CreateShoesModelProps {
  @IsNotEmpty()
  reference: string;

  description: string;

  @IsNotEmpty()
  pricePairsShoes: number;

  pricePespontador: number;

  priceColadeira: number;
}
