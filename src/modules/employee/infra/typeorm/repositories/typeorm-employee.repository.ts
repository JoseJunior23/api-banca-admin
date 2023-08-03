import { CreateEmployeeProps } from '@modules/employee/domain/models/create-employee.model';
import { EmployeeProps } from '@modules/employee/domain/models/employee.model';
import { EmployeeRepository } from '@modules/employee/domain/repositories/employee.repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Employee } from '../entities/employee.entity';

@Injectable()
export class TypeormEmployeeRepository implements EmployeeRepository {
  constructor(
    @InjectRepository(Employee)
    private readonly ormEmployeeRepository: Repository<Employee>,
  ) {}

  async create({
    jobTitle,
    name,
    phone,
  }: CreateEmployeeProps): Promise<Employee> {
    const employee = this.ormEmployeeRepository.create({
      name,
      phone,
      jobTitle,
    });
    await this.ormEmployeeRepository.save(employee);
    return employee;
  }

  async save(employee: Employee): Promise<Employee> {
    await this.ormEmployeeRepository.save(employee);
    return employee;
  }

  async remove(employee: Employee): Promise<void> {
    await this.ormEmployeeRepository.delete({ id: employee.id });
  }

  async findByName(name: string): Promise<Employee | null> {
    const employee = await this.ormEmployeeRepository.findOneBy({ name });
    return employee;
  }

  async findById(id: string): Promise<Employee | null> {
    const employee = await this.ormEmployeeRepository.findOne({
      where: { id },
    });
    return employee;
  }

  async findAll(): Promise<EmployeeProps[]> {
    const employees = await this.ormEmployeeRepository.find();
    return employees;
  }
}
