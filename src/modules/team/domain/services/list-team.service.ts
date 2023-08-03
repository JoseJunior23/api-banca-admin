import { Injectable } from '@nestjs/common';

import { TeamProps } from '../models/team.model';
import { TeamRepository } from '../repositories/team.repository';

@Injectable()
export class ListTeamService {
  constructor(private readonly teamRepository: TeamRepository) {}

  async execute(): Promise<TeamProps[]> {
    const teams = await this.teamRepository.findAll();

    return teams;
  }
}
