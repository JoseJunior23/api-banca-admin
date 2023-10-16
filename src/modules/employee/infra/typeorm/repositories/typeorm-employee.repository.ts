/* eslint-disable simple-import-sort/imports */

import { Injectable } from '@nestjs/common';
import { In, Repository } from 'typeorm';

import { EmployeeIdProps } from '@modules/employee/domain/models/employee-id.model';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateEmployeeProps } from 'src/modules/employee/domain/models/create-employee.model';
import { EmployeeRepository } from 'src/modules/employee/domain/repositories/employee.repository';
import { Employee } from '../entities/employee.entity';

@Injectable()
export class TypeormEmployeeRepository implements EmployeeRepository {
  constructor(
    @InjectRepository(Employee)
    private readonly ormRepository: Repository<Employee>,
  ) {}

  async create({
    name,
    phone,
    profession,
    team,
  }: CreateEmployeeProps): Promise<Employee> {
    const employee = this.ormRepository.create({
      name,
      phone,
      profession,
      team,
    });
    await this.ormRepository.save(employee);
    return employee;
  }

  async save(employee: Employee): Promise<Employee> {
    await this.ormRepository.save(employee);
    return employee;
  }

  async remove(employee: Employee): Promise<void> {
    await this.ormRepository.delete({ id: employee.id });
  }

  async findByName(name: string): Promise<Employee | null> {
    const employee = await this.ormRepository.findOneBy({ name });
    return employee;
  }

  async findById(id: string): Promise<Employee | null> {
    const employee = await this.ormRepository.findOne({
      where: { id },
    });
    return employee;
  }

  async getAllByIds(employees: EmployeeIdProps[]): Promise<Employee[]> {
    console.log(employees);
    const employeeIds = employees.map(employee => employee.id);

    console.log(employeeIds);
    const existentEmployees = await this.ormRepository.find({
      where: {
        id: In(employeeIds),
      },
    });
    return existentEmployees;
  }

  async findAll(): Promise<Employee[]> {
    const employees = await this.ormRepository
      .createQueryBuilder('employee')
      .leftJoinAndSelect('employee.team', 'teams')
      .leftJoinAndSelect('employee.profession', 'professions')
      .getMany();

    return employees;
  }
}
