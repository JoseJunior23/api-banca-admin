import { Module } from '@nestjs/common';

import { TeamHttpModule } from './infra/http/team-http.module';
import { TeamTypeormModule } from './infra/typeorm/team-typeorm.module';

@Module({
  imports: [TeamTypeormModule, TeamHttpModule],
})
export class TeamModule {}
