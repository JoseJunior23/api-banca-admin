import { Injectable } from '@nestjs/common';

import { UserRepository } from '../repositories/user-repository';

interface UserDeleteRequest {
  userId: string;
}

@Injectable()
export class DeleteUserService {
  constructor(private readonly userRepository: UserRepository) {}

  async execute({ userId }: UserDeleteRequest): Promise<void> {
    const user = await this.userRepository.findById(userId);
    console.log(user);
    if (!user) {
      throw new Error('User not found.');
    }

    await this.userRepository.remove(user);
  }
}
