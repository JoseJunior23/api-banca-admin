import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateEmployeeDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  phone: string;

  @IsNotEmpty()
  @IsString()
  @IsUUID()
  professionId: string;

  @IsString()
  @IsUUID()
  @IsOptional()
  teamId?: string | null;
}
