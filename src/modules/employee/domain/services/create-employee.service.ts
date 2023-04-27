import { Injectable } from '@nestjs/common';

import { Employee } from '../entities/employee';
import { EmployeeRepository } from '../repositories/employee-repository';

interface CreateEmployeeProps {
  name: string;
  nickname?: string;
  phone: string;
}

@Injectable()
export class CreateEmployeeService {
  constructor(private readonly employeeRepository: EmployeeRepository) {}

  async execute({
    name,
    phone,
    nickname,
  }: CreateEmployeeProps): Promise<Employee> {
    const employee = new Employee({
      name,
      phone,
      nickname,
    });

    await this.employeeRepository.create(employee);

    return employee;
  }
}
