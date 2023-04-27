import { Injectable } from '@nestjs/common';

import { EmployeeRepository } from '../repositories/employee-repository';

interface DeleteEmployeeProps {
  id: string;
}

@Injectable()
export class DeleteEmployeeService {
  constructor(private readonly employeeRepository: EmployeeRepository) {}

  async execute({ id }: DeleteEmployeeProps): Promise<void> {
    const employee = await this.employeeRepository.findById(id);
    if (!employee) {
      throw new Error('Employee not found.');
    }

    await this.employeeRepository.remove(employee);
  }
}
