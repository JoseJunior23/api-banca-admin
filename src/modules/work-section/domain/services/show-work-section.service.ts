import { Injectable } from '@nestjs/common';

import { WorkSection } from '../entities/work-section';
import { WorkSectionRepository } from '../repositories/work-section-repository';

interface ShowWorkSectionProps {
  work_section_id: string;
}

@Injectable()
export class ShowWorkSectionService {
  constructor(private readonly workSectionRepository: WorkSectionRepository) {}

  async execute({
    work_section_id,
  }: ShowWorkSectionProps): Promise<WorkSection> {
    const workSection = await this.workSectionRepository.findById(
      work_section_id,
    );
    if (!workSection) {
      throw new Error('Work section not found.');
    }

    return workSection;
  }
}
