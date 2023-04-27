import { Injectable } from '@nestjs/common';

import { Employee } from '../entities/employee';
import { EmployeeRepository } from '../repositories/employee-repository';

interface UpdateEmployeeProps {
  id: string;
  name: string;
  nickname?: string;
  phone: string;
}

@Injectable()
export class CreateEmployeeService {
  constructor(private readonly employeeRepository: EmployeeRepository) {}

  async execute({
    id,
    name,
    phone,
    nickname,
  }: UpdateEmployeeProps): Promise<Employee> {
    const employee = await this.employeeRepository.findById(id);
    if (!employee) {
      throw new Error('Employee not found.');
    }

    employee.name = name;
    employee.nickname = nickname;
    employee.phone = phone;

    await this.employeeRepository.save(employee);

    return employee;
  }
}
