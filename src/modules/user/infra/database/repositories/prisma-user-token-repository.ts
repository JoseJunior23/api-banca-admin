import { UserToken } from '@modules/user/domain/entities/user-token';
import { UserTokenRepository } from '@modules/user/domain/repositories/user-token-repository';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '@shared/database/prisma.service';

import { PrismaUserTokenMapper } from '../mappers/prisma-user-token-mapper';

@Injectable()
export class PrismaUserTokenRepository implements UserTokenRepository {
  constructor(private prisma: PrismaService) {}

  async findByToken(token: string): Promise<UserToken | null> {
    const userToken = await this.prisma.userToken.findFirst({
      where: { token },
    });
    if (!userToken) {
      return null;
    }

    return PrismaUserTokenMapper.toDomain(userToken);
  }

  async generate(user_id: string): Promise<UserToken> {
    const userToken = await this.prisma.userToken.create({
      data: {
        user_id,
      },
    });
    return PrismaUserTokenMapper.toDomain(userToken);
  }
}
