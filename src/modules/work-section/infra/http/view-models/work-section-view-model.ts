import { WorkSection } from '@modules/work-section/domain/entities/work-section';

export class WorkSectionViewModel {
  static toHTTP(workSection: WorkSection) {
    return {
      id: workSection.id,
      name: workSection.name,
      description: workSection.description,
    };
  }
}
