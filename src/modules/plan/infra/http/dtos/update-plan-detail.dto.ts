import { PartialType } from '@nestjs/mapped-types';

import { CreatePlanDetailDto } from './create-plan-detail.dto';

export class UpdatePlanDetailDto extends PartialType(CreatePlanDetailDto) {}
