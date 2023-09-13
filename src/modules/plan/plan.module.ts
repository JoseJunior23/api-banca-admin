import { Module } from '@nestjs/common';

import { HttpPlanModule } from './infra/http/plan-http.module';
import { TypeormPlanModule } from './infra/typeorm/plan-typeorm.module';

@Module({
  imports: [HttpPlanModule, TypeormPlanModule],
})
export class PlanModule {}
