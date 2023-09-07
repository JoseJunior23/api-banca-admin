import { TeamRepository } from '@modules/team/domain/repositories/team.repository';
import { Injectable, NotFoundException } from '@nestjs/common';

import { EmployeeProps } from '../models/employee.model';
import { UpdateEmployeeProps } from '../models/update-employee.model';
import { EmployeeRepository } from '../repositories/employee.repository';

@Injectable()
export class UpdateEmployeeService {
  constructor(
    private readonly employeeRepository: EmployeeRepository,
    private readonly teamRepository: TeamRepository,
  ) {}

  async execute({
    employeeId,
    name,
    phone,
    jobTitle,
    team,
  }: UpdateEmployeeProps): Promise<EmployeeProps> {
    const employee = await this.employeeRepository.findById(employeeId);
    if (!employee) {
      throw new NotFoundException('Employee not found');
    }

    const exitsTeam = await this.teamRepository.findById(team.id);
    if (!exitsTeam) {
      throw new NotFoundException('Team not found');
    }

    employee.name = name;
    employee.phone = phone;
    employee.jobTitle = jobTitle;
    employee.team = team;

    await this.employeeRepository.save(employee);

    return employee;
  }
}
