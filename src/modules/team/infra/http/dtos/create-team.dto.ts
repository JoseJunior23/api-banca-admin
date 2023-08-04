import { CreateTeamProps } from '@modules/team/domain/models/create-team.model.ts';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTeamDto implements CreateTeamProps {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsString()
  description: string;
}
