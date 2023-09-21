import { Injectable, NotFoundException } from '@nestjs/common';

import { ProfessionIdProps } from '../models/profession-id.model';
import { ProfessionRepository } from '../repositories/profession.repository';

@Injectable()
export class DeleteProfessionService {
  constructor(private readonly professionRepository: ProfessionRepository) {}

  async execute({ professionId }: ProfessionIdProps): Promise<void> {
    const profession = await this.professionRepository.findById(professionId);
    if (!profession) {
      throw new NotFoundException('Profession not found');
    }

    await this.professionRepository.remove(profession);
  }
}
