import { FactoryProps } from '@modules/factory/domain/models/factory.model';

export interface PlanProps {
  id: string;
  variation: string;
  description?: string;
  entryDate: Date;
  factoryPlan: number;
  factory: FactoryProps;
  createdAt: Date;
  updatedAt: Date;
}
