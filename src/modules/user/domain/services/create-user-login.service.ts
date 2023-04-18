import authConfig from '@config/jwt-config';
import { Injectable } from '@nestjs/common';
import { BcryptHashProvider } from '@providers/hashPasswordProvider/bcrypt-hash-provider/bcrypt-hash-provider';
import { Secret, sign } from 'jsonwebtoken';

import { User } from '../entities/user';
import { UserRepository } from '../repositories/user-repository';

interface UserLoginProps {
  email: string;
  password: string;
}

export interface LoginResponse {
  user: User;
  token: string;
}

@Injectable()
export class LoginUserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly hashPasswordRepository: BcryptHashProvider,
  ) {}

  async execute({ email, password }: UserLoginProps): Promise<LoginResponse> {
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new Error('Incorrect email/password combination.');
    }

    const confirmedPassword = await this.hashPasswordRepository.hashCompare(
      password,
      user.password,
    );
    if (!confirmedPassword) {
      throw new Error('Incorrect email/password combination.');
    }

    const token = sign({}, authConfig.jwt.secret as Secret, {
      subject: user.id,
      expiresIn: authConfig.jwt.expiresIn,
    });

    return { user, token };
  }
}
