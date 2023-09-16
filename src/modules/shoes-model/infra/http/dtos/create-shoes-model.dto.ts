import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateShoesModelDto {
  @IsNotEmpty()
  reference: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNotEmpty()
  @IsNumber({ maxDecimalPlaces: 2 })
  pricePairsShoes: number;

  @IsNumber({ maxDecimalPlaces: 2 })
  pricePespontador: number;

  @IsNumber({ maxDecimalPlaces: 2 })
  priceColadeira: number;

  @IsString()
  @IsUUID()
  factoryId: string;
}
