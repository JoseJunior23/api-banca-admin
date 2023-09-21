import { CreateProfessionProps } from '@modules/profession/domain/models/create-profession.model';
import { ProfessionRepository } from '@modules/profession/domain/repositories/profession.repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Profession } from '../entities/profession.entity';

@Injectable()
export class TypeormProfessionRepository implements ProfessionRepository {
  constructor(
    @InjectRepository(Profession)
    private readonly ormProfessionRepository: Repository<Profession>,
  ) {}

  async create({
    name,
    description,
  }: CreateProfessionProps): Promise<Profession> {
    const profession = this.ormProfessionRepository.create({
      name,
      description,
    });
    await this.ormProfessionRepository.save(profession);
    return profession;
  }

  async save(profession: Profession): Promise<Profession> {
    await this.ormProfessionRepository.save(profession);
    return profession;
  }

  async remove(profession: Profession): Promise<void> {
    await this.ormProfessionRepository.delete({ id: profession.id });
  }

  async findByName(name: string): Promise<Profession | null> {
    const profession = await this.ormProfessionRepository.findOneBy({
      name: name,
    });
    return profession;
  }

  async findById(id: string): Promise<Profession | null> {
    const profession = await this.ormProfessionRepository.findOne({
      where: { id },
    });
    return profession;
  }

  async findAll(): Promise<Profession[]> {
    const professions = await this.ormProfessionRepository.find();
    return professions;
  }
}
