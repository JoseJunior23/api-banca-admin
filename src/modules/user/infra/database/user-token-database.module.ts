import { UserTokenRepository } from '@modules/user/domain/repositories/user-token-repository';
import { Module } from '@nestjs/common';
import { PrismaService } from 'src/shared/database/prisma.service';

import { PrismaUserTokenRepository } from './repositories/prisma-user-token-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: UserTokenRepository,
      useClass: PrismaUserTokenRepository,
    },
  ],
  exports: [UserTokenRepository],
})
export class UserTokenDatabaseModule {}
