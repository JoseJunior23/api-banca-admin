import { WorkSection } from '@modules/work-section/domain/entities/work-section';
import { WorkSection as RawWorkSection } from '@prisma/client';

export class PrismaWorkSectionMapper {
  static toPrisma(workSection: WorkSection) {
    return {
      id: workSection.id,
      name: workSection.name,
      description: workSection.description,
    };
  }

  static toDomain(raw: RawWorkSection): WorkSection {
    return new WorkSection({
      id: raw.id,
      name: raw.name,
      description: raw.description,
      created_at: raw.created_at,
      updated_at: raw.updated_at,
    });
  }
}
