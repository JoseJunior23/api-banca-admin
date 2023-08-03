import { Employee } from '../../typeorm/entities/employee.entity';

export class EmployeeViewModel {
  static toHTTP(employee: Employee) {
    return {
      employeeId: employee.id,
      name: employee.name,
      phone: employee.phone,
      jobTitle: employee.jobTitle,
    };
  }
}
