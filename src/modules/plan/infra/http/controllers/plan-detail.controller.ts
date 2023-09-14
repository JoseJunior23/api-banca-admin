import { CreatePlanDetailService } from '@modules/plan/domain/services/create-plan-detail.service';
import { DeletePlanDetailService } from '@modules/plan/domain/services/delete-plan-detail.service';
import { ListPlanDetailService } from '@modules/plan/domain/services/list-plan-detail.service';
import { UpdatePlanDetailService } from '@modules/plan/domain/services/update-plan-detail.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { PlanDetail } from '../../typeorm/entities/plan-detail.entity';
import { CreatePlanDetailDto } from '../dtos/create-plan-detail.dto';
import { UpdatePlanDetailDto } from '../dtos/update-plan-detail.dto';
import { PlanDetailViewModel } from '../view-models/plan-detail.view-model';

@Controller('plan-detail')
export class PlanDetailController {
  constructor(
    private createPlanDetail: CreatePlanDetailService,
    private listPlanDetail: ListPlanDetailService,
    private updatePlanDetail: UpdatePlanDetailService,
    private deletePlanDetail: DeletePlanDetailService,
  ) {}

  @Post()
  async create(
    @Body()
    {
      billed,
      billedDate,
      departureDate,
      entryDate,
      numberPairs,
      paymentDate,
      productionSheet,
      shoesModelId,
      plan,
    }: CreatePlanDetailDto,
  ) {
    const planDetail = await this.createPlanDetail.execute({
      billed,
      billedDate,
      departureDate,
      entryDate,
      numberPairs,
      paymentDate,
      productionSheet,
      shoesModelId,
      plan,
    });
    return { planDetail: PlanDetailViewModel.toHTTP(planDetail) };
  }

  @Get()
  async list() {
    const planDetails = await this.listPlanDetail.execute();
    return { planDetails: planDetails.map(PlanDetailViewModel.toHTTP) };
  }

  @Put(':id/update')
  async update(
    @Param('id') id: string,
    @Body()
    {
      billed,
      billedDate,
      departureDate,
      entryDate,
      numberPairs,
      paymentDate,
      productionSheet,
    }: UpdatePlanDetailDto,
  ): Promise<PlanDetail> {
    const newPlanDetail = await this.updatePlanDetail.execute({
      planDetailId: id,
      billed,
      billedDate,
      departureDate,
      entryDate,
      numberPairs,
      paymentDate,
      productionSheet,
    });
    return newPlanDetail;
  }

  @Delete(':id/delete')
  async remove(@Param('id') id: string) {
    await this.deletePlanDetail.execute({ planDetailId: id });
  }
}
