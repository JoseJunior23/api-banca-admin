import { PlanDetail } from '../../typeorm/entities/plan-detail.entity';

export class PlanDetailViewModel {
  static toHTTP(planDetail: PlanDetail) {
    const planFilter = planDetail?.plan?.factory?.shoesModels;
    const teamFilter = planDetail.team ? planDetail.team.name : null;

    return {
      planDetailId: planDetail.id,
      entryDate: planDetail.entryDate,
      departureDate: planDetail.departureDate,
      productionSheet: planDetail.productionSheet,
      numberPairs: planDetail.numberPairs,
      billed: planDetail.billed,
      billedDate: planDetail.billedDate,
      paymentDate: planDetail.paymentDate,
      plan: planFilter,
      team: teamFilter,
    };
  }
}
