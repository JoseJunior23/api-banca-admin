import { User } from '@modules/user/domain/entities/user';
import { UserRepository } from '@modules/user/domain/repositories/user-repository';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '@shared/database/prisma.service';

import { PrismaUserMapper } from '../mappers/prisma-user-mapper';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private prisma: PrismaService) {}

  async create(user: User): Promise<void> {
    const raw = PrismaUserMapper.toPrisma(user);
    await this.prisma.user.create({
      data: raw,
    });
  }
  async findByEmail(email: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      return null;
    }

    return PrismaUserMapper.toDomain(user);
  }

  async findAll(): Promise<User[]> {
    const users = await this.prisma.user.findMany();

    return users.map(user => {
      return PrismaUserMapper.toDomain(user);
    });
  }
}
