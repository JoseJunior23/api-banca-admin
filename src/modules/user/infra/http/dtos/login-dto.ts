import { MessagesPassword, RegExHelper } from '@helpers/regex-password';
import { IsEmail, IsNotEmpty, Length, Matches } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Length(6, 15)
  @Matches(RegExHelper.password, { message: MessagesPassword.PASSWORD_VALID })
  password: string;
}
