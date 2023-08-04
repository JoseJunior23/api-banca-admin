import { ConflictException, Injectable } from '@nestjs/common';

import { CreateFactoryProps } from '../models/create-factory.model';
import { FactoryProps } from '../models/factory.model';
import { FactoryRepository } from '../repositories/factory.repository';

@Injectable()
export class CreateFactoryService {
  constructor(private readonly factoryRepository: FactoryRepository) {}

  async execute({
    companyName,
    phone,
  }: CreateFactoryProps): Promise<FactoryProps> {
    const factoryExists = await this.factoryRepository.findByName(companyName);
    if (factoryExists) {
      throw new ConflictException(
        'There is already a factory with this name !!',
      );
    }

    const factory = await this.factoryRepository.create({
      companyName,
      phone,
    });
    return factory;
  }
}
