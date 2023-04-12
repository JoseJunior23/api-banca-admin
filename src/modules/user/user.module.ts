import { Module } from '@nestjs/common';

import { CreateUserService } from './domain/services/create-user.service';
import { UserController } from './user.controller';

@Module({
  controllers: [UserController],
  providers: [CreateUserService],
})
export class UserModule {}
