import { Injectable } from '@nestjs/common';

import { User } from '../entities/user';
import { UserRepository } from '../repositories/user-repository';

@Injectable()
export class ListUserService {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(): Promise<User[]> {
    const users = await this.userRepository.findAll();

    return users;
  }
}
