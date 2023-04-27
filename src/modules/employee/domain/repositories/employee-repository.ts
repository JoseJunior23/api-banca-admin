import { Employee } from '../entities/employee';

abstract class EmployeeRepository {
  abstract create(employee: Employee): Promise<void>;
  abstract save(employee: Employee): Promise<Employee>;
  abstract remove(employee: Employee): Promise<void>;
  abstract findAll(): Promise<Employee[]>;
  abstract findById(id: string): Promise<Employee | null>;
}
