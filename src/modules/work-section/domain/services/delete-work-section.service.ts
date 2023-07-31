import { Injectable, NotFoundException } from '@nestjs/common';

import { WorkSectionRepository } from '../repositories/work-section-repository';

interface DeleteWorkSectionProps {
  workSectionId: string;
}

@Injectable()
export class DeleteWorkSectionService {
  constructor(private readonly workSectionRepository: WorkSectionRepository) {}

  async execute({ workSectionId }: DeleteWorkSectionProps): Promise<void> {
    const workSection = await this.workSectionRepository.findById(
      workSectionId,
    );
    if (!workSection) {
      throw new NotFoundException('Work section not found.');
    }

    await this.workSectionRepository.remove(workSection);
  }
}
