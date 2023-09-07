import { CreateTeamProps } from '../models/create-team.model.ts.js';
import { TeamProps } from '../models/team.model.js';

export abstract class TeamRepository {
  abstract create(data: CreateTeamProps): Promise<TeamProps>;
  abstract save(team: TeamProps): Promise<TeamProps>;
  abstract remove(team: TeamProps): Promise<void>;
  abstract findByName(name: string): Promise<TeamProps | null>;
  abstract findById(teamId: string): Promise<TeamProps | null>;
  abstract findAll(): Promise<TeamProps[]>;
}
