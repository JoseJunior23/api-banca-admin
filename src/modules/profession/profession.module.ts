import { Module } from '@nestjs/common';

import { HttpProfessionModule } from './infra/http/http-profession.module';
import { TypeormProfessionModule } from './infra/typeorm/typeorm-profession.module';

@Module({
  imports: [HttpProfessionModule, TypeormProfessionModule],
})
export class ProfessionModule {}
