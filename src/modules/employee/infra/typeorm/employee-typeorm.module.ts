import { EmployeeRepository } from '@modules/employee/domain/repositories/employee.repository';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

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
