import { Injectable } from '@nestjs/common';
import { BcryptHashProvider } from '@providers/hashPasswordProvider/bcrypt-hash-provider/bcrypt-hash-provider';

import { User } from '../entities/user';
import { UserRepository } from '../repositories/user-repository';

interface UpdateUserProfileProps {
  userId: string;
  name: string;
  email: string;
  password?: string;
  old_password?: string;
}

interface UserUpdateRequest {
  user: User;
}

@Injectable()
export class UpdateUserProfileService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly hashPasswordRepository: BcryptHashProvider,
  ) {}

  async execute({
    userId,
    email,
    name,
    password,
    old_password,
  }: UpdateUserProfileProps): Promise<UserUpdateRequest> {
    const user = await this.userRepository.findById(userId);
    if (!user) {
      throw new Error('User not found !!!');
    }

    const updateEmail = await this.userRepository.findByEmail(email);
    if (updateEmail && updateEmail.id !== userId) {
      throw new Error('There is already a user registered with ths email.');
    }

    if (password && !old_password) {
      throw new Error('Old password is required.');
    }

    if (password && old_password) {
      const checkOldPassword = await this.hashPasswordRepository.hashCompare(
        old_password,
        user.password,
      );
      if (!checkOldPassword) {
        throw new Error('Old password does not match.');
      }
      await this.hashPasswordRepository.hashGenerate(password);
    }

    user.name = name;
    user.email = email;

    await this.userRepository.save(user);

    return { user };
  }
}
