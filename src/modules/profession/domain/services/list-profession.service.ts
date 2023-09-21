import { Injectable } from '@nestjs/common';

import { ProfessionProps } from '../models/profession.model';
import { ProfessionRepository } from '../repositories/profession.repository';

@Injectable()
export class ListProfessionService {
  constructor(private readonly professionRepository: ProfessionRepository) {}

  async execute(): Promise<ProfessionProps[]> {
    const professions = await this.professionRepository.findAll();
    return professions;
  }
}
