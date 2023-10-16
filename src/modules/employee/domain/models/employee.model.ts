import { ProfessionProps } from '@modules/profession/domain/models/profession.model';
import { TeamProps } from '@modules/team/domain/models/team.model';

export interface EmployeeProps {
  id: string;
  name: string;
  phone: string;
  profession: ProfessionProps;
  team?: TeamProps;
  createdAt: Date;
  updatedAt: Date;
}
