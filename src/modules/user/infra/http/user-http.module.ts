import { CreateUserService } from '@modules/user/domain/services/create-user-service';
import { ListUserService } from '@modules/user/domain/services/list-user-service';
import { Module } from '@nestjs/common';

import { UserDatabaseModule } from '../database/user-database.module';
import { UserController } from './controllers/user.controller';

@Module({
  imports: [UserDatabaseModule],
  controllers: [UserController],
  providers: [CreateUserService, ListUserService],
})
export class UserHttpModule {}
