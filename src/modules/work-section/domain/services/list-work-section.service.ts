import { Injectable } from '@nestjs/common';

import { WorkSection } from '../entities/work-section';
import { WorkSectionRepository } from '../repositories/work-section-repository';

interface WorkSectionResponse {
  workSections: WorkSection[];
}
@Injectable()
export class ListWorkSectionService {
  constructor(private readonly workSectionRepository: WorkSectionRepository) {}

  async execute(): Promise<WorkSectionResponse> {
    const workSections = await this.workSectionRepository.findAll();

    return { workSections };
  }
}
