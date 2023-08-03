import { Module } from '@nestjs/common';

import { EmployeeHttpModule } from './infra/http/employee-http.module';
import { EmployeeTypeormModule } from './infra/typeorm/employee-typeorm.module';

@Module({
  imports: [EmployeeHttpModule, EmployeeTypeormModule],
})
export class EmployeeModule {}
