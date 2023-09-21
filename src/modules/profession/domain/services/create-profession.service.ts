import { ConflictException, Injectable } from '@nestjs/common';

import { CreateProfessionProps } from '../models/create-profession.model';
import { ProfessionProps } from '../models/profession.model';
import { ProfessionRepository } from '../repositories/profession.repository';

@Injectable()
export class CreateProfessionService {
  constructor(private readonly professionRepository: ProfessionRepository) {}

  async execute({
    name,
    description,
  }: CreateProfessionProps): Promise<ProfessionProps> {
    const professionExists = await this.professionRepository.findByName(name);
    if (professionExists) {
      throw new ConflictException(
        'There is already a profession with this name !!',
      );
    }

    const profession = await this.professionRepository.create({
      name,
      description,
    });
    return profession;
  }
}
