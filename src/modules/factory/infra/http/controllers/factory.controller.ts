import { CreateFactoryService } from '@modules/factory/domain/services/create-factory.service';
import { DeleteFactoryService } from '@modules/factory/domain/services/delete-factory.service';
import { ListFactoryService } from '@modules/factory/domain/services/list-factory.service';
import { UpdateFactoryService } from '@modules/factory/domain/services/update-factory.service';
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

import { CreateFactoryDto } from '../dtos/create-factory.dto';
import { UpdateFactoryDto } from '../dtos/update-factory.dto';
import { FactoryViewModel } from '../view-models/factory.view-model';

@Controller('factories')
export class FactoryController {
  constructor(
    private createFactory: CreateFactoryService,
    private listFactory: ListFactoryService,
    private updateFactory: UpdateFactoryService,
    private deleteFactory: DeleteFactoryService,
  ) {}

  @Post()
  async create(@Body() { companyName, phone }: CreateFactoryDto) {
    const factory = await this.createFactory.execute({
      companyName,
      phone,
    });
    return { factory: FactoryViewModel.toHTTP(factory) };
  }

  @Get()
  async list() {
    const factories = await this.listFactory.execute();
    return { factories: factories.map(FactoryViewModel.toHTTP) };
  }

  @HttpCode(204)
  @Put(':id/update')
  async update(
    @Param('id') id: string,
    @Body() { companyName, phone }: UpdateFactoryDto,
  ) {
    await this.updateFactory.execute({
      factoryId: id,
      companyName,
      phone,
    });
  }

  @HttpCode(204)
  @Delete(':id/delete')
  async remove(@Param('id') id: string) {
    await this.deleteFactory.execute({ factoryId: id });
  }
}
