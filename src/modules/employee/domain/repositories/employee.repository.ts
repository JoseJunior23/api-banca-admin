/* eslint-disable simple-import-sort/imports */
import { CreateEmployeeProps } from '../models/create-employee.model';
import { EmployeeIdProps } from '../models/employee-id.model';
import { EmployeeProps } from '../models/employee.model';

export abstract class EmployeeRepository {
  abstract create(data: CreateEmployeeProps): Promise<EmployeeProps>;
  abstract save(employee: EmployeeProps): Promise<EmployeeProps>;
  abstract remove(employee: EmployeeProps): Promise<void>;
  abstract findByName(name: string): Promise<EmployeeProps | null>;
  abstract findById(id: string): Promise<EmployeeProps | null>;
  abstract findAll(): Promise<EmployeeProps[]>;
  abstract getAllByIds(employees: EmployeeIdProps[]): Promise<EmployeeProps[]>;
}
