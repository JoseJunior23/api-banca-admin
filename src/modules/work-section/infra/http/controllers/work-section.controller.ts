import { CreateWorkSectionService } from '@modules/work-section/domain/services/create-work-section.service';
import { DeleteWorkSectionService } from '@modules/work-section/domain/services/delete-work-section.service';
import { ListWorkSectionService } from '@modules/work-section/domain/services/list-work-section.service';
import { ShowWorkSectionService } from '@modules/work-section/domain/services/show-work-section.service';
import { UpdateWorkSectionService } from '@modules/work-section/domain/services/update-work-section.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { CreateWorkSectionBody } from '../dtos/create-work-section-body';
import { UpdateWorkSectionBody } from '../dtos/update-work-section-body';
import { WorkSectionViewModel } from '../view-models/work-section-view-model';

@Controller('work-section')
export class WorkSectionController {
  constructor(
    private readonly createWorkSectionService: CreateWorkSectionService,
    private readonly listWorkSectionService: ListWorkSectionService,
    private readonly showWorkSectionService: ShowWorkSectionService,
    private readonly updateWorkSectionService: UpdateWorkSectionService,
    private readonly deleteWorkSectionService: DeleteWorkSectionService,
  ) {}

  @Post()
  async create(@Body() { description, name }: CreateWorkSectionBody) {
    const { workSection } = await this.createWorkSectionService.execute({
      name,
      description,
    });
    return { workSection: WorkSectionViewModel.toHTTP(workSection) };
  }

  @Get()
  async list() {
    const { workSections } = await this.listWorkSectionService.execute();

    return { workSections: workSections.map(WorkSectionViewModel.toHTTP) };
  }

  @Get(':id')
  async show(@Param('id') id: string) {
    const { workSection } = await this.showWorkSectionService.execute({
      workSectionId: id,
    });
    return { workSection: WorkSectionViewModel.toHTTP(workSection) };
  }

  @Put(':id/update')
  async update(
    @Param('id') id: string,
    @Body() { description, name }: UpdateWorkSectionBody,
  ) {
    await this.updateWorkSectionService.execute({
      workSectionId: id,
      name,
      description,
    });
  }

  @Delete(':id/delete')
  async remove(@Param('id') id: string) {
    await this.deleteWorkSectionService.execute({ workSectionId: id });
  }
}
