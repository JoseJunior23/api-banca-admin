import { ResetPasswordService } from '@modules/user/domain/services/reset-password.service';
import { SendForgotPasswordEmailService } from '@modules/user/domain/services/send-forgot-password-email.service';
import { Body, Controller, HttpCode, Post } from '@nestjs/common';

import { ForgotPasswordDto } from '../dtos/forgot-password-dto';
import { ResetPasswordDto } from '../dtos/reset-password-dto';

@Controller('password')
export class ResetPasswordController {
  constructor(
    private readonly resetPassword: ResetPasswordService,
    private readonly forgotPassword: SendForgotPasswordEmailService,
  ) {}

  @Post('/reset')
  async reset(@Body() { password, token }: ResetPasswordDto) {
    await this.resetPassword.execute({ password, token });

    return { message: 'Password successfully recovered' };
  }

  @Post('/forgot')
  @HttpCode(204)
  async forgot(@Body() { email }: ForgotPasswordDto) {
    await this.forgotPassword.execute({ email });
  }
}
