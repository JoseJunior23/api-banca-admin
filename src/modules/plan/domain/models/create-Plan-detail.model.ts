import { TeamProps } from '@modules/team/domain/models/team.model';

import { PlanProps } from './plan.model';

export interface CreatePlanDetailProps {
  entryDate: Date;
  departureDate: Date;
  productionSheet: number;
  numberPairs: number;
  billed: number;
  billedDate: Date;
  paymentDate: Date;
  plan: PlanProps;
  team: TeamProps;
}
