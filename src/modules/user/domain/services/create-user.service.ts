import { Injectable } from '@nestjs/common';
import { BcryptHashProvider } from '@providers/hashPasswordProvider/bcrypt-hash-provider/bcrypt-hash-provider';

import { User } from '../entities/user';
import { UserRepository } from '../repositories/user-repository';

export interface CreateUserProps {
  name: string;
  email: string;
  password: string;
}

interface UserResponse {
  user: User;
}

@Injectable()
export class CreateUserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly hashPasswordRepository: BcryptHashProvider,
  ) {}

  async execute({
    email,
    name,
    password,
  }: CreateUserProps): Promise<UserResponse> {
    const emailRegistered = await this.userRepository.findByEmail(email);
    if (emailRegistered) {
      throw new Error('There is a user registered with this email.');
    }

    const hashedPassword = await this.hashPasswordRepository.hashGenerate(
      password,
    );

    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    await this.userRepository.create(user);

    return { user };
  }
}
