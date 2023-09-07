import { Injectable } from '@nestjs/common';
import { EmployeeIdProps } from 'src/modules/employee/domain/models/employee-id.model';

import { EmployeeRepository } from '../repositories/employee.repository';

@Injectable()
export class ListEmployeeService {
  constructor(private readonly employeeRepository: EmployeeRepository) {}

  async execute(): Promise<EmployeeIdProps[]> {
    const employees = await this.employeeRepository.findAllWithTeams();
    console.log(employees);
    return employees;
  }
}
