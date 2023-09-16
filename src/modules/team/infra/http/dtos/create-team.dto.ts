import { CreateTeamProps } from '@modules/team/domain/models/create-team.model.ts';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateTeamDto implements CreateTeamProps {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  description?: string | null;
}
