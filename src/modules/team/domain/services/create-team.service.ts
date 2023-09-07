import { ConflictException, Injectable } from '@nestjs/common';

import { CreateTeamProps } from '../models/create-team.model.ts';
import { TeamProps } from '../models/team.model';
import { TeamRepository } from '../repositories/team.repository';

@Injectable()
export class CreateTeamService {
  constructor(private readonly teamRepository: TeamRepository) {}

  async execute({ name, description }: CreateTeamProps): Promise<TeamProps> {
    const teamExists = await this.teamRepository.findByName(name);
    if (teamExists) {
      throw new ConflictException('There is a team with this name.');
    }
    const team = await this.teamRepository.create({
      name,
      description,
    });

    return team;
  }
}
