import { Team } from '@modules/team/infra/typeorm/entities/team.entity';

export interface UpdateEmployeeProps {
  employeeId: string;
  name?: string;
  phone?: string;
  jobTitle?: string;
  team?: Team;
}
