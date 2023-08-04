import { CreateFactoryProps } from '@modules/factory/domain/models/create-factory.model';
import { FactoryProps } from '@modules/factory/domain/models/factory.model';
import { FactoryRepository } from '@modules/factory/domain/repositories/factory.repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Factory } from '../entities/factory.entity';

@Injectable()
export class TypeormFactoryRepository implements FactoryRepository {
  constructor(
    @InjectRepository(Factory)
    private readonly ormFactoryRepository: Repository<Factory>,
  ) {}

  async create({ companyName, phone }: CreateFactoryProps): Promise<Factory> {
    const factory = this.ormFactoryRepository.create({
      companyName,
      phone,
    });
    await this.ormFactoryRepository.save(factory);
    return factory;
  }

  async save(factory: Factory): Promise<Factory> {
    await this.ormFactoryRepository.save(factory);
    return factory;
  }

  async remove(factory: Factory): Promise<void> {
    await this.ormFactoryRepository.delete({ id: factory.id });
  }

  async findByName(name: string): Promise<Factory | null> {
    const factory = await this.ormFactoryRepository.findOneBy({
      companyName: name,
    });
    return factory;
  }

  async findById(id: string): Promise<Factory | null> {
    const factory = await this.ormFactoryRepository.findOne({
      where: { id },
    });
    return factory;
  }

  async findAll(): Promise<FactoryProps[]> {
    const factories = await this.ormFactoryRepository.find();
    return factories;
  }
}
