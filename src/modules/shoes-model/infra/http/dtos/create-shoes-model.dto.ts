import { IsNotEmpty, IsNumber, IsString, IsUUID } from 'class-validator';

export class CreateShoesModelDto {
  @IsNotEmpty()
  reference: string;

  description?: string;

  @IsNotEmpty()
  @IsNumber()
  pricePairsShoes: number;

  @IsNumber()
  pricePespontador: number;

  @IsNumber()
  priceColadeira: number;

  @IsString()
  @IsUUID()
  factoryId: string;
}
