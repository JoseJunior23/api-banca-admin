import { Employee } from '../../typeorm/entities/employee.entity';

export class EmployeeViewModel {
  static toHTTP(employee: Employee) {
    const teamName = employee.team ? employee.team.name : null;
    const professionName = employee.profession
      ? employee.profession.name
      : null;

    return {
      employeeId: employee.id,
      name: employee.name,
      phone: employee.phone,
      profession: professionName,
      team: teamName,
    };
  }
}
