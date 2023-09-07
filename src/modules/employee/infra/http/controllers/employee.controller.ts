import { CreateEmployeeService } from '@modules/employee/domain/services/create-employee.service';
import { DeleteEmployeeService } from '@modules/employee/domain/services/delete-employee.service';
import { ListEmployeeService } from '@modules/employee/domain/services/list-employee.service';
import { UpdateEmployeeService } from '@modules/employee/domain/services/update-employee.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { Employee } from '../../typeorm/entities/employee.entity';
import { CreateEmployeeDto } from '../dtos/create-employee.dto';
import { UpdateEmployeeDto } from '../dtos/update-employee.dto';
import { EmployeeViewModel } from '../view-models/employee.view-model';

@Controller('employees')
export class EmployeeController {
  constructor(
    private createEmployee: CreateEmployeeService,
    private listEmployee: ListEmployeeService,
    private updateEmployee: UpdateEmployeeService,
    private deleteEmployee: DeleteEmployeeService,
  ) {}

  @Post()
  async create(@Body() { jobTitle, name, phone, teamId }: CreateEmployeeDto) {
    const employee = await this.createEmployee.execute({
      jobTitle,
      name,
      phone,
      teamId,
    });
    return { employee: EmployeeViewModel.toHTTP(employee) };
  }

  @Get()
  async list() {
    const employees = await this.listEmployee.execute();
    return { employees: employees.map(EmployeeViewModel.toHTTP) };
  }

  @Put(':id/update')
  async update(
    @Param('id') id: string,
    @Body() { name, phone, jobTitle, team }: UpdateEmployeeDto,
  ): Promise<Employee> {
    const newEmployee = await this.updateEmployee.execute({
      employeeId: id,
      name,
      phone,
      jobTitle,
      team,
    });
    return newEmployee;
  }

  @Delete(':id/delete')
  async remove(@Param('id') id: string) {
    await this.deleteEmployee.execute({ id });
  }
}
