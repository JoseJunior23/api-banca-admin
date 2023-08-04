import { CreateFactoryService } from '@modules/factory/domain/services/create-factory.service';
import { DeleteFactoryService } from '@modules/factory/domain/services/delete-factory.service';
import { ListFactoryService } from '@modules/factory/domain/services/list-factory.service';
import { UpdateFactoryService } from '@modules/factory/domain/services/update-factory.service';
import { Module } from '@nestjs/common';

import { FactoryTypeormModule } from '../typeorm/factory-typeorm.module';
import { FactoryController } from './controllers/factory.controller';

@Module({
  imports: [FactoryTypeormModule],
  controllers: [FactoryController],
  providers: [
    CreateFactoryService,
    ListFactoryService,
    UpdateFactoryService,
    DeleteFactoryService,
  ],
})
export class FactoryHttpModule {}
