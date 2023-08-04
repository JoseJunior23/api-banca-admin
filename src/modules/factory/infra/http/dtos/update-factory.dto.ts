import { IsString } from 'class-validator';

export class UpdateFactoryDto {
  @IsString()
  companyName: string;

  @IsString()
  phone: string;
}
