import { ProfessionProps } from '@modules/profession/domain/models/profession.model';
import { TeamProps } from '@modules/team/domain/models/team.model';

export interface CreateEmployeeProps {
  name: string;
  phone: string;
  profession: ProfessionProps;
  team?: TeamProps;
}
