import { FactoryRepository } from '@modules/factory/domain/repositories/factory.repository';
import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { RequestCreateShoesModelProps } from '../models/request-create-shoes-model';
import { ShoesModelProps } from '../models/shoes-model';
import { ShoesModelRepository } from '../repositories/shoes-model.repository';

@Injectable()
export class CreateShoesModelService {
  constructor(
    private readonly shoesModelRepository: ShoesModelRepository,
    private readonly factoryRepository: FactoryRepository,
  ) {}

  public async execute({
    reference,
    description,
    pricePairsShoes,
    pricePespontador,
    priceColadeira,
    factoryId,
  }: RequestCreateShoesModelProps): Promise<ShoesModelProps> {
    const shoesModelExists = await this.shoesModelRepository.findByReference(
      reference,
    );
    if (shoesModelExists) {
      throw new ConflictException(
        'There is a shoes model registered with this name !!!',
      );
    }

    const exitsFactory = await this.factoryRepository.findById(factoryId);
    if (!exitsFactory) {
      throw new NotFoundException('Factory not found.');
    }

    const shoesModel = this.shoesModelRepository.create({
      reference,
      description,
      pricePairsShoes,
      pricePespontador,
      priceColadeira,
      factory: exitsFactory,
    });
    return shoesModel;
  }
}
