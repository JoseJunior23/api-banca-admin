/* eslint-disable simple-import-sort/imports */
import { LoginUserService } from '@modules/user/domain/services/create-user-login.service';
import { CreateUserService } from '@modules/user/domain/services/create-user.service';
import { DeleteUserService } from '@modules/user/domain/services/delete-user.service';
import { ListUserService } from '@modules/user/domain/services/list-user.service';
import { UpdateUserProfileService } from '@modules/user/domain/services/update-user-profile.service';
import { Module } from '@nestjs/common';
import { BcryptHashProvider } from '@providers/hashPasswordProvider/bcrypt-hash-provider/bcrypt-hash-provider';

import { UserDatabaseModule } from '../database/user-database.module';
import { LoginController } from './controllers/login.controller';
import { UserController } from './controllers/user.controller';

@Module({
  imports: [UserDatabaseModule],
  controllers: [UserController, LoginController],
  providers: [
    CreateUserService,
    ListUserService,
    DeleteUserService,
    UpdateUserProfileService,
    LoginUserService,
    BcryptHashProvider,
  ],
})
export class UserHttpModule {}
