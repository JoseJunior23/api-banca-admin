import { CreateShoesModelService } from '@modules/shoes-model/domain/services/create-shoes-model.service';
import { DeleteShoesModelService } from '@modules/shoes-model/domain/services/delete-shoes-model.service';
import { ListShoesModelService } from '@modules/shoes-model/domain/services/list-shoes-model.service';
import { UpdateShoesModelService } from '@modules/shoes-model/domain/services/update-shoes-model.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { ShoesModel } from '../../typeorm/entities/shoes-model.entity';
import { CreateShoesModelDto } from '../dtos/create-shoes-model.dto';
import { UpdateShoesModelDto } from '../dtos/update-shoes-model.dto';
import { ShoesModelViewModel } from '../view-models/shoes-model.view-model';

@Controller('shoes-model')
export class ShoesModelController {
  constructor(
    private createShoesModel: CreateShoesModelService,
    private listShoesModel: ListShoesModelService,
    private updateShoesModel: UpdateShoesModelService,
    private deleteShoesModel: DeleteShoesModelService,
  ) {}

  @Post()
  async create(
    @Body()
    {
      description,
      priceColadeira,
      pricePairsShoes,
      pricePespontador,
      reference,
      factoryId,
    }: CreateShoesModelDto,
  ) {
    const shoesModel = await this.createShoesModel.execute({
      description,
      priceColadeira,
      pricePairsShoes,
      pricePespontador,
      reference,
      factoryId,
    });
    return { shoesModel: ShoesModelViewModel.toHTTP(shoesModel) };
  }

  @Get()
  async list() {
    const shoesModels = await this.listShoesModel.execute();
    return { shoesModels: shoesModels.map(ShoesModelViewModel.toHTTP) };
  }

  @Put(':id/update')
  async update(
    @Param('id') id: string,
    @Body()
    {
      description,
      priceColadeira,
      pricePairsShoes,
      pricePespontador,
      reference,
    }: UpdateShoesModelDto,
  ): Promise<ShoesModel> {
    const newShoesModel = await this.updateShoesModel.execute({
      shoesModelId: id,
      description,
      priceColadeira,
      pricePairsShoes,
      pricePespontador,
      reference,
    });
    return newShoesModel;
  }

  @Delete(':id/delete')
  async remove(@Param('id') id: string) {
    await this.deleteShoesModel.execute({ shoesModelId: id });
  }
}
