import { Injectable } from '@nestjs/common';

import { FactoryProps } from '../models/factory.model';
import { FactoryRepository } from '../repositories/factory.repository';

@Injectable()
export class ListFactoryService {
  constructor(private readonly factoryRepository: FactoryRepository) {}

  async execute(): Promise<FactoryProps[]> {
    const factories = await this.factoryRepository.findAll();
    return factories;
  }
}
