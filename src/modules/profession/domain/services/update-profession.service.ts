import { Injectable, NotFoundException } from '@nestjs/common';

import { ProfessionProps } from '../models/profession.model';
import { UpdateProfessionProps } from '../models/update-profession.model';
import { ProfessionRepository } from '../repositories/profession.repository';

@Injectable()
export class UpdateProfessionService {
  constructor(private readonly professionRepository: ProfessionRepository) {}

  async execute({
    professionId,
    description,
    name,
  }: UpdateProfessionProps): Promise<ProfessionProps> {
    const profession = await this.professionRepository.findById(professionId);
    if (!profession) {
      throw new NotFoundException('Profession not found');
    }

    profession.name = name;
    profession.description = description;

    await this.professionRepository.save(profession);

    return profession;
  }
}
