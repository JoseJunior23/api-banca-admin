import { Team } from '../../typeorm/entities/team.entity';

export class TeamViewModel {
  static toHTTP(team: Team) {
    return {
      teamId: team.id,
      name: team.name,
      description: team.description,
    };
  }
}
