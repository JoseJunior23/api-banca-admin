import { TeamRepository } from '@modules/team/domain/repositories/team.repository';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Team } from './entities/team.entity';
import { TeamTypeormRepository } from './repositories/typeorm-team.Repository';

@Module({
  imports: [TypeOrmModule.forFeature([Team])],
  providers: [
    {
      provide: TeamRepository,
      useClass: TeamTypeormRepository,
    },
  ],
  exports: [TeamRepository],
})
export class TypeormTeamModule {}
