import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateEmployeeDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  phone: string;

  @IsNotEmpty()
  @IsString()
  jobTitle: string;

  @IsString()
  @IsUUID()
  teamId?: string;
}
