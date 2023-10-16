import { ProfessionRepository } from '@modules/profession/domain/repositories/profession.repository';
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
    private readonly professionRepository: ProfessionRepository,
  ) {}

  async execute({
    employeeId,
    name,
    phone,
    professionId,
    teamId,
  }: UpdateEmployeeProps): Promise<EmployeeProps> {
    const employee = await this.employeeRepository.findById(employeeId);
    if (!employee) {
      throw new NotFoundException('Employee not found');
    }

    const exitsTeam = await this.teamRepository.findById(teamId);
    if (!exitsTeam) {
      throw new NotFoundException('Team not found');
    }

    const exitsProfession = await this.professionRepository.findById(
      professionId,
    );
    if (!exitsProfession) {
      throw new NotFoundException('Profession not found');
    }

    employee.name = name;
    employee.phone = phone;
    employee.profession = exitsProfession[0];
    employee.team = exitsTeam;

    await this.employeeRepository.save(employee);

    return employee;
  }
}
