import { Injectable } from '@nestjs/common';

import { WorkSection } from '../entities/work-section';
import { WorkSectionRepository } from '../repositories/work-section-repository';

@Injectable()
export class ListWorkSectionService {
  constructor(private readonly workSectionRepository: WorkSectionRepository) {}

  async execute(): Promise<WorkSection[]> {
    const workSections = await this.workSectionRepository.findAll();

    return workSections;
  }
}
