import { EtherealMail } from '@config/mail/EtherealMail';
import { Injectable } from '@nestjs/common';
import path from 'path';

import { UserRepository } from '../repositories/user-repository';
import { UserTokenRepository } from '../repositories/user-token-repository';

interface SendForgotPasswordEmailProps {
  email: string;
}

@Injectable()
export class SendForgotPasswordEmailService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly userTokenRepository: UserTokenRepository,
  ) {}

  async execute({ email }: SendForgotPasswordEmailProps): Promise<void> {
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new Error('User does not exists.');
    }

    const { token } = await this.userTokenRepository.generate(user.id);

    const forgotTemplate = path.resolve(
      __dirname,
      '..',
      'views',
      'forgotPassword.hbs',
    );

    await EtherealMail.sendMail({
      to: {
        name: user.name,
        email: user.email,
      },
      subject: '[Banca_admin] Recuperação de Senha',
      templateData: {
        file: forgotTemplate,
        variables: {
          name: user.name,
          link: `http://localhost:3000/reset_password?token=${token}`,
        },
      },
    });
  }
}
