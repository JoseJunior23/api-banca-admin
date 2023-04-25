import { MessagesPassword, RegExHelper } from '@helpers/regex-password';
import { IsNotEmpty, IsUUID, Length, Matches } from 'class-validator';

export class ResetPasswordDto {
  @IsNotEmpty()
  @IsUUID()
  token: string;

  @IsNotEmpty()
  @Length(6, 15)
  @Matches(RegExHelper.password, { message: MessagesPassword.PASSWORD_VALID })
  password: string;
}
