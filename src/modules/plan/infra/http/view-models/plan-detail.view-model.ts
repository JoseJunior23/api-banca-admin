import { PlanDetail } from '../../typeorm/entities/plan-detail.entity';

export class PlanDetailViewModel {
  static toHTTP(planDetail: PlanDetail) {
    const shoesModelFilter = {
      reference: planDetail.shoesModel ? planDetail.shoesModel.reference : null,
    };
    const planFilter = planDetail.plan ? planDetail.plan.factoryPlan : null;

    return {
      planDetailId: planDetail.id,
      entryDate: planDetail.entryDate,
      departureDate: planDetail.departureDate,
      productionSheet: planDetail.productionSheet,
      numberPairs: planDetail.numberPairs,
      billed: planDetail.billed,
      billedDate: planDetail.billedDate,
      paymentDate: planDetail.paymentDate,
      shoesModel: shoesModelFilter,
      plan: planFilter,
    };
  }
}
