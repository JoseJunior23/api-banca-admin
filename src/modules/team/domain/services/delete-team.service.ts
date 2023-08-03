import { Injectable, NotFoundException } from '@nestjs/common';

import { TeamIdProps } from '../models/team-id.model';
import { TeamRepository } from '../repositories/team.repository';

@Injectable()
export class DeleteTeamService {
  constructor(private readonly teamRepository: TeamRepository) {}

  async execute({ teamId }: TeamIdProps): Promise<void> {
    const team = await this.teamRepository.findById(teamId);
    if (!team) {
      throw new NotFoundException('Team not found !!!');
    }

    await this.teamRepository.remove(team);
  }
}
