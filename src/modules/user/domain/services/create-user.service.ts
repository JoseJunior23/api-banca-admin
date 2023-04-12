import { Injectable } from '@nestjs/common';
import { IGlobalEntity } from '@shared/global/entities/global-entity';

import { IUser, User } from '../entities/user.entity';
import { UserRepository } from '../repositories/user.repository';

interface UserResponse {
  user: User;
}
@Injectable()
export class CreateUserService {
  constructor(private userRepository: UserRepository) {}

  async execute(
    props: IGlobalEntity,
    { email, name, password }: IUser,
  ): Promise<UserResponse> {
    const userRegistered = await this.userRepository.findByEmail(email);
    if (userRegistered) {
      throw new Error('There is a user registered with this email.');
    }

    const user = new User(props, {
      name,
      email,
      password,
    });

    await this.userRepository.create(user);

    return { user };
  }
}
