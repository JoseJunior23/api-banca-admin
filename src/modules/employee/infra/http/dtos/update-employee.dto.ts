import { Team } from '@modules/team/infra/typeorm/entities/team.entity';

export class UpdateEmployeeDto {
  name?: string;

  phone?: string;

  jobTitle?: string;

  team?: Team;
}
