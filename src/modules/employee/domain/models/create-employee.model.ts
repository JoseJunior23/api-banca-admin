import { Team } from '@modules/team/infra/typeorm/entities/team.entity';

export interface CreateEmployeeProps {
  name: string;
  phone: string;
  jobTitle: string;
  team?: Team;
}
