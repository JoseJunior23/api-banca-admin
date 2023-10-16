import { Plan } from '../../typeorm/entities/plan.entity';

export class PlanViewModel {
  static toHTTP(plan: Plan) {
    return {
      planId: plan.id,
      variation: plan.variation,
      description: plan.description,
      entryDate: plan.entryDate,
      factoryPlan: plan.factoryPlan,
      factory: plan.factory.companyName,
    };
  }
}
