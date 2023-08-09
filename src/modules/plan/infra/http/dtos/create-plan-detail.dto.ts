import { CreatePlanDetailProps } from '@modules/plan/domain/models/create-Plan-detail.model';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreatePlanDetailDto implements CreatePlanDetailProps {
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
}
