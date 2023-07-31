import { WorkSection } from '../entities/work-section';

export abstract class WorkSectionRepository {
  abstract create(workSection: WorkSection): Promise<void>;
  abstract save(workSection: WorkSection): Promise<void>;
  abstract remove(workSection: WorkSection): Promise<void>;
  abstract findAll(): Promise<WorkSection[]>;
  abstract findById(id: string): Promise<WorkSection | null>;
  abstract findByName(name: string): Promise<WorkSection | null>;
}
