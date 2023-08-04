import { CreateFactoryProps } from '@modules/factory/domain/models/create-factory.model';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateFactoryDto implements CreateFactoryProps {
  @IsNotEmpty()
  @IsString()
  companyName: string;

  @IsNotEmpty()
  @IsString()
  phone: string;
}
