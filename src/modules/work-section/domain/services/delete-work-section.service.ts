import { Injectable } from '@nestjs/common';

import { WorkSectionRepository } from '../repositories/work-section-repository';

interface DeleteWorkSectionProps {
  work_section_id: string;
}

@Injectable()
export class DeleteWorkSectionService {
  constructor(private readonly workSectionRepository: WorkSectionRepository) {}

  async execute({ work_section_id }: DeleteWorkSectionProps): Promise<void> {
    const workSection = await this.workSectionRepository.findById(
      work_section_id,
    );
    if (!workSection) {
      throw new Error('Work section not found.');
    }

    await this.workSectionRepository.remove(workSection);
  }
}
