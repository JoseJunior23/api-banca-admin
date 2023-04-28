import { Injectable } from '@nestjs/common';

import { WorkSection } from '../entities/work-section';
import { WorkSectionRepository } from '../repositories/work-section-repository';

interface UpdateWorkSectionProps {
  work_section_id: string;
  name?: string;
  description?: string;
}

@Injectable()
export class UpdateWorkSectionService {
  constructor(private readonly workSectionRepository: WorkSectionRepository) {}

  async execute({
    work_section_id,
    name,
    description,
  }: UpdateWorkSectionProps): Promise<WorkSection> {
    const workSection = await this.workSectionRepository.findById(
      work_section_id,
    );
    if (!workSection) {
      throw new Error('Work Section not found.');
    }

    workSection.name = name;
    workSection.description = description;

    await this.workSectionRepository.save(workSection);

    return workSection;
  }
}
