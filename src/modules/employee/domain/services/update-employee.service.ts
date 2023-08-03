import { Injectable, NotFoundException } from '@nestjs/common';

import { EmployeeProps } from '../models/employee.model';
import { UpdateEmployeeProps } from '../models/update-employee.model';
import { EmployeeRepository } from '../repositories/employee.repository';

@Injectable()
export class UpdateEmployeeService {
  constructor(private readonly employeeRepository: EmployeeRepository) {}

  async execute({
    employeeId,
    name,
    phone,
    jobTitle,
  }: UpdateEmployeeProps): Promise<EmployeeProps> {
    const employee = await this.employeeRepository.findById(employeeId);
    if (!employee) {
      throw new NotFoundException('Employee not found');
    }

    employee.name = name;
    employee.phone = phone;
    employee.jobTitle = jobTitle;

    await this.employeeRepository.save(employee);

    return employee;
  }
}
