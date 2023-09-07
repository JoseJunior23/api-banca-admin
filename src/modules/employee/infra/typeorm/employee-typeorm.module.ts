import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeRepository } from 'src/modules/employee/domain/repositories/employee.repository';

import { Employee } from './entities/employee.entity';
import { TypeormEmployeeRepository } from './repositories/typeorm-employee.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Employee])],
  providers: [
    {
      provide: EmployeeRepository,
      useClass: TypeormEmployeeRepository,
    },
  ],
  exports: [EmployeeRepository],
})
export class EmployeeTypeormModule {}
