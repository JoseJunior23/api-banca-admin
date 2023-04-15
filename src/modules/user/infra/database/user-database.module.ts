import { UserRepository } from '@modules/user/domain/repositories/user-repository';
import { Module } from '@nestjs/common';
import { PrismaService } from '@shared/database/prisma.service';

import { PrismaUserRepository } from './repositories/prisma-user-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    },
  ],
  exports: [UserRepository],
})
export class UserDatabaseModule {}
