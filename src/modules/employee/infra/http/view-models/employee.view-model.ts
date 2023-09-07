import { Employee } from '../../typeorm/entities/employee.entity';

export class EmployeeViewModel {
  static toHTTP(employee: Employee) {
    const teamName = employee.team ? employee.team.name : null;

    return {
      employeeId: employee.id,
      name: employee.name,
      phone: employee.phone,
      jobTitle: employee.jobTitle,
      team: teamName,
    };
  }
}
