import { TeamProps } from '@modules/team/domain/models/team.model';

import { PlanProps } from './plan.model';

export interface PlanDetailProps {
  id: string;
  entryDate: Date;
  departureDate: Date;
  productionSheet: number;
  numberPairs: number;
  billed: number;
  billedDate: Date;
  paymentDate: Date;
  plan: PlanProps;
  team: TeamProps;
  createdAt: Date;
  updatedAt: Date;
}
