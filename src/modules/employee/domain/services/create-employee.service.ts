import { TeamRepository } from '@modules/team/domain/repositories/team.repository';
import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { EmployeeProps } from '../models/employee.model';
import { RequestCreateEmployeeProps } from '../models/request-create-employee.model';
import { EmployeeRepository } from '../repositories/employee.repository';

@Injectable()
export class CreateEmployeeService {
  constructor(
    private readonly employeeRepository: EmployeeRepository,
    private readonly teamRepository: TeamRepository,
  ) {}

  async execute({
    jobTitle,
    name,
    phone,
    teamId,
  }: RequestCreateEmployeeProps): Promise<EmployeeProps> {
    const existsEmployee = await this.employeeRepository.findByName(name);
    if (existsEmployee) {
      throw new ConflictException(
        'There is already a employee with this name !!',
      );
    }

    const existsTeam = await this.teamRepository.findById(teamId);
    console.log(existsTeam);
    if (!existsTeam) {
      throw new NotFoundException(
        ' Could not find any Team with the given id.!!',
      );
    }

    const employee = await this.employeeRepository.create({
      name,
      phone,
      jobTitle,
      team: existsTeam,
    });
    return employee;
  }
}
