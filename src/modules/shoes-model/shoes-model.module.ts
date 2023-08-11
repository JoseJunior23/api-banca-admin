import { Module } from '@nestjs/common';

import { HttpShoesModelModule } from './infra/http/http-shoes-model.module';
import { TypeormShoesModelModule } from './infra/typeorm/typeorm-shoes-model.module';

@Module({
  imports: [HttpShoesModelModule, TypeormShoesModelModule],
})
export class ShoesModuleModule {}
