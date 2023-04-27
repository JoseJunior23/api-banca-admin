import { Injectable } from '@nestjs/common';

import { Employee } from '../entities/employee';
import { EmployeeRepository } from '../repositories/employee-repository';

@Injectable()
export class ListEmployeeService {
  constructor(private readonly employeeRepository: EmployeeRepository) {}

  async execute(): Promise<Employee[]> {
    const employees = await this.employeeRepository.findAll();

    return employees;
  }
}
