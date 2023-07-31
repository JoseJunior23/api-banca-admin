import { Module } from '@nestjs/common';

import { WorkSectionDatabaseModule } from './infra/database/work-section-database.module';
import { WorkSectionHttpModule } from './infra/http/work-section-http.module';

@Module({ imports: [WorkSectionDatabaseModule, WorkSectionHttpModule] })
export class WorkSectionModule {}
