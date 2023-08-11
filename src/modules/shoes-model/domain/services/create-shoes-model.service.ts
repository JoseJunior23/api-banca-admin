import { ConflictException, Injectable } from '@nestjs/common';

import { CreateShoesModelProps } from '../models/create-shoes-model';
import { ShoesModelProps } from '../models/shoes-model';
import { ShoesModelRepository } from '../repositories/shoes-model.repository';

@Injectable()
export class CreateShoesModelService {
  constructor(private readonly shoesModelRepository: ShoesModelRepository) {}

  public async execute({
    reference,
    description,
    pricePairsShoes,
    pricePespontador,
    priceColadeira,
  }: CreateShoesModelProps): Promise<ShoesModelProps> {
    const shoesModelExists = await this.shoesModelRepository.findByReference(
      reference,
    );
    if (shoesModelExists) {
      throw new ConflictException(
        'There is a shoes model registered with this name !!!',
      );
    }

    const shoesModel = this.shoesModelRepository.create({
      reference,
      description,
      pricePairsShoes,
      pricePespontador,
      priceColadeira,
    });
    return shoesModel;
  }
}
