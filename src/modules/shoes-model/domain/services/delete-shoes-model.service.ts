import { Injectable, NotFoundException } from '@nestjs/common';

import { ShoesModelIdProps } from '../models/shoes-model-id';
import { ShoesModelRepository } from '../repositories/shoes-model.repository';

@Injectable()
export class DeleteShoesModelService {
  constructor(private readonly shoesModelRepository: ShoesModelRepository) {}

  public async execute({ shoesModelId }: ShoesModelIdProps) {
    const shoesModel = await this.shoesModelRepository.findById(shoesModelId);
    if (!shoesModel) {
      throw new NotFoundException('Shoes model not found !!!');
    }

    await this.shoesModelRepository.remove(shoesModel);
  }
}
