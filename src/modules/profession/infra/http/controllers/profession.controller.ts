import { CreateProfessionService } from '@modules/profession/domain/services/create-profession.service';
import { DeleteProfessionService } from '@modules/profession/domain/services/delete-profession.service';
import { ListProfessionService } from '@modules/profession/domain/services/list-profession.service';
import { UpdateProfessionService } from '@modules/profession/domain/services/update-profession.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { CreateProfessionDto } from '../dtos/create-profession.dto';
import { UpdateProfessionDto } from '../dtos/update-profession.dto';
import { ProfessionViewModel } from '../view-models/profession.view-model';

@Controller('professions')
export class ProfessionController {
  constructor(
    private createProfession: CreateProfessionService,
    private listProfession: ListProfessionService,
    private updateProfession: UpdateProfessionService,
    private deleteProfession: DeleteProfessionService,
  ) {}

  @Post()
  async create(@Body() { name, description }: CreateProfessionDto) {
    const profession = await this.createProfession.execute({
      name,
      description,
    });
    return { profession: ProfessionViewModel.toHTTP(profession) };
  }

  @Get()
  async list() {
    const factories = await this.listProfession.execute();
    return { factories: factories.map(ProfessionViewModel.toHTTP) };
  }

  @HttpCode(204)
  @Put(':id/update')
  async update(
    @Param('id') id: string,
    @Body() { name, description }: UpdateProfessionDto,
  ) {
    await this.updateProfession.execute({
      professionId: id,
      name,
      description,
    });
  }

  @HttpCode(204)
  @Delete(':id/delete')
  async remove(@Param('id') id: string) {
    await this.deleteProfession.execute({ professionId: id });
  }
}
