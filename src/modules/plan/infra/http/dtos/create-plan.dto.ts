import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePlanDto {
  @IsNotEmpty()
  @IsString()
  variation: string;

  @IsString()
  description: string;

  @IsNotEmpty()
  entryDate: Date;

  @IsNotEmpty()
  @IsNotEmpty()
  factoryPlan: number;

  @IsNotEmpty()
  @IsString()
  factoryId: string;
}
