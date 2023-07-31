import { WorkSection } from '@modules/work-section/domain/entities/work-section';
import { WorkSectionRepository } from '@modules/work-section/domain/repositories/work-section-repository';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '@shared/database/prisma.service';

import { PrismaWorkSectionMapper } from '../mappers/work-section-mapper';

@Injectable()
export class PrismaWorkSectionRepository implements WorkSectionRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(workSection: WorkSection): Promise<void> {
    const raw = PrismaWorkSectionMapper.toPrisma(workSection);
    await this.prisma.workSection.create({
      data: raw,
    });
  }

  async save(workSection: WorkSection): Promise<void> {
    const raw = PrismaWorkSectionMapper.toPrisma(workSection);
    await this.prisma.workSection.update({
      where: {
        id: raw.id,
      },
      data: raw,
    });
  }

  async remove(workSection: WorkSection): Promise<void> {
    await this.prisma.workSection.delete({
      where: {
        id: workSection.id,
      },
    });
  }

  async findAll(): Promise<WorkSection[]> {
    const workSections = await this.prisma.workSection.findMany();

    return workSections.map(workSection => {
      return PrismaWorkSectionMapper.toDomain(workSection);
    });
  }
  async findById(id: string): Promise<WorkSection> {
    const workSection = await this.prisma.workSection.findUnique({
      where: {
        id,
      },
    });
    if (!workSection) {
      return null;
    }

    return PrismaWorkSectionMapper.toDomain(workSection);
  }

  async findByName(name: string): Promise<WorkSection> {
    const workSection = await this.prisma.workSection.findUnique({
      where: {
        name,
      },
    });
    if (!workSection) {
      return null;
    }

    return PrismaWorkSectionMapper.toDomain(workSection);
  }
}
