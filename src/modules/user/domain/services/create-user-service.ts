import { Injectable } from '@nestjs/common';

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
  constructor(private userRepository: UserRepository) {}

  async execute({
    email,
    name,
    password,
  }: CreateUserProps): Promise<UserResponse> {
    const emailRegistered = await this.userRepository.findByEmail(email);
    if (emailRegistered) {
      throw new Error('There is a user registered with this email.');
    }

    const user = new User({
      name,
      email,
      password,
    });

    await this.userRepository.create(user);

    return { user };
  }
}
