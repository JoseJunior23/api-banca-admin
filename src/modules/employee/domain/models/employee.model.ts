import { Team } from '@modules/team/infra/typeorm/entities/team.entity';

export interface EmployeeProps {
  id: string;
  name: string;
  phone: string;
  jobTitle: string;
  createdAt: Date;
  updatedAt: Date;
  team?: Team;
}
