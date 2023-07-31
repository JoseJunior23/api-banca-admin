import { IsNotEmpty, IsString } from 'class-validator';

export class CreateWorkSectionBody {
  @IsNotEmpty({ message: 'Nome não pode ser vazio' })
  name: string;

  @IsString()
  description: string;
}
