import { Module } from '@nestjs/common';

import { PlanHttpModule } from './infra/http/plan-http.module';
import { PlanTypeormModule } from './infra/typeorm/plan-typeorm.module';

@Module({
  imports: [PlanHttpModule, PlanTypeormModule],
})
export class PlanModule {}
