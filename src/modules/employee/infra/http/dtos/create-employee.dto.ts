import { CreateEmployeeProps } from '@modules/employee/domain/models/create-employee.model';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateEmployeeDto implements CreateEmployeeProps {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  phone: string;

  @IsNotEmpty()
  @IsString()
  jobTitle: string;
}
