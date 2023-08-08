import { CreatePlanProps } from '@modules/plan/domain/models/create-plan.model';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePlanDto implements CreatePlanProps {
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
