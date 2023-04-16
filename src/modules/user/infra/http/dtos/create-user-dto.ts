import { MessagesPassword, RegExHelper } from '@helpers/regex-password';
import { IsEmail, IsNotEmpty, Length, Matches } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @Length(3, 100)
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Length(6, 15)
  @Matches(RegExHelper.password, { message: MessagesPassword.PASSWORD_VALID })
  password: string;
}
