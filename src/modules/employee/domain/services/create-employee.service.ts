import { ConflictException, Injectable } from '@nestjs/common';

import { CreateEmployeeProps } from '../models/create-employee.model';
import { EmployeeProps } from '../models/employee.model';
import { EmployeeRepository } from '../repositories/employee.repository';

@Injectable()
export class CreateEmployeeService {
  constructor(private readonly employeeRepository: EmployeeRepository) {}

  async execute({
    jobTitle,
    name,
    phone,
  }: CreateEmployeeProps): Promise<EmployeeProps> {
    const employeeExists = await this.employeeRepository.findByName(name);
    if (employeeExists) {
      throw new ConflictException(
        'There is already a employee with this name !!',
      );
    }

    const employee = await this.employeeRepository.create({
      name,
      phone,
      jobTitle,
    });
    return employee;
  }
}
