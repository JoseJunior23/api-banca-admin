import { FactoryRepository } from '@modules/factory/domain/repositories/factory.repository';
import { Injectable, NotFoundException } from '@nestjs/common';

import { ShoesModelProps } from '../models/shoes-model';
import { UpdateShoesModelProps } from '../models/update-shoes-model';
import { ShoesModelRepository } from '../repositories/shoes-model.repository';

@Injectable()
export class UpdateShoesModelService {
  constructor(
    private readonly shoesModelRepository: ShoesModelRepository,
    private readonly factoryRepository: FactoryRepository,
  ) {}

  public async execute({
    shoesModelId,
    reference,
    description,
    pricePairsShoes,
    pricePespontador,
    priceColadeira,
    factoryId,
  }: UpdateShoesModelProps): Promise<ShoesModelProps> {
    const shoesModel = await this.shoesModelRepository.findById(shoesModelId);
    if (!shoesModel) {
      throw new NotFoundException('Shoes model not found !!!');
    }

    const exitsFactory = await this.factoryRepository.findById(factoryId);
    console.log(exitsFactory);
    if (!exitsFactory) {
      throw new NotFoundException('Factory not found.');
    }

    shoesModel.reference = reference;
    shoesModel.description = description;
    shoesModel.pricePairsShoes = pricePairsShoes;
    shoesModel.pricePespontador = pricePespontador;
    shoesModel.priceColadeira = priceColadeira;
    shoesModel.factory = exitsFactory;

    await this.shoesModelRepository.save(shoesModel);
    return shoesModel;
  }
}
