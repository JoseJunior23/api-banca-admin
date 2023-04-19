import nodemailer from 'nodemailer';

import { HandlebarsMailTemplate } from './HandlebarsMailTemplate';

interface IContact {
  name: string;
  email: string;
}

interface IVariable {
  [key: string]: string | number;
}

interface IParseMailTemplate {
  file: string;
  variables: IVariable;
}

interface ISendMail {
  to: IContact;
  from?: IContact;
  subject: string;
  templateData: IParseMailTemplate;
}

export class EtherealMail {
  static async sendMail({
    to,
    from,
    subject,
    templateData,
  }: ISendMail): Promise<void> {
    const account = await nodemailer.createTestAccount();

    const mailTemplate = new HandlebarsMailTemplate();

    const transporter = nodemailer.createTransport({
      host: account.smtp.host,
      port: account.smtp.port,
      secure: account.smtp.secure,
      auth: {
        user: account.user,
        pass: account.pass,
      },
    });

    const message = await transporter.sendMail({
      from: {
        name: from?.name || 'Serviço de recuperação de senha Banca Admin',
        address: from?.email || 'banca_admin@mail.com.br',
      },
      to: {
        name: to.name,
        address: to.email,
      },
      subject,
      html: await mailTemplate.parse(templateData),
    });

    console.log('Message sent: %s', message.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(message));
  }
}
