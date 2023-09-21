import { CreateProfessionService } from '@modules/profession/domain/services/create-profession.service';
import { DeleteProfessionService } from '@modules/profession/domain/services/delete-profession.service';
import { ListProfessionService } from '@modules/profession/domain/services/list-profession.service';
import { UpdateProfessionService } from '@modules/profession/domain/services/update-profession.service';
import { Module } from '@nestjs/common';

import { TypeormProfessionModule } from '../typeorm/typeorm-profession.module';
import { ProfessionController } from './controllers/profession.controller';

@Module({
  imports: [TypeormProfessionModule],
  controllers: [ProfessionController],
  providers: [
    CreateProfessionService,
    ListProfessionService,
    UpdateProfessionService,
    DeleteProfessionService,
  ],
})
export class HttpProfessionModule {}
