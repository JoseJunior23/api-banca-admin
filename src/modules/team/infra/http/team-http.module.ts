import { CreateTeamService } from '@modules/team/domain/services/create-team.service';
import { DeleteTeamService } from '@modules/team/domain/services/delete-team.service';
import { ListTeamService } from '@modules/team/domain/services/list-team.service';
import { UpdateTeamService } from '@modules/team/domain/services/update-team.service';
import { Module } from '@nestjs/common';

import { TypeormTeamModule } from '../typeorm/team-typeorm.module';
import { TeamController } from './controllers/team.controller';

@Module({
  imports: [TypeormTeamModule],
  controllers: [TeamController],
  providers: [
    CreateTeamService,
    ListTeamService,
    UpdateTeamService,
    DeleteTeamService,
  ],
})
export class HttpTeamModule {}
