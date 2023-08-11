import { CreateShoesModelService } from '@modules/shoes-model/domain/services/create-shoes-model.service';
import { DeleteShoesModelService } from '@modules/shoes-model/domain/services/delete-shoes-model.service';
import { ListShoesModelService } from '@modules/shoes-model/domain/services/list-shoes-model.service';
import { UpdateShoesModelService } from '@modules/shoes-model/domain/services/update-shoes-model.service';
import { Module } from '@nestjs/common';

import { TypeormShoesModelModule } from '../typeorm/typeorm-shoes-model.module';
import { ShoesModelController } from './controllers/shoes-model.controller';

@Module({
  imports: [TypeormShoesModelModule],
  controllers: [ShoesModelController],
  providers: [
    CreateShoesModelService,
    ListShoesModelService,
    UpdateShoesModelService,
    DeleteShoesModelService,
  ],
})
export class HttpShoesModelModule {}
