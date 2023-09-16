import { IsNotEmpty, IsNumber, IsString, IsUUID } from 'class-validator';

export class CreatePlanDetailDto {
  @IsNotEmpty()
  entryDate: Date;

  departureDate: Date;

  @IsNotEmpty()
  productionSheet: number;

  @IsNotEmpty()
  numberPairs: number;

  @IsNumber()
  billed: number;

  billedDate: Date;

  paymentDate: Date;

  @IsString()
  @IsUUID()
  shoesModelId: string;

  @IsString()
  @IsUUID()
  planId: string;

  @IsString()
  @IsUUID()
  teamId: string;
}
