import { Injectable, NotFoundException } from '@nestjs/common';

import { WorkSection } from '../entities/work-section';
import { WorkSectionRepository } from '../repositories/work-section-repository';

interface ShowWorkSectionProps {
  workSectionId: string;
}

interface WorkSectionResponse {
  workSection: WorkSection;
}

@Injectable()
export class ShowWorkSectionService {
  constructor(private readonly workSectionRepository: WorkSectionRepository) {}

  async execute({
    workSectionId,
  }: ShowWorkSectionProps): Promise<WorkSectionResponse> {
    const workSection = await this.workSectionRepository.findById(
      workSectionId,
    );
    if (!workSection) {
      throw new NotFoundException('Work section not found.');
    }

    return { workSection };
  }
}
