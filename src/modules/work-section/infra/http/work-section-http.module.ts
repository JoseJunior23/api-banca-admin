import { CreateWorkSectionService } from '@modules/work-section/domain/services/create-work-section.service';
import { DeleteWorkSectionService } from '@modules/work-section/domain/services/delete-work-section.service';
import { ListWorkSectionService } from '@modules/work-section/domain/services/list-work-section.service';
import { ShowWorkSectionService } from '@modules/work-section/domain/services/show-work-section.service';
import { UpdateWorkSectionService } from '@modules/work-section/domain/services/update-work-section.service';
import { Module } from '@nestjs/common';

import { WorkSectionDatabaseModule } from '../database/work-section-database.module';
import { WorkSectionController } from './controllers/work-section.controller';

@Module({
  imports: [WorkSectionDatabaseModule],
  controllers: [WorkSectionController],
  providers: [
    CreateWorkSectionService,
    ListWorkSectionService,
    ShowWorkSectionService,
    UpdateWorkSectionService,
    DeleteWorkSectionService,
  ],
})
export class WorkSectionHttpModule {}
