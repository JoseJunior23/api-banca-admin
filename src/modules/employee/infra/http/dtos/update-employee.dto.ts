import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateEmployeeDto {
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
