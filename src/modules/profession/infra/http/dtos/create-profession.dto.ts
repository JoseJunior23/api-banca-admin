import { CreateProfessionProps } from '@modules/profession/domain/models/create-profession.model';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateProfessionDto implements CreateProfessionProps {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description: string;
}
