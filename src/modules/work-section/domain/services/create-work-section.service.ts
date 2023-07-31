import { Injectable } from '@nestjs/common';

import { WorkSection } from '../entities/work-section';
import { WorkSectionRepository } from '../repositories/work-section-repository';

export interface CreateWorkSectionProps {
  name: string;
  description?: string;
}

interface WorkSectionResponse {
  workSection: WorkSection;
}

@Injectable()
export class CreateWorkSectionService {
  constructor(private readonly workSectionRepository: WorkSectionRepository) {}

  async execute({
    name,
    description,
  }: CreateWorkSectionProps): Promise<WorkSectionResponse> {
    const workSectionRegistered = await this.workSectionRepository.findByName(
      name,
    );
    if (workSectionRegistered) {
      throw new Error('There is a work section registered with this name.');
    }

    const workSection = new WorkSection({
      name,
      description,
    });

    await this.workSectionRepository.create(workSection);

    return { workSection };
  }
}
