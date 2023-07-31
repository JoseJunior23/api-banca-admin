import { WorkSectionRepository } from '@modules/work-section/domain/repositories/work-section-repository';
import { Module } from '@nestjs/common';
import { PrismaService } from '@shared/database/prisma.service';

import { PrismaWorkSectionRepository } from './repositories/prisma-work-section-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: WorkSectionRepository,
      useClass: PrismaWorkSectionRepository,
    },
  ],
  exports: [WorkSectionRepository],
})
export class WorkSectionDatabaseModule {}
