import { FactoryProps } from '@modules/factory/domain/models/factory.model';

export interface CreatePlanProps {
  variation: string;
  description: string;
  entryDate: Date;
  factoryPlan: number;
  factoryId: FactoryProps;
}
