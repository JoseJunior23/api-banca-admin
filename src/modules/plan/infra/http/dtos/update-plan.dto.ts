import { IsNotEmpty, IsString } from 'class-validator';

export class UpdatePlanDto {
  @IsNotEmpty()
  @IsString()
  variation: string;

  @IsString()
  description: string;

  @IsNotEmpty()
  entryDate: Date;

  @IsNotEmpty()
  factoryPlan: number;
}
