import { PlanDetail } from '../../typeorm/entities/plan-detail.entity';

export class PlanDetailViewModel {
  static toHTTP(planDetail: PlanDetail) {
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
      team: teamFilter,
    };
  }
}
