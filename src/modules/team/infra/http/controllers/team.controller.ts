import { CreateTeamService } from '@modules/team/domain/services/create-team.service';
import { DeleteTeamService } from '@modules/team/domain/services/delete-team.service';
import { ListTeamService } from '@modules/team/domain/services/list-team.service';
import { UpdateTeamService } from '@modules/team/domain/services/update-team.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { Team } from '../../typeorm/entities/team.entity';
import { CreateTeamDto } from '../dtos/create-team.dto';
import { UpdateTeamDto } from '../dtos/update-team.dto';
import { TeamViewModel } from '../view-models/team.view-model';

@Controller('teams')
export class TeamController {
  constructor(
    private createTeam: CreateTeamService,
    private listTeam: ListTeamService,
    private updateTeam: UpdateTeamService,
    private deleteTeam: DeleteTeamService,
  ) {}

  @Post()
  async create(@Body() { name, description }: CreateTeamDto) {
    const team = await this.createTeam.execute({
      name,
      description,
    });

    return { team: TeamViewModel.toHTTP(team) };
  }

  @Get()
  async list() {
    const teams = await this.listTeam.execute();
    return { teams: teams.map(TeamViewModel.toHTTP) };
  }

  @Put(':id/update')
  async update(
    @Param('id') id: string,
    @Body() { name, description }: UpdateTeamDto,
  ): Promise<Team> {
    const newTeam = await this.updateTeam.execute({
      teamId: id,
      name,
      description,
    });
    return newTeam;
  }

  @Delete(':id/delete')
  async remove(@Param('id') teamId: string) {
    await this.deleteTeam.execute({ teamId });
  }
}
