import { Injectable, NotFoundException } from '@nestjs/common';

import { FactoryProps } from '../models/factory.model';
import { UpdateFactoryProps } from '../models/update-factory.model';
import { FactoryRepository } from '../repositories/factory.repository';

@Injectable()
export class UpdateFactoryService {
  constructor(private readonly factoryRepository: FactoryRepository) {}

  async execute({
    factoryId,
    companyName,
    phone,
  }: UpdateFactoryProps): Promise<FactoryProps> {
    const factory = await this.factoryRepository.findById(factoryId);
    if (!factory) {
      throw new NotFoundException('Factory not found');
    }

    factory.companyName = companyName;
    factory.phone = phone;

    await this.factoryRepository.save(factory);

    return factory;
  }
}
