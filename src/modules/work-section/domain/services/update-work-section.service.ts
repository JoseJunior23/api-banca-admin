import { Injectable } from '@nestjs/common';

import { WorkSection } from '../entities/work-section';
import { WorkSectionRepository } from '../repositories/work-section-repository';

interface UpdateWorkSectionProps {
  workSectionId: string;
  name?: string;
  description?: string;
}

@Injectable()
export class UpdateWorkSectionService {
  constructor(private readonly workSectionRepository: WorkSectionRepository) {}

  async execute({
    workSectionId,
    name,
    description,
  }: UpdateWorkSectionProps): Promise<WorkSection> {
    const workSection = await this.workSectionRepository.findById(
      workSectionId,
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
