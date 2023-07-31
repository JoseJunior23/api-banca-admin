import { Module } from '@nestjs/common';

import { WorkSectionModule } from './modules/work-section/work-section.module';

@Module({
  imports: [WorkSectionModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
