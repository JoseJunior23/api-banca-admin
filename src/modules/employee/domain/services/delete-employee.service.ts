import { Injectable, NotFoundException } from '@nestjs/common';
import { EmployeeIdProps } from 'src/modules/employee/domain/models/employee-id.model';

import { EmployeeRepository } from '../repositories/employee.repository';

@Injectable()
export class DeleteEmployeeService {
  constructor(private readonly employeeRepository: EmployeeRepository) {}

  async execute({ id }: EmployeeIdProps): Promise<void> {
    const employee = await this.employeeRepository.findById(id);
    if (!employee) {
      throw new NotFoundException('Employee not found');
    }

    await this.employeeRepository.remove(employee);
  }
}
