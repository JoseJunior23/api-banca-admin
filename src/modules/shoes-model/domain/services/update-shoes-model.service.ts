import { Injectable, NotFoundException } from '@nestjs/common';

import { ShoesModelProps } from '../models/shoes-model';
import { UpdateShoesModelProps } from '../models/update-shoes-model';
import { ShoesModelRepository } from '../repositories/shoes-model.repository';

@Injectable()
export class UpdateShoesModelService {
  constructor(private readonly shoesModelRepository: ShoesModelRepository) {}

  public async execute({
    shoesModelId,
    reference,
    description,
    pricePairsShoes,
    pricePespontador,
    priceColadeira,
  }: UpdateShoesModelProps): Promise<ShoesModelProps> {
    const shoesModel = await this.shoesModelRepository.findById(shoesModelId);
    if (!shoesModel) {
      throw new NotFoundException('Shoes model not found !!!');
    }

    shoesModel.reference = reference;
    shoesModel.description = description;
    shoesModel.pricePairsShoes = pricePairsShoes;
    shoesModel.pricePespontador = pricePespontador;
    shoesModel.priceColadeira = priceColadeira;

    await this.shoesModelRepository.save(shoesModel);
    return shoesModel;
  }
}
