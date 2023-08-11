import { Injectable } from '@nestjs/common';

import { ShoesModelProps } from '../models/shoes-model';
import { ShoesModelRepository } from '../repositories/shoes-model.repository';

@Injectable()
export class ListShoesModelService {
  constructor(private readonly shoesModelRepository: ShoesModelRepository) {}

  public async execute(): Promise<ShoesModelProps[]> {
    const shoesModels = await this.shoesModelRepository.findAll();

    return shoesModels;
  }
}
