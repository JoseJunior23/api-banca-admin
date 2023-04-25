import { Injectable } from '@nestjs/common';
import { BcryptHashProvider } from '@providers/hashPasswordProvider/bcrypt-hash-provider/bcrypt-hash-provider';
import { addHours, isAfter } from 'date-fns';

import { UserRepository } from '../repositories/user-repository';
import { UserTokenRepository } from '../repositories/user-token-repository';

interface IRequest {
  token: string;
  password: string;
}

@Injectable()
export class ResetPasswordService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly userTokenRepository: UserTokenRepository,
    private readonly hashPasswordRepository: BcryptHashProvider,
  ) {}

  async execute({ password, token }: IRequest): Promise<void> {
    const userToken = await this.userTokenRepository.findByToken(token);
    if (!userToken) {
      throw new Error('User Token does not exists.');
    }

    const user = await this.userRepository.findById(userToken.user_id);
    if (!user) {
      throw new Error('User does not exists.');
    }

    const tokenCreationDate = userToken.created_at;
    const compareDate = addHours(tokenCreationDate, 2);
    if (isAfter(Date.now(), compareDate)) {
      throw new Error('Token expired.');
    }

    user.password = await this.hashPasswordRepository.hashGenerate(password);

    await this.userRepository.save(user);
  }
}
