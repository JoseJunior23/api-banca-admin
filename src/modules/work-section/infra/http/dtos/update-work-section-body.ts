import { IsString } from 'class-validator';

export class UpdateWorkSectionBody {
  @IsString()
  name: string;

  @IsString()
  description: string;
}
