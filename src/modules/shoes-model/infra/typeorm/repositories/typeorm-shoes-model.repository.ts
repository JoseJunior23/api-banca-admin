import { CreateShoesModelProps } from '@modules/shoes-model/domain/models/create-shoes-model';
import { ShoesModelProps } from '@modules/shoes-model/domain/models/shoes-model';
import { ShoesModelRepository } from '@modules/shoes-model/domain/repositories/shoes-model.repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ShoesModel } from '../entities/shoes-model.entity';

@Injectable()
export class TypeormShoesModelRepository implements ShoesModelRepository {
  constructor(
    @InjectRepository(ShoesModel)
    private readonly ormShoesModelRepository: Repository<ShoesModel>,
  ) {}

  async create({
    reference,
    description,
    pricePairsShoes,
    pricePespontador,
    priceColadeira,
    factory,
  }: CreateShoesModelProps): Promise<ShoesModel> {
    const shoesModel = this.ormShoesModelRepository.create({
      reference,
      description,
      pricePairsShoes,
      pricePespontador,
      priceColadeira,
      factory,
    });

    await this.ormShoesModelRepository.save(shoesModel);
    return shoesModel;
  }

  async save(shoesModel: ShoesModel): Promise<ShoesModel> {
    await this.ormShoesModelRepository.save(shoesModel);
    return shoesModel;
  }

  async remove(shoesModel: ShoesModelProps): Promise<void> {
    await this.ormShoesModelRepository.remove(shoesModel);
  }

  async findAll(): Promise<ShoesModelProps[]> {
    const shoesModels = await this.ormShoesModelRepository.find();
    return shoesModels;
  }

  async findById(id: string): Promise<ShoesModelProps> {
    const shoesModel = await this.ormShoesModelRepository.findOne({
      where: { id },
    });
    return shoesModel;
  }

  async findByReference(reference: string): Promise<ShoesModelProps> {
    const shoesModel = await this.ormShoesModelRepository.findOneBy({
      reference,
    });
    return shoesModel;
  }
  async findAllWithFactories(): Promise<ShoesModel[]> {
    const shoesModels = await this.ormShoesModelRepository
      .createQueryBuilder('shoesModel')
      .leftJoinAndSelect('shoesModel.factory', 'factory')
      .getMany();

    return shoesModels;
  }
}
