import { CreateEmployeeService } from '@modules/employee/domain/services/create-employee.service';
import { DeleteEmployeeService } from '@modules/employee/domain/services/delete-employee.service';
import { ListEmployeeService } from '@modules/employee/domain/services/list-employee.service';
import { UpdateEmployeeService } from '@modules/employee/domain/services/update-employee.service';
import { TeamTypeormModule } from '@modules/team/infra/typeorm/team-typeorm.module';
import { Module } from '@nestjs/common';

import { EmployeeTypeormModule } from '../typeorm/employee-typeorm.module';
import { EmployeeController } from './controllers/employee.controller';

@Module({
  imports: [EmployeeTypeormModule, TeamTypeormModule],
  controllers: [EmployeeController],
  providers: [
    CreateEmployeeService,
    ListEmployeeService,
    UpdateEmployeeService,
    DeleteEmployeeService,
  ],
})
export class EmployeeHttpModule {}
