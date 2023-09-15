import { Module } from '@nestjs/common';

import { HttpTeamModule } from './infra/http/team-http.module';
import { TypeormTeamModule } from './infra/typeorm/team-typeorm.module';

@Module({
  imports: [TypeormTeamModule, HttpTeamModule],
})
export class TeamModule {}
