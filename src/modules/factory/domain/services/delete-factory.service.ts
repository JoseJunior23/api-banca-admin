import { Injectable, NotFoundException } from '@nestjs/common';

import { FactoryIdProps } from '../models/factory-id.model';
import { FactoryRepository } from '../repositories/factory.repository';

@Injectable()
export class DeleteFactoryService {
  constructor(private readonly factoryRepository: FactoryRepository) {}

  async execute({ factoryId }: FactoryIdProps): Promise<void> {
    const factory = await this.factoryRepository.findById(factoryId);
    if (!factory) {
      throw new NotFoundException('Factory not found');
    }

    await this.factoryRepository.remove(factory);
  }
}
