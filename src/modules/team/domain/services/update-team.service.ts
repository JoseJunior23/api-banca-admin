import { Injectable, NotFoundException } from '@nestjs/common';

import { TeamProps } from '../models/team.model';
import { UpdateTeamProps } from '../models/update-team.model';
import { TeamRepository } from '../repositories/team.repository';

@Injectable()
export class UpdateTeamService {
  constructor(private readonly teamRepository: TeamRepository) {}

  async execute({
    teamId,
    name,
    description,
  }: UpdateTeamProps): Promise<TeamProps> {
    const team = await this.teamRepository.findById(teamId);
    if (!team) {
      throw new NotFoundException('Team not found !!!');
    }

    team.name = name;
    team.description = description;

    await this.teamRepository.save(team);

    return team;
  }
}
